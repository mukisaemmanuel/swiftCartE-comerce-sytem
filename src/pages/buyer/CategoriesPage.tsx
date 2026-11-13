import React, { useState } from 'react';
import { useCategories, useProducts } from '../../hooks/useCatalog';
import Skeleton from '../../components/shared/Skeleton';
import SafeImage from '../../components/shared/SafeImage';
import { Icon } from '../../components/shared/Icon';

export interface CategoriesPageProps {
  onNavigate: (path: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onNavigate }) => {
  const { categories, isLoading } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('phones');

  const selectedCategory =
    categories.find((c) => c.id === selectedCategoryId) || categories[0];

  const { products, isLoading: isProductsLoading } = useProducts({
    categoryId: selectedCategory?.id,
  });

  if (isLoading) {
    return (
      <div className="py-6 flex flex-col gap-6">
        <Skeleton height={40} width={200} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} height={180} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pb-12">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-extrabold text-[#0E1B4D] tracking-tight">
            Explore All Categories
          </h1>
          <p className="text-[14px] text-slate-500">
            Browse through hundreds of verified stores in Uganda
          </p>
        </div>
      </div>

      {/* MOBILE LAYOUT: Left Category Sidebar + Right Subcategories & Products */}
      <div className="md:hidden flex gap-3 min-h-[600px] border-t border-slate-200/80 pt-3">
        {/* Left vertical category rail */}
        <aside className="w-24 shrink-0 flex flex-col gap-1.5 border-r border-slate-200/80 pr-2">
          {categories.map((cat) => {
            const isSelected = cat.id === selectedCategory?.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-orange-50 text-[#DA3700] font-bold border border-[#FF8A1F]/40 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white p-1 mb-1 border border-slate-200/60 shadow-xs flex items-center justify-center">
                  <SafeImage
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-[11px] leading-tight line-clamp-2">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Right Content Pane */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pl-1">
          {selectedCategory && (
            <>
              {/* Category Header Card */}
              <div
                onClick={() => onNavigate(`/search-experience?category=${selectedCategory.id}`)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-[#DA3700] text-white flex items-center justify-between shadow-sm cursor-pointer"
              >
                <div>
                  <h3 className="font-bold text-[16px]">{selectedCategory.name}</h3>
                  <span className="text-[12px] opacity-90">
                    {selectedCategory.itemCount} items available
                  </span>
                </div>
                <Icon name="chevron_right" className="text-[22px]" />
              </div>

              {/* Subcategories Pills */}
              {selectedCategory.subcategories && (
                <div className="flex flex-wrap gap-1.5">
                  {selectedCategory.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() =>
                        onNavigate(
                          `/search-experience?category=${selectedCategory.id}&sub=${sub.id}`
                        )
                      }
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-[#DA3700] text-[12px] font-semibold border border-slate-200"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Products preview */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">
                  Popular in {selectedCategory.name}
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {isProductsLoading
                    ? Array.from({ length: 2 }).map((_, i) => (
                        <Skeleton key={i} height={120} />
                      ))
                    : products.slice(0, 4).map((p) => (
                        <div
                          key={p.id}
                          onClick={() => onNavigate(`/product-detail-soundcore-space-one-2?id=${p.id}`)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs cursor-pointer"
                        >
                          <SafeImage
                            src={p.images[0]}
                            alt={p.title}
                            className="w-16 h-16 rounded-lg object-cover bg-slate-50 shrink-0"
                          />
                          <div className="flex flex-col min-w-0 flex-1">
                            <h4 className="text-[13px] font-bold text-[#0E1B4D] truncate">
                              {p.title}
                            </h4>
                            <span className="text-[13px] font-bold text-[#FF8A1F]">
                              UGX {p.price.toLocaleString()}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {p.sellerName}
                            </span>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* TABLET & DESKTOP LAYOUT: Mega Directory Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col rounded-3xl bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all gap-4"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 p-1 border border-orange-200 shrink-0">
                <SafeImage
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => onNavigate(`/search-experience?category=${cat.id}`)}
                  className="text-left font-extrabold text-[17px] text-[#0E1B4D] hover:text-[#DA3700] transition-colors truncate"
                >
                  {cat.name}
                </button>
                <span className="text-[13px] text-slate-400">
                  {cat.itemCount} items listed
                </span>
              </div>
            </div>

            {/* Subcategories list */}
            {cat.subcategories && (
              <ul className="space-y-1.5 flex-1">
                {cat.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate(`/search-experience?category=${cat.id}&sub=${sub.id}`)
                      }
                      className="w-full flex items-center justify-between text-left text-[14px] text-slate-600 hover:text-[#DA3700] hover:bg-orange-50/60 p-1.5 rounded-lg transition-colors group"
                    >
                      <span>{sub.name}</span>
                      <Icon name="chevron_right" className="text-[16px] text-slate-300 group-hover:text-[#DA3700]" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* View category button */}
            <button
              type="button"
              onClick={() => onNavigate(`/search-experience?category=${cat.id}`)}
              className="touch-target w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#DA3700] font-bold text-[14px] text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore {cat.name}</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
