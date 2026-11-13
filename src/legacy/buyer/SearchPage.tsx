import React, { useState, useMemo } from 'react';
import { useProducts, useCategories } from '../../hooks/useCatalog';
import ProductCard from '../../components/buyer/ProductCard';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';
import EmptyState from '../../components/shared/EmptyState';
import { useCart } from '../../hooks/useCart';
import { Icon } from '../../components/shared/Icon';

export interface SearchPageProps {
  initialQuery?: string;
  initialCategory?: string;
  onNavigate: (path: string) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  initialQuery = '',
  initialCategory,
  onNavigate,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedSort, setSelectedSort] = useState<
    'featured' | 'price-asc' | 'price-desc' | 'rating'
  >('featured');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [minRating, setMinRating] = useState<number | undefined>(undefined);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const { categories } = useCategories();
  const { addItem } = useCart();

  const filterParams = useMemo(
    () => ({
      searchQuery: query || undefined,
      categoryId: selectedCategory !== 'all' ? selectedCategory : undefined,
      sortBy: selectedSort,
      minPrice,
      maxPrice,
      rating: minRating,
      inStockOnly,
    }),
    [query, selectedCategory, selectedSort, minPrice, maxPrice, minRating, inStockOnly]
  );

  const { products, isLoading } = useProducts(filterParams);

  // Active filter chips
  const activeChips = [];
  if (selectedCategory !== 'all') {
    const catName = categories.find((c) => c.id === selectedCategory)?.name || selectedCategory;
    activeChips.push({ id: 'category', label: `Category: ${catName}`, onRemove: () => setSelectedCategory('all') });
  }
  if (minPrice !== undefined) {
    activeChips.push({ id: 'minPrice', label: `Min UGX ${minPrice.toLocaleString()}`, onRemove: () => setMinPrice(undefined) });
  }
  if (maxPrice !== undefined) {
    activeChips.push({ id: 'maxPrice', label: `Max UGX ${maxPrice.toLocaleString()}`, onRemove: () => setMaxPrice(undefined) });
  }
  if (minRating !== undefined) {
    activeChips.push({ id: 'rating', label: `${minRating}★ & Above`, onRemove: () => setMinRating(undefined) });
  }
  if (inStockOnly) {
    activeChips.push({ id: 'inStock', label: 'In Stock Only', onRemove: () => setInStockOnly(false) });
  }

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSort('featured');
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setMinRating(undefined);
    setInStockOnly(false);
  };

  const renderFilterControls = () => (
    <div className="flex flex-col gap-6 text-[#0E1B4D]">
      {/* Category Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#0E1B4D]">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#0E1B4D]">Price Range (UGX)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice ?? ''}
            onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
            className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
          />
          <span className="text-slate-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice ?? ''}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
            className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
          />
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-[#0E1B4D]">Minimum Rating</label>
        <div className="flex flex-wrap gap-2">
          {[4, 4.5].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() => setMinRating(minRating === stars ? undefined : stars)}
              className={`px-3 py-1.5 rounded-xl text-[13px] font-bold border transition-colors flex items-center gap-1 ${
                minRating === stars
                  ? 'bg-orange-50 border-orange-500 text-[#DA3700]'
                  : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <span className="text-amber-500">★</span>
              <span>{stars} &amp; up</span>
            </button>
          ))}
        </div>
      </div>

      {/* In Stock Toggle */}
      <label className="flex items-center gap-2 cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
        />
        <span className="text-[14px] font-medium text-slate-700">In Stock Items Only</span>
      </label>

      {/* Reset Action */}
      {activeChips.length > 0 && (
        <button
          type="button"
          onClick={clearAllFilters}
          className="touch-target py-2 rounded-xl text-[#DA3700] hover:bg-orange-50 text-[14px] font-bold transition-colors"
        >
          Reset All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-6 pb-12">
      {/* Search Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
        {/* Search input field */}
        <div className="relative flex-1 max-w-lg">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search verified Ugandan products..."
            className="w-full h-11 pl-10 pr-10 rounded-xl bg-slate-50 border border-slate-200 text-[#0E1B4D] placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <Icon name="close" className="text-[18px]" />
            </button>
          )}
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden touch-target px-3.5 py-2 rounded-xl bg-orange-50 text-[#DA3700] border border-orange-200 text-[14px] font-bold flex items-center gap-1.5"
          >
            <Icon name="filter_list" className="text-[18px]" />
            <span>Filters {activeChips.length > 0 ? `(${activeChips.length})` : ''}</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline text-[13px] text-slate-500 font-medium">
              Sort by:
            </span>
            <select
              value={selectedSort}
              onChange={(e) =>
                setSelectedSort(
                  e.target.value as 'featured' | 'price-asc' | 'price-desc' | 'rating'
                )
              }
              className="h-11 px-3 rounded-xl border border-slate-200 bg-white text-[14px] font-semibold text-[#0E1B4D] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] text-slate-400 font-medium">Active filters:</span>
          {activeChips.map((chip) => (
            <span
              key={chip.id}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-[#DA3700] font-bold text-[13px] border border-orange-200"
            >
              <span>{chip.label}</span>
              <button
                type="button"
                onClick={chip.onRemove}
                className="hover:opacity-75 focus:outline-none"
                aria-label={`Remove filter ${chip.label}`}
              >
                <Icon name="close" className="text-[14px]" />
              </button>
            </span>
          ))}
          <button
            type="button"
            onClick={clearAllFilters}
            className="text-[13px] font-bold text-slate-500 hover:text-[#DA3700] underline ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Main Layout: Desktop Sidebar Filters + Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* DESKTOP SIDEBAR FILTERS */}
        <aside className="hidden lg:block lg:col-span-1 p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm sticky top-24 self-start">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h3 className="font-extrabold text-[16px] text-[#0E1B4D]">Filter Products</h3>
            {activeChips.length > 0 && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[12px] font-bold text-[#DA3700] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
          {renderFilterControls()}
        </aside>

        {/* RESULTS GRID */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-slate-500 font-medium">
              Found <strong className="text-[#0E1B4D]">{products.length}</strong> items
              {query ? ` for "${query}"` : ''}
            </span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[3/4]">
                  <Skeleton height="100%" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-12 bg-white rounded-3xl border border-slate-200">
              <EmptyState
                icon="search_off"
                title="No Products Found"
                description="We couldn't find any products matching your search criteria. Try removing some filters or searching for phones, headphones, or fashion."
                actionLabel="Clear Filters"
                onAction={clearAllFilters}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((prod) => (
                <ProductCard
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  originalPrice={prod.originalPrice}
                  imageUrl={prod.images[0]}
                  rating={prod.rating}
                  reviewCount={prod.reviewCount}
                  storeName={prod.sellerName}
                  isStoreVerified={prod.isSellerVerified}
                  inStock={prod.inStock}
                  onClick={() =>
                    onNavigate(`/product-detail-soundcore-space-one-2?id=${prod.id}`)
                  }
                  onAddToCart={() => {
                    addItem({
                      productId: prod.id,
                      productTitle: prod.title,
                      productImage: prod.images[0] || '/placeholders/headphones.svg',
                      sellerId: prod.sellerId,
                      sellerName: prod.sellerName,
                      price: prod.price,
                      quantity: 1,
                      maxStock: 20,
                    });
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER BOTTOM SHEET */}
      <SheetDialog
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        title="Filter & Sort"
        description="Refine products by category, price, and ratings"
        footer={
          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-[14px] font-bold text-slate-500 hover:text-[#DA3700]"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(false)}
              className="touch-target px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-[14px]"
            >
              Apply Filters ({products.length})
            </button>
          </div>
        }
      >
        <div className="py-2">{renderFilterControls()}</div>
      </SheetDialog>
    </div>
  );
};

export default SearchPage;
