import { PAYOUT_STATUS } from '../../../shared/statuses';
import type { SellerWallet, WalletTransaction } from '../../domain/seller.types';

export interface ISellerWalletRepository {
  getWallet(sellerId: string): Promise<SellerWallet>;
  getTransactions(sellerId: string, filter?: { type?: string }): Promise<WalletTransaction[]>;
  requestPayout(
    sellerId: string,
    amount: number,
    channel: 'mtn_momo' | 'airtel_money',
    account: string
  ): Promise<WalletTransaction>;
}

const INITIAL_MOCK_WALLET: SellerWallet = {
  availableBalance: 2450000, // UGX 2,450,000
  inEscrowBalance: 1076000, // UGX 1,076,000
  totalPaidOut: 18900000, // UGX 18,900,000
  currency: 'UGX',
  lastPayoutDate: '3 days ago',
};

const INITIAL_MOCK_TRANSACTIONS: WalletTransaction[] = [
  {
    id: 'tx-101',
    type: 'sale',
    amount: 380000,
    balanceAfter: 2450000,
    orderNumber: 'SWIFT-UG-6531',
    description: 'Escrow released for completed delivery',
    status: PAYOUT_STATUS.PAID,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'tx-102',
    type: 'payout',
    amount: -1500000,
    balanceAfter: 2070000,
    description: 'Payout to MTN MoMo (+256 772 123456)',
    status: PAYOUT_STATUS.PAID,
    channel: 'mtn_momo',
    accountReference: '+256 772 123456',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: 'tx-103',
    type: 'refund',
    amount: -32000,
    balanceAfter: 3570000,
    orderNumber: 'SWIFT-UG-7822',
    description: 'Customer return refund approved',
    status: PAYOUT_STATUS.PAID,
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: 'tx-104',
    type: 'sale',
    amount: 685000,
    balanceAfter: 3602000,
    orderNumber: 'SWIFT-UG-5219',
    description: 'Escrow released for completed delivery',
    status: PAYOUT_STATUS.PAID,
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
  {
    id: 'tx-105',
    type: 'fee',
    amount: -34250,
    balanceAfter: 2917000,
    orderNumber: 'SWIFT-UG-5219',
    description: 'Standard platform commission (5%)',
    status: PAYOUT_STATUS.PAID,
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
];

export class MockSellerWalletRepository implements ISellerWalletRepository {
  private wallet: SellerWallet = { ...INITIAL_MOCK_WALLET };
  private transactions: WalletTransaction[] = [...INITIAL_MOCK_TRANSACTIONS];

  async getWallet(_sellerId: string): Promise<SellerWallet> {
    return { ...this.wallet };
  }

  async getTransactions(
    _sellerId: string,
    filter?: { type?: string }
  ): Promise<WalletTransaction[]> {
    if (!filter?.type || filter.type === 'ALL') {
      return [...this.transactions];
    }
    return this.transactions.filter((tx) => tx.type === filter.type);
  }

  async requestPayout(
    _sellerId: string,
    amount: number,
    channel: 'mtn_momo' | 'airtel_money',
    account: string
  ): Promise<WalletTransaction> {
    if (amount <= 0) {
      throw new Error('Payout amount must be greater than zero');
    }
    if (amount > this.wallet.availableBalance) {
      throw new Error(
        `Withdrawal amount (UGX ${amount.toLocaleString()}) cannot exceed available balance of UGX ${this.wallet.availableBalance.toLocaleString()}`
      );
    }
    if (!account || account.trim().length < 9) {
      throw new Error('A valid destination phone number is required');
    }

    const newBalance = this.wallet.availableBalance - amount;
    this.wallet = {
      ...this.wallet,
      availableBalance: newBalance,
      totalPaidOut: this.wallet.totalPaidOut + amount,
      lastPayoutDate: 'Just now',
    };

    const newTx: WalletTransaction = {
      id: `tx-${Date.now()}`,
      type: 'payout',
      amount: -amount,
      balanceAfter: newBalance,
      description: `Payout to ${channel === 'mtn_momo' ? 'MTN MoMo' : 'Airtel Money'} (${account})`,
      status: PAYOUT_STATUS.PENDING,
      channel,
      accountReference: account,
      createdAt: new Date().toISOString(),
    };

    this.transactions.unshift(newTx);
    return newTx;
  }
}

