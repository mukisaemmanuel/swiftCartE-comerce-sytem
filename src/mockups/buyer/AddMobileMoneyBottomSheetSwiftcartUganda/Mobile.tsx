// Auto-generated from C:/Users/Mukisa_Emmanuel/Desktop/swiftCartE-comerce-sytem/design/mobile/buyer/add_mobile_money_bottom_sheet_swiftcart_uganda/code.html
import React from 'react';
import Icon from '../../../components/shared/Icon';

export interface AddMobileMoneyBottomSheetSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddMobileMoneyBottomSheetSwiftcartUganda: React.FC<AddMobileMoneyBottomSheetSwiftcartUgandaProps> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  
  

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      
      <div className="relative w-[390px] h-[844px] bg-[#fff8f2] overflow-hidden flex flex-col shadow-2xl">

    
    <div className="absolute inset-0 flex flex-col pointer-events-none filter blur-[1px]">
      
      <div className="h-11 px-6 flex justify-between items-center text-xs font-semibold text-stone-800 bg-white/80">
        <span>9:41</span>
        <div className="flex items-center space-x-1.5 text-stone-700">
          <i className="fa-solid fa-signal text-[11px]"></i>
          <i className="fa-solid fa-wifi text-[11px]"></i>
          <i className="fa-solid fa-battery-full text-[13px]"></i>
        </div>
      </div>

      
      <div className="h-14 px-4 bg-white flex items-center justify-between border-b border-stone-200">
        <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
          <i className="fa-solid fa-arrow-left text-sm"></i>
        </div>
        <span className="font-bold text-stone-800 text-base">Payment Methods</span>
        <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
          <i className="fa-regular fa-circle-question text-sm"></i>
        </div>
      </div>

      
      <div className="p-4 space-y-4">
        <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
          <div className="h-4 w-32 bg-emerald-200 rounded"></div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400"></div>
            <div className="space-y-1">
              <div className="h-4 w-28 bg-stone-200 rounded"></div>
              <div className="h-3 w-36 bg-stone-100 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-500"></div>
            <div className="space-y-1">
              <div className="h-4 w-24 bg-stone-200 rounded"></div>
              <div className="h-3 w-36 bg-stone-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px] transition-opacity"></div>

    
    <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[28px] sheet-shadow z-20 flex flex-col max-h-[770px] overflow-hidden border-t border-stone-100 animate-in fade-in slide-in-from-bottom duration-300">
      
      
      <div className="pt-3 pb-1 flex justify-center items-center cursor-pointer">
        <div className="w-12 h-1.5 bg-stone-300 rounded-full"></div>
      </div>

      
      <div className="px-5 pt-2 pb-3 flex items-center justify-between border-b border-stone-100">
        <div>
          <h2 className="text-lg font-extrabold text-stone-900 tracking-tight">Add Mobile Money Wallet</h2>
          <p className="text-xs text-stone-500 mt-0.5">Link your Ugandan mobile money for 1-tap checkout</p>
        </div>
        <button className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 transition-colors tap-active">
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      
      <div className="px-5 py-4 overflow-y-auto space-y-4 max-h-[580px]">

        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
            Select Telecom Provider <span className="text-brand-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            
            
            <button type="button" className="relative flex items-center p-3 rounded-2xl border-2 border-brand-500 bg-brand-50/50 shadow-sm transition-all text-left tap-active">
              <div className="w-10 h-10 rounded-xl bg-[#FFCC00] flex-shrink-0 flex items-center justify-center font-black text-[13px] text-stone-950 shadow-sm border border-amber-300 mr-2.5">
                <span>MoMo</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-extrabold text-stone-900 truncate">MTN Uganda</span>
                <span className="block text-[10px] font-semibold text-brand-700">*165# Instant</span>
              </div>
              
              <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white text-[10px] ml-1 flex-shrink-0">
                <i className="fa-solid fa-check"></i>
              </div>
            </button>

            
            <button type="button" className="relative flex items-center p-3 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 shadow-sm transition-all text-left tap-active opacity-80 hover:opacity-100">
              <div className="w-10 h-10 rounded-xl bg-[#ED1C24] flex-shrink-0 flex items-center justify-center font-bold text-xs text-white shadow-sm mr-2.5">
                <span className="tracking-tighter">airtel</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-stone-800 truncate">Airtel Money</span>
                <span className="block text-[10px] text-stone-500">*185# USSD</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-stone-300 ml-1 flex-shrink-0"></div>
            </button>
          </div>
        </div>

        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
            Registered Phone Number <span className="text-brand-600">*</span>
          </label>
          <div className="relative flex items-center rounded-2xl border-2 border-brand-500/70 bg-white shadow-sm focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
            
            <div className="flex items-center space-x-1.5 pl-3.5 pr-2.5 py-3 border-r border-stone-200 bg-stone-50/70 rounded-l-2xl">
              
              <svg className="w-5 h-3.5 rounded-sm shadow-xs" viewBox="0 0 36 24" fill="none">
                <rect width="36" height="4" fill="#000000"></rect>
                <rect y="4" width="36" height="4" fill="#FCDC04"></rect>
                <rect y="8" width="36" height="4" fill="#D90000"></rect>
                <rect y="12" width="36" height="4" fill="#000000"></rect>
                <rect y="16" width="36" height="4" fill="#FCDC04"></rect>
                <rect y="20" width="36" height="4" fill="#D90000"></rect>
                <circle cx="18" cy="12" r="3.2" fill="#FFFFFF"></circle>
                <circle cx="18" cy="12" r="1.8" fill="#111827"></circle>
              </svg>
              <span className="text-xs font-bold text-stone-800">+256</span>
              <i className="fa-solid fa-chevron-down text-[9px] text-stone-400"></i>
            </div>
            
            <input type="tel" value="772 345 678" className="w-full pl-3 pr-9 py-3 text-sm font-bold text-stone-900 placeholder-stone-400 focus:outline-none tracking-wide" placeholder="7XX XXX XXX" />
            
            <div className="absolute right-3 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1.5 px-1">
            <p className="text-[11px] text-stone-500">Valid prefix: 077, 078, 076 (MTN) or 070, 075, 074 (Airtel)</p>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">SIM Active</span>
          </div>
        </div>

        
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 flex items-start space-x-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="fa-solid fa-id-badge text-sm"></i>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Verified Account Name</span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-emerald-100 text-emerald-800">
                <i className="fa-solid fa-shield-halved mr-0.5 text-[8px]"></i> KYC MATCH
              </span>
            </div>
            <p className="text-sm font-extrabold text-stone-900 mt-0.5">KATO JOSHUA MUKASA</p>
            <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">Name must match your National ID (NIN) for seamless escrow dispute refunds.</p>
          </div>
        </div>

        
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-stone-200">
          <div className="space-y-0.5 pr-2">
            <span className="block text-xs font-bold text-stone-900">Set as Default Payment Wallet</span>
            <span className="block text-[11px] text-stone-500">SwiftCart will prompt this wallet directly at checkout</span>
          </div>
          
          <button type="button" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-brand-500 transition-colors duration-200 ease-in-out focus:outline-none">
            <span className="inline-block h-5 w-5 transform translate-x-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>

        
        <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-3.5 flex items-start space-x-2.5">
          <i className="fa-solid fa-lock text-brand-600 text-xs mt-1 flex-shrink-0"></i>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            <strong className="font-bold text-stone-900">Swift Escrow Protection:</strong> When you confirm, a test <strong>*165#</strong> USSD prompt of <span className="font-bold text-stone-900">UGX 0</span> will be sent to your handset to verify wallet ownership. No funds are charged.
          </p>
        </div>

      </div>

      
      <div className="p-5 pt-3 bg-white border-t border-stone-100 space-y-2">
        <button className="w-full py-3.5 px-4 rounded-2xl bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-extrabold text-sm shadow-lg shadow-brand-500/25 flex items-center justify-center space-x-2 transition-all tap-active">
          <i className="fa-solid fa-link text-xs"></i>
          <span>Verify &amp; Link Wallet</span>
        </button>

        <button className="w-full py-2 text-center text-xs font-bold text-stone-500 hover:text-stone-700 transition-colors">
          Cancel &amp; Return
        </button>

        
        <div className="pt-1 flex justify-center">
          <div className="w-32 h-1 bg-stone-300 rounded-full"></div>
        </div>
      </div>

    </div>

  </div>
    </div>
  );
};

export default AddMobileMoneyBottomSheetSwiftcartUganda;
