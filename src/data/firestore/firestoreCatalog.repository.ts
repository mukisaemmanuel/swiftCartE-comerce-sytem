import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebaseApp';
import type { Product, Category, Seller, Review } from '../../domain/types';
import type { CatalogRepository, ProductFilters } from '../catalog.repository';

export class FirestoreCatalogRepository implements CatalogRepository {
  async getCategories(): Promise<Category[]> {
    const snap = await getDocs(collection(db, 'categories'));
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Category, 'id'>) }));
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    const q = query(collection(db, 'categories'), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const d = snap.docs[0];
      return { id: d.id, ...(d.data() as Omit<Category, 'id'>) };
    }
    const directDoc = await getDoc(doc(db, 'categories', slug));
    if (directDoc.exists()) {
      return { id: directDoc.id, ...(directDoc.data() as Omit<Category, 'id'>) };
    }
    return null;
  }

  async getProducts(filters?: ProductFilters): Promise<Product[]> {
    const snap = await getDocs(collection(db, 'products'));
    let result = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }));

    if (!filters) return result;

    if (filters.categoryId && filters.categoryId !== 'all') {
      result = result.filter(
        (p) =>
          p.categoryId === filters.categoryId ||
          p.categoryName?.toLowerCase().includes(filters.categoryId!.toLowerCase())
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
      result = result.filter((p) => (p.rating ?? 0) >= filters.rating!);
    }

    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.categoryName?.toLowerCase().includes(q) ||
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
          result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
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
    const d = await getDoc(doc(db, 'products', id));
    if (d.exists()) {
      return { id: d.id, ...(d.data() as Omit<Product, 'id'>) };
    }
    return null;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const q = query(collection(db, 'products'), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const d = snap.docs[0];
      return { id: d.id, ...(d.data() as Omit<Product, 'id'>) };
    }
    return this.getProductById(slug);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const q = query(collection(db, 'products'), where('featured', '==', true));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }));
  }

  async getTrendingDeals(): Promise<Product[]> {
    const q = query(collection(db, 'products'), where('trending', '==', true));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }));
  }

  async getProductsBySeller(sellerId: string): Promise<Product[]> {
    const q = query(collection(db, 'products'), where('sellerId', '==', sellerId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, 'id'>) }));
  }

  async getSellerById(id: string): Promise<Seller | null> {
    const d = await getDoc(doc(db, 'sellers', id));
    if (d.exists()) {
      return { id: d.id, ...(d.data() as Omit<Seller, 'id'>) };
    }
    return null;
  }

  async getSellerBySlug(slug: string): Promise<Seller | null> {
    const q = query(collection(db, 'sellers'), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const d = snap.docs[0];
      return { id: d.id, ...(d.data() as Omit<Seller, 'id'>) };
    }
    return this.getSellerById(slug);
  }

  async getFeaturedSellers(): Promise<Seller[]> {
    const snap = await getDocs(collection(db, 'sellers'));
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Seller, 'id'>) }));
  }

  async getReviews(productId: string): Promise<Review[]> {
    const q = query(collection(db, 'reviews'), where('productId', '==', productId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Review, 'id'>) }));
  }

  async addReview(productId: string, review: Omit<Review, 'id' | 'date'>): Promise<Review> {
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...review,
      productId,
      createdAt: serverTimestamp(),
      date: new Date().toLocaleDateString('en-UG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    });
    return {
      id: docRef.id,
      ...review,
      productId,
      date: 'Just now',
    };
  }
}
