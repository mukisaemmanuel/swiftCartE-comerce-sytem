import React, { useState } from 'react';
import { useOrders } from '../../hooks/useOrders';
import type { Order } from '../../domain/types';
import SafeImage from '../../components/shared/SafeImage';

export interface MyOrdersPageProps {
  onNavigate: (path: string) => void;
}

type OrderTab = 'all' | 'in_progress' | 'delivered' | 'returns';

export const MyOrdersPage: React.FC<MyOrdersPageProps> = ({ onNavigate }) => {
  const { orders, isLoading } = useOrders();
  const [activeTab, setActiveTab] = useState<OrderTab>('all');

  const filteredOrders = orders.filter((order) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'in_progress') {
      return [
        'PENDING',
        'PENDING_PAYMENT',
        'PAID',
        'CONFIRMED',
        'PROCESSING',
        'SHIPPED',
        'IN_TRANSIT',
        'OUT_FOR_DELIVERY',
      ].includes(order.status);
    }
    if (activeTab === 'delivered') {
      return order.status === 'DELIVERED';
    }
    if (activeTab === 'returns') {
      return [
        'RETURN_REQUESTED',
        'RETURN_APPROVED',
        'RETURN_REJECTED',
        'RETURNED',
        'DISPUTED',
      ].includes(order.status);
    }
    return true;
  });

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'DELIVERED':
        return (
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">check_circle</span>
            <span>Delivered</span>
          </span>
        );
      case 'OUT_FOR_DELIVERY':
        return (
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 animate-pulse">
            <span className="material-symbols-rounded text-sm">two_wheeler</span>
            <span>Out for Delivery</span>
          </span>
        );
      case 'CONFIRMED':
      case 'PROCESSING':
        return (
          <span className="bg-blue-100 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">inventory_2</span>
            <span>Processing</span>
          </span>
        );
      case 'RETURN_REQUESTED':
      case 'DISPUTED':
        return (
          <span className="bg-purple-100 text-purple-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">gavel</span>
            <span>{status === 'DISPUTED' ? 'Disputed' : 'Return Requested'}</span>
          </span>
        );
      default:
        return (
          <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate('/account')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back to Account"
        >
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            My Orders
          </h1>
          <p className="text-sm text-slate-500">
            Track packages, view delivery codes and order receipts
          </p>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'all'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          All Orders ({orders.length})
        </button>
        <button
          onClick={() => setActiveTab('in_progress')}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'in_progress'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setActiveTab('delivered')}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'delivered'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Delivered
        </button>
        <button
          onClick={() => setActiveTab('returns')}
          className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'returns'
              ? 'bg-[#0E1B4D] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Returns & Disputes
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="p-12 text-center text-slate-500">Loading your orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-3">
            <span className="material-symbols-rounded text-5xl text-slate-300">
              shopping_bag
            </span>
            <h3 className="text-lg font-bold text-[#0E1B4D]">No orders found</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              You haven't placed any orders in this category yet.
            </p>
            <button
              onClick={() => onNavigate('/')}
              className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm shadow-md"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all space-y-4"
            >
              {/* Order Card Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#0E1B4D]">
                    {order.orderNumber}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div>{getStatusBadge(order.status)}</div>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <SafeImage
                      src={item.productImage}
                      alt={item.productTitle}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#0E1B4D] truncate">
                        {item.productTitle}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Seller: {item.sellerName} · Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-[#0E1B4D]">
                        UGX {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Total: <strong className="text-sm text-[#0E1B4D]">UGX {order.total.toLocaleString()}</strong> ({order.deliveryType === 'boda' ? 'Express Boda' : 'Pickup Hub'})
                </div>

                <div className="flex items-center gap-2">
                  {order.status === 'OUT_FOR_DELIVERY' && (
                    <button
                      onClick={() => onNavigate(`/order-tracking-delivery-code?id=${order.id}`)}
                      className="px-4 py-2 rounded-xl bg-[#0E1B4D] text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-1 min-h-[38px]"
                    >
                      <span className="material-symbols-rounded text-base">near_me</span>
                      <span>Live Track</span>
                    </button>
                  )}

                  <button
                    onClick={() => onNavigate(`/my-orders-order-detail?id=${order.id}`)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-xs hover:bg-slate-50 transition-colors min-h-[38px]"
                  >
                    View Details
                  </button>

                  {order.status === 'DELIVERED' && !order.reviewSubmitted && (
                    <button
                      onClick={() => onNavigate(`/order-delivered-write-review?id=${order.id}`)}
                      className="px-4 py-2 rounded-xl bg-orange-100 text-[#DA3700] font-bold text-xs hover:bg-orange-200 transition-colors min-h-[38px]"
                    >
                      Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;

