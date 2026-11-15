import React from 'react';
import Desktop from './Desktop';

export interface DeliveryAddressesHubsSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DeliveryAddressesHubsSwiftcartDesktop: React.FC<DeliveryAddressesHubsSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default DeliveryAddressesHubsSwiftcartDesktop;
