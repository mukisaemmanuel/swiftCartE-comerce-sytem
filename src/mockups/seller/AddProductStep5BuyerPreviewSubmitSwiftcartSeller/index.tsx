import React from 'react';
import Mobile from './Mobile';

export interface AddProductStep5BuyerPreviewSubmitSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep5BuyerPreviewSubmitSwiftcartSeller: React.FC<AddProductStep5BuyerPreviewSubmitSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AddProductStep5BuyerPreviewSubmitSwiftcartSeller;
