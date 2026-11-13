// Auto-generated responsive container for AddProductStep5BuyerPreviewSubmitSeller
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface AddProductStep5BuyerPreviewSubmitSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AddProductStep5BuyerPreviewSubmitSeller: React.FC<AddProductStep5BuyerPreviewSubmitSellerProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default AddProductStep5BuyerPreviewSubmitSeller;
