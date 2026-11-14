import React from 'react';
import Mobile from './Mobile';

export interface ProductDetailSoundcoreSpaceOne2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductDetailSoundcoreSpaceOne2: React.FC<ProductDetailSoundcoreSpaceOne2Props> = (props) => {
  return <Mobile {...props} />;
};

export default ProductDetailSoundcoreSpaceOne2;
