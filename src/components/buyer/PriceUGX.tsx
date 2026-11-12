import React from 'react';

export interface PriceUGXProps {
  amount: number;
  className?: string;
  originalAmount?: number;
  showCurrency?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const formatUGX = (amount: number): string => {
  const rounded = Math.round(amount);
  return rounded.toLocaleString('en-UG');
};

export const PriceUGX: React.FC<PriceUGXProps> = ({
  amount,
  className = '',
  originalAmount,
  showCurrency = true,
  size = 'md',
}) => {
  const formatted = formatUGX(amount);

  const sizeClasses = {
    sm: 'text-[14px]',
    md: 'text-[18px]',
    lg: 'text-[22px]',
    xl: 'text-[28px]',
  };

  const currencySizeClasses = {
    sm: 'text-[11px]',
    md: 'text-[13px]',
    lg: 'text-[15px]',
    xl: 'text-[17px]',
  };

  return (
    <span className={`inline-flex items-baseline gap-1 font-bold tracking-tight ${className}`}>
      {showCurrency && (
        <span
          className={`${currencySizeClasses[size]} font-bold text-[#FF8A1F] uppercase select-none`}
        >
          UGX
        </span>
      )}
      <span className={`${sizeClasses[size]} font-extrabold text-[#0E1B4D]`}>
        {formatted}
      </span>
      {originalAmount !== undefined && originalAmount > amount && (
        <span className="text-[12px] font-normal text-slate-400 line-through ml-1 select-none">
          UGX {formatUGX(originalAmount)}
        </span>
      )}
    </span>
  );
};

export default PriceUGX;
