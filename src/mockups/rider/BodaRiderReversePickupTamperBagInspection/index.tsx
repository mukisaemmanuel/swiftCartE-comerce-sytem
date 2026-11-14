import React from 'react';
import Mobile from './Mobile';

export interface BodaRiderReversePickupTamperBagInspectionProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const BodaRiderReversePickupTamperBagInspection: React.FC<BodaRiderReversePickupTamperBagInspectionProps> = (props) => {
  return <Mobile {...props} />;
};

export default BodaRiderReversePickupTamperBagInspection;
