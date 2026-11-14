import React from 'react';
import Mobile from './Mobile';

export interface AssignRiderBottomSheetModalSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AssignRiderBottomSheetModalSwiftcartSeller: React.FC<AssignRiderBottomSheetModalSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default AssignRiderBottomSheetModalSwiftcartSeller;
