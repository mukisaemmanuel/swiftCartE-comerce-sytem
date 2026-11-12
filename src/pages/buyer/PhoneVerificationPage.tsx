import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SixDigitCodeInput from '../../components/shared/SixDigitCodeInput';

export interface PhoneVerificationPageProps {
  onNavigate: (path: string) => void;
}

export const PhoneVerificationPage: React.FC<PhoneVerificationPageProps> = ({
  onNavigate,
}) => {
  const { verifyPhoneOtp, isLoading } = useAuth();

  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const phone = searchParams.get('phone') || '+256 772 123456';

  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setErrorMsg('Please enter all 6 digits of the verification code.');
      return;
    }
    setErrorMsg(null);

    try {
      await verifyPhoneOtp(phone, code);
      setSuccess(true);
      setTimeout(() => {
        onNavigate('/account');
      }, 1200);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Invalid code');
    }
  };

  const handleResend = () => {
    setCountdown(60);
    setCode('');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#DA3700] flex items-center justify-center mx-auto shadow-sm">
            <span className="material-symbols-rounded text-3xl">sms</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Verify Phone Number
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
            We sent a 6-digit SMS verification code to <span className="font-bold text-[#0E1B4D]">{phone}</span>
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            {errorMsg}
          </div>
        )}

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-emerald-900 space-y-2">
            <span className="material-symbols-rounded text-4xl text-emerald-600">
              check_circle
            </span>
            <h3 className="font-bold text-base">Phone Verified!</h3>
            <p className="text-xs text-emerald-700">Redirecting to your account dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <SixDigitCodeInput
              value={code}
              onChange={setCode}
              error={!!errorMsg}
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={code.length !== 6 || isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px]"
            >
              <span>{isLoading ? 'Verifying...' : 'Confirm & Verify'}</span>
              <span className="material-symbols-rounded text-lg">check</span>
            </button>
          </form>
        )}

        <div className="pt-2 text-xs text-slate-500">
          Didn't receive the code?{' '}
          {countdown > 0 ? (
            <span className="font-bold text-slate-700">Resend in {countdown}s</span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-bold text-[#FF8A1F] hover:underline"
            >
              Resend SMS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneVerificationPage;

