import React from 'react';
import Mobile from './Mobile';

export interface InviteCourierBottomSheetModalSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const InviteCourierBottomSheetModalSwiftcartSeller: React.FC<InviteCourierBottomSheetModalSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default InviteCourierBottomSheetModalSwiftcartSeller;
