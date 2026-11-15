import React from 'react';
import Tablet from './Tablet';

export interface RiderOfflineModeCachedManifestTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderOfflineModeCachedManifestTabletDark: React.FC<RiderOfflineModeCachedManifestTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderOfflineModeCachedManifestTabletDark;
