// Auto-generated responsive container for AssignRiderBottomSheetModalSeller
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface AssignRiderBottomSheetModalSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AssignRiderBottomSheetModalSeller: React.FC<AssignRiderBottomSheetModalSellerProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default AssignRiderBottomSheetModalSeller;
