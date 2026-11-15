import React from 'react';
import Desktop from './Desktop';

export interface HubReturnsRtoBaySwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubReturnsRtoBaySwiftcartDesktopDark: React.FC<HubReturnsRtoBaySwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubReturnsRtoBaySwiftcartDesktopDark;
