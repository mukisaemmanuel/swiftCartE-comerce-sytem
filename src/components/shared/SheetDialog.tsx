import React, { useEffect } from 'react';
import { Icon } from './Icon';

export interface SheetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const SheetDialog: React.FC<SheetDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className = '',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end lg:items-center lg:justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'sheet-dialog-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Container:
          - Mobile: Bottom Sheet (full width, rounded top, max-h-85vh)
          - Tablet: Side Sheet (right side, max-w-md, full height)
          - Desktop: Center Dialog (rounded-2xl, max-w-lg)
      */}
      <div
        className={`relative z-10 w-full bg-[var(--d-surface)] text-[var(--d-text-primary)] border border-[var(--d-border)] shadow-2xl flex flex-col overflow-hidden transition-all
          /* Mobile Bottom Sheet */
          rounded-t-3xl max-h-[85vh]
          /* Tablet Side Sheet */
          md:rounded-none md:max-w-md md:h-full md:max-h-full md:border-l md:border-y-0 md:border-r-0
          /* Desktop Center Dialog */
          lg:rounded-2xl lg:h-auto lg:max-h-[90vh] lg:max-w-xl lg:border
          ${className}
        `}
      >
        {/* Mobile Pull Handle */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-slate-500/40" />
        </div>

        {/* Header */}
        <div className="p-5 pb-3 flex items-start justify-between gap-4 border-b border-[var(--d-border)]">
          <div className="flex flex-col gap-1">
            {title && (
              <h3 id="sheet-dialog-title" className="text-[18px] font-bold text-[var(--d-text-primary)]">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-[14px] text-[var(--d-text-secondary)]">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="touch-target p-2 rounded-xl hover:bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center -mr-2 -mt-2"
            aria-label="Close dialog"
          >
            <Icon name="close" className="text-[22px]" aria-hidden="true" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 flex-1 overflow-y-auto text-[14px]">
          {children}
        </div>

        {/* Optional Footer */}
        {footer && (
          <div className="p-4 bg-[var(--d-surface-container)] border-t border-[var(--d-border)] flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetDialog;

