import React, { useState } from 'react';
import { useSellerReturns } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import StatusChip from '../../components/shared/StatusChip';
import ConfirmDialog from '../../components/shared/ConfirmDialog';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';
import SafeImage from '../../components/shared/SafeImage';
import type { SellerReturn, SellerDispute } from '../../domain/seller.types';
import { RETURN_STATUS } from '../../../shared/statuses';

export interface SellerReturnsPageProps {
  onNavigate?: (path: string) => void;
}

export const SellerReturnsPage: React.FC<SellerReturnsPageProps> = () => {
  const { returns, disputes, isLoading, approveReturn, rejectReturn, markInboundReceived, respondToDispute } = useSellerReturns();

  const [activeTab, setActiveTab] = useState<'returns' | 'disputes'>('returns');
  const [selectedReturn, setSelectedReturn] = useState<SellerReturn | null>(returns[0] || null);
  const [selectedDispute, setSelectedDispute] = useState<SellerDispute | null>(disputes[0] || null);

  // Reject Return Dialog
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);

  // Partial Refund Modal
  const [isPartialRefundOpen, setIsPartialRefundOpen] = useState(false);
  const [partialRefundAmount, setPartialRefundAmount] = useState<number>(50000);

  // Dispute Reply
  const [disputeReplyText, setDisputeReplyText] = useState('');

  const handleApproveReturn = async (returnId: string) => {
    const updated = await approveReturn(returnId, 'Merchant approved customer return.');
    if (selectedReturn && selectedReturn.id === returnId) {
      setSelectedReturn(updated);
    }
  };

  const handleConfirmRejectReturn = async (reason: string) => {
    if (!selectedReturn) return;
    const updated = await rejectReturn(selectedReturn.id, reason);
    setSelectedReturn(updated);
    setIsRejectDialogOpen(false);
  };

  const handleInspectInbound = async (returnId: string, outcome: 'resaleable' | 'damaged') => {
    const updated = await markInboundReceived(returnId, outcome);
    if (selectedReturn && selectedReturn.id === returnId) {
      setSelectedReturn(updated);
    }
  };

  const handleSendDisputeReply = async () => {
    if (!selectedDispute || !disputeReplyText.trim()) return;
    const updated = await respondToDispute(selectedDispute.id, disputeReplyText);
    setSelectedDispute(updated);
    setDisputeReplyText('');
  };

  const handleAcceptFullRefund = async () => {
    if (!selectedDispute) return;
    const updated = await respondToDispute(selectedDispute.id, 'Merchant agreed to full refund.');
    setSelectedDispute(updated);
  };

  const handleConfirmPartialRefund = async () => {
    if (!selectedDispute) return;
    const updated = await respondToDispute(
      selectedDispute.id,
      `Merchant offered partial refund of UGX ${partialRefundAmount.toLocaleString()}`
    );
    setSelectedDispute(updated);
    setIsPartialRefundOpen(false);
  };

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={50} />
        <Skeleton height={400} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
          Returns & Disputes Console
        </h1>
        <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
          Handle customer return requests, inspect inbound packages, and resolve escrow disputes.
        </p>
      </div>

      {/* Primary Tabs */}
      <div className="flex border-b border-[var(--d-border)]">
        <button
          type="button"
          onClick={() => setActiveTab('returns')}
          className={`touch-target px-6 py-3 font-bold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'returns'
              ? 'border-[#FF8A1F] text-[#FF8A1F]'
              : 'border-transparent text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
          }`}
        >
          <Icon name="assignment_return" className="text-base" />
          <span>Returns ({returns.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('disputes')}
          className={`touch-target px-6 py-3 font-bold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'disputes'
              ? 'border-[#FF8A1F] text-[#FF8A1F]'
              : 'border-transparent text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
          }`}
        >
          <Icon name="gavel" className="text-base" />
          <span>Disputes ({disputes.length})</span>
        </button>
      </div>

      {/* TAB 1: RETURNS */}
      {activeTab === 'returns' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Returns List */}
          <div className="lg:col-span-5 space-y-3">
            {returns.map((ret) => {
              const isSelected = selectedReturn?.id === ret.id;
              const productTitle = ret.items[0]?.productTitle || 'Returned Product';
              return (
                <div
                  key={ret.id}
                  onClick={() => setSelectedReturn(ret)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--d-surface-container)] border-[#FF8A1F] ring-1 ring-[#FF8A1F]'
                      : 'bg-[var(--d-surface)] border-[var(--d-border)] hover:border-[var(--d-border-high)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-extrabold text-sm text-[var(--d-text-primary)]">
                        {ret.orderNumber}
                      </span>
                      <p className="font-bold text-xs text-[var(--d-text-primary)] mt-1">
                        {productTitle}
                      </p>
                      <p className="text-[11px] text-[var(--d-text-secondary)] mt-0.5">
                        Buyer: {ret.buyerFirstName} • {ret.buyerDistrict}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <span className="text-xs font-extrabold text-[var(--d-text-primary)]">
                        UGX {ret.refundAmount.toLocaleString()}
                      </span>
                      <div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                          {ret.escrowStatus.replace(/_/g, ' ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[var(--d-border)] flex items-center justify-between text-xs text-[var(--d-text-secondary)]">
                    <span className="text-rose-400 font-semibold">{ret.reason}</span>
                    <span>{new Date(ret.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Return Details */}
          {selectedReturn && (
            <div className="lg:col-span-7 bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--d-text-primary)]">
                    Return: {selectedReturn.orderNumber}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <StatusChip status={selectedReturn.status} />
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                      Escrow: {selectedReturn.escrowStatus}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[var(--d-text-secondary)]">Claim Amount</span>
                  <p className="text-lg font-black text-[#FF8A1F]">
                    UGX {selectedReturn.refundAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Escrow status notice */}
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-2">
                <Icon name="lock" className="text-lg shrink-0" />
                <span>
                  <strong>Escrow Security Notice:</strong> Payout for this order is held until the return request is resolved or inspection is completed.
                </span>
              </div>

              {/* Customer Claim & Photos */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
                  Customer Return Request Details
                </h3>
                <div className="p-4 rounded-xl bg-[var(--d-surface-container-low)] border border-[var(--d-border)] space-y-2 text-xs">
                  <p className="font-bold text-[var(--d-text-primary)]">
                    Reason: {selectedReturn.reason}
                  </p>
                  <p className="text-[var(--d-text-secondary)] leading-relaxed">
                    "{selectedReturn.details}"
                  </p>
                  <p className="text-[11px] text-[var(--d-text-secondary)] pt-1">
                    Customer: <strong>{selectedReturn.buyerFirstName}</strong> ({selectedReturn.buyerDistrict} District)
                  </p>
                </div>

                {selectedReturn.photos.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-[var(--d-text-secondary)] mb-2">
                      Buyer Photos ({selectedReturn.photos.length}):
                    </p>
                    <div className="flex gap-3">
                      {selectedReturn.photos.map((ph, i) => (
                        <div key={i} className="w-20 h-20 rounded-xl overflow-hidden border border-[var(--d-border)]">
                          <SafeImage
                            src={ph}
                            alt="Return proof"
                            aspectRatio="aspect-square"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons based on status */}
              <div className="pt-2 border-t border-[var(--d-border)] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
                  Resolution Actions
                </h3>

                {selectedReturn.status === RETURN_STATUS.REQUESTED && (
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => handleApproveReturn(selectedReturn.id)}
                      className="touch-target px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <Icon name="check" className="text-base" />
                      <span>Approve Return (Freeze Escrow)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsRejectDialogOpen(true)}
                      className="touch-target px-5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-xs cursor-pointer"
                    >
                      Reject Return Request
                    </button>
                  </div>
                )}

                {selectedReturn.status === RETURN_STATUS.IN_TRANSIT && (
                  <div className="p-4 rounded-xl bg-[var(--d-surface-container)] border border-[var(--d-border)] space-y-3">
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                      <Icon name="inventory" className="text-base" />
                      <span>Inbound Package Tamper & Quality Inspection</span>
                    </div>
                    <p className="text-xs text-[var(--d-text-secondary)]">
                      The return item was delivered back to your store. Inspect the physical item and select its condition:
                    </p>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => handleInspectInbound(selectedReturn.id, 'resaleable')}
                        className="touch-target px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer"
                      >
                        Accept: Resaleable (Refund Buyer)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInspectInbound(selectedReturn.id, 'damaged')}
                        className="touch-target px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer"
                      >
                        Flag: Damaged / Tampered (Open Dispute)
                      </button>
                    </div>
                  </div>
                )}

                {(selectedReturn.status === RETURN_STATUS.RECEIVED_RESALEABLE ||
                  selectedReturn.status === RETURN_STATUS.RECEIVED_DAMAGED ||
                  selectedReturn.status === RETURN_STATUS.REFUNDED) && (
                  <div className="p-3.5 rounded-xl bg-[var(--d-surface-container-low)] text-xs text-[var(--d-text-secondary)]">
                    This return has reached terminal state: <strong>{selectedReturn.status}</strong>.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: DISPUTES */}
      {activeTab === 'disputes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Dispute List */}
          <div className="lg:col-span-5 space-y-3">
            {disputes.map((disp) => {
              const isSelected = selectedDispute?.id === disp.id;
              return (
                <div
                  key={disp.id}
                  onClick={() => setSelectedDispute(disp)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--d-surface-container)] border-[#FF8A1F] ring-1 ring-[#FF8A1F]'
                      : 'bg-[var(--d-surface)] border-[var(--d-border)] hover:border-[var(--d-border-high)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-extrabold text-sm text-[var(--d-text-primary)]">
                        Dispute: {disp.orderNumber}
                      </span>
                      <p className="text-xs text-rose-400 font-bold mt-0.5">{disp.reason}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">
                      {disp.status}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[var(--d-border)] flex items-center justify-between text-xs text-[var(--d-text-secondary)]">
                    <span>Buyer: {disp.buyerFirstName} ({disp.buyerDistrict})</span>
                    <span>{new Date(disp.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Dispute */}
          {selectedDispute && (
            <div className="lg:col-span-7 bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--d-text-primary)]">
                    Dispute: {selectedDispute.orderNumber}
                  </h2>
                  <p className="text-xs text-[var(--d-text-secondary)] mt-0.5">
                    Customer: <strong>{selectedDispute.buyerFirstName}</strong> ({selectedDispute.buyerDistrict} District)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">
                    {selectedDispute.status}
                  </span>
                </div>
              </div>

              {/* Status & Escrow Notice */}
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-2">
                <Icon name="lock" className="text-lg shrink-0" />
                <span>
                  <strong>Escrow Frozen:</strong> Payout for order {selectedDispute.orderNumber} is held in dispute mediation.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--d-surface-container-low)] border border-[var(--d-border)] space-y-2 text-xs">
                <p className="font-bold text-[var(--d-text-primary)]">Buyer Claim:</p>
                <p className="text-[var(--d-text-secondary)] leading-relaxed">
                  "{selectedDispute.description}"
                </p>
              </div>

              {/* Dispute Response Options */}
              <div className="space-y-4 pt-2 border-t border-[var(--d-border)]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
                  Dispute Response & Settlement
                </h3>

                <div className="space-y-2">
                  <label htmlFor="disp-reply" className="block text-xs font-bold text-[var(--d-text-secondary)]">
                    Merchant Evidence & Statement
                  </label>
                  <textarea
                    id="disp-reply"
                    value={disputeReplyText}
                    onChange={(e) => setDisputeReplyText(e.target.value)}
                    rows={3}
                    placeholder="State your side of the dispute and attach courier dispatch logs..."
                    className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
                  />
                  <button
                    type="button"
                    onClick={handleSendDisputeReply}
                    disabled={!disputeReplyText.trim()}
                    className="touch-target px-4 py-2 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-xs font-bold text-[var(--d-text-primary)] border border-[var(--d-border)] cursor-pointer disabled:opacity-40"
                  >
                    Send Statement to Mediator
                  </button>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleAcceptFullRefund}
                    className="touch-target px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold cursor-pointer"
                  >
                    Accept Full Refund (Release to Buyer)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPartialRefundOpen(true)}
                    className="touch-target px-4 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white text-xs font-bold cursor-pointer"
                  >
                    Offer Partial Settlement
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Reject Return Dialog */}
      <ConfirmDialog
        isOpen={isRejectDialogOpen}
        onCancel={() => setIsRejectDialogOpen(false)}
        onConfirm={handleConfirmRejectReturn}
        title="Reject Return Request"
        message="Rejecting a return will release the escrow funds back to your wallet unless the customer escalates to a formal dispute."
        actionLabel="Reject Return"
        isDangerous
        requiresReason
        reasonPlaceholder="Please state the reason for rejecting this return..."
      />

      {/* Partial Refund Sheet */}
      <SheetDialog
        isOpen={isPartialRefundOpen}
        onClose={() => setIsPartialRefundOpen(false)}
        title="Offer Partial Refund Settlement"
      >
        <div className="space-y-4">
          <p className="text-xs text-[var(--d-text-secondary)]">
            Propose a mutual compromise to settle the dispute. If the buyer accepts, the agreed amount is refunded to them and the remainder is released to your store wallet.
          </p>

          <div>
            <label htmlFor="partial-amount" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Partial Refund Amount (UGX)
            </label>
            <input
              id="partial-amount"
              type="number"
              value={partialRefundAmount}
              onChange={(e) => setPartialRefundAmount(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-sm font-bold text-[var(--d-text-primary)]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsPartialRefundOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmPartialRefund}
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Send Offer to Buyer
            </button>
          </div>
        </div>
      </SheetDialog>
    </div>
  );
};

export default SellerReturnsPage;
