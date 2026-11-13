import React, { useState } from 'react';
import { useOrders } from '../../hooks/useOrders';
import PaymentProtectionNotice from '../../components/shared/PaymentProtectionNotice';
import { Icon } from '../../components/shared/Icon';

export interface ReturnsDisputesPageProps {
  onNavigate: (path: string) => void;
}

export const ReturnsDisputesPage: React.FC<ReturnsDisputesPageProps> = ({ onNavigate }) => {
  const { orders, requestReturn, openDispute } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const preselectedOrderId = searchParams.get('orderId') || (orders[0]?.id ?? '');

  const [activeTab, setActiveTab] = useState<'returns' | 'request' | 'dispute'>('returns');
  const [selectedOrderId, setSelectedOrderId] = useState(preselectedOrderId);

  // Return Form State
  const [returnReason, setReturnReason] = useState('Defective item');
  const [returnDetails, setReturnDetails] = useState('');
  const [returnPhotos, setReturnPhotos] = useState<string[]>([
    '/placeholders/product.svg',
  ]);
  const [returnSubmitted, setReturnSubmitted] = useState(false);

  // Dispute Form State
  const [disputeReason, setDisputeReason] = useState('Delivery Delay / Not Received');
  const [disputeDescription, setDisputeDescription] = useState('');
  const [disputePhotos, setDisputePhotos] = useState<string[]>([
    '/placeholders/product.svg',
  ]);
  const [disputeSubmitted, setDisputeSubmitted] = useState(false);

  const handleReturnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!returnDetails.trim()) return;
    try {
      await requestReturn(selectedOrderId, returnReason, returnDetails, returnPhotos);
      setReturnSubmitted(true);
      setActiveTab('returns');
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to request return');
    }
  };

  const handleDisputeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!disputeDescription.trim()) return;
    try {
      await openDispute(selectedOrderId, disputeReason, disputeDescription, disputePhotos);
      setDisputeSubmitted(true);
      setActiveTab('returns');
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to open dispute');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('/my-orders')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back"
        >
          <Icon name="arrow_back" />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Returns & Disputes
          </h1>
          <p className="text-sm text-slate-500">
            Escrow resolution and 3-day buyer protection policy
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('returns')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'returns'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Active Claims & Returns
        </button>
        <button
          onClick={() => setActiveTab('request')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'request'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Request Return
        </button>
        <button
          onClick={() => setActiveTab('dispute')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'dispute'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          File Escrow Dispute
        </button>
      </div>

      <PaymentProtectionNotice variant="banner" />

      {/* Tab 1: Active Returns & Claims */}
      {activeTab === 'returns' && (
        <div className="space-y-6">
          {/* Mock return in progress */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Return Case #RET-101
                </span>
                <h3 className="text-base font-extrabold text-[#0E1B4D] mt-0.5">
                  Order SWIFT-UG-7822
                </h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                APPROVED · REFUND IN PROGRESS
              </span>
            </div>

            {/* 4-Step Progress Tracker */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Return Process Steps
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {/* Step 1 */}
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto text-xs shadow-xs">
                    ✓
                  </div>
                  <div className="font-bold text-[#0E1B4D]">Requested</div>
                  <div className="text-[10px] text-slate-400">06 Nov</div>
                </div>

                {/* Step 2 */}
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto text-xs shadow-xs">
                    ✓
                  </div>
                  <div className="font-bold text-[#0E1B4D]">Approved</div>
                  <div className="text-[10px] text-slate-400">07 Nov</div>
                </div>

                {/* Step 3 */}
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#FF8A1F] text-white font-bold flex items-center justify-center mx-auto text-xs shadow-xs animate-pulse">
                    3
                  </div>
                  <div className="font-bold text-[#FF8A1F]">In Transit</div>
                  <div className="text-[10px] text-slate-400">Boda intake</div>
                </div>

                {/* Step 4 */}
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 font-bold flex items-center justify-center mx-auto text-xs">
                    4
                  </div>
                  <div className="font-bold text-slate-400">Refunded</div>
                  <div className="text-[10px] text-slate-400">Escrow MoMo</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-xs text-slate-600 space-y-1">
              <div><strong className="text-slate-800">Reason:</strong> Defective item (Cracked seal)</div>
              <div><strong className="text-slate-800">Resolution:</strong> Full refund of UGX 32,000 to MTN MoMo account once package is received at Kampala hub.</div>
            </div>
          </div>

          {(returnSubmitted || disputeSubmitted) && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm font-medium">
              Your request was logged successfully. Escrow funds remain secured while the dispute team reviews the case.
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Request Return Form */}
      {activeTab === 'request' && (
        <form onSubmit={handleReturnSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
          <h2 className="text-lg font-extrabold text-[#0E1B4D]">
            Request Return / Exchange
          </h2>
          <p className="text-xs text-slate-500">
            Within the 3-day return window, you can return items in original packaging.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Order *
            </label>
            <select
              value={selectedOrderId}
              onChange={(e) => setSelectedOrderId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
            >
              {orders.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.orderNumber} · UGX {o.total.toLocaleString()} ({o.status})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Return Reason *
            </label>
            <select
              value={returnReason}
              onChange={(e) => setReturnReason(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
            >
              <option value="Defective item">Defective or damaged item</option>
              <option value="Wrong item received">Wrong item or variant received</option>
              <option value="Missing parts">Missing parts / accessories</option>
              <option value="Not as described">Item not as described on storefront</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Explain the Issue *
            </label>
            <textarea
              required
              rows={4}
              value={returnDetails}
              onChange={(e) => setReturnDetails(e.target.value)}
              placeholder="Provide specific details about the issue with the item..."
              className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Attach Photos (Mock)
            </label>
            <div className="flex items-center gap-3">
              {returnPhotos.map((photo, i) => (
                <div key={i} className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2 relative">
                  <img src={photo} alt="Return Evidence" className="w-full h-full object-contain" />
                </div>
              ))}
              <button
                type="button"
                onClick={() => setReturnPhotos((prev) => [...prev, '/placeholders/product.svg'])}
                className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:border-[#FF8A1F] hover:text-[#FF8A1F] transition-colors text-xs font-bold"
              >
                <Icon name="add_a_photo" className="text-lg" />
                <span>Add</span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm shadow-md min-h-[48px]"
            >
              Submit Return Request
            </button>
          </div>
        </form>
      )}

      {/* Tab 3: File Escrow Dispute Form */}
      {activeTab === 'dispute' && (
        <form onSubmit={handleDisputeSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-2 text-red-600">
            <Icon name="gavel" className="text-2xl" />
            <h2 className="text-lg font-extrabold text-[#0E1B4D]">
              Open SwiftCart Escrow Dispute
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Filing a dispute immediately freezes seller payout from Escrow until our mediation team resolves the case.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Disputed Order *
            </label>
            <select
              value={selectedOrderId}
              onChange={(e) => setSelectedOrderId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
            >
              {orders.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.orderNumber} · UGX {o.total.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Dispute Category *
            </label>
            <select
              value={disputeReason}
              onChange={(e) => setDisputeReason(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
            >
              <option value="Delivery Delay / Not Received">Order marked delivered but package not received</option>
              <option value="Merchant Unresponsive">Merchant refuses replacement or return intake</option>
              <option value="Counterfeit or Misrepresented">Counterfeit or severely misrepresented product</option>
              <option value="Unauthorized Payment">Payment unauthorized or incorrect deduction</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Detailed Evidence & Description *
            </label>
            <textarea
              required
              rows={4}
              value={disputeDescription}
              onChange={(e) => setDisputeDescription(e.target.value)}
              placeholder="State what happened, communication with the merchant, and what resolution you require..."
              className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Evidence Documents / Photos
            </label>
            <div className="flex items-center gap-3">
              {disputePhotos.map((p, i) => (
                <div key={i} className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2">
                  <img src={p} alt="Dispute evidence" className="w-full h-full object-contain" />
                </div>
              ))}
              <button
                type="button"
                onClick={() => setDisputePhotos((prev) => [...prev, '/placeholders/product.svg'])}
                className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:border-[#FF8A1F] hover:text-[#FF8A1F] text-xs font-bold"
              >
                <Icon name="attach_file" className="text-lg" />
                <span>Upload</span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-colors min-h-[48px]"
            >
              Freeze Escrow & Submit Dispute
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReturnsDisputesPage;

