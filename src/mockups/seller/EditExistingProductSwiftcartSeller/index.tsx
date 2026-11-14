import React from 'react';
import Mobile from './Mobile';

export interface EditExistingProductSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EditExistingProductSwiftcartSeller: React.FC<EditExistingProductSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default EditExistingProductSwiftcartSeller;
