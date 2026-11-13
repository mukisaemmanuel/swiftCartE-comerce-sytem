import React, { useState } from 'react';
import { useSellerStore } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import StatusChip from '../../components/shared/StatusChip';
import Skeleton from '../../components/shared/Skeleton';
import SafeImage from '../../components/shared/SafeImage';

export interface SellerProfileKycPageProps {
  onNavigate?: (path: string) => void;
}

export const SellerProfileKycPage: React.FC<SellerProfileKycPageProps> = () => {
  const { profile, isLoading, updateProfile, submitKyc } = useSellerStore();

  const [activeTab, setActiveTab] = useState<'profile' | 'kyc'>('profile');

  // Edit Profile Form
  const [storeName, setStoreName] = useState(profile?.name || 'Nakasero Flagship Store');
  const [district, setDistrict] = useState(profile?.district || 'Kampala');
  const [location, setLocation] = useState(profile?.location || 'Plot 14 Lumumba Avenue');
  const [bio, setBio] = useState(
    profile?.bio || 'Leading electronics and consumer goods merchant in Kampala Central.'
  );
  const [payoutPhone, setPayoutPhone] = useState(profile?.payoutAccount || '+256 772 123456');
  const [isSaved, setIsSaved] = useState(false);

  // KYC Upload State
  const kyc = profile?.kyc;
  const [idFrontUploaded, setIdFrontUploaded] = useState(!!kyc?.documentFrontUrl);
  const [idBackUploaded, setIdBackUploaded] = useState(!!kyc?.documentBackUrl);
  const [tradingLicenseUploaded, setTradingLicenseUploaded] = useState(!!kyc?.tradingLicenseUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [kycSuccess, setKycSuccess] = useState(false);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      name: storeName,
      district,
      location,
      bio,
      payoutAccount: payoutPhone,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleSimulateUpload = (docType: string) => {
    setIsUploading(true);
    setTimeout(() => {
      if (docType === 'id_front') setIdFrontUploaded(true);
      if (docType === 'id_back') setIdBackUploaded(true);
      if (docType === 'trading_license') setTradingLicenseUploaded(true);
      setIsUploading(false);
    }, 400);
  };

  const handleSubmitKyc = async () => {
    await submitKyc({
      status: 'UNDER_REVIEW',
      documentFrontUrl: '/placeholders/store-logo.svg',
      documentBackUrl: '/placeholders/store-logo.svg',
      tradingLicenseUrl: '/placeholders/store-logo.svg',
      submittedAt: new Date().toISOString(),
    });
    setKycSuccess(true);
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
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
          Store Profile & KYC Verification
        </h1>
        <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
          Manage your storefront identity, payout mobile numbers, and legal verification documents.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--d-border)]">
        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`touch-target px-6 py-3 font-bold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'border-[#FF8A1F] text-[#FF8A1F]'
              : 'border-transparent text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
          }`}
        >
          <Icon name="storefront" className="text-base" />
          <span>Storefront Details</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('kyc')}
          className={`touch-target px-6 py-3 font-bold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'kyc'
              ? 'border-[#FF8A1F] text-[#FF8A1F]'
              : 'border-transparent text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
          }`}
        >
          <Icon name="badge" className="text-base" />
          <span>KYC & Identity Documents</span>
        </button>
      </div>

      {/* TAB 1: PROFILE */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfile} className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6 shadow-sm">
          {isSaved && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-bold flex items-center gap-2">
              <Icon name="check_circle" className="text-base" />
              <span>Store profile details updated successfully!</span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-[var(--d-border)] overflow-hidden shrink-0">
              <SafeImage
                src={profile?.avatarUrl || '/placeholders/store-logo.svg'}
                alt="Store logo"
                aspectRatio="aspect-square"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-extrabold text-base text-[var(--d-text-primary)]">{profile?.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <StatusChip status={profile?.status || 'ACTIVE'} />
                {kyc?.status === 'APPROVED' && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20 flex items-center gap-1">
                    <Icon name="verified" className="text-xs" />
                    <span>Verified Merchant</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="store-name-input" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Storefront Name
              </label>
              <input
                id="store-name-input"
                type="text"
                required
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="district-select" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Operating District
              </label>
              <select
                id="district-select"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              >
                <option value="Kampala">Kampala</option>
                <option value="Wakiso">Wakiso</option>
                <option value="Mukono">Mukono</option>
                <option value="Entebbe">Entebbe</option>
                <option value="Jinja">Jinja</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="store-location-input" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Physical Merchant Address / Pick-up Point
              </label>
              <input
                id="store-location-input"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="store-bio-input" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Store Bio & Description
              </label>
              <textarea
                id="store-bio-input"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="payout-phone-input" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Registered Mobile Money Payout Phone
              </label>
              <input
                id="payout-phone-input"
                type="tel"
                value={payoutPhone}
                onChange={(e) => setPayoutPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2 border-t border-[var(--d-border)]">
            <button
              type="submit"
              className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Save Store Profile
            </button>
          </div>
        </form>
      )}

      {/* TAB 2: KYC */}
      {activeTab === 'kyc' && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Identity Verification Status</h2>
              <p className="text-xs text-[var(--d-text-secondary)] mt-0.5">
                Ugandan marketplace KYC compliance (National ID & Trading License).
              </p>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full font-bold ${
                kyc?.status === 'APPROVED'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : kyc?.status === 'UNDER_REVIEW'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              }`}
            >
              Status: {kyc?.status || 'NOT_STARTED'}
            </span>
          </div>

          {kycSuccess && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-bold flex items-center gap-2">
              <Icon name="check_circle" className="text-base" />
              <span>KYC documents submitted to administration for verification review!</span>
            </div>
          )}

          {kyc?.status === 'REJECTED' && kyc.rejectionReason && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 space-y-1">
              <p className="font-bold text-rose-400">Previous Submission Rejection Reason:</p>
              <p>{kyc.rejectionReason}</p>
            </div>
          )}

          {/* Upload Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* National ID Front */}
            <div className="p-4 rounded-xl border border-[var(--d-border)] bg-[var(--d-surface-container)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[var(--d-text-primary)]">National ID (Front)</span>
                {idFrontUploaded ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Icon name="check_circle" className="text-xs" />
                    <span>Uploaded</span>
                  </span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-bold">Required</span>
                )}
              </div>
              <p className="text-[11px] text-[var(--d-text-secondary)]">Clear photo of Ugandan NIN and photo face.</p>
              <button
                type="button"
                onClick={() => handleSimulateUpload('id_front')}
                disabled={isUploading}
                className="w-full touch-target py-2 rounded-lg bg-[var(--d-surface)] hover:bg-[var(--d-surface-container-high)] border border-[var(--d-border)] text-xs font-bold text-[var(--d-text-primary)] cursor-pointer"
              >
                {idFrontUploaded ? 'Replace Document' : 'Upload Front'}
              </button>
            </div>

            {/* National ID Back */}
            <div className="p-4 rounded-xl border border-[var(--d-border)] bg-[var(--d-surface-container)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[var(--d-text-primary)]">National ID (Back)</span>
                {idBackUploaded ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Icon name="check_circle" className="text-xs" />
                    <span>Uploaded</span>
                  </span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-bold">Required</span>
                )}
              </div>
              <p className="text-[11px] text-[var(--d-text-secondary)]">Barcode and district information visible.</p>
              <button
                type="button"
                onClick={() => handleSimulateUpload('id_back')}
                disabled={isUploading}
                className="w-full touch-target py-2 rounded-lg bg-[var(--d-surface)] hover:bg-[var(--d-surface-container-high)] border border-[var(--d-border)] text-xs font-bold text-[var(--d-text-primary)] cursor-pointer"
              >
                {idBackUploaded ? 'Replace Document' : 'Upload Back'}
              </button>
            </div>

            {/* Trading License */}
            <div className="p-4 rounded-xl border border-[var(--d-border)] bg-[var(--d-surface-container)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[var(--d-text-primary)]">Trading License</span>
                {tradingLicenseUploaded ? (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <Icon name="check_circle" className="text-xs" />
                    <span>Uploaded</span>
                  </span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-bold">Required</span>
                )}
              </div>
              <p className="text-[11px] text-[var(--d-text-secondary)]">KCCA or Local District Authority license.</p>
              <button
                type="button"
                onClick={() => handleSimulateUpload('trading_license')}
                disabled={isUploading}
                className="w-full touch-target py-2 rounded-lg bg-[var(--d-surface)] hover:bg-[var(--d-surface-container-high)] border border-[var(--d-border)] text-xs font-bold text-[var(--d-text-primary)] cursor-pointer"
              >
                {tradingLicenseUploaded ? 'Replace Document' : 'Upload License'}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={handleSubmitKyc}
              disabled={!idFrontUploaded || !idBackUploaded || !tradingLicenseUploaded}
              className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs cursor-pointer shadow-md"
            >
              Submit KYC for Verification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerProfileKycPage;
