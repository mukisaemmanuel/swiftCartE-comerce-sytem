import React from 'react';
import Mobile from './Mobile';

export interface MessagesNotificationsSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MessagesNotificationsSwiftcartUganda: React.FC<MessagesNotificationsSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default MessagesNotificationsSwiftcartUganda;
