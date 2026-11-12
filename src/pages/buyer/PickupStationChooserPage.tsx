import React, { useState } from 'react';
import { usePickupStations } from '../../hooks/useOrders';
import StaticMapPlaceholder from '../../components/shared/StaticMapPlaceholder';

export interface PickupStationChooserPageProps {
  onNavigate: (path: string) => void;
}

const DISTRICTS = ['All', 'Kampala', 'Wakiso', 'Mukono', 'Entebbe', 'Jinja'];

export const PickupStationChooserPage: React.FC<PickupStationChooserPageProps> = ({
  onNavigate,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedStationId, setSelectedStationId] = useState<string>('station-gpo');
  const { stations, isLoading } = usePickupStations(selectedDistrict);

  const activeStation =
    stations.find((s) => s.id === selectedStationId) || stations[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => onNavigate('/checkout-step-by-step-flow')}
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Back"
        >
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Pickup Stations
          </h1>
          <p className="text-sm text-slate-500">
            Choose a nearby hub in Uganda to collect your package
          </p>
        </div>
      </div>

      {/* District Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {DISTRICTS.map((district) => (
          <button
            key={district}
            onClick={() => setSelectedDistrict(district)}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedDistrict === district
                ? 'bg-[#0E1B4D] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {district}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Stations List */}
        <div className="lg:col-span-7 space-y-3">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">Loading stations...</div>
          ) : stations.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
              No pickup stations found in {selectedDistrict}.
            </div>
          ) : (
            stations.map((station) => {
              const isSelected = station.id === activeStation?.id;
              return (
                <div
                  key={station.id}
                  onClick={() => setSelectedStationId(station.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all bg-white ${
                    isSelected
                      ? 'border-[#FF8A1F] ring-2 ring-orange-100 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#FF8A1F] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <span className="material-symbols-rounded">storefront</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0E1B4D] text-sm sm:text-base">
                          {station.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {station.address} ({station.district})
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-rounded text-sm text-slate-400">
                              schedule
                            </span>
                            {station.operatingHours}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-emerald-700">
                            <span className="material-symbols-rounded text-sm">bolt</span>
                            Ready in {station.estimatedDays} day{station.estimatedDays > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-extrabold text-[#DA3700]">
                        UGX {station.fee.toLocaleString()}
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Pickup Fee
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Map Preview & Confirmation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <h2 className="text-sm font-bold text-[#0E1B4D] mb-3 flex items-center gap-2">
              <span className="material-symbols-rounded text-[#FF8A1F]">map</span>
              <span>Station Map Location</span>
            </h2>

            <StaticMapPlaceholder
              riderLocation={activeStation?.name || 'Central Hub'}
              destination={activeStation?.address || 'Kampala Road'}
              height="h-52 sm:h-64"
            />

            {activeStation && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">Selected Hub:</div>
                <div className="text-sm font-bold text-[#0E1B4D] mt-0.5">
                  {activeStation.name}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  {activeStation.address} · UGX {activeStation.fee.toLocaleString()}
                </div>

                <button
                  onClick={() => onNavigate('/checkout-step-by-step-flow')}
                  className="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-md flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span className="material-symbols-rounded">check_circle</span>
                  <span>Confirm Selected Station</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupStationChooserPage;

