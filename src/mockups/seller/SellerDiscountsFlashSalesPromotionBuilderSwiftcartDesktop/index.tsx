import React from 'react';
import Desktop from './Desktop';

export interface SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktop: React.FC<SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktop;
