import React from 'react';
import Tablet from './Tablet';

export interface RiderOfflineModeCachedManifestTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderOfflineModeCachedManifestTabletLight: React.FC<RiderOfflineModeCachedManifestTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderOfflineModeCachedManifestTabletLight;
