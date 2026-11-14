import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartHubAgentLightModeProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartHubAgentLightMode: React.FC<OverviewSwiftcartHubAgentLightModeProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartHubAgentLightMode;
