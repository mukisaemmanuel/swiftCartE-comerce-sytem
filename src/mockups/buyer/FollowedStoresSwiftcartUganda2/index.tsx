import React from 'react';
import Mobile from './Mobile';

export interface FollowedStoresSwiftcartUganda2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FollowedStoresSwiftcartUganda2: React.FC<FollowedStoresSwiftcartUganda2Props> = (props) => {
  return <Mobile {...props} />;
};

export default FollowedStoresSwiftcartUganda2;
