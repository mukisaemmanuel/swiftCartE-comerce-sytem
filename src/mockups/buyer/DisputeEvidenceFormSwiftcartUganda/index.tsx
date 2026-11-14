import React from 'react';
import Mobile from './Mobile';

export interface DisputeEvidenceFormSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DisputeEvidenceFormSwiftcartUganda: React.FC<DisputeEvidenceFormSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default DisputeEvidenceFormSwiftcartUganda;
