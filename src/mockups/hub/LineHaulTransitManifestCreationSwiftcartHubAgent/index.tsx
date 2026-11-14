import React from 'react';
import Mobile from './Mobile';

export interface LineHaulTransitManifestCreationSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LineHaulTransitManifestCreationSwiftcartHubAgent: React.FC<LineHaulTransitManifestCreationSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default LineHaulTransitManifestCreationSwiftcartHubAgent;
