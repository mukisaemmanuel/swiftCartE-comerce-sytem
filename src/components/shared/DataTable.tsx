import React, { useState } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  searchPlaceholder?: string;
  searchFilter?: (item: T, query: string) => boolean;
  filterOptions?: {
    label: string;
    value: string;
    predicate: (item: T) => boolean;
  }[];
  emptyMessage?: string;
  className?: string;
  isLoading?: boolean;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  searchPlaceholder = 'Filter records...',
  searchFilter,
  filterOptions,
  emptyMessage = 'No records found matching criteria',
  className = '',
  isLoading = false,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Filter Data
  let filtered = data;
  if (searchQuery.trim() && searchFilter) {
    filtered = filtered.filter((item) => searchFilter(item, searchQuery.trim()));
  }
  if (selectedFilter !== 'all' && filterOptions) {
    const activeOption = filterOptions.find((o) => o.value === selectedFilter);
    if (activeOption) {
      filtered = filtered.filter(activeOption.predicate);
    }
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div
      className={`flex flex-col bg-[var(--d-surface)] rounded-2xl border border-[var(--d-border)] overflow-hidden shadow-sm ${className}`}
    >
      {/* Table Control Header (Search & Filters) */}
      {(searchFilter || (filterOptions && filterOptions.length > 0)) && (
        <div className="p-4 border-b border-[var(--d-border)] flex flex-wrap items-center justify-between gap-3">
          {searchFilter && (
            <div className="relative flex-1 min-w-[220px] max-w-md">
              <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[var(--d-text-muted)] pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                placeholder={searchPlaceholder}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--d-surface-container)] border border-[var(--d-border)] text-[var(--d-text-primary)] placeholder-[var(--d-text-muted)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--d-text-muted)] hover:text-[var(--d-text-primary)]"
                  aria-label="Clear search"
                >
                  <span className="material-symbols-rounded text-[18px]">close</span>
                </button>
              )}
            </div>
          )}

          {filterOptions && filterOptions.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => {
                  setSelectedFilter('all');
                  setPage(1);
                }}
                className={`touch-target px-3 py-1.5 rounded-lg text-[14px] font-semibold transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-[#FF8A1F] text-white'
                    : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
                }`}
              >
                All
              </button>
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(opt.value);
                    setPage(1);
                  }}
                  className={`touch-target px-3 py-1.5 rounded-lg text-[14px] font-semibold transition-colors ${
                    selectedFilter === opt.value
                      ? 'bg-[#FF8A1F] text-white'
                      : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Table Container with Sticky Header */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse text-[14px]">
          <thead className="sticky top-0 z-10 bg-[var(--d-surface-container-high)] text-[var(--d-text-secondary)] uppercase text-[12px] font-bold tracking-wider border-b border-[var(--d-border)]">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3.5 whitespace-nowrap ${
                    col.align === 'right'
                      ? 'text-right'
                      : col.align === 'center'
                      ? 'text-center'
                      : 'text-left'
                  } ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--d-border)] text-[var(--d-text-primary)]">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-[var(--d-text-muted)]">
                  <div className="flex items-center justify-center gap-2">
                    <span className="material-symbols-rounded animate-spin text-[24px]">
                      progress_activity
                    </span>
                    <span>Loading data...</span>
                  </div>
                </td>
              </tr>
            ) : currentData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-[var(--d-text-muted)]">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="material-symbols-rounded text-[36px] text-slate-500">
                      inbox
                    </span>
                    <span>{emptyMessage}</span>
                  </div>
                </td>
              </tr>
            ) : (
              currentData.map((row, index) => (
                <tr
                  key={keyExtractor(row, index)}
                  className="hover:bg-[var(--d-surface-container)] transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-3.5 whitespace-nowrap ${
                        col.align === 'right'
                          ? 'text-right'
                          : col.align === 'center'
                          ? 'text-center'
                          : 'text-left'
                      } ${col.className || ''}`}
                    >
                      {col.render ? col.render(row, index) : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="p-3 border-t border-[var(--d-border)] flex items-center justify-between text-[14px] text-[var(--d-text-secondary)]">
          <span>
            Showing {(page - 1) * pageSize + 1} to{' '}
            {Math.min(page * pageSize, filtered.length)} of {filtered.length} entries
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="touch-target px-3 py-1.5 rounded-lg border border-[var(--d-border)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--d-surface-container)] transition-colors"
              aria-label="Previous Page"
            >
              <span className="material-symbols-rounded text-[18px]">chevron_left</span>
            </button>
            <span className="px-3 py-1 font-bold text-[var(--d-text-primary)]">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="touch-target px-3 py-1.5 rounded-lg border border-[var(--d-border)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--d-surface-container)] transition-colors"
              aria-label="Next Page"
            >
              <span className="material-symbols-rounded text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;

