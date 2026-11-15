import React from 'react';
import Tablet from './Tablet';

export interface HubLineHaulTransitManifestHandoverTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubLineHaulTransitManifestHandoverTablet: React.FC<HubLineHaulTransitManifestHandoverTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubLineHaulTransitManifestHandoverTablet;
