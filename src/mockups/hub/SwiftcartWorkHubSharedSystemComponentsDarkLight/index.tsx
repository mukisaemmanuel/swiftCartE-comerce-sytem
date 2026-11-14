import React from 'react';
import Mobile from './Mobile';

export interface SwiftcartWorkHubSharedSystemComponentsDarkLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SwiftcartWorkHubSharedSystemComponentsDarkLight: React.FC<SwiftcartWorkHubSharedSystemComponentsDarkLightProps> = (props) => {
  return <Mobile {...props} />;
};

export default SwiftcartWorkHubSharedSystemComponentsDarkLight;
