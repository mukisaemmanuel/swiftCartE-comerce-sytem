// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/tablet/seller/seller_overview_dashboard_tablet_dark/code.html
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
      
      <div className="pl-[72px] flex-1 flex flex-col min-h-screen bg-surface">
    
    

    
    <main className="flex-1 p-6 lg:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto">
      
      <div className="bg-surface-container-low border border-[#1e2742] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center shrink-0">
            <Icon name="wifi_tethering" className="text-[18px]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[14px] font-bold text-on-surface">Kampala Central Mesh Dispatch Active</span>
              <span className="bg-emerald-escrow/15 text-tertiary text-[12px] font-bold px-2 py-0.5 rounded">99.8% SLA</span>
            </div>
            <p className="text-[14px] text-on-surface-variant">Central Division Boda nodes responding under 42ms. Dynamic routing via William St &amp; Pioneer corridors.</p>
          </div>
        </div>
        <button type="button" className="text-[14px] text-action-gradient-start hover:underline font-semibold flex items-center gap-1 self-end sm:self-center shrink-0">
          <span className="">View telemetry</span>
          <Icon name="chevron_right" className="text-[16px]" />
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-3 hover:border-surface-container-high transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-wider font-bold text-on-surface-variant">Today's Sales</span>
            <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-action-gradient-start flex items-center justify-center">
              <Icon name="payments" className="text-[18px]" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-on-surface tracking-tight leading-tight whitespace-nowrap">UGX 4,820,000</div>
            <div className="flex items-center gap-1.5 text-tertiary text-[12px] font-semibold mt-1">
              <Icon name="trending_up" className="text-[15px]" />
              <span className="">+18.4% vs yesterday</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#1e2742] flex items-center justify-between text-[14px] text-on-surface-variant">
            <span className="">Dispatched orders</span>
            <span className="font-bold text-on-surface">28 Orders</span>
          </div>
        </div>

        
        <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-3 hover:border-surface-container-high transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-wider font-bold text-on-surface-variant">Pending Dispatches</span>
            <div className="w-8 h-8 rounded-lg bg-amber-warning/20 text-amber-warning flex items-center justify-center">
              <Icon name="moped" className="text-[18px]" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-on-surface tracking-tight leading-tight">6 Orders</div>
            <div className="flex items-center gap-1.5 text-amber-warning text-[12px] font-semibold mt-1">
              <Icon name="schedule" className="text-[15px]" />
              <span className="">Driver handshake pending</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#1e2742] flex items-center justify-between text-[14px] text-on-surface-variant">
            <span className="">Current stage</span>
            <span className="font-bold text-on-surface">3 Wait • 3 Packing</span>
          </div>
        </div>

        
        <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-3 hover:border-surface-container-high transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-wider font-bold text-on-surface-variant">Payment In-Transit</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-escrow/20 text-emerald-escrow flex items-center justify-center">
              <Icon name="shield_lock" className="text-[18px]" />
            </div>
          </div>
          <div>
            <div className="text-[32px] font-extrabold text-emerald-escrow tracking-tight leading-tight whitespace-nowrap">UGX 14,850,000</div>
            <div className="flex items-center gap-1.5 text-tertiary text-[12px] font-semibold mt-1">
              <Icon name="lock" className="text-[15px]" />
              <span className="">SwiftCart holding Safe</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#1e2742] flex items-center justify-between text-[14px] text-on-surface-variant">
            <span className="">Release pin</span>
            <span className="font-bold text-on-surface">Blind 6-Digit OTP</span>
          </div>
        </div>

        
        <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-3 hover:border-surface-container-high transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-wider font-bold text-on-surface-variant">Fulfillment Rating</span>
            <div className="w-8 h-8 rounded-lg bg-mtn-yellow/20 text-mtn-yellow flex items-center justify-center">
              <Icon name="stars" className="text-[18px]" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <div className="text-[32px] font-extrabold text-on-surface tracking-tight leading-tight">4.9</div>
              <span className="text-mtn-yellow text-[18px]">★★★★★</span>
            </div>
            <div className="flex items-center gap-1.5 text-tertiary text-[12px] font-semibold mt-1">
              <Icon name="verified" className="text-[15px]" />
              <span className="">99.4% On-time Boda SLA</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#1e2742] flex items-center justify-between text-[14px] text-on-surface-variant">
            <span className="">Dispute risk</span>
            <span className="font-bold text-tertiary">0.4% Low Risk</span>
          </div>
        </div>
      </div>

      
      <div className="bg-surface-container-low border border-amber-warning/40 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-warning/20 text-amber-warning flex items-center justify-center shrink-0">
            <Icon name="notification_important" className="text-[22px]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[16px] font-bold text-on-surface">2 Orders Need Immediate Courier Staging</span>
              <span className="bg-action-gradient-end text-on-primary-container px-2 py-0.5 rounded text-[12px] font-bold">Action Window: 8m</span>
            </div>
            <p className="text-[14px] text-on-surface-variant mt-0.5">
              <strong className="text-on-surface">#SC-ORD-9488</strong> (Space One ANC • Kololo) and <strong className="text-on-surface">#SC-ORD-9492</strong> (Anker 65W GaN • Makerere Gate).
            </p>
          </div>
        </div>
        <button type="button" className="h-10 px-5 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container text-[14px] font-bold shadow hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shrink-0">
          <Icon name="two_wheeler" className="text-[18px]" />
          <span className="">Assign SafeBoda Rider</span>
        </button>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-surface-container-low border border-[#1e2742] px-4 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <Icon name="local_shipping" className="text-action-gradient-start text-[20px]" />
              <h2 className="text-[16px] font-bold text-on-surface">Live Order Stream &amp; Fulfillment Queue</h2>
            </div>
            <span className="text-[12px] bg-surface-container-high px-2.5 py-1 rounded-md text-on-surface-variant font-medium">Real-time GPS Relay</span>
          </div>

          
          <div className="flex flex-col gap-3">
            
            <div className="bg-surface-container-low border border-[#1e2742] hover:border-surface-container-high p-4 rounded-xl shadow-sm transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-[14px] text-action-gradient-start">#SC-ORD-9488</span>
                  <span className="bg-emerald-escrow/15 text-tertiary px-2 py-0.5 rounded text-[12px] font-medium flex items-center gap-1">
                    <Icon name="verified_user" className="text-[13px]" /> payment protected
                  </span>
                  <span className="bg-action-gradient-end/20 text-primary px-2 py-0.5 rounded text-[12px] font-bold">1-Hour Boda</span>
                </div>
                <span className="text-[16px] font-bold text-on-surface whitespace-nowrap">UGX 248,500</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[14px] text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Icon name="headphones" className="text-[18px] text-primary" />
                  <span className="font-semibold text-on-surface">SoundCore Space One ANC</span>
                  <span className="">•</span>
                  <span className="">Jet Black</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="person" className="text-[16px]" />
                  <span className="">Dennis Mukasa</span>
                  <span className="text-[12px] bg-surface-container-highest px-1.5 py-0.5 rounded ml-1">07•• ••• 412</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-surface-dark/60 border border-[#1e2742]/50 px-3 py-2 rounded-lg text-[14px]">
                <div className="flex items-center gap-2 text-tertiary">
                  <Icon name="moped" className="text-[16px] text-action-gradient-start animate-bounce" />
                  <span className="">Courier <strong className="text-on-surface">Mukasa Brian</strong> en route to Kololo Plot 14</span>
                </div>
                <span className="text-[12px] text-on-surface-variant font-medium">ETA: 14 mins</span>
              </div>
            </div>

            
            <div className="bg-surface-container-low border border-[#1e2742] hover:border-surface-container-high p-4 rounded-xl shadow-sm transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-[14px] text-action-gradient-start">#SC-ORD-9490</span>
                  <span className="bg-emerald-escrow/15 text-tertiary px-2 py-0.5 rounded text-[12px] font-medium flex items-center gap-1">
                    <Icon name="verified_user" className="text-[13px]" /> payment protected
                  </span>
                  <span className="bg-secondary-container text-secondary px-2 py-0.5 rounded text-[12px] font-bold">Acacia Hub Locker</span>
                </div>
                <span className="text-[16px] font-bold text-on-surface whitespace-nowrap">UGX 280,000</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[14px] text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Icon name="earbuds" className="text-[18px] text-primary" />
                  <span className="font-semibold text-on-surface">Liberty 4 NC Earbuds</span>
                  <span className="">•</span>
                  <span className="">Pearl White</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="person" className="text-[16px]" />
                  <span className="">Patricia K.</span>
                  <span className="text-[12px] bg-surface-container-highest px-1.5 py-0.5 rounded ml-1">07•• ••• 881</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-surface-dark/60 border border-[#1e2742]/50 px-3 py-2 rounded-lg text-[14px]">
                <div className="flex items-center gap-2 text-amber-warning">
                  <Icon name="inventory_2" className="text-[16px]" />
                  <span className="">Packed &amp; Barcoded • Awaiting Handover</span>
                </div>
                <button type="button" className="px-3 py-1 bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container rounded text-on-surface text-[12px] font-bold transition-colors">
                  Handover OTP
                </button>
              </div>
            </div>

            
            <div className="bg-surface-container-low border border-[#1e2742] hover:border-surface-container-high p-4 rounded-xl shadow-sm transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-[14px] text-action-gradient-start">#SC-ORD-9491</span>
                  <span className="bg-emerald-escrow/15 text-tertiary px-2 py-0.5 rounded text-[12px] font-medium flex items-center gap-1">
                    <Icon name="verified_user" className="text-[13px]" /> payment protected
                  </span>
                  <span className="bg-surface-container-highest text-on-surface px-2 py-0.5 rounded text-[12px] font-bold">Standard Delivery</span>
                </div>
                <span className="text-[16px] font-bold text-on-surface whitespace-nowrap">UGX 315,000</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[14px] text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Icon name="speaker" className="text-[18px] text-primary" />
                  <span className="font-semibold text-on-surface">Motion+ 30W Hi-Res Speaker</span>
                  <span className="">•</span>
                  <span className="">Midnight Blue</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="person" className="text-[16px]" />
                  <span className="">David O. (Ntinda)</span>
                  <span className="text-[12px] bg-surface-container-highest px-1.5 py-0.5 rounded ml-1">07•• ••• 309</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-surface-dark/60 border border-[#1e2742]/50 px-3 py-2 rounded-lg text-[14px]">
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="new_releases" className="text-[16px]" />
                  <span className="">New Order • Pioneer Mall Inventory Reserved</span>
                </div>
                <button type="button" className="px-3 py-1 bg-action-gradient-start/20 text-action-gradient-start hover:bg-action-gradient-start hover:text-surface-dark rounded text-[12px] font-bold transition-all">
                  Print Shipping Tag
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="two_wheeler" className="text-action-gradient-start text-[20px]" />
                <h3 className="text-[16px] font-bold text-on-surface">Assigned Couriers</h3>
              </div>
              <span className="bg-emerald-escrow/20 text-tertiary text-[12px] font-bold px-2 py-0.5 rounded-full">4 Online</span>
            </div>
            <div className="flex flex-col gap-2.5">
              
              <div className="flex items-center justify-between p-3 bg-surface-dark/60 border border-[#1e2742]/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-action-gradient-start font-bold text-[14px]">
                    MB
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-bold text-on-surface">Mukasa Brian</span>
                      <span className="text-[12px] text-on-surface-variant bg-surface-container-highest px-1.5 py-0.2 rounded">UEF 842X</span>
                    </div>
                    <span className="text-[12px] text-action-gradient-start font-medium">Delivering #9488 • 14 mins away</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-dark/60 border border-[#1e2742]/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold text-[14px]">
                    SJ
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-bold text-on-surface">Ssewankambo John</span>
                      <span className="text-[12px] text-on-surface-variant bg-surface-container-highest px-1.5 py-0.2 rounded">UEM 129K</span>
                    </div>
                    <span className="text-[12px] text-tertiary font-medium">Idle at Pioneer Mall Stage</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-escrow"></span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-surface-dark/60 border border-[#1e2742]/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-[14px]">
                    KR
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-bold text-on-surface">Kato Ronald</span>
                      <span className="text-[12px] text-on-surface-variant bg-surface-container-highest px-1.5 py-0.2 rounded">UEN 401P</span>
                    </div>
                    <span className="text-[12px] text-amber-warning font-medium">Staging parcel at William St</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-warning"></span>
              </div>
            </div>
          </div>

          
          <div className="bg-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="warning" className="text-danger-penalty text-[20px]" />
                <h3 className="text-[16px] font-bold text-on-surface">Low Stock Warnings</h3>
              </div>
              <span className="text-[12px] bg-danger-penalty/15 text-danger-penalty font-bold px-2 py-0.5 rounded">Store Alert</span>
            </div>
            <div className="flex flex-col gap-3">
              
              <div className="p-3 bg-surface-dark/60 border border-[#1e2742]/50 rounded-xl flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-on-surface">SoundCore Space One (Jet Black)</span>
                  <span className="text-[12px] font-bold text-danger-penalty">4 units left</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant text-[12px]">
                  <span className="">Pioneer Mall store stock</span>
                  <span className="">Restock threshold: 10</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-0.5">
                  <div className="bg-danger-penalty h-full rounded-full w-[40%]"></div>
                </div>
              </div>
              
              <div className="p-3 bg-surface-dark/60 border border-[#1e2742]/50 rounded-xl flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-on-surface">Anker 65W GaN Dual Wall Charger</span>
                  <span className="text-[12px] font-bold text-danger-penalty">2 units left</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant text-[12px]">
                  <span className="">Central retail cabinet</span>
                  <span className="">Restock threshold: 8</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-0.5">
                  <div className="bg-danger-penalty h-full rounded-full w-[25%]"></div>
                </div>
              </div>
            </div>
            <button type="button" className="w-full h-10 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-[14px] font-bold transition-colors flex items-center justify-center gap-2">
              <Icon name="inventory" className="text-[18px]" />
              <span className="">Update Stock &amp; Inventory</span>
            </button>
          </div>

          
          <div className="bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low border border-[#1e2742] p-5 rounded-2xl shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-mtn-yellow/15 flex items-center justify-center text-mtn-yellow">
                  <Icon name="payments" className="text-[24px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] uppercase font-bold text-on-surface-variant tracking-wider">Instant MoMo Balance</span>
                  <span className="text-[12px] text-tertiary font-semibold">Instant Settlement</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[28px] font-extrabold text-on-surface tracking-tight leading-tight whitespace-nowrap">UGX 6,240,000</div>
              <p className="text-[12px] text-on-surface-variant mt-1">
                MTN MoMo <strong className="text-on-surface">+256 772 ••• 456</strong> (Sarah Namubiru)
              </p>
            </div>
            <button type="button" className="w-full h-11 px-4 rounded-xl bg-gradient-to-r from-action-gradient-start to-action-gradient-end text-on-primary-container text-[14px] font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Icon name="send_to_mobile" className="text-[20px]" />
              <span className="">Instant Withdraw to MoMo</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    
    <footer className="w-full bg-[#080d1f] border-t border-[#1e2742] py-3 px-6 text-[12px] text-on-surface-variant flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-escrow"></span>
        <span className="">William St Hub: Live (99.8%) • Kampala Boda Dispatch Mesh Active</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-tertiary flex items-center gap-1"><Icon name="lock" className="text-[14px]" /> Pesapal Pesapal Rails Payment</span>
        <span className="">•</span>
        <span className="">© 2025 SwiftCart Uganda Ltd.</span>
      </div>
    </footer>
  </div>
    </div>
  );
};

export default Tablet;
