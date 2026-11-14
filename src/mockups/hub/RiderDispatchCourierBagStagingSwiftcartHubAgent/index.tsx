import React from 'react';
import Mobile from './Mobile';

export interface RiderDispatchCourierBagStagingSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderDispatchCourierBagStagingSwiftcartHubAgent: React.FC<RiderDispatchCourierBagStagingSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderDispatchCourierBagStagingSwiftcartHubAgent;
