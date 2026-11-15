import React from 'react';
import Desktop from './Desktop';

export interface RidersFleetOperationsLiveDispatchSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersFleetOperationsLiveDispatchSwiftcartDesktopLight: React.FC<RidersFleetOperationsLiveDispatchSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default RidersFleetOperationsLiveDispatchSwiftcartDesktopLight;
