import React from 'react';
import Desktop from './Desktop';

export interface RiderSimulatorOverviewFleetMapSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSimulatorOverviewFleetMapSwiftcartDesktop: React.FC<RiderSimulatorOverviewFleetMapSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default RiderSimulatorOverviewFleetMapSwiftcartDesktop;
