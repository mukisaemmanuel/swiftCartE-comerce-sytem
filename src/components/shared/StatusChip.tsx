import React from 'react';

export type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface StatusChipProps {
  label: string;
  variant?: StatusVariant;
  icon?: string;
  className?: string;
  size?: 'sm' | 'md';
}

const variantStyles: Record<StatusVariant, { bg: string; text: string; border: string; dot: string }> = {
  success: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-500',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  warning: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-500',
    border: 'border-amber-500/20',
    dot: 'bg-amber-500',
  },
  danger: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-500',
    border: 'border-rose-500/20',
    dot: 'bg-rose-500',
  },
  info: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  },
  neutral: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/20',
    dot: 'bg-slate-400',
  },
};

export const StatusChip: React.FC<StatusChipProps> = ({
  label,
  variant = 'neutral',
  icon,
  className = '',
  size = 'md',
}) => {
  const styles = variantStyles[variant];
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full border select-none ${
        styles.bg
      } ${styles.text} ${styles.border} ${
        isSm ? 'px-2 py-0.5 text-[12px]' : 'px-3 py-1 text-[14px]'
      } ${className}`}
    >
      {icon ? (
        <span className="material-symbols-rounded text-[16px]" aria-hidden="true">
          {icon}
        </span>
      ) : (
        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} aria-hidden="true" />
      )}
      <span>{label}</span>
    </span>
  );
};

export default StatusChip;

