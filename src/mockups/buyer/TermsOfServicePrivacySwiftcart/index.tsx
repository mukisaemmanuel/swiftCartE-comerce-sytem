import React from 'react';
import Mobile from './Mobile';

export interface TermsOfServicePrivacySwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const TermsOfServicePrivacySwiftcart: React.FC<TermsOfServicePrivacySwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default TermsOfServicePrivacySwiftcart;
