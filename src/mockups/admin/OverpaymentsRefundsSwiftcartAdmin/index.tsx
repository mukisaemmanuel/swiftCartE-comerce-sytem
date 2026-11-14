import React from 'react';
import Mobile from './Mobile';

export interface OverpaymentsRefundsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverpaymentsRefundsSwiftcartAdmin: React.FC<OverpaymentsRefundsSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverpaymentsRefundsSwiftcartAdmin;
