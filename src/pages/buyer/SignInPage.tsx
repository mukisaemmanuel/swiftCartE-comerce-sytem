import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export interface SignInPageProps {
  onNavigate: (path: string) => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onNavigate }) => {
  const { signIn, error, isLoading } = useAuth();
  const [identifier, setIdentifier] = useState('+256 772 123456');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    if (!identifier.trim() || !password) {
      setLocalError('Please enter your phone number/email and password.');
      return;
    }

    try {
      await signIn(identifier, password);
      onNavigate('/account');
    } catch (err: unknown) {
      setLocalError(err instanceof Error ? err.message : 'Sign in failed');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-md w-full space-y-6">
        {/* Brand Logo & Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8A1F] to-[#DA3700] text-white flex items-center justify-center mx-auto shadow-md">
            <span className="material-symbols-rounded text-3xl">shopping_bag</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Sign in to access your SwiftCart orders and escrow
          </p>
        </div>

        {(localError || error) && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
            <span className="material-symbols-rounded text-base shrink-0">error</span>
            <span>{localError || error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Ugandan Phone Number or Email
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400 text-lg">
                person
              </span>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="+256 7XX XXXXXX or email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate('/forgot-password-buyer')}
                className="text-xs font-bold text-[#FF8A1F] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400 text-lg">
                lock
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF8A1F]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <span className="material-symbols-rounded text-lg">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm hover:opacity-95 shadow-md transition-opacity flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
            <span className="material-symbols-rounded text-lg">arrow_forward</span>
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-600">
          Don't have an account yet?{' '}
          <button
            onClick={() => onNavigate('/register-buyer')}
            className="font-bold text-[#FF8A1F] hover:underline"
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

