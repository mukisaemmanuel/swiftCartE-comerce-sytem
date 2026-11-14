import React from 'react';
import Mobile from './Mobile';

export interface AnalyticsSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AnalyticsSwiftcartSeller: React.FC<AnalyticsSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AnalyticsSwiftcartSeller;
