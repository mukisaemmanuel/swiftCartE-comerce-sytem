import React from 'react';
import Mobile from './Mobile';

export interface CommissionRatesEarningsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CommissionRatesEarningsSwiftcartAdmin: React.FC<CommissionRatesEarningsSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default CommissionRatesEarningsSwiftcartAdmin;
