import React from 'react';
import Desktop from './Desktop';

export interface SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLight: React.FC<SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLight;
