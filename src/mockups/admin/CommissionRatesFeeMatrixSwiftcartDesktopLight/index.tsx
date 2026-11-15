import React from 'react';
import Desktop from './Desktop';

export interface CommissionRatesFeeMatrixSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CommissionRatesFeeMatrixSwiftcartDesktopLight: React.FC<CommissionRatesFeeMatrixSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default CommissionRatesFeeMatrixSwiftcartDesktopLight;
