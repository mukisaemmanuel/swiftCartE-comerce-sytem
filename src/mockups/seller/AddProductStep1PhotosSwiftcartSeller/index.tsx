import React from 'react';
import Mobile from './Mobile';

export interface AddProductStep1PhotosSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep1PhotosSwiftcartSeller: React.FC<AddProductStep1PhotosSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AddProductStep1PhotosSwiftcartSeller;
