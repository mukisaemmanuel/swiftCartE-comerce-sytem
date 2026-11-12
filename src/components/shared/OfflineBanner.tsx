import React, { useEffect, useState } from 'react';

export interface OfflineBannerProps {
  className?: string;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({ className = '' }) => {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      className={`w-full bg-[#ED1C24] text-white px-4 py-2.5 flex items-center justify-center gap-2.5 text-[14px] font-semibold shadow-md sticky top-0 z-50 ${className}`}
      role="alert"
    >
      <span className="material-symbols-rounded text-[20px] animate-pulse" aria-hidden="true">
        wifi_off
      </span>
      <span>
        You are currently offline. Actions will sync automatically when network reconnects.
      </span>
    </div>
  );
};

export default OfflineBanner;

