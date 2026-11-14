import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Hub Mockup Screens
import {
  CourierBagQrScanConfirmationModalSwiftcartWorkHub,
  DamagedParcelQuarantineBayIntakeSwiftcartHubAgent,
  HubIntakeSortingStationSwiftcartWorkHub,
  HubIntakeStationSwiftcartWorkHub,
  HubSortingStationSwiftcartWorkHub,
  HubStorageAgingMatrixSwiftcartHub,
  IntakeSwiftcartHubAgent,
  LineHaulTransitManifestCreationSwiftcartHubAgent,
  MoreSwiftcartHubAgent,
  OverviewSwiftcartHubAgent,
  OverviewSwiftcartHubAgentLightMode,
  PickupSwiftcartHubAgent,
  RegionalLinehaulTransitHandoverSwiftcartWorkHub,
  ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub,
  RiderDispatchCourierBagStagingSwiftcartHubAgent,
  ScanSwiftcartHubAgent,
  SwiftcartWorkHubSharedSystemComponentsDarkLight,
} from '../mockups/hub';

export interface HubViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const HubView: React.FC<HubViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/hub';
  const { theme } = useDashboardTheme();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[HubAction]', action, payload);
  };

  const renderActiveScreen = () => {
    if (path === '/hub/courier-bag-qr-scan-confirmation-modal-work-hub') return <CourierBagQrScanConfirmationModalSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/damaged-parcel-quarantine-bay-intake-hub-agent') return <DamagedParcelQuarantineBayIntakeSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-sorting-station-work-hub') return <HubIntakeSortingStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-station-work-hub') return <HubIntakeStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-sorting-station-work-hub') return <HubSortingStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-storage-aging-matrix-hub') return <HubStorageAgingMatrixSwiftcartHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/intake-hub-agent') return <IntakeSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/line-haul-transit-manifest-creation-hub-agent') return <LineHaulTransitManifestCreationSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/more-hub-agent') return <MoreSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/overview-hub-agent') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/overview-hub-agent-light-mode') return <OverviewSwiftcartHubAgentLightMode onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/pickup-hub-agent') return <PickupSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/regional-linehaul-transit-handover-work-hub') return <RegionalLinehaulTransitHandoverSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/returns-damaged-goods-quarantine-bay-work-hub') return <ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/rider-dispatch-courier-bag-staging-hub-agent') return <RiderDispatchCourierBagStagingSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/scan-hub-agent') return <ScanSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/swiftcart-work-hub-shared-system-components') return <SwiftcartWorkHubSharedSystemComponentsDarkLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay-1') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay-2') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-high-speed-barcode-scanner') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover-1') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover-2') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-pickup-handover-console') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-returns-quarantine-bay') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-rider-dispatch-courier-staging') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview-1') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview-2') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-settings-shift-handover') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-storage-aging-matrix') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/rider-profile-support-hub') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/delivery-addresses-hubs') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-customer-pickup-handover-console') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-inbound-intake-barcode-scan') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-returns-rto-bay') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub' || path === '/hub/overview') return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;

    return <OverviewSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {renderActiveScreen()}
    </div>
  );
};

export default HubView;
