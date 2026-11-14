import React from 'react';
import Mobile from './Mobile';

export interface IntakeSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const IntakeSwiftcartHubAgent: React.FC<IntakeSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default IntakeSwiftcartHubAgent;
