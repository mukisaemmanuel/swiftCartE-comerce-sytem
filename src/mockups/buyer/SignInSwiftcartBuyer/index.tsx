import React from 'react';
import Mobile from './Mobile';

export interface SignInSwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SignInSwiftcartBuyer: React.FC<SignInSwiftcartBuyerProps> = (props) => {
  return <Mobile {...props} />;
};

export default SignInSwiftcartBuyer;
