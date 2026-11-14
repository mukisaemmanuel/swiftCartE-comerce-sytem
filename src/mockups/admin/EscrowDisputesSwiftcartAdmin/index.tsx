import React from 'react';
import Mobile from './Mobile';

export interface EscrowDisputesSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EscrowDisputesSwiftcartAdmin: React.FC<EscrowDisputesSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default EscrowDisputesSwiftcartAdmin;
