import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Icon } from '../../components/shared/Icon';

export interface ForgotPasswordPageProps {
  onNavigate: (path: string) => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const { requestPasswordReset } = useAuth();
  const [identifier, setIdentifier] = useState('+256 772 123456');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) return;
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      await requestPasswordReset(identifier.trim());
      setSentSuccess(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to request reset');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#DA3700] flex items-center justify-center mx-auto shadow-sm">
            <Icon name="lock_reset" className="text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Reset Password
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Enter your registered Ugandan phone or email to receive a recovery code
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            {errorMsg}
          </div>
        )}

        {!sentSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number or Email Address
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="+256 7XX XXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md transition-opacity flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>{isSubmitting ? 'Sending Code...' : 'Send Recovery Code'}</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
            <Icon name="mark_email_read" className="text-4xl text-emerald-600" />
            <h3 className="font-bold text-base text-emerald-900">Code Dispatched!</h3>
            <p className="text-xs text-emerald-800">
              We sent a 6-digit reset code to <span className="font-bold">{identifier}</span>. Check your SMS messages.
            </p>
            <button
              onClick={() => onNavigate(`/phone-verification-buyer-auth?phone=${encodeURIComponent(identifier)}`)}
              className="mt-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
            >
              Enter Verification Code
            </button>
          </div>
        )}

        <div className="pt-2 text-center text-xs text-slate-600">
          Remembered your password?{' '}
          <button
            onClick={() => onNavigate('/sign-in-buyer')}
            className="font-bold text-[#FF8A1F] hover:underline"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

