import type { SellerRider } from '../../domain/seller.types';

export interface ISellerRidersRepository {
  getRiders(sellerId: string): Promise<SellerRider[]>;
  inviteRider(phoneNumber: string, name?: string): Promise<SellerRider>;
}

const INITIAL_MOCK_RIDERS: SellerRider[] = [
  {
    id: 'rider-kato',
    name: 'Kato Denis',
    phoneNumber: '+256 782 554433',
    bikePlate: 'UFB 214K',
    status: 'available',
    rating: 4.9,
    deliveriesCount: 342,
    avatarUrl: '/placeholders/avatar.svg',
    joinedDate: '3 months ago',
  },
  {
    id: 'rider-okello',
    name: 'Okello John',
    phoneNumber: '+256 701 443322',
    bikePlate: 'UEK 891M',
    status: 'busy',
    rating: 4.8,
    deliveriesCount: 189,
    avatarUrl: '/placeholders/avatar.svg',
    joinedDate: '1 month ago',
  },
  {
    id: 'rider-musiime',
    name: 'Musiime Samuel',
    phoneNumber: '+256 775 889900',
    bikePlate: 'UDL 302P',
    status: 'available',
    rating: 4.95,
    deliveriesCount: 512,
    avatarUrl: '/placeholders/avatar.svg',
    joinedDate: '6 months ago',
  },
];

export class MockSellerRidersRepository implements ISellerRidersRepository {
  private riders: SellerRider[] = [...INITIAL_MOCK_RIDERS];

  async getRiders(_sellerId: string): Promise<SellerRider[]> {
    return [...this.riders];
  }

  async inviteRider(phoneNumber: string, name = 'New Courier'): Promise<SellerRider> {
    if (!phoneNumber || phoneNumber.trim().length < 9) {
      throw new Error('A valid Ugandan phone number is required (e.g. +256 7XX XXX XXX)');
    }
    const newRider: SellerRider = {
      id: `rider-${Date.now()}`,
      name,
      phoneNumber,
      bikePlate: 'PENDING',
      status: 'available',
      rating: 5.0,
      deliveriesCount: 0,
      avatarUrl: '/placeholders/avatar.svg',
      joinedDate: 'Just now',
    };
    this.riders.unshift(newRider);
    return newRider;
  }
}

