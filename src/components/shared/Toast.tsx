import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: (id: string) => void;
}

const typeConfig: Record<ToastType, { icon: string; bg: string; text: string; border: string }> = {
  success: {
    icon: 'check_circle',
    bg: 'bg-emerald-950/90',
    text: 'text-emerald-200',
    border: 'border-emerald-600',
  },
  error: {
    icon: 'error',
    bg: 'bg-rose-950/90',
    text: 'text-rose-200',
    border: 'border-rose-600',
  },
  warning: {
    icon: 'warning',
    bg: 'bg-amber-950/90',
    text: 'text-amber-200',
    border: 'border-amber-600',
  },
  info: {
    icon: 'info',
    bg: 'bg-blue-950/90',
    text: 'text-blue-200',
    border: 'border-blue-600',
  },
};

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = 'info',
  duration = 4000,
  onDismiss,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onDismiss(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onDismiss]);

  const config = typeConfig[type];

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md max-w-md w-full animate-slideIn ${config.bg} ${config.text} ${config.border}`}
      role="status"
      aria-live="polite"
    >
      <span className="material-symbols-rounded text-[22px] shrink-0" aria-hidden="true">
        {config.icon}
      </span>
      <p className="text-[14px] font-medium leading-snug flex-1">{message}</p>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        className="touch-target p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center -mr-2"
        aria-label="Dismiss notification"
      >
        <span className="material-symbols-rounded text-[18px]">close</span>
      </button>
    </div>
  );
};

export default Toast;

