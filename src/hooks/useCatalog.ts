import { useState, useEffect, useCallback } from 'react';
import type { Product, Category, Seller, Review } from '../domain/types';
import { catalogRepository, type ProductFilters } from '../data';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await catalogRepository.getCategories();
      setCategories(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { categories, isLoading, error, refresh };
};

export const useProducts = (filters?: ProductFilters) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filterKey = JSON.stringify(filters || {});

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await catalogRepository.getProducts(filters);
      setProducts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  }, [filterKey, filters]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { products, isLoading, error, refresh };
};

export const useProduct = (idOrSlug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<Seller | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      let prod = await catalogRepository.getProductById(idOrSlug);
      if (!prod) {
        prod = await catalogRepository.getProductBySlug(idOrSlug);
      }
      setProduct(prod);

      if (prod) {
        const [sellerData, reviewsData] = await Promise.all([
          catalogRepository.getSellerById(prod.sellerId),
          catalogRepository.getReviews(prod.id),
        ]);
        setSeller(sellerData);
        setReviews(reviewsData);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load product');
    } finally {
      setIsLoading(false);
    }
  }, [idOrSlug]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { product, seller, reviews, isLoading, error, refresh };
};

export const useSeller = (idOrSlug: string) => {
  const [seller, setSeller] = useState<Seller | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      let s = await catalogRepository.getSellerById(idOrSlug);
      if (!s) {
        s = await catalogRepository.getSellerBySlug(idOrSlug);
      }
      setSeller(s);

      if (s) {
        const prods = await catalogRepository.getProductsBySeller(s.id);
        setProducts(prods);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load seller');
    } finally {
      setIsLoading(false);
    }
  }, [idOrSlug]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { seller, products, isLoading, error, refresh };
};

export const useStorefrontHome = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingDeals, setTrendingDeals] = useState<Product[]>([]);
  const [featuredSellers, setFeaturedSellers] = useState<Seller[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [feat, trend, sellers, cats] = await Promise.all([
        catalogRepository.getFeaturedProducts(),
        catalogRepository.getTrendingDeals(),
        catalogRepository.getFeaturedSellers(),
        catalogRepository.getCategories(),
      ]);
      setFeaturedProducts(feat);
      setTrendingDeals(trend);
      setFeaturedSellers(sellers);
      setCategories(cats);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load storefront data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    featuredProducts,
    trendingDeals,
    featuredSellers,
    categories,
    isLoading,
    error,
    refresh,
  };
};

export const useCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredSellers, setFeaturedSellers] = useState<Seller[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingDeals, setTrendingDeals] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [prods, cats, sellers, feat, trend] = await Promise.all([
        catalogRepository.getProducts(),
        catalogRepository.getCategories(),
        catalogRepository.getFeaturedSellers(),
        catalogRepository.getFeaturedProducts(),
        catalogRepository.getTrendingDeals(),
      ]);
      setProducts(prods);
      setCategories(cats);
      setFeaturedSellers(sellers);
      setFeaturedProducts(feat);
      setTrendingDeals(trend);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load catalog');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    products,
    categories,
    featuredSellers,
    featuredProducts,
    trendingDeals,
    isLoading,
    error,
    refresh,
  };
};

export default useCatalog;
