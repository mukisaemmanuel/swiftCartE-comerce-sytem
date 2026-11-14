import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Rider Mockup Screens
import {
  BodaRiderDeliveryTaskExecutionCodeEntry,
  BodaRiderReversePickupTamperBagInspection,
  DeliveriesSwiftcartRider,
  EarningsSwiftcartRider,
  FailedDeliveryModalSwiftcartRider,
  OfflineModeErrorStatesForBodaRiderApp,
  OverviewSwiftcartRider,
  OverviewSwiftcartRiderDark,
  ProfileSupportSwiftcartRider,
  RiderCodeLockedSwiftcartSecurity,
  RiderMapSwiftcartRider,
  RiderReturnPickupSwiftcartRider,
  RiderSellerPickupDeliveryDetail,
} from '../mockups/rider';

export interface RiderViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const RiderView: React.FC<RiderViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/rider';
  const { theme } = useDashboardTheme();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[RiderAction]', action, payload);
  };

  const renderActiveScreen = () => {
    if (path === '/rider/boda-rider-delivery-task-execution-code-entry') return <BodaRiderDeliveryTaskExecutionCodeEntry onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/boda-rider-reverse-pickup-package-inspection') return <BodaRiderReversePickupTamperBagInspection onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/deliveries-rider') return <DeliveriesSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/earnings-rider') return <EarningsSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/failed-delivery-modal-rider') return <FailedDeliveryModalSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/offline-mode-error-states-for-boda-rider-app') return <OfflineModeErrorStatesForBodaRiderApp onNavigate={onNavigate} onAction={handleAction} />;
    const renderOverview = () =>
      theme === 'dark' ? (
        <OverviewSwiftcartRiderDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverviewSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />
      );

    if (path === '/rider/overview-rider') return renderOverview();
    if (path === '/rider/profile-support-rider') return <ProfileSupportSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/rider-code-locked-security') return <RiderCodeLockedSwiftcartSecurity onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/rider-map-rider') return <RiderMapSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/rider-return-pickup-rider') return <RiderReturnPickupSwiftcartRider onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/rider-seller-pickup-delivery-detail') return <RiderSellerPickupDeliveryDetail onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/rider/rider-deliveries-master-detail') return renderOverview();
    if (path === '/rider/rider-delivery-task-execution-code-entry') return renderOverview();
    if (path === '/rider/rider-failed-delivery-code-locked-state') return renderOverview();
    if (path === '/rider/rider-map-live-dispatch-navigation') return renderOverview();
    if (path === '/rider/rider-offline-mode-cached-manifest') return renderOverview();
    if (path === '/rider/rider-overview-dispatch-map') return renderOverview();
    if (path === '/rider/rider-reverse-pickup-return-inspection') return renderOverview();
    if (path === '/rider/rider-simulator-active-task-otp-simulation') return renderOverview();
    if (path === '/rider/rider-simulator-overview-fleet-map') return renderOverview();
    if (path === '/rider/rider-simulator-reverse-handover-inspection') return renderOverview();
    if (path === '/rider/rider-simulator-security-locked-exceptions') return renderOverview();
    if (path === '/rider' || path === '/rider/overview') return renderOverview();

    return renderOverview();
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {renderActiveScreen()}
    </div>
  );
};

export default RiderView;
