import React from 'react';
import Mobile from './Mobile';

export interface SubmitDisputePhotosSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SubmitDisputePhotosSwiftcart: React.FC<SubmitDisputePhotosSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default SubmitDisputePhotosSwiftcart;
