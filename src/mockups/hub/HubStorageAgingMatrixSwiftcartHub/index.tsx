import React from 'react';
import Mobile from './Mobile';

export interface HubStorageAgingMatrixSwiftcartHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartHub: React.FC<HubStorageAgingMatrixSwiftcartHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default HubStorageAgingMatrixSwiftcartHub;
