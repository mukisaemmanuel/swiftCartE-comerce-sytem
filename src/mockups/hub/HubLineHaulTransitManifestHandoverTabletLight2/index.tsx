import React from 'react';
import Tablet from './Tablet';

export interface HubLineHaulTransitManifestHandoverTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubLineHaulTransitManifestHandoverTabletLight2: React.FC<HubLineHaulTransitManifestHandoverTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubLineHaulTransitManifestHandoverTabletLight2;
