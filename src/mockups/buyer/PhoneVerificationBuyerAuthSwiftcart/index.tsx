import React from 'react';
import Mobile from './Mobile';

export interface PhoneVerificationBuyerAuthSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PhoneVerificationBuyerAuthSwiftcart: React.FC<PhoneVerificationBuyerAuthSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default PhoneVerificationBuyerAuthSwiftcart;
