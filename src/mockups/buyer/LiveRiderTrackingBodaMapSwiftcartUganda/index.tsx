import React from 'react';
import Mobile from './Mobile';

export interface LiveRiderTrackingBodaMapSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LiveRiderTrackingBodaMapSwiftcartUganda: React.FC<LiveRiderTrackingBodaMapSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default LiveRiderTrackingBodaMapSwiftcartUganda;
