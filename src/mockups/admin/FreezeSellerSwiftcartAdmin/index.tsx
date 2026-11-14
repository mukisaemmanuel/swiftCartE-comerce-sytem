import React from 'react';
import Mobile from './Mobile';

export interface FreezeSellerSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FreezeSellerSwiftcartAdmin: React.FC<FreezeSellerSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default FreezeSellerSwiftcartAdmin;
