import React from 'react';
import Desktop from './Desktop';

export interface HubLineHaulTransitManifestSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubLineHaulTransitManifestSwiftcartDesktopLight: React.FC<HubLineHaulTransitManifestSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubLineHaulTransitManifestSwiftcartDesktopLight;
