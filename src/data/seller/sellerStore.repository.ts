import { SELLER_STATUS } from '../../../shared/statuses';
import type { SellerStoreProfile, SellerKyc } from '../../domain/seller.types';

export interface ISellerStoreRepository {
  getStoreProfile(sellerId: string): Promise<SellerStoreProfile>;
  updateStoreProfile(sellerId: string, updates: Partial<SellerStoreProfile>): Promise<SellerStoreProfile>;
  submitKycDocuments(sellerId: string, kycData: Partial<SellerKyc>): Promise<SellerKyc>;
}

const INITIAL_MOCK_PROFILE: SellerStoreProfile = {
  id: 'seller-soundcore',
  name: 'Soundcore Uganda Flagship',
  slug: 'soundcore-uganda-flagship',
  district: 'Kampala',
  location: 'Shop G-12, Prism Plaza, Kampala Road',
  status: SELLER_STATUS.ACTIVE,
  rating: 4.9,
  reviewCount: 380,
  bio: 'Official distributor of Anker & Soundcore audio gear and fast-charging accessories across Uganda.',
  avatarUrl: '/placeholders/store-logo.svg',
  bannerUrl: '/placeholders/store-banner.svg',
  contactEmail: 'sales@soundcore.ug',
  contactPhone: '+256 772 889900',
  payoutMethod: 'mtn_momo',
  payoutAccount: '+256 772 889900',
  accountHolderName: 'Mukisa Emmanuel',
  kyc: {
    status: 'APPROVED',
    nationalIdNumber: 'CM98021102A1BC',
    documentType: 'national_id',
    documentFrontUrl: '/placeholders/product.svg',
    documentBackUrl: '/placeholders/product.svg',
    tradingLicenseUrl: '/placeholders/product.svg',
    submittedAt: '1 month ago',
  },
};

export class MockSellerStoreRepository implements ISellerStoreRepository {
  private profile: SellerStoreProfile = { ...INITIAL_MOCK_PROFILE };

  async getStoreProfile(_sellerId: string): Promise<SellerStoreProfile> {
    return { ...this.profile };
  }

  async updateStoreProfile(
    _sellerId: string,
    updates: Partial<SellerStoreProfile>
  ): Promise<SellerStoreProfile> {
    this.profile = {
      ...this.profile,
      ...updates,
    };
    return { ...this.profile };
  }

  async submitKycDocuments(
    _sellerId: string,
    kycData: Partial<SellerKyc>
  ): Promise<SellerKyc> {
    const updatedKyc: SellerKyc = {
      ...this.profile.kyc,
      ...kycData,
      status: 'UNDER_REVIEW',
      submittedAt: 'Just now',
    };
    this.profile = {
      ...this.profile,
      kyc: updatedKyc,
    };
    return { ...updatedKyc };
  }
}
