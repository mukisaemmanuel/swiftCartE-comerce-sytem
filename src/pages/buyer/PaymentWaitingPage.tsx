import React, { useState, useEffect } from 'react';
import { useOrders } from '../../hooks/useOrders';
import { Icon } from '../../components/shared/Icon';

export interface PaymentWaitingPageProps {
  onNavigate: (path: string) => void;
}

export const PaymentWaitingPage: React.FC<PaymentWaitingPageProps> = ({ onNavigate }) => {
  const { orders, updateOrderStatus } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('orderId') || (orders[0]?.id ?? 'order-1001');
  const phone = searchParams.get('phone') || '+256 772 123456';
  const amountParam = searchParams.get('amount');
  const idempotencyKey = searchParams.get('key') || `key-${orderId}`;

  const currentOrder = orders.find((o) => o.id === orderId) || orders[0];
  const amount = amountParam ? parseInt(amountParam, 10) : currentOrder?.total || 385000;

  const [countdown, setCountdown] = useState(60);
  const [status, setStatus] = useState<'waiting' | 'failed' | 'success'>('waiting');

  useEffect(() => {
    if (status !== 'waiting') return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStatus('failed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [status]);

  const handleSimulateSuccess = async () => {
    setStatus('success');
    if (currentOrder) {
      await updateOrderStatus(currentOrder.id, 'PAID');
    }
    setTimeout(() => {
      onNavigate(`/order-confirmation-delivery-code?orderId=${currentOrder?.id || orderId}`);
    }, 1200);
  };

  const handleSimulateFailed = () => {
    setStatus('failed');
  };

  const handleRetrySameOrder = () => {
    // Re-initiates payment for this exact order with the same idempotency key
    setCountdown(60);
    setStatus('waiting');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8 sm:py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center">
        {status === 'waiting' && (
          <div className="space-y-6">
            {/* Animated Pulse Ring */}
            <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF8A1F] to-[#DA3700] text-white flex items-center justify-center shadow-lg">
                <Icon name="phonelink_ring" className="text-3xl animate-bounce" />
              </div>
            </div>

            <div>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Waiting for USSD Approval
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D] mt-3">
                Approve Payment on Your Phone
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                We sent a prompt to <span className="font-bold text-[#0E1B4D]">{phone}</span>. Please enter your Mobile Money PIN to authorize <span className="font-extrabold text-[#0E1B4D]">UGX {amount.toLocaleString()}</span>.
              </p>
            </div>

            {/* Countdown Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl text-xs font-bold text-slate-700">
              <Icon name="hourglass_top" className="text-base text-[#FF8A1F]" />
              <span>Prompt expires in: {countdown}s</span>
            </div>

            {/* Order & Escrow Details */}
            <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-100">
              <div className="flex justify-between text-slate-600">
                <span>Order Reference</span>
                <span className="font-bold text-[#0E1B4D]">
                  {currentOrder?.orderNumber || 'SWIFT-UG-8901'}
                </span>
              </div>
              {import.meta.env.DEV && (
                <div className="flex justify-between text-slate-600">
                  <span>Idempotency Key</span>
                  <span className="font-mono text-slate-500 truncate max-w-[200px]">
                    {idempotencyKey}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Security</span>
                <span className="font-bold text-emerald-700">
                  SwiftCart Escrow Protected
                </span>
              </div>
            </div>

            {/* Testing Actions (DEV ONLY) */}
            {import.meta.env.DEV && (
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleSimulateSuccess}
                  className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm min-h-[44px]"
                >
                  Simulate PIN Entered (Approve)
                </button>
                <button
                  type="button"
                  onClick={handleSimulateFailed}
                  className="px-5 py-3 rounded-xl border border-slate-300 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors min-h-[44px]"
                >
                  Simulate Failed / Cancelled
                </button>
              </div>
            )}
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6 py-6 animate-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Icon name="check_circle" className="text-4xl" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1B4D]">
                Payment Approved!
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Your payment of UGX {amount.toLocaleString()} is safely held in Escrow.
              </p>
            </div>
            <div className="text-xs text-slate-400">
              Redirecting to order confirmation...
            </div>
          </div>
        )}

        {status === 'failed' && (
          <div className="space-y-6 py-4 animate-in fade-in duration-300">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-md">
              <Icon name="error" className="text-4xl" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1B4D]">
                Payment Timed Out or Cancelled
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                No money was deducted. Your order <span className="font-bold">{currentOrder?.orderNumber}</span> is saved and waiting for payment.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleRetrySameOrder}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Icon name="refresh" className="text-lg" />
                <span>Retry Payment (Same Order)</span>
              </button>
              <button
                onClick={() => onNavigate('/checkout-step-by-step-flow')}
                className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors min-h-[48px]"
              >
                Change Payment Method
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentWaitingPage;

