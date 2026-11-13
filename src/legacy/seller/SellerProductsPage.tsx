import React, { useState } from 'react';
import { useSellerProducts } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import StatusChip from '../../components/shared/StatusChip';
import SheetDialog from '../../components/shared/SheetDialog';
import Skeleton from '../../components/shared/Skeleton';
import SafeImage from '../../components/shared/SafeImage';
import { PRODUCT_STATUS } from '../../../shared/statuses';

export interface SellerProductsPageProps {
  onNavigate: (path: string) => void;
}

export const SellerProductsPage: React.FC<SellerProductsPageProps> = ({ onNavigate }) => {
  const { products, isLoading, updateBulkPrices, updateBulkStock } = useSellerProducts();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  // Bulk Price Update Modal
  const [isBulkPriceModalOpen, setIsBulkPriceModalOpen] = useState(false);
  const [bulkPriceChangeType, setBulkPriceChangeType] = useState<'percent' | 'fixed'>('percent');
  const [bulkPriceDelta, setBulkPriceDelta] = useState<number>(10);

  // Filtered products
  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.sku && prod.sku.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (statusFilter === 'ALL') return true;
    return prod.status === statusFilter;
  });

  // Low stock products (< 5)
  const lowStockProducts = products.filter((p) => p.stock < 5 && p.status === PRODUCT_STATUS.APPROVED);

  const handleToggleSelectAll = () => {
    if (selectedProductIds.length === filteredProducts.length) {
      setSelectedProductIds([]);
    } else {
      setSelectedProductIds(filteredProducts.map((p) => p.id));
    }
  };

  const handleToggleSelectOne = (id: string) => {
    if (selectedProductIds.includes(id)) {
      setSelectedProductIds(selectedProductIds.filter((p) => p !== id));
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const handleApplyBulkPrice = async () => {
    const idsToUpdate = selectedProductIds.length > 0 ? selectedProductIds : products.map((p) => p.id);
    const updates = idsToUpdate.map((id) => {
      const prod = products.find((p) => p.id === id);
      if (!prod) return { productId: id, price: 0 };
      let newPrice = prod.price;
      if (bulkPriceChangeType === 'percent') {
        newPrice = Math.round(prod.price * (1 + bulkPriceDelta / 100));
      } else {
        newPrice = Math.max(1000, prod.price + bulkPriceDelta);
      }
      return { productId: id, price: newPrice };
    });

    await updateBulkPrices(updates);
    setIsBulkPriceModalOpen(false);
    setSelectedProductIds([]);
  };

  const handleBulkMarkOutOfStock = async () => {
    const updates = selectedProductIds.map((id) => ({ productId: id, stock: 0 }));
    await updateBulkStock(updates);
    setSelectedProductIds([]);
  };

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <Skeleton height={60} />
        <Skeleton height={400} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            Products & Inventory
          </h1>
          <p className="text-[14px] text-[var(--d-text-secondary)] mt-0.5">
            Manage your catalog, stock levels, AI-assisted listings, and pricing.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/seller/add-product-step-1-photos-seller')}
            className="touch-target px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            <Icon name="add" className="text-lg" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* Low-Stock Warning Section */}
      {lowStockProducts.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm">
              <Icon name="warning" className="text-lg text-amber-400" />
              <span>Low-Stock Alert ({lowStockProducts.length} items below 5 units)</span>
            </div>
            <span className="text-xs font-semibold">Immediate restock recommended</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {lowStockProducts.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--d-surface)] text-xs text-[var(--d-text-primary)] border border-amber-500/30"
              >
                <span>{p.title}</span>
                <strong className="text-amber-400">({p.stock} left)</strong>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Filters & Actions Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-[var(--d-border)] pb-4">
        {/* Status filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {[
            { key: 'ALL', label: 'All Products' },
            { key: PRODUCT_STATUS.APPROVED, label: 'Approved' },
            { key: PRODUCT_STATUS.UNDER_REVIEW, label: 'Under Review' },
            { key: PRODUCT_STATUS.DRAFT, label: 'Draft' },
            { key: PRODUCT_STATUS.REJECTED, label: 'Rejected' },
          ].map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => setStatusFilter(chip.key)}
              className={`touch-target px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                statusFilter === chip.key
                  ? 'bg-[#FF8A1F] text-white'
                  : 'text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)]'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Search & Bulk tools */}
        <div className="flex items-center gap-3">
          <div className="relative min-w-[220px]">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-[var(--d-text-secondary)] pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, SKU..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-[var(--d-text-primary)] text-xs focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsBulkPriceModalOpen(true)}
            className="touch-target px-3 py-2 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] border border-[var(--d-border)] text-xs font-bold text-[var(--d-text-primary)] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Icon name="payments" className="text-sm" />
            <span>Bulk Price</span>
          </button>

          {selectedProductIds.length > 0 && (
            <button
              type="button"
              onClick={handleBulkMarkOutOfStock}
              className="touch-target px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <Icon name="block" className="text-sm" />
              <span>Mark Out of Stock ({selectedProductIds.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[var(--d-border)] bg-[var(--d-surface-container-low)] text-[var(--d-text-secondary)] uppercase tracking-wider font-bold">
                <th className="p-4 w-12 text-center">
                  <input
                    type="checkbox"
                    checked={
                      filteredProducts.length > 0 &&
                      selectedProductIds.length === filteredProducts.length
                    }
                    onChange={handleToggleSelectAll}
                    className="accent-[#FF8A1F]"
                    aria-label="Select all products"
                  />
                </th>
                <th className="p-4">Product</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price (UGX)</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Category</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--d-border)]">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-[var(--d-text-secondary)]">
                    No products found matching the criteria.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((prod) => {
                  const isSelected = selectedProductIds.includes(prod.id);
                  return (
                    <tr
                      key={prod.id}
                      className={`hover:bg-[var(--d-surface-container)] transition-colors ${
                        isSelected ? 'bg-[var(--d-surface-container)]' : ''
                      }`}
                    >
                      <td className="p-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleSelectOne(prod.id)}
                          className="accent-[#FF8A1F]"
                          aria-label={`Select ${prod.title}`}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800 shrink-0 border border-[var(--d-border)]">
                            <SafeImage
                              src={prod.images[0] || '/placeholders/product-audio.svg'}
                              alt={prod.title}
                              aspectRatio="aspect-square"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-[14px] text-[var(--d-text-primary)]">
                              {prod.title}
                            </p>
                            <p className="text-[11px] text-[var(--d-text-secondary)]">
                              SKU: {prod.sku || 'N/A'} • {prod.variants.length} variant(s)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <StatusChip status={prod.status} />
                      </td>
                      <td className="p-4 font-bold text-[var(--d-text-primary)] text-sm">
                        UGX {prod.price.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-bold ${
                              prod.stock < 5 ? 'text-amber-400' : 'text-[var(--d-text-primary)]'
                            }`}
                          >
                            {prod.stock} units
                          </span>
                          {prod.stock < 5 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                              Low
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-[var(--d-text-secondary)]">{prod.categoryName}</td>
                      <td className="p-4 text-right">
                        <button
                          type="button"
                          onClick={() => onNavigate('/seller/edit-existing-product-seller')}
                          className="touch-target px-3 py-1.5 rounded-lg bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-[var(--d-text-primary)] border border-[var(--d-border)] font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                        >
                          <Icon name="edit" className="text-xs" />
                          <span>Edit</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bulk Price Update Modal */}
      <SheetDialog
        isOpen={isBulkPriceModalOpen}
        onClose={() => setIsBulkPriceModalOpen(false)}
        title="Bulk Price Update"
      >
        <div className="space-y-5">
          <p className="text-xs text-[var(--d-text-secondary)]">
            Adjust prices for{' '}
            <strong>{selectedProductIds.length > 0 ? `${selectedProductIds.length} selected products` : 'ALL catalog products'}</strong>:
          </p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-xs text-[var(--d-text-primary)] cursor-pointer">
              <input
                type="radio"
                name="bulkPriceType"
                checked={bulkPriceChangeType === 'percent'}
                onChange={() => setBulkPriceChangeType('percent')}
                className="accent-[#FF8A1F]"
              />
              <span>Percentage Change (%)</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-[var(--d-text-primary)] cursor-pointer">
              <input
                type="radio"
                name="bulkPriceType"
                checked={bulkPriceChangeType === 'fixed'}
                onChange={() => setBulkPriceChangeType('fixed')}
                className="accent-[#FF8A1F]"
              />
              <span>Fixed Amount (UGX)</span>
            </label>
          </div>

          <div>
            <label htmlFor="bulk-price-delta" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
              Adjustment Value {bulkPriceChangeType === 'percent' ? '(e.g. +10% or -5%)' : '(UGX)'}
            </label>
            <input
              id="bulk-price-delta"
              type="number"
              value={bulkPriceDelta}
              onChange={(e) => setBulkPriceDelta(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-[var(--d-text-primary)] text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsBulkPriceModalOpen(false)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApplyBulkPrice}
              className="touch-target px-5 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Apply Price Update
            </button>
          </div>
        </div>
      </SheetDialog>
    </div>
  );
};

export default SellerProductsPage;
