import React from 'react';

export interface PriceUGXProps {
  amount: number;
  className?: string;
  originalAmount?: number;
  showCurrency?: boolean;
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
}) => {
  const formatted = formatUGX(amount);

  return (
    <span className={`inline-flex items-baseline gap-1.5 font-bold tracking-tight ${className}`}>
      {showCurrency && (
        <span className="text-[14px] font-semibold text-[#FF8A1F] uppercase select-none">
          UGX
        </span>
      )}
      <span className="text-[18px] font-bold text-[#0E1B4D]">{formatted}</span>
      {originalAmount !== undefined && originalAmount > amount && (
        <span className="text-[14px] font-normal text-slate-400 line-through ml-1 select-none">
          UGX {formatUGX(originalAmount)}
        </span>
      )}
    </span>
  );
};

export default PriceUGX;

