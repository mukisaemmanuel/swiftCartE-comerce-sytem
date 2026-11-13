import React, { useState } from 'react';
import { useSellerOrders, useSellerRiders } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import StatusChip from '../../components/shared/StatusChip';
import ConfirmDialog from '../../components/shared/ConfirmDialog';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';
import type { SellerOrder } from '../../domain/seller.types';
import { ORDER_STATUS } from '../../../shared/statuses';

export interface SellerOrdersPageProps {
  onNavigate?: (path: string) => void;
  initialOrderId?: string;
}

type OrderTab = 'ALL' | 'CONFIRMED' | 'PROCESSING' | 'READY_FOR_PICKUP' | 'DELIVERED' | 'CANCELLED';

export const SellerOrdersPage: React.FC<SellerOrdersPageProps> = ({ onNavigate: _onNavigate, initialOrderId }) => {
  const { orders, isLoading, updateStatus, cancelOrder, assignRider } = useSellerOrders();
  const { riders } = useSellerRiders();

  const [activeTab, setActiveTab] = useState<OrderTab>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<SellerOrder | null>(() => {
    if (initialOrderId && orders.length > 0) {
      return orders.find((o) => o.id === initialOrderId) || null;
    }
    return null;
  });

  // Assign Rider Modal
  const [isAssignRiderOpen, setIsAssignRiderOpen] = useState(false);
  const [selectedRiderId, setSelectedRiderId] = useState<string>('');

  // Cancel Order Dialog
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  // Packing Slip Modal
  const [isPackingSlipOpen, setIsPackingSlipOpen] = useState(false);

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.buyerFirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.buyerDistrict.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeTab === 'ALL') return true;
    if (activeTab === 'CONFIRMED') return order.status === ORDER_STATUS.CONFIRMED;
    if (activeTab === 'PROCESSING') return order.status === ORDER_STATUS.PROCESSING;
    if (activeTab === 'READY_FOR_PICKUP') return order.status === ORDER_STATUS.READY_FOR_PICKUP;
    if (activeTab === 'DELIVERED') return order.status === ORDER_STATUS.DELIVERED;
    if (activeTab === 'CANCELLED') return order.status === ORDER_STATUS.CANCELLED;
    return true;
  });

  const handleStatusTransition = async (orderId: string, nextStatus: typeof ORDER_STATUS[keyof typeof ORDER_STATUS]) => {
    const updated = await updateStatus(orderId, nextStatus);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(updated);
    }
  };

  const handleConfirmCancel = async (reason: string) => {
    if (!selectedOrder) return;
    const updated = await cancelOrder(selectedOrder.id, reason);
    setSelectedOrder(updated);
    setIsCancelDialogOpen(false);
  };

  const handleConfirmAssignRider = async () => {
    if (!selectedOrder || !selectedRiderId) return;
    const assigned = riders.find((r) => r.id === selectedRiderId);
    if (!assigned) return;
    const updated = await assignRider(selectedOrder.id, selectedRiderId, assigned.name, assigned.phoneNumber);
    setSelectedOrder(updated);
    setIsAssignRiderOpen(false);
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Orders Management
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Process orders, assign courier riders, and print clean dispatch packing slips.
          </p>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[var(--d-border)] pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {(
            [
              { key: 'ALL', label: 'All Orders' },
              { key: 'CONFIRMED', label: 'Confirmed' },
              { key: 'PROCESSING', label: 'Processing' },
              { key: 'READY_FOR_PICKUP', label: 'Ready for Pickup' },
              { key: 'DELIVERED', label: 'Delivered' },
              { key: 'CANCELLED', label: 'Cancelled' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`touch-target px-4 py-2 rounded-xl text-[14px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#FF8A1F] text-white shadow-sm'
                  : 'text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[var(--d-text-secondary)] pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search order #, customer, district..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-[var(--d-text-primary)] text-[14px] focus:outline-none focus:border-[#FF8A1F]"
          />
        </div>
      </div>

      {/* Main Grid: Order List + Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Orders List */}
        <div className={`space-y-3 ${selectedOrder ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
          {filteredOrders.length === 0 ? (
            <div className="bg-[var(--d-surface)] rounded-2xl p-12 border border-[var(--d-border)] text-center space-y-3">
              <Icon name="receipt_long" className="text-4xl text-[var(--d-text-secondary)] mx-auto" />
              <p className="text-[15px] font-bold text-[var(--d-text-primary)]">No orders found</p>
              <p className="text-[13px] text-[var(--d-text-secondary)]">
                Try selecting a different status filter or clearing your search.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const isSelected = selectedOrder?.id === order.id;
              return (
                <div
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--d-surface-container)] border-[#FF8A1F] ring-1 ring-[#FF8A1F]'
                      : 'bg-[var(--d-surface)] border-[var(--d-border)] hover:border-[var(--d-border-high)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-[15px] text-[var(--d-text-primary)]">
                          {order.orderNumber}
                        </span>
                        <StatusChip status={order.status} />
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                          {order.escrowStatus.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--d-text-secondary)] mt-1">
                        Buyer: <strong className="text-[var(--d-text-primary)]">{order.buyerFirstName}</strong> • District: <strong className="text-[var(--d-text-primary)]">{order.buyerDistrict}</strong>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-[15px] text-[var(--d-text-primary)]">
                        UGX {order.total.toLocaleString()}
                      </div>
                      <div className="text-xs text-[var(--d-text-secondary)] mt-0.5">
                        {order.items.reduce((acc, i) => acc + i.quantity, 0)} items
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[var(--d-border)] flex items-center justify-between text-xs text-[var(--d-text-secondary)]">
                    <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                    {order.assignedRiderName ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Icon name="two_wheeler" className="text-sm" />
                        Rider: {order.assignedRiderName}
                      </span>
                    ) : (
                      <span className="text-amber-400 font-semibold">No rider assigned</span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Order Detail View */}
        {selectedOrder && (
          <div className="lg:col-span-6 bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] shadow-md space-y-6 sticky top-20">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[var(--d-text-primary)]">
                  {selectedOrder.orderNumber}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <StatusChip status={selectedOrder.status} />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                    Escrow: {selectedOrder.escrowStatus}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="touch-target p-2 rounded-xl text-[var(--d-text-secondary)] hover:bg-[var(--d-surface-container)] cursor-pointer"
                aria-label="Close details"
              >
                <Icon name="close" className="text-lg" />
              </button>
            </div>

            {/* Buyer Privacy Notice Box */}
            <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Icon name="verified_user" className="text-sm" />
                <span>Buyer Privacy Protected</span>
              </div>
              <p>
                Buyer: <strong>{selectedOrder.buyerFirstName}</strong> ({selectedOrder.buyerDistrict} District). Full delivery coordinates and contacts are managed via dispatch riders.
              </p>
            </div>

            {/* Action Buttons By Status */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {selectedOrder.status === ORDER_STATUS.CONFIRMED && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStatusTransition(selectedOrder.id, ORDER_STATUS.PROCESSING)}
                    className="touch-target px-4 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-[14px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Icon name="inventory" className="text-base" />
                    <span>Mark Processing</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCancelDialogOpen(true)}
                    className="touch-target px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-[14px] transition-colors cursor-pointer"
                  >
                    Cancel Order
                  </button>
                </>
              )}

              {selectedOrder.status === ORDER_STATUS.PROCESSING && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStatusTransition(selectedOrder.id, ORDER_STATUS.READY_FOR_PICKUP)}
                    className="touch-target px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[14px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Icon name="check_circle" className="text-base" />
                    <span>Mark Ready for Pickup</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCancelDialogOpen(true)}
                    className="touch-target px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-[14px] transition-colors cursor-pointer"
                  >
                    Cancel Order
                  </button>
                </>
              )}

              {selectedOrder.status === ORDER_STATUS.READY_FOR_PICKUP && (
                <>
                  <button
                    type="button"
                    onClick={() => setIsAssignRiderOpen(true)}
                    className="touch-target px-4 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-[14px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Icon name="two_wheeler" className="text-base" />
                    <span>{selectedOrder.assignedRiderId ? 'Reassign Rider' : 'Assign Rider'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPackingSlipOpen(true)}
                    className="touch-target px-4 py-2 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] border border-[var(--d-border)] font-bold text-[14px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Icon name="print" className="text-base" />
                    <span>Print Packing Slip</span>
                  </button>
                </>
              )}

              {selectedOrder.status === ORDER_STATUS.DELIVERED && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <Icon name="check_circle" className="text-lg" />
                  <span>Delivered successfully • Funds released to wallet</span>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
                Order Items ({selectedOrder.items.length})
              </h3>
              <div className="space-y-2 border border-[var(--d-border)] rounded-xl p-3 bg-[var(--d-surface-container-low)]">
                {selectedOrder.items.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between text-sm py-1.5">
                    <div>
                      <p className="font-bold text-[var(--d-text-primary)]">{item.productTitle}</p>
                      <p className="text-xs text-[var(--d-text-secondary)]">
                        Qty: {item.quantity} • Unit: UGX {item.price.toLocaleString()}
                      </p>
                    </div>
                    <span className="font-extrabold text-[var(--d-text-primary)]">
                      UGX {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-[var(--d-border)] flex items-center justify-between text-sm font-extrabold">
                  <span className="text-[var(--d-text-primary)]">Total Order Amount</span>
                  <span className="text-[#FF8A1F]">UGX {selectedOrder.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--d-text-secondary)]">
                Status Timeline
              </h3>
              <div className="space-y-3 pl-2 border-l-2 border-[var(--d-border)] ml-2">
                {selectedOrder.timeline.map((event, idx) => (
                  <div key={idx} className="relative pl-4 space-y-0.5">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#FF8A1F]" />
                    <p className="text-xs font-bold text-[var(--d-text-primary)]">
                      {event.status.replace(/_/g, ' ')}
                    </p>
                    <p className="text-[11px] text-[var(--d-text-secondary)]">
                      {new Date(event.timestamp).toLocaleString()} {event.note ? `• ${event.note}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Assign Rider Sheet Dialog */}
      <SheetDialog
        isOpen={isAssignRiderOpen}
        onClose={() => setIsAssignRiderOpen(false)}
        title="Assign Courier Rider"
      >
        <div className="space-y-4">
          <p className="text-xs text-[var(--d-text-secondary)]">
            Select an active dispatch courier from your store fleet:
          </p>
          <div className="space-y-2">
            {riders.map((r) => (
              <label
                key={r.id}
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedRiderId === r.id
                    ? 'border-[#FF8A1F] bg-[#FF8A1F]/10'
                    : 'border-[var(--d-border)] hover:bg-[var(--d-surface-container)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="riderSelection"
                    checked={selectedRiderId === r.id}
                    onChange={() => setSelectedRiderId(r.id)}
                    className="accent-[#FF8A1F]"
                  />
                  <div>
                    <p className="font-bold text-sm text-[var(--d-text-primary)]">{r.name}</p>
                    <p className="text-xs text-[var(--d-text-secondary)]">
                      Bike: {r.bikePlate} • Rating: ⭐ {r.rating} ({r.deliveriesCount} trips)
                    </p>
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold">
                  {r.status}
                </span>
              </label>
            ))}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAssignRiderOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-sm font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmAssignRider}
              disabled={!selectedRiderId}
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] disabled:opacity-50 text-white font-bold text-sm cursor-pointer"
            >
              Confirm Assignment
            </button>
          </div>
        </div>
      </SheetDialog>

      {/* Cancel Order Dialog */}
      <ConfirmDialog
        isOpen={isCancelDialogOpen}
        onCancel={() => setIsCancelDialogOpen(false)}
        onConfirm={handleConfirmCancel}
        title="Cancel Order"
        message="Cancelling this order will immediately notify the buyer and reverse their escrow payment."
        actionLabel="Cancel Order"
        isDangerous
        requiresReason
        reasonPlaceholder="Please state the reason for order cancellation..."
      />

      {/* Packing Slip Modal */}
      {isPackingSlipOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <h3 className="text-xl font-black">SWIFTCART PACKING SLIP</h3>
                <p className="text-xs text-gray-500">Order ID: {selectedOrder.orderNumber}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsPackingSlipOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold text-gray-500 uppercase tracking-wider">Merchant</p>
                <p className="font-bold text-gray-900">Nakasero Flagship Store</p>
                <p className="text-gray-600">Kampala Central, Uganda</p>
              </div>
              <div>
                <p className="font-bold text-gray-500 uppercase tracking-wider">Ship To (Protected)</p>
                <p className="font-bold text-gray-900">{selectedOrder.buyerFirstName}</p>
                <p className="text-gray-600">District: {selectedOrder.buyerDistrict}</p>
              </div>
            </div>

            <div className="border rounded-xl p-3 space-y-2 text-xs">
              <div className="font-bold text-gray-500 border-b pb-1 flex justify-between">
                <span>Item</span>
                <span>Qty</span>
              </div>
              {selectedOrder.items.map((i) => (
                <div key={i.productId} className="flex justify-between py-1">
                  <span>{i.productTitle}</span>
                  <span className="font-bold">{i.quantity}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t">
              <button
                type="button"
                onClick={() => setIsPackingSlipOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-gray-300"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FF8A1F] text-white"
              >
                Print Slip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerOrdersPage;
