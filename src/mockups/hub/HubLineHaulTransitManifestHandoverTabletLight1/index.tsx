import React from 'react';
import Tablet from './Tablet';

export interface HubLineHaulTransitManifestHandoverTabletLight1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubLineHaulTransitManifestHandoverTabletLight1: React.FC<HubLineHaulTransitManifestHandoverTabletLight1Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubLineHaulTransitManifestHandoverTabletLight1;
