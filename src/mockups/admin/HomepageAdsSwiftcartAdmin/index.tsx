import React from 'react';
import Mobile from './Mobile';

export interface HomepageAdsSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomepageAdsSwiftcartAdmin: React.FC<HomepageAdsSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default HomepageAdsSwiftcartAdmin;
