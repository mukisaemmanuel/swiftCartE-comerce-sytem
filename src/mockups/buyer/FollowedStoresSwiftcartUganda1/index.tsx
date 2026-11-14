import React from 'react';
import Mobile from './Mobile';

export interface FollowedStoresSwiftcartUganda1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FollowedStoresSwiftcartUganda1: React.FC<FollowedStoresSwiftcartUganda1Props> = (props) => {
  return <Mobile {...props} />;
};

export default FollowedStoresSwiftcartUganda1;
