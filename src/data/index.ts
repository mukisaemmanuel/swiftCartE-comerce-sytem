import { MockCatalogRepository, type CatalogRepository } from './catalog.repository';
import { MockCartRepository, type CartRepository } from './cart.repository';
import { MockWishlistRepository, type WishlistRepository } from './wishlist.repository';
import { MockOrdersRepository, type OrdersRepository } from './orders.repository';
import { MockAccountRepository, type AccountRepository } from './account.repository';
import { MockAuthRepository, type AuthRepository } from './auth.repository';

export * from './catalog.repository';
export * from './cart.repository';
export * from './wishlist.repository';
export * from './orders.repository';
export * from './account.repository';
export * from './auth.repository';
export * from './seller/sellerOrders.repository';
export * from './seller/sellerProducts.repository';
export * from './seller/sellerRiders.repository';
export * from './seller/sellerReturns.repository';
export * from './seller/sellerWallet.repository';
export * from './seller/sellerAnalytics.repository';
export * from './seller/sellerDiscounts.repository';
export * from './seller/sellerStore.repository';
export * from './seller/aiAssist.repository';

import { MockSellerOrdersRepository, type ISellerOrdersRepository } from './seller/sellerOrders.repository';
import { MockSellerProductsRepository, type ISellerProductsRepository } from './seller/sellerProducts.repository';
import { MockSellerRidersRepository, type ISellerRidersRepository } from './seller/sellerRiders.repository';
import { MockSellerReturnsRepository, type ISellerReturnsRepository } from './seller/sellerReturns.repository';
import { MockSellerWalletRepository, type ISellerWalletRepository } from './seller/sellerWallet.repository';
import { MockSellerAnalyticsRepository, type ISellerAnalyticsRepository } from './seller/sellerAnalytics.repository';
import { MockSellerDiscountsRepository, type ISellerDiscountsRepository } from './seller/sellerDiscounts.repository';
import { MockSellerStoreRepository, type ISellerStoreRepository } from './seller/sellerStore.repository';
import { MockAiAssistRepository, type IAiAssistRepository } from './seller/aiAssist.repository';

// Repositories
export const catalogRepository: CatalogRepository = new MockCatalogRepository();
export const cartRepository: CartRepository = new MockCartRepository();
export const wishlistRepository: WishlistRepository = new MockWishlistRepository();
export const ordersRepository: OrdersRepository = new MockOrdersRepository();
export const accountRepository: AccountRepository = new MockAccountRepository();
export const authRepository: AuthRepository = new MockAuthRepository();

export const sellerOrdersRepository: ISellerOrdersRepository = new MockSellerOrdersRepository();
export const sellerProductsRepository: ISellerProductsRepository = new MockSellerProductsRepository();
export const sellerRidersRepository: ISellerRidersRepository = new MockSellerRidersRepository();
export const sellerReturnsRepository: ISellerReturnsRepository = new MockSellerReturnsRepository();
export const sellerWalletRepository: ISellerWalletRepository = new MockSellerWalletRepository();
export const sellerAnalyticsRepository: ISellerAnalyticsRepository = new MockSellerAnalyticsRepository();
export const sellerDiscountsRepository: ISellerDiscountsRepository = new MockSellerDiscountsRepository();
export const sellerStoreRepository: ISellerStoreRepository = new MockSellerStoreRepository();
export const aiAssistRepository: IAiAssistRepository = new MockAiAssistRepository();
