import React from 'react';
import Mobile from './Mobile';

export interface AccountSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AccountSwiftcartUganda: React.FC<AccountSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default AccountSwiftcartUganda;
