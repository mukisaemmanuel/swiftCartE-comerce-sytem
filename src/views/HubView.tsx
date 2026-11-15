import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';
import { RoleDashboardShell } from '../components/dashboard/RoleDashboardShell';

// Converted Hub Mockup Screens
import {
  CourierBagQrScanConfirmationModalSwiftcartWorkHub,
  DamagedParcelQuarantineBayIntakeSwiftcartHubAgent,
  HubDamagedGoodsQuarantineBayTablet,
  HubDamagedGoodsQuarantineBayTabletLight1,
  HubDamagedGoodsQuarantineBayTabletLight2,
  HubIntakeHighSpeedBarcodeScannerTablet,
  HubIntakeSortingStationSwiftcartWorkHub,
  HubIntakeStationSwiftcartWorkHub,
  HubLineHaulTransitManifestHandoverTablet,
  HubLineHaulTransitManifestHandoverTabletLight1,
  HubLineHaulTransitManifestHandoverTabletLight2,
  HubPickupHandoverConsoleTabletDark,
  HubReturnsQuarantineBayTabletDark,
  HubRiderDispatchCourierStagingTabletDark,
  HubSortingStationSwiftcartWorkHub,
  HubStationCommandOverviewTablet,
  HubStationCommandOverviewTabletLight1,
  HubStationCommandOverviewTabletLight2,
  HubStationSettingsShiftHandoverTabletDark,
  HubStorageAgingMatrixSwiftcartHub,
  HubStorageAgingMatrixSwiftcartHubLight,
  HubStorageAgingMatrixTabletDark,
  IntakeSwiftcartHubAgent,
  LineHaulTransitManifestCreationSwiftcartHubAgent,
  MoreSwiftcartHubAgent,
  OverviewSwiftcartHubAgentDark,
  OverviewSwiftcartHubAgentLightMode,
  PickupSwiftcartHubAgent,
  RegionalLinehaulTransitHandoverSwiftcartWorkHub,
  ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub,
  RiderDispatchCourierBagStagingSwiftcartHubAgent,
  RiderProfileSupportHubTabletLight,
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
    const renderOverview = () =>
      theme === 'dark' ? (
        <OverviewSwiftcartHubAgentDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverviewSwiftcartHubAgentLightMode onNavigate={onNavigate} onAction={handleAction} />
      );

    const renderStorageAging = () =>
      theme === 'dark' ? (
        <HubStorageAgingMatrixSwiftcartHub onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <HubStorageAgingMatrixSwiftcartHubLight onNavigate={onNavigate} onAction={handleAction} />
      );

    if (path === '/hub/courier-bag-qr-scan-confirmation-modal-work-hub') return <CourierBagQrScanConfirmationModalSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/damaged-parcel-quarantine-bay-intake-hub-agent') return <DamagedParcelQuarantineBayIntakeSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-sorting-station-work-hub') return <HubIntakeSortingStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-station-work-hub') return <HubIntakeStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-sorting-station-work-hub') return <HubSortingStationSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-storage-aging-matrix-hub') return renderStorageAging();
    if (path === '/hub/intake-hub-agent') return <IntakeSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/line-haul-transit-manifest-creation-hub-agent') return <LineHaulTransitManifestCreationSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/more-hub-agent') return <MoreSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/overview-hub-agent') return renderOverview();
    if (path === '/hub/overview-hub-agent-light-mode') return <OverviewSwiftcartHubAgentLightMode onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/pickup-hub-agent') return <PickupSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/regional-linehaul-transit-handover-work-hub') return <RegionalLinehaulTransitHandoverSwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/returns-damaged-goods-quarantine-bay-work-hub') return <ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/rider-dispatch-courier-bag-staging-hub-agent') return <RiderDispatchCourierBagStagingSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/scan-hub-agent') return <ScanSwiftcartHubAgent onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/swiftcart-work-hub-shared-system-components') return <SwiftcartWorkHubSharedSystemComponentsDarkLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay') return <HubDamagedGoodsQuarantineBayTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay-1') return <HubDamagedGoodsQuarantineBayTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-damaged-goods-quarantine-bay-2') return <HubDamagedGoodsQuarantineBayTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-intake-high-speed-barcode-scanner') return <HubIntakeHighSpeedBarcodeScannerTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover') return <HubLineHaulTransitManifestHandoverTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover-1') return <HubLineHaulTransitManifestHandoverTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-line-haul-transit-manifest-handover-2') return <HubLineHaulTransitManifestHandoverTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-pickup-handover-console') return <HubPickupHandoverConsoleTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-returns-quarantine-bay') return <HubReturnsQuarantineBayTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-rider-dispatch-courier-staging') return <HubRiderDispatchCourierStagingTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview') return <HubStationCommandOverviewTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview-1') return <HubStationCommandOverviewTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-command-overview-2') return <HubStationCommandOverviewTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-station-settings-shift-handover') return <HubStationSettingsShiftHandoverTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/hub-storage-aging-matrix') return <HubStorageAgingMatrixTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/rider-profile-support-hub') return <RiderProfileSupportHubTabletLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/hub/delivery-addresses-hubs') return renderOverview();
    if (path === '/hub/hub-customer-pickup-handover-console') return renderOverview();
    if (path === '/hub/hub-inbound-intake-barcode-scan') return renderOverview();
    if (path === '/hub/hub-line-haul-transit-manifest') return renderOverview();
    if (path === '/hub/hub-returns-rto-bay') return renderOverview();
    if (path === '/hub' || path === '/hub/overview') return renderOverview();

    return renderOverview();
  };

  return (
    <RoleDashboardShell role="hub" currentPath={path} onNavigate={onNavigate}>
      {renderActiveScreen()}
    </RoleDashboardShell>
  );
};

export default HubView;
