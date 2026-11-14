import React from 'react';
import Mobile from './Mobile';

export interface AddProductStep3AiDescriptionSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep3AiDescriptionSwiftcartSeller: React.FC<AddProductStep3AiDescriptionSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AddProductStep3AiDescriptionSwiftcartSeller;
