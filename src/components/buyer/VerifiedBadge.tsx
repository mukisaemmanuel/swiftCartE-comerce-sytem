import React from 'react';
import { Icon } from '../shared/Icon';

export interface VerifiedBadgeProps {
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  label = 'Verified',
  size = 'md',
  className = '',
}) => {
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 select-none ${
        isSm ? 'px-2 py-0.5 text-[12px]' : 'px-2.5 py-1 text-[14px]'
      } ${className}`}
      title="Verified Business"
    >
      <Icon name="verified" className={`text-emerald-600 ${
          isSm ? 'text-[14px]' : 'text-[16px]'
        }`} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
};

export default VerifiedBadge;

