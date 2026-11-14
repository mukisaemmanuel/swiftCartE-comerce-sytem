import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartHubAgentDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgentDark: React.FC<OverviewSwiftcartHubAgentDarkProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartHubAgentDark;
