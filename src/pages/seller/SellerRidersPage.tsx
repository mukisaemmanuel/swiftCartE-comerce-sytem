import React, { useState } from 'react';
import { useSellerRiders } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';

export interface SellerRidersPageProps {
  onNavigate: (path: string) => void;
}

export const SellerRidersPage: React.FC<SellerRidersPageProps> = ({ onNavigate }) => {
  const { riders, isLoading, inviteRider } = useSellerRiders();

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [invitePhone, setInvitePhone] = useState('+256 ');
  const [inviteName, setInviteName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invitePhone.trim() || !inviteName.trim()) return;
    setIsSubmitting(true);
    await inviteRider(invitePhone, inviteName);
    setIsSubmitting(false);
    setIsInviteModalOpen(false);
    setInviteName('');
    setInvitePhone('+256 ');
  };

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={60} />
        <Skeleton height={300} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Fleet & Courier Riders
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Manage your dedicated store dispatch couriers for rapid local order delivery.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsInviteModalOpen(true)}
          className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Icon name="person_add" className="text-lg" />
          <span>Invite Courier</span>
        </button>
      </div>

      {/* Couriers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {riders.map((r) => (
          <div
            key={r.id}
            className="bg-[var(--d-surface)] rounded-2xl p-5 border border-[var(--d-border)] shadow-sm space-y-4 hover:border-[var(--d-border-high)] transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-[#FF8A1F] flex items-center justify-center font-black text-lg">
                  <Icon name="two_wheeler" className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[15px] text-[var(--d-text-primary)]">
                    {r.name}
                  </h3>
                  <p className="text-xs text-[var(--d-text-secondary)]">{r.phoneNumber}</p>
                </div>
              </div>
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                  r.status === 'available'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : r.status === 'busy'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                }`}
              >
                {r.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[var(--d-surface-container-low)] border border-[var(--d-border)] text-center text-xs">
              <div>
                <p className="text-[10px] text-[var(--d-text-secondary)] uppercase font-semibold">Bike</p>
                <p className="font-bold text-[var(--d-text-primary)] mt-0.5">{r.bikePlate}</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--d-text-secondary)] uppercase font-semibold">Rating</p>
                <p className="font-bold text-amber-400 mt-0.5">⭐ {r.rating}</p>
              </div>
              <div>
                <p className="text-[10px] text-[var(--d-text-secondary)] uppercase font-semibold">Trips</p>
                <p className="font-bold text-[var(--d-text-primary)] mt-0.5">{r.deliveriesCount}</p>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-xs text-[var(--d-text-secondary)]">
              <span>Added: {new Date(r.joinedDate).toLocaleDateString()}</span>
              <button
                type="button"
                onClick={() => onNavigate('/seller/orders')}
                className="text-xs text-[#FF8A1F] hover:underline font-bold"
              >
                Assign to Order →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invite Modal */}
      <SheetDialog
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Invite Store Courier"
      >
        <form onSubmit={handleSendInvite} className="space-y-4">
          <p className="text-xs text-[var(--d-text-secondary)]">
            Send an SMS invitation to a motorcycle courier. Once they install the SwiftCart Rider app, they will automatically be linked to your store fleet.
          </p>

          <div>
            <label htmlFor="rider-name" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Full Name (Required)
            </label>
            <input
              id="rider-name"
              type="text"
              required
              value={inviteName}
              onChange={(e) => setInviteName(e.target.value)}
              placeholder="e.g. Ronald Sserwadda"
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label htmlFor="rider-phone" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Mobile Phone Number (MTN / Airtel)
            </label>
            <input
              id="rider-phone"
              type="tel"
              required
              value={invitePhone}
              onChange={(e) => setInvitePhone(e.target.value)}
              placeholder="+256 770 000000"
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsInviteModalOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send SMS Invitation'}
            </button>
          </div>
        </form>
      </SheetDialog>
    </div>
  );
};

export default SellerRidersPage;
