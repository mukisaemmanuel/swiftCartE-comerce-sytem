import React, { useState } from 'react';
import { useOrders } from '../../hooks/useOrders';
import SafeImage from '../../components/shared/SafeImage';
import { Icon } from '../../components/shared/Icon';

export interface OrderDeliveredPageProps {
  onNavigate: (path: string) => void;
}

export const OrderDeliveredPage: React.FC<OrderDeliveredPageProps> = ({ onNavigate }) => {
  const { orders, addReview } = useOrders();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const orderId = searchParams.get('id') || (orders[2]?.id ?? 'order-1002');
  const order = orders.find((o) => o.id === orderId) || orders[2] || orders[0];

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setIsSubmitting(true);
    try {
      if (order) {
        await addReview(order.id, { rating, comment });
      }
      setSubmitted(true);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to submit review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-14">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 text-center">
        {/* Delivered Trophy Graphic */}
        <div className="space-y-3">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <Icon name="inventory" className="text-4xl" />
          </div>
          <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Delivered & Completed
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Package Received!
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Order <strong className="text-[#0E1B4D]">{order?.orderNumber}</strong> was marked delivered. Escrow payment was safely released to the merchant.
          </p>
        </div>

        {/* Product Being Reviewed */}
        {order?.items[0] && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 text-left">
            <SafeImage
              src={order.items[0].productImage}
              alt={order.items[0].productTitle}
              className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm text-[#0E1B4D] truncate">
                {order.items[0].productTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Sold by {order.items[0].sellerName}
              </p>
              <div className="text-xs font-extrabold text-[#DA3700] mt-1">
                UGX {order.items[0].price.toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* Review Form / Thank You */}
        {!submitted ? (
          <form onSubmit={handleReviewSubmit} className="space-y-4 text-left">
            <div className="text-center">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Rate Your Experience (1 - 5 Stars)
              </label>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    aria-label={`${star} star`}
                  >
                    <Icon name="star" className={`text-3xl sm:text-4xl ${
                        star <= rating ? 'fill-current' : 'text-slate-200'
                      }`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Write a Review for Buyers in Uganda
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How was the product quality and packaging? Would you recommend this merchant?"
                className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Icon name="rate_review" />
              <span>{isSubmitting ? 'Posting Review...' : 'Submit Review'}</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-emerald-900 space-y-2">
            <Icon name="favorite" className="text-3xl text-emerald-600" />
            <h3 className="font-bold text-base">Thank you for your feedback!</h3>
            <p className="text-xs text-emerald-800">
              Your verified review helps other Ugandan shoppers make confident choices.
            </p>
          </div>
        )}

        <div className="pt-2 flex gap-3">
          <button
            onClick={() => onNavigate('/my-orders')}
            className="flex-1 py-3.5 rounded-xl border border-slate-200 text-[#0E1B4D] font-bold text-sm hover:bg-slate-50 min-h-[48px]"
          >
            View All Orders
          </button>
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 py-3.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-sm hover:bg-slate-800 min-h-[48px]"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliveredPage;

