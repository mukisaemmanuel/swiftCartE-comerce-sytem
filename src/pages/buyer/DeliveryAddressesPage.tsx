import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';
import type { Address } from '../../domain/types';
import { Icon } from '../../components/shared/Icon';

export interface DeliveryAddressesPageProps {
  onNavigate: (path: string) => void;
}

const UGANDAN_DISTRICTS = ['Kampala', 'Wakiso', 'Mukono', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu'];

export const DeliveryAddressesPage: React.FC<DeliveryAddressesPageProps> = ({
  onNavigate,
}) => {
  const {
    addresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
  } = useAccount();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [district, setDistrict] = useState(UGANDAN_DISTRICTS[0]);
  const [division, setDivision] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const openAddModal = () => {
    setEditingId(null);
    setFullName('');
    setPhoneNumber('+256 ');
    setDistrict(UGANDAN_DISTRICTS[0]);
    setDivision('');
    setStreetAddress('');
    setLandmark('');
    setIsDefault(addresses.length === 0);
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (addr: Address) => {
    setEditingId(addr.id);
    setFullName(addr.fullName);
    setPhoneNumber(addr.phoneNumber);
    setDistrict(addr.district);
    setDivision(addr.division || '');
    setStreetAddress(addr.streetAddress);
    setLandmark(addr.landmark || '');
    setIsDefault(!!addr.isDefault);
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim() || !streetAddress.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    try {
      if (editingId) {
        await updateAddress(editingId, {
          fullName,
          phoneNumber,
          district,
          division,
          streetAddress,
          landmark,
          isDefault,
        });
      } else {
        await addAddress({
          fullName,
          phoneNumber,
          district,
          division,
          streetAddress,
          landmark,
          isDefault,
        });
      }
      setIsModalOpen(false);
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : 'Failed to save address');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/account')}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Back"
          >
            <Icon name="arrow_back" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
              Delivery Addresses
            </h1>
            <p className="text-sm text-slate-500">
              Manage your delivery locations across Uganda
            </p>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="px-4 py-2.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-sm hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-xs shrink-0 min-h-[44px]"
        >
          <Icon name="add" className="text-lg" />
          <span className="hidden sm:inline">Add New Address</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Address Cards */}
      <div className="space-y-4">
        {addresses.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
            <Icon name="location_off" className="text-4xl text-slate-300 mb-2" />
            <p className="text-slate-500 text-sm">No saved addresses found.</p>
            <button
              onClick={openAddModal}
              className="mt-4 px-4 py-2 rounded-xl bg-[#FF8A1F] text-white font-bold text-sm"
            >
              Add First Address
            </button>
          </div>
        ) : (
          addresses.map((addr) => (
            <div
              key={addr.id}
              className={`p-5 rounded-2xl bg-white border-2 transition-all ${
                addr.isDefault
                  ? 'border-[#FF8A1F] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF8A1F] flex items-center justify-center shrink-0">
                    <Icon name="home_pin" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-[#0E1B4D]">
                        {addr.fullName}
                      </h3>
                      {addr.isDefault && (
                        <span className="bg-orange-100 text-[#DA3700] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1 font-medium">
                      {addr.phoneNumber}
                    </p>
                    <p className="text-sm text-slate-700 mt-0.5">
                      {addr.streetAddress}
                      {addr.division ? `, ${addr.division}` : ''}, {addr.district}
                    </p>
                    {addr.landmark && (
                      <p className="text-xs text-slate-400 mt-1">
                        Landmark: {addr.landmark}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(addr)}
                    className="p-2 text-slate-500 hover:text-[#0E1B4D] hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Edit address"
                  >
                    <Icon name="edit" className="text-lg" />
                  </button>
                  <button
                    onClick={() => deleteAddress(addr.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Delete address"
                  >
                    <Icon name="delete" className="text-lg" />
                  </button>
                </div>
              </div>

              {!addr.isDefault && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setDefaultAddress(addr.id)}
                    className="text-xs font-bold text-[#FF8A1F] hover:underline"
                  >
                    Set as Default
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add / Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200"
              aria-label="Close modal"
            >
              <Icon name="close" className="text-lg" />
            </button>

            <h2 className="text-xl font-extrabold text-[#0E1B4D] mb-4">
              {editingId ? 'Edit Address' : 'New Delivery Address'}
            </h2>

            {formError && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-xs font-medium">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Recipient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Emmanuel Mukisa"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ugandan Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+256 772 000000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    District *
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#FF8A1F]"
                  >
                    {UGANDAN_DISTRICTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Division / Area
                  </label>
                  <input
                    type="text"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    placeholder="e.g. Nakasero, Kira"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Street Address / Plot Number *
                </label>
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="e.g. Plot 14 Lumumba Avenue"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nearby Landmark (for Boda Rider)
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="e.g. Opposite Rwenzori Towers"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
                />
              </div>

              <label className="flex items-center gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  className="rounded border-slate-300 text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
                />
                <span className="text-xs font-semibold text-slate-700">
                  Set as default delivery address
                </span>
              </label>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryAddressesPage;

