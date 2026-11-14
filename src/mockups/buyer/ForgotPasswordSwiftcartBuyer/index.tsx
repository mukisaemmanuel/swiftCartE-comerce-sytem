import React from 'react';
import Mobile from './Mobile';

export interface ForgotPasswordSwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ForgotPasswordSwiftcartBuyer: React.FC<ForgotPasswordSwiftcartBuyerProps> = (props) => {
  return <Mobile {...props} />;
};

export default ForgotPasswordSwiftcartBuyer;
