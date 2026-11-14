import React from 'react';
import Mobile from './Mobile';

export interface RidersCouriersSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersCouriersSwiftcartAdmin: React.FC<RidersCouriersSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default RidersCouriersSwiftcartAdmin;
