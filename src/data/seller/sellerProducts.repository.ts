import { PRODUCT_STATUS } from '../../../shared/statuses';
import type { SellerProduct } from '../../domain/seller.types';

export interface ISellerProductsRepository {
  getProducts(sellerId: string, filter?: { status?: string; search?: string }): Promise<SellerProduct[]>;
  getProductById(productId: string): Promise<SellerProduct | null>;
  createProduct(product: Omit<SellerProduct, 'id' | 'createdAt' | 'updatedAt'>): Promise<SellerProduct>;
  updateProduct(productId: string, updates: Partial<SellerProduct>): Promise<SellerProduct>;
  updateBulkPrices(updates: { productId: string; price: number }[]): Promise<void>;
  updateBulkStock(updates: { productId: string; stock: number }[]): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}

const INITIAL_MOCK_PRODUCTS: SellerProduct[] = [
  {
    id: 'prod-s-1',
    sellerId: 'seller-soundcore',
    title: 'Soundcore Space One ANC Wireless Headphones',
    slug: 'soundcore-space-one-anc-wireless-headphones',
    description: 'Upgraded noise cancelling system reduces noise by up to 98%. 40mm customized dynamic drivers support LDAC wireless Hi-Res audio.',
    categoryId: 'electronics',
    categoryName: 'Electronics & Audio',
    brand: 'Anker Soundcore',
    price: 380000,
    compareAtPrice: 420000,
    stock: 24,
    sku: 'SND-SP1-001',
    weightKg: 0.26,
    status: PRODUCT_STATUS.APPROVED,
    images: ['/placeholders/headphones.svg', '/placeholders/product-audio.svg'],
    warranty: '18 Months Official Warranty',
    variants: [
      {
        id: 'var-1',
        name: 'Jet Black',
        sku: 'SND-SP1-BLK',
        price: 380000,
        stock: 14,
        attributes: { color: 'Jet Black' },
      },
      {
        id: 'var-2',
        name: 'Cream White',
        sku: 'SND-SP1-WHT',
        price: 380000,
        stock: 10,
        attributes: { color: 'Cream White' },
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 30).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'prod-s-2',
    sellerId: 'seller-soundcore',
    title: 'Soundcore Life Q20 Hybrid Active Noise Cancelling',
    slug: 'soundcore-life-q20-hybrid-active-noise-cancelling',
    description: 'BassUp technology deepens bass output. 40 hours playtime in wireless ANC mode.',
    categoryId: 'electronics',
    categoryName: 'Electronics & Audio',
    brand: 'Anker Soundcore',
    price: 240000,
    compareAtPrice: 280000,
    stock: 3, // LOW STOCK alert
    sku: 'SND-Q20-002',
    weightKg: 0.28,
    status: PRODUCT_STATUS.APPROVED,
    images: ['/placeholders/product-audio.svg'],
    warranty: '12 Months Official Warranty',
    variants: [
      {
        id: 'var-3',
        name: 'Silver',
        sku: 'SND-Q20-SLV',
        price: 240000,
        stock: 3,
        attributes: { color: 'Silver' },
      },
    ],
    createdAt: new Date(Date.now() - 86400000 * 45).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: 'prod-s-3',
    sellerId: 'seller-soundcore',
    title: 'Anker 737 Power Bank (PowerCore 24K)',
    slug: 'anker-737-power-bank-powercore-24k',
    description: 'Ultra-powerful 140W fast-charging two-way USB-C power bank with smart digital display for laptops and phones.',
    categoryId: 'electronics',
    categoryName: 'Electronics & Audio',
    brand: 'Anker',
    price: 490000,
    compareAtPrice: 550000,
    stock: 0, // OUT OF STOCK
    sku: 'ANK-737-003',
    weightKg: 0.63,
    status: PRODUCT_STATUS.APPROVED,
    images: ['/placeholders/electronics.svg'],
    warranty: '24 Months Anker Warranty',
    variants: [],
    createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: 'prod-s-4',
    sellerId: 'seller-soundcore',
    title: 'Soundcore Motion+ 30W Bluetooth Speaker',
    slug: 'soundcore-motion-plus-30w-bluetooth-speaker',
    description: 'Hi-Res Audio with Qualcomm aptX, 30W output, 12-hour playtime and IPX7 waterproof rating.',
    categoryId: 'electronics',
    categoryName: 'Electronics & Audio',
    brand: 'Anker Soundcore',
    price: 360000,
    stock: 15,
    sku: 'SND-MOT-004',
    weightKg: 1.05,
    status: PRODUCT_STATUS.UNDER_REVIEW,
    images: ['/placeholders/product-audio.svg'],
    warranty: '12 Months Warranty',
    variants: [],
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
];

export class MockSellerProductsRepository implements ISellerProductsRepository {
  private products: SellerProduct[] = [...INITIAL_MOCK_PRODUCTS];

  async getProducts(
    _sellerId: string,
    filter?: { status?: string; search?: string }
  ): Promise<SellerProduct[]> {
    let result = [...this.products];

    if (filter?.status && filter.status !== 'ALL') {
      result = result.filter((p) => p.status === filter.status);
    }

    if (filter?.search && filter.search.trim()) {
      const q = filter.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    return result;
  }

  async getProductById(productId: string): Promise<SellerProduct | null> {
    const found = this.products.find((p) => p.id === productId);
    return found ? { ...found } : null;
  }

  async createProduct(
    product: Omit<SellerProduct, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<SellerProduct> {
    const newProduct: SellerProduct = {
      ...product,
      id: `prod-s-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.products.unshift(newProduct);
    return newProduct;
  }

  async updateProduct(
    productId: string,
    updates: Partial<SellerProduct>
  ): Promise<SellerProduct> {
    const idx = this.products.findIndex((p) => p.id === productId);
    if (idx === -1) throw new Error(`Product ${productId} not found`);

    const updated = {
      ...this.products[idx],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.products[idx] = updated;
    return updated;
  }

  async updateBulkPrices(updates: { productId: string; price: number }[]): Promise<void> {
    for (const u of updates) {
      const idx = this.products.findIndex((p) => p.id === u.productId);
      if (idx !== -1) {
        this.products[idx] = {
          ...this.products[idx],
          price: u.price,
          updatedAt: new Date().toISOString(),
        };
      }
    }
  }

  async updateBulkStock(updates: { productId: string; stock: number }[]): Promise<void> {
    for (const u of updates) {
      const idx = this.products.findIndex((p) => p.id === u.productId);
      if (idx !== -1) {
        this.products[idx] = {
          ...this.products[idx],
          stock: u.stock,
          updatedAt: new Date().toISOString(),
        };
      }
    }
  }

  async deleteProduct(productId: string): Promise<void> {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}

