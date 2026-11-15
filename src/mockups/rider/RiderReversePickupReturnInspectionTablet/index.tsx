import React from 'react';
import Tablet from './Tablet';

export interface RiderReversePickupReturnInspectionTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderReversePickupReturnInspectionTablet: React.FC<RiderReversePickupReturnInspectionTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderReversePickupReturnInspectionTablet;
