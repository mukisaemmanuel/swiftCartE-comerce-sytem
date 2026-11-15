import React from 'react';
import Tablet from './Tablet';

export interface LockedDispatchesPinOverridesTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesPinOverridesTabletDark: React.FC<LockedDispatchesPinOverridesTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default LockedDispatchesPinOverridesTabletDark;
