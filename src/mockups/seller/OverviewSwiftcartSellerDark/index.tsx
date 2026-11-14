import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartSellerDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSellerDark: React.FC<OverviewSwiftcartSellerDarkProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartSellerDark;
