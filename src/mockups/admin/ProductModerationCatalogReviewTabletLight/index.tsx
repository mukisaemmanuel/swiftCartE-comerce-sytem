import React from 'react';
import Tablet from './Tablet';

export interface ProductModerationCatalogReviewTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationCatalogReviewTabletLight: React.FC<ProductModerationCatalogReviewTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default ProductModerationCatalogReviewTabletLight;
