import React from 'react';
import Mobile from './Mobile';

export interface ScanSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ScanSwiftcartHubAgent: React.FC<ScanSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default ScanSwiftcartHubAgent;
