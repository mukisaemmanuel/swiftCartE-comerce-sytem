import React from 'react';
import Tablet from './Tablet';

export interface HubStorageAgingMatrixTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixTabletDark: React.FC<HubStorageAgingMatrixTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubStorageAgingMatrixTabletDark;
