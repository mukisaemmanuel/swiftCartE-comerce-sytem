import React from 'react';
import Mobile from './Mobile';

export interface HubStorageAgingMatrixSwiftcartHubLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartHubLight: React.FC<HubStorageAgingMatrixSwiftcartHubLightProps> = (props) => {
  return <Mobile {...props} />;
};

export default HubStorageAgingMatrixSwiftcartHubLight;
