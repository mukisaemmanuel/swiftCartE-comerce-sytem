import React from 'react';
import Mobile from './Mobile';

export interface ProductModerationSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductModerationSwiftcartAdmin: React.FC<ProductModerationSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default ProductModerationSwiftcartAdmin;
