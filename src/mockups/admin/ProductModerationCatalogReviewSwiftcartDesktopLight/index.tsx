import React from 'react';
import Desktop from './Desktop';

export interface ProductModerationCatalogReviewSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationCatalogReviewSwiftcartDesktopLight: React.FC<ProductModerationCatalogReviewSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default ProductModerationCatalogReviewSwiftcartDesktopLight;
