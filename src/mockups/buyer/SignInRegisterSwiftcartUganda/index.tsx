import React from 'react';
import Mobile from './Mobile';

export interface SignInRegisterSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SignInRegisterSwiftcartUganda: React.FC<SignInRegisterSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default SignInRegisterSwiftcartUganda;
