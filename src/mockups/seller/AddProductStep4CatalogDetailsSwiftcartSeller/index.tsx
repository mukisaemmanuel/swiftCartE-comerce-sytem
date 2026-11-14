import React from 'react';
import Mobile from './Mobile';

export interface AddProductStep4CatalogDetailsSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep4CatalogDetailsSwiftcartSeller: React.FC<AddProductStep4CatalogDetailsSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AddProductStep4CatalogDetailsSwiftcartSeller;
