import React from 'react';
import Tablet from './Tablet';

export interface LockedDispatchesPinOverridesTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesPinOverridesTabletLight: React.FC<LockedDispatchesPinOverridesTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default LockedDispatchesPinOverridesTabletLight;
