import React from 'react';
import Mobile from './Mobile';

export interface MoreSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MoreSwiftcartHubAgent: React.FC<MoreSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default MoreSwiftcartHubAgent;
