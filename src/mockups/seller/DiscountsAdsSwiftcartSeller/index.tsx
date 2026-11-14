import React from 'react';
import Mobile from './Mobile';

export interface DiscountsAdsSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DiscountsAdsSwiftcartSeller: React.FC<DiscountsAdsSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default DiscountsAdsSwiftcartSeller;
