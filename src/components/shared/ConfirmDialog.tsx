import React, { useState } from 'react';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  actionLabel?: string;
  isDangerous?: boolean;
  requiresReason?: boolean;
  reasonPlaceholder?: string;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  actionLabel = 'Confirm Action',
  isDangerous = true,
  requiresReason = true,
  reasonPlaceholder = 'Please type a clear reason for this action (required)...',
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const canSubmit = !requiresReason || reason.trim().length >= 4;

  const handleConfirm = () => {
    if (canSubmit && !isLoading) {
      onConfirm(reason.trim());
      setReason('');
    }
  };

  const handleCancel = () => {
    setReason('');
    onCancel();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-desc"
    >
      <div className="w-full max-w-lg bg-[var(--d-surface)] text-[var(--d-text-primary)] rounded-2xl border border-[var(--d-border)] p-6 shadow-2xl flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-2xl flex items-center justify-center shrink-0 ${
              isDangerous
                ? 'bg-rose-500/10 text-rose-500'
                : 'bg-amber-500/10 text-amber-500'
            }`}
          >
            <span className="material-symbols-rounded text-[28px]" aria-hidden="true">
              {isDangerous ? 'warning' : 'info'}
            </span>
          </div>

          <div className="flex flex-col gap-1.5 flex-1">
            <h3
              id="confirm-dialog-title"
              className="text-[18px] font-bold text-[var(--d-text-primary)]"
            >
              {title}
            </h3>
            <p
              id="confirm-dialog-desc"
              className="text-[14px] text-[var(--d-text-secondary)] leading-relaxed"
            >
              {message}
            </p>
          </div>
        </div>

        {/* Typed Reason Input */}
        {requiresReason && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="action-reason"
              className="text-[14px] font-semibold text-[var(--d-text-primary)]"
            >
              Audit Reason <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="action-reason"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={reasonPlaceholder}
              className="w-full p-3 rounded-xl bg-[var(--d-surface-container)] border border-[var(--d-border)] text-[var(--d-text-primary)] placeholder-[var(--d-text-muted)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F] resize-none"
              required
            />
            {reason.trim().length > 0 && reason.trim().length < 4 && (
              <span className="text-[12px] text-rose-400">
                Reason must be at least 4 characters long.
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleCancel}
            disabled={isLoading}
            className="touch-target px-4 py-2.5 rounded-xl border border-[var(--d-border)] text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)] hover:bg-[var(--d-surface-container)] text-[14px] font-semibold transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!canSubmit || isLoading}
            className={`touch-target px-5 py-2.5 rounded-xl font-bold text-[14px] text-white shadow-md transition-all flex items-center gap-2 ${
              isDangerous
                ? 'bg-rose-600 hover:bg-rose-700 disabled:bg-rose-900/50'
                : 'bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-90 disabled:opacity-50'
            } disabled:cursor-not-allowed`}
          >
            {isLoading && (
              <span className="material-symbols-rounded animate-spin text-[18px]">
                progress_activity
              </span>
            )}
            <span>{actionLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;

