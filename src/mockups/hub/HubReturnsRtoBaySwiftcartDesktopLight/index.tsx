import React from 'react';
import Desktop from './Desktop';

export interface HubReturnsRtoBaySwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubReturnsRtoBaySwiftcartDesktopLight: React.FC<HubReturnsRtoBaySwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubReturnsRtoBaySwiftcartDesktopLight;
