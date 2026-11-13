import React from 'react';
import { Icon } from './Icon';

export type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface StatusChipProps {
  label?: string;
  status?: string;
  variant?: StatusVariant;
  icon?: string;
  className?: string;
  size?: 'sm' | 'md';
}

function deriveVariantFromStatus(status: string): StatusVariant {
  const s = status.toUpperCase();
  if (['DELIVERED', 'APPROVED', 'ACTIVE', 'PAID', 'SUCCESSFUL', 'RELEASED', 'RECEIVED_RESALEABLE'].includes(s)) {
    return 'success';
  }
  if (['PENDING', 'PROCESSING', 'UNDER_REVIEW', 'DRAFT', 'READY_FOR_PICKUP', 'REQUESTED'].includes(s)) {
    return 'warning';
  }
  if (['CANCELLED', 'REJECTED', 'FAILED', 'BANNED', 'SUSPENDED', 'RECEIVED_DAMAGED', 'DISPUTED'].includes(s)) {
    return 'danger';
  }
  if (['SHIPPED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'ASSIGNED', 'OPEN'].includes(s)) {
    return 'info';
  }
  return 'neutral';
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
  status,
  variant,
  icon,
  className = '',
  size = 'md',
}) => {
  const displayLabel = label || (status ? status.replace(/_/g, ' ') : '');
  const displayVariant = variant || (status ? deriveVariantFromStatus(status) : 'neutral');
  const styles = variantStyles[displayVariant];
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
        <Icon name={icon} className="text-[16px]" aria-hidden="true" />
      ) : (
        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} aria-hidden="true" />
      )}
      <span>{displayLabel}</span>
    </span>
  );
};

export default StatusChip;

