import React from 'react';
import { Icon } from './Icon';

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'inbox',
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-[#FF8A1F] flex items-center justify-center mb-4">
        <Icon name={icon} className="text-[36px]" aria-hidden="true" />
      </div>

      <h3 className="text-[18px] font-bold text-[var(--d-text-primary)] mb-2">
        {title}
      </h3>

      <p className="text-[14px] text-[var(--d-text-secondary)] leading-relaxed mb-6">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="touch-target px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 text-white font-bold text-[14px] shadow-sm transition-all"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;

