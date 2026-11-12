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

// Stage 2 uses MockRepository implementations with realistic Ugandan data.
// In future stages, these factories will return Firebase/API repositories based on environment configuration.
export const catalogRepository: CatalogRepository = new MockCatalogRepository();
export const cartRepository: CartRepository = new MockCartRepository();
export const wishlistRepository: WishlistRepository = new MockWishlistRepository();
export const ordersRepository: OrdersRepository = new MockOrdersRepository();
export const accountRepository: AccountRepository = new MockAccountRepository();
export const authRepository: AuthRepository = new MockAuthRepository();
