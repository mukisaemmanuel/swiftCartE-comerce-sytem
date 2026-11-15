import React from 'react';
import Desktop from './Desktop';

export interface OrdersOversightMasterDetailSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrdersOversightMasterDetailSwiftcartDesktopDark: React.FC<OrdersOversightMasterDetailSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default OrdersOversightMasterDetailSwiftcartDesktopDark;
