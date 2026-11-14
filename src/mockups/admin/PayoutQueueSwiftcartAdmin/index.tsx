import React from 'react';
import Mobile from './Mobile';

export interface PayoutQueueSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PayoutQueueSwiftcartAdmin: React.FC<PayoutQueueSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default PayoutQueueSwiftcartAdmin;
