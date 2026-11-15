import React from 'react';
import Desktop from './Desktop';

export interface HubLineHaulTransitManifestSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubLineHaulTransitManifestSwiftcartDesktopDark: React.FC<HubLineHaulTransitManifestSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubLineHaulTransitManifestSwiftcartDesktopDark;
