import React from 'react';
import Tablet from './Tablet';

export interface SellerAddProductWithAiStudioTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAddProductWithAiStudioTabletDark: React.FC<SellerAddProductWithAiStudioTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerAddProductWithAiStudioTabletDark;
