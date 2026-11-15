import React from 'react';
import Tablet from './Tablet';

export interface HubStorageAgingMatrixTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixTabletLight: React.FC<HubStorageAgingMatrixTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubStorageAgingMatrixTabletLight;
