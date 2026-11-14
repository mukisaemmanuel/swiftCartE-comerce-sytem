import React from 'react';
import Mobile from './Mobile';

export interface VouchersDiscountsSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const VouchersDiscountsSwiftcartUganda: React.FC<VouchersDiscountsSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default VouchersDiscountsSwiftcartUganda;
