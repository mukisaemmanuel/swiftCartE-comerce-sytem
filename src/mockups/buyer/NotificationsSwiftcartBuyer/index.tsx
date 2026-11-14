import React from 'react';
import Mobile from './Mobile';

export interface NotificationsSwiftcartBuyerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const NotificationsSwiftcartBuyer: React.FC<NotificationsSwiftcartBuyerProps> = (props) => {
  return <Mobile {...props} />;
};

export default NotificationsSwiftcartBuyer;
