import React from 'react';
import Mobile from './Mobile';

export interface ProductsSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductsSwiftcartSeller: React.FC<ProductsSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default ProductsSwiftcartSeller;
