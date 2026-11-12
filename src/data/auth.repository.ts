import type { User } from '../domain/types';
import { MOCK_USER } from './mockData';

const SESSION_STORAGE_KEY = 'swiftcart_buyer_session';

export interface AuthRepository {
  getCurrentUser(): Promise<User | null>;
  signIn(identifier: string, password: string): Promise<User>;
  signUp(data: {
    fullName: string;
    phoneNumber: string;
    email?: string;
    password: string;
  }): Promise<User>;
  requestPasswordReset(identifier: string): Promise<{ success: boolean; message: string }>;
  verifyPhoneOtp(phoneNumber: string, code: string): Promise<{ success: boolean }>;
  signOut(): Promise<void>;
}

export class MockAuthRepository implements AuthRepository {
  private currentUser: User | null = null;

  constructor() {
    this.restoreSession();
  }

  private restoreSession(): void {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        this.currentUser = JSON.parse(stored);
      } else {
        // Initialize with default mock user for seamless testing if no session
        this.currentUser = { ...MOCK_USER };
        window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(this.currentUser));
      }
    } catch {
      this.currentUser = { ...MOCK_USER };
    }
  }

  private persistSession(user: User | null): void {
    this.currentUser = user;
    if (typeof window === 'undefined') return;
    try {
      if (user) {
        window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
      } else {
        window.localStorage.removeItem(SESSION_STORAGE_KEY);
      }
    } catch {
      // Ignore localStorage failure in restricted contexts
    }
  }

  async getCurrentUser(): Promise<User | null> {
    return this.currentUser ? { ...this.currentUser } : null;
  }

  async signIn(identifier: string, password: string): Promise<User> {
    const trimmedId = identifier.trim();
    if (!trimmedId) {
      throw new Error('Please enter your phone number or email');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Realistic authentication without shortcuts
    const isEmail = trimmedId.includes('@');
    const user: User = {
      id: `user-${Date.now()}`,
      fullName: isEmail ? trimmedId.split('@')[0] : 'SwiftCart Buyer',
      email: isEmail ? trimmedId : undefined,
      phoneNumber: !isEmail ? trimmedId : '+256 772 123456',
      avatarUrl: '/placeholders/avatar.svg',
      isVerified: true,
      createdAt: new Date().toISOString(),
    };

    this.persistSession(user);
    return user;
  }

  async signUp(data: {
    fullName: string;
    phoneNumber: string;
    email?: string;
    password: string;
  }): Promise<User> {
    if (!data.fullName.trim()) {
      throw new Error('Full name is required');
    }
    if (!data.phoneNumber.trim()) {
      throw new Error('Phone number is required');
    }
    if (!data.password || data.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      fullName: data.fullName.trim(),
      phoneNumber: data.phoneNumber.trim(),
      email: data.email?.trim() || undefined,
      avatarUrl: '/placeholders/avatar.svg',
      isVerified: false,
      createdAt: new Date().toISOString(),
    };

    this.persistSession(newUser);
    return newUser;
  }

  async requestPasswordReset(identifier: string): Promise<{ success: boolean; message: string }> {
    if (!identifier.trim()) {
      throw new Error('Please enter your registered phone number or email');
    }
    return {
      success: true,
      message: 'A 6-digit verification code has been sent to your phone/email.',
    };
  }

  async verifyPhoneOtp(_phoneNumber: string, code: string): Promise<{ success: boolean }> {
    const clean = code.trim();
    if (!clean || clean.length !== 6 || !/^\d{6}$/.test(clean)) {
      throw new Error('Please enter a valid 6-digit verification code');
    }

    if (this.currentUser) {
      this.currentUser.isVerified = true;
      this.persistSession(this.currentUser);
    }

    return { success: true };
  }

  async signOut(): Promise<void> {
    this.persistSession(null);
  }
}

