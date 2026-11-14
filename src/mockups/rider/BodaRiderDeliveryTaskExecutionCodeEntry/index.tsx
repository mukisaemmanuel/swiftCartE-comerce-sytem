import React from 'react';
import Mobile from './Mobile';

export interface BodaRiderDeliveryTaskExecutionCodeEntryProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const BodaRiderDeliveryTaskExecutionCodeEntry: React.FC<BodaRiderDeliveryTaskExecutionCodeEntryProps> = (props) => {
  return <Mobile {...props} />;
};

export default BodaRiderDeliveryTaskExecutionCodeEntry;
