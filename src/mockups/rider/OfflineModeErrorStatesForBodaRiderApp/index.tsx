import React from 'react';
import Mobile from './Mobile';

export interface OfflineModeErrorStatesForBodaRiderAppProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OfflineModeErrorStatesForBodaRiderApp: React.FC<OfflineModeErrorStatesForBodaRiderAppProps> = (props) => {
  return <Mobile {...props} />;
};

export default OfflineModeErrorStatesForBodaRiderApp;
