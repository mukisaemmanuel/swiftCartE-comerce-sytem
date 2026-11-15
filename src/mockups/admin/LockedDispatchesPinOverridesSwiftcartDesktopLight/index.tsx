import React from 'react';
import Desktop from './Desktop';

export interface LockedDispatchesPinOverridesSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesPinOverridesSwiftcartDesktopLight: React.FC<LockedDispatchesPinOverridesSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default LockedDispatchesPinOverridesSwiftcartDesktopLight;
