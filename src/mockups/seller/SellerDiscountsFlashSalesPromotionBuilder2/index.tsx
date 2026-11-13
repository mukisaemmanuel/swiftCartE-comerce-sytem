// Auto-generated responsive container for SellerDiscountsFlashSalesPromotionBuilder2
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface SellerDiscountsFlashSalesPromotionBuilder2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDiscountsFlashSalesPromotionBuilder2: React.FC<SellerDiscountsFlashSalesPromotionBuilder2Props> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default SellerDiscountsFlashSalesPromotionBuilder2;
