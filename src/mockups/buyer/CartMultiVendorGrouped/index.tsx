import React from 'react';
import Mobile from './Mobile';

export interface CartMultiVendorGroupedProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CartMultiVendorGrouped: React.FC<CartMultiVendorGroupedProps> = (props) => {
  return <Mobile {...props} />;
};

export default CartMultiVendorGrouped;
