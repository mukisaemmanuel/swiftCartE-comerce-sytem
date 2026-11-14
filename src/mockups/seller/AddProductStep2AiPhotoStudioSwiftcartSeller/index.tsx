import React from 'react';
import Mobile from './Mobile';

export interface AddProductStep2AiPhotoStudioSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep2AiPhotoStudioSwiftcartSeller: React.FC<AddProductStep2AiPhotoStudioSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AddProductStep2AiPhotoStudioSwiftcartSeller;
