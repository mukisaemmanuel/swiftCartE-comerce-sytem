import React from 'react';
import Mobile from './Mobile';

export interface PickupSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PickupSwiftcartHubAgent: React.FC<PickupSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default PickupSwiftcartHubAgent;
