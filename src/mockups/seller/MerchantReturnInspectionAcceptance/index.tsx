import React from 'react';
import Mobile from './Mobile';

export interface MerchantReturnInspectionAcceptanceProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MerchantReturnInspectionAcceptance: React.FC<MerchantReturnInspectionAcceptanceProps> = (props) => {
  return <Mobile {...props} />;
};

export default MerchantReturnInspectionAcceptance;
