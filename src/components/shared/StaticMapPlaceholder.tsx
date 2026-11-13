import React from 'react';
import { Icon } from './Icon';

export interface StaticMapPlaceholderProps {
  riderLocation?: string;
  destination?: string;
  className?: string;
  height?: string;
}

export const StaticMapPlaceholder: React.FC<StaticMapPlaceholderProps> = ({
  riderLocation = 'Lumumba Avenue, Nakasero',
  destination = 'Plot 14 Lumumba Avenue',
  className = '',
  height = 'h-56 sm:h-72',
}) => {
  return (
    <div
      className={`relative w-full ${height} bg-[#EAEFE8] rounded-2xl overflow-hidden border border-slate-200 shadow-inner ${className}`}
      aria-label="Map showing boda rider route in Kampala"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 600 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Land base */}
        <rect width="600" height="350" fill="#E8EDE4" />

        {/* Kampala Parks & Green Areas */}
        <path
          d="M 50 20 Q 90 10 130 40 T 170 100 Q 120 140 60 110 Z"
          fill="#D6E6D1"
        />
        <path
          d="M 420 180 Q 520 160 550 240 T 460 310 Q 390 280 420 180 Z"
          fill="#D6E6D1"
        />

        {/* Major Roads in Kampala */}
        {/* Kampala Road / Jinja Road */}
        <path
          d="M 0 160 C 180 150 350 180 600 130"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 0 160 C 180 150 350 180 600 130"
          stroke="#F3D39B"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Lumumba Avenue / Nakasero Road */}
        <path
          d="M 180 0 C 190 120 220 230 290 350"
          stroke="#FFFFFF"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 180 0 C 190 120 220 230 290 350"
          stroke="#F3D39B"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Secondary Streets */}
        <path d="M 90 90 L 320 60" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M 280 200 L 520 240" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M 120 260 L 400 310" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M 330 30 L 420 170" stroke="#FFFFFF" strokeWidth="6" />

        {/* Active Boda Delivery Route */}
        <path
          d="M 195 90 C 205 145 220 175 270 210"
          stroke="#FF8A1F"
          strokeWidth="4"
          strokeDasharray="6 6"
        />

        {/* Origin: Merchant Hub */}
        <circle cx="195" cy="90" r="8" fill="#0E1B4D" />
        <circle cx="195" cy="90" r="4" fill="#FFFFFF" />

        {/* Destination Pin */}
        <g transform="translate(260, 185)">
          <path
            d="M 10 0 C 4.5 0 0 4.5 0 10 C 0 17.5 10 28 10 28 C 10 28 20 17.5 20 10 C 20 4.5 15.5 0 10 0 Z"
            fill="#DA3700"
          />
          <circle cx="10" cy="10" r="4" fill="#FFFFFF" />
        </g>

        {/* Rider Marker (Midpoint) */}
        <g transform="translate(210, 135)">
          <circle cx="14" cy="14" r="16" fill="#FF8A1F" fillOpacity="0.25" />
          <circle cx="14" cy="14" r="10" fill="#FF8A1F" />
          <circle cx="14" cy="14" r="4" fill="#FFFFFF" />
        </g>
      </svg>

      {/* Map Labels Floating Pill */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md text-xs font-semibold text-[#0E1B4D] flex items-center gap-1.5 border border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Boda en route · {riderLocation}</span>
        </div>
        <div className="bg-[#0E1B4D] text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md shrink-0">
          Kampala Live
        </div>
      </div>

      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-md text-xs text-slate-700 border border-slate-100 flex items-center gap-2">
        <Icon name="location_on" className="text-base text-[#DA3700]" />
        <span className="font-medium truncate max-w-[220px]">{destination}</span>
      </div>
    </div>
  );
};

export default StaticMapPlaceholder;

