import type { Product, Category, Seller, Review } from '../domain/types';
import {
  MOCK_CATEGORIES,
  MOCK_PRODUCTS,
  MOCK_SELLERS,
  MOCK_REVIEWS,
} from './mockData';

export interface ProductFilters {
  categoryId?: string;
  sellerId?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  searchQuery?: string;
  inStockOnly?: boolean;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export interface CatalogRepository {
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  getProducts(filters?: ProductFilters): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getFeaturedProducts(): Promise<Product[]>;
  getTrendingDeals(): Promise<Product[]>;
  getProductsBySeller(sellerId: string): Promise<Product[]>;
  getSellerById(id: string): Promise<Seller | null>;
  getSellerBySlug(slug: string): Promise<Seller | null>;
  getFeaturedSellers(): Promise<Seller[]>;
  getReviews(productId: string): Promise<Review[]>;
  addReview(productId: string, review: Omit<Review, 'id' | 'date'>): Promise<Review>;
}

export class MockCatalogRepository implements CatalogRepository {
  async getCategories(): Promise<Category[]> {
    return [...MOCK_CATEGORIES];
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    return MOCK_CATEGORIES.find((c) => c.slug === slug || c.id === slug) || null;
  }

  async getProducts(filters?: ProductFilters): Promise<Product[]> {
    let result = [...MOCK_PRODUCTS];

    if (!filters) return result;

    if (filters.categoryId && filters.categoryId !== 'all') {
      result = result.filter(
        (p) => p.categoryId === filters.categoryId || p.categoryName.toLowerCase().includes(filters.categoryId!.toLowerCase())
      );
    }

    if (filters.sellerId) {
      result = result.filter((p) => p.sellerId === filters.sellerId);
    }

    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }

    if (filters.rating !== undefined) {
      result = result.filter((p) => p.rating >= filters.rating!);
    }

    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          result.reverse();
          break;
        case 'featured':
        default:
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
      }
    }

    return result;
  }

  async getProductById(id: string): Promise<Product | null> {
    return MOCK_PRODUCTS.find((p) => p.id === id) || null;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug) || null;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.featured);
  }

  async getTrendingDeals(): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.trending);
  }

  async getProductsBySeller(sellerId: string): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.sellerId === sellerId);
  }

  async getSellerById(id: string): Promise<Seller | null> {
    return MOCK_SELLERS.find((s) => s.id === id) || null;
  }

  async getSellerBySlug(slug: string): Promise<Seller | null> {
    return MOCK_SELLERS.find((s) => s.slug === slug || s.id === slug) || null;
  }

  async getFeaturedSellers(): Promise<Seller[]> {
    return [...MOCK_SELLERS];
  }

  async getReviews(productId: string): Promise<Review[]> {
    return MOCK_REVIEWS.filter((r) => r.productId === productId);
  }

  async addReview(productId: string, review: Omit<Review, 'id' | 'date'>): Promise<Review> {
    const newReview: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      productId,
      date: 'Just now',
    };
    MOCK_REVIEWS.unshift(newReview);
    return newReview;
  }
}
