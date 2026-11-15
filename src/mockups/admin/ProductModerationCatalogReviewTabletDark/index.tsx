import React from 'react';
import Tablet from './Tablet';

export interface ProductModerationCatalogReviewTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationCatalogReviewTabletDark: React.FC<ProductModerationCatalogReviewTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default ProductModerationCatalogReviewTabletDark;
