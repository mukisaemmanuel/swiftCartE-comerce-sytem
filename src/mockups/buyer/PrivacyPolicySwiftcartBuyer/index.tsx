import React from 'react';
import Mobile from './Mobile';

export interface PrivacyPolicySwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PrivacyPolicySwiftcartBuyer: React.FC<PrivacyPolicySwiftcartBuyerProps> = (props) => {
  return <Mobile {...props} />;
};

export default PrivacyPolicySwiftcartBuyer;
