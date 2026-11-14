import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgent: React.FC<OverviewSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartHubAgent;
