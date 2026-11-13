// Auto-generated responsive container for SellerDiscountsFlashSalesPromotionBuilder
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface SellerDiscountsFlashSalesPromotionBuilderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDiscountsFlashSalesPromotionBuilder: React.FC<SellerDiscountsFlashSalesPromotionBuilderProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default SellerDiscountsFlashSalesPromotionBuilder;
