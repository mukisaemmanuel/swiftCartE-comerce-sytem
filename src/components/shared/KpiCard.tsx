import React from 'react';

export interface KpiCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    isPositive?: boolean;
    label?: string;
  };
  icon?: string;
  subtext?: string;
  className?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  icon,
  subtext,
  className = '',
}) => {
  return (
    <div
      className={`p-5 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] text-[var(--d-text-primary)] shadow-sm flex flex-col justify-between gap-3 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[14px] font-medium text-[var(--d-text-secondary)] line-clamp-1">
          {title}
        </span>
        {icon && (
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#FF8A1F] flex items-center justify-center">
            <span className="material-symbols-rounded text-[22px]" aria-hidden="true">
              {icon}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-[28px] font-extrabold tracking-tight text-[var(--d-text-primary)]">
          {value}
        </div>

        {(change || subtext) && (
          <div className="flex items-center gap-2 text-[14px] flex-wrap">
            {change && (
              <span
                className={`inline-flex items-center gap-0.5 font-bold px-1.5 py-0.5 rounded-md ${
                  change.isPositive
                    ? 'text-emerald-500 bg-emerald-500/10'
                    : 'text-rose-500 bg-rose-500/10'
                }`}
              >
                <span className="material-symbols-rounded text-[16px]">
                  {change.isPositive ? 'trending_up' : 'trending_down'}
                </span>
                {change.value}
              </span>
            )}
            <span className="text-[var(--d-text-muted)]">
              {change?.label || subtext}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;

