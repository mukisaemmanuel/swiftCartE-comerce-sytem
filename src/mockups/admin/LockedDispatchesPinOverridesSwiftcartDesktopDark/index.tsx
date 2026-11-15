import React from 'react';
import Desktop from './Desktop';

export interface LockedDispatchesPinOverridesSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesPinOverridesSwiftcartDesktopDark: React.FC<LockedDispatchesPinOverridesSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default LockedDispatchesPinOverridesSwiftcartDesktopDark;
