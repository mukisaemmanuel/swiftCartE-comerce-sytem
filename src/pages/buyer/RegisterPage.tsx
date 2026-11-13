import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Icon } from '../../components/shared/Icon';

export interface RegisterPageProps {
  onNavigate: (path: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const { signUp, isLoading } = useAuth();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+256 ');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      setErrorMsg('Please agree to the Terms of Service & Privacy Policy.');
      return;
    }
    setErrorMsg(null);

    try {
      await signUp({
        fullName,
        phoneNumber,
        email: email || undefined,
        password,
      });
      // Redirect to phone verification
      onNavigate(`/phone-verification-buyer-auth?phone=${encodeURIComponent(phoneNumber)}`);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8A1F] to-[#DA3700] text-white flex items-center justify-center mx-auto shadow-md">
            <Icon name="person_add" className="text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Join thousands of shoppers and verified merchants in Uganda
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
            <Icon name="error" className="text-base shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Emmanuel Mukisa"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Ugandan Phone Number (for SMS code & delivery) *
            </label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+256 772 000000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Create Password (min 6 characters) *
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
            />
          </div>

          <label className="flex items-start gap-2 pt-1 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-1 rounded border-slate-300 text-[#FF8A1F] focus:ring-orange-400 w-4 h-4"
            />
            <span className="text-xs text-slate-600">
              I agree to the{' '}
              <button
                type="button"
                onClick={() => onNavigate('/terms-of-service-privacy')}
                className="text-[#FF8A1F] font-bold hover:underline"
              >
                Terms of Service & Privacy Policy
              </button>
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md transition-opacity flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>{isLoading ? 'Creating Account...' : 'Continue to Verification'}</span>
            <Icon name="arrow_forward" className="text-lg" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-600">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('/sign-in-buyer')}
            className="font-bold text-[#FF8A1F] hover:underline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

