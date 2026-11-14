import React from 'react';
import Mobile from './Mobile';

export interface ProfileSupportSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProfileSupportSwiftcartRider: React.FC<ProfileSupportSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default ProfileSupportSwiftcartRider;
