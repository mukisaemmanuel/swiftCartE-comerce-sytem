// Auto-generated responsive container for SellerDiscountsFlashSalesPromotionBuilder1
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface SellerDiscountsFlashSalesPromotionBuilder1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDiscountsFlashSalesPromotionBuilder1: React.FC<SellerDiscountsFlashSalesPromotionBuilder1Props> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default SellerDiscountsFlashSalesPromotionBuilder1;
