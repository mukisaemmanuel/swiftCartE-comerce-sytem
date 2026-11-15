import React from 'react';
import Desktop from './Desktop';

export interface ProductModerationCatalogReviewSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationCatalogReviewSwiftcartDesktopDark: React.FC<ProductModerationCatalogReviewSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default ProductModerationCatalogReviewSwiftcartDesktopDark;
