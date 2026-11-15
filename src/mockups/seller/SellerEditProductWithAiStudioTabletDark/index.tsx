import React from 'react';
import Tablet from './Tablet';

export interface SellerEditProductWithAiStudioTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerEditProductWithAiStudioTabletDark: React.FC<SellerEditProductWithAiStudioTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerEditProductWithAiStudioTabletDark;
