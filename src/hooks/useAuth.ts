import { useState, useEffect, useCallback } from 'react';
import type { User } from '../domain/types';
import { authRepository } from '../data';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const current = await authRepository.getCurrentUser();
      setUser(current);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to retrieve auth state');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const signIn = async (identifier: string, pass: string): Promise<User> => {
    setError(null);
    try {
      const u = await authRepository.signIn(identifier, pass);
      setUser(u);
      return u;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Sign in failed';
      setError(msg);
      throw err;
    }
  };

  const signUp = async (data: {
    fullName: string;
    phoneNumber: string;
    email?: string;
    password: string;
  }): Promise<User> => {
    setError(null);
    try {
      const u = await authRepository.signUp(data);
      setUser(u);
      return u;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed';
      setError(msg);
      throw err;
    }
  };

  const requestPasswordReset = async (identifier: string) => {
    setError(null);
    try {
      return await authRepository.requestPasswordReset(identifier);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Password reset failed';
      setError(msg);
      throw err;
    }
  };

  const verifyPhoneOtp = async (phone: string, code: string) => {
    setError(null);
    try {
      const res = await authRepository.verifyPhoneOtp(phone, code);
      await refresh();
      return res;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Verification failed';
      setError(msg);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      await authRepository.signOut();
      setUser(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Sign out failed');
    }
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    refresh,
    signIn,
    signUp,
    requestPasswordReset,
    verifyPhoneOtp,
    signOut,
  };
};

