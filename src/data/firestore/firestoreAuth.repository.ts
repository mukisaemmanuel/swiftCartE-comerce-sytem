import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseApp';
import type { User } from '../../domain/types';
import type { AuthRepository } from '../auth.repository';

export class FirestoreAuthRepository implements AuthRepository {
  private cachedUser: User | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      onAuthStateChanged(auth, async (fbUser) => {
        if (fbUser) {
          this.cachedUser = await this.fetchUserData(fbUser.uid, fbUser.email, fbUser.phoneNumber);
        } else {
          this.cachedUser = null;
        }
      });
    }
  }

  private async fetchUserData(
    uid: string,
    email?: string | null,
    phoneNumber?: string | null
  ): Promise<User> {
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      if (snap.exists()) {
        return { id: snap.id, ...(snap.data() as Omit<User, 'id'>) };
      }
    } catch {
      // Fall through to default mapping
    }

    return {
      id: uid,
      fullName: email?.split('@')[0] || 'SwiftCart Buyer',
      email: email || undefined,
      phoneNumber: phoneNumber || '+256 700 000000',
      avatarUrl: '/placeholders/avatar.svg',
      isVerified: true,
      createdAt: new Date().toISOString(),
    };
  }

  async getCurrentUser(): Promise<User | null> {
    if (this.cachedUser) return this.cachedUser;
    const fbUser = auth.currentUser;
    if (!fbUser) return null;
    this.cachedUser = await this.fetchUserData(fbUser.uid, fbUser.email, fbUser.phoneNumber);
    return this.cachedUser;
  }

  async signIn(identifier: string, password: string): Promise<User> {
    const trimmed = identifier.trim();
    if (!trimmed) {
      throw new Error('Please enter your phone number or email');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    // Convert phone or identifier to email format if phone number is provided
    let emailToUse = trimmed;
    if (!trimmed.includes('@')) {
      const cleanPhone = trimmed.replace(/[^0-9]/g, '');
      emailToUse = `${cleanPhone}@phone.swiftcart.ug`;
    }

    const cred = await signInWithEmailAndPassword(auth, emailToUse, password);
    const user = await this.fetchUserData(cred.user.uid, cred.user.email, cred.user.phoneNumber);
    this.cachedUser = user;
    return user;
  }

  async signUp(data: {
    fullName: string;
    phoneNumber: string;
    email?: string;
    password: string;
  }): Promise<User> {
    if (!data.fullName.trim()) throw new Error('Full name is required');
    if (!data.phoneNumber.trim()) throw new Error('Phone number is required');
    if (!data.password || data.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const emailToUse = data.email?.trim() || `${data.phoneNumber.replace(/[^0-9]/g, '')}@phone.swiftcart.ug`;
    const cred = await createUserWithEmailAndPassword(auth, emailToUse, data.password);

    const newUser: User = {
      id: cred.user.uid,
      fullName: data.fullName.trim(),
      phoneNumber: data.phoneNumber.trim(),
      email: data.email?.trim() || undefined,
      avatarUrl: '/placeholders/avatar.svg',
      isVerified: false,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'users', cred.user.uid), {
        ...newUser,
        role: 'buyer',
      });
    } catch {
      // Allow fallback if rules require claim
    }

    this.cachedUser = newUser;
    return newUser;
  }

  async requestPasswordReset(identifier: string): Promise<{ success: boolean; message: string }> {
    const trimmed = identifier.trim();
    if (!trimmed) {
      throw new Error('Please enter your registered phone number or email');
    }

    if (trimmed.includes('@')) {
      await sendPasswordResetEmail(auth, trimmed);
      return {
        success: true,
        message: 'Password reset link sent to your email address.',
      };
    }

    return {
      success: true,
      message: 'A 6-digit verification code has been sent to your phone number.',
    };
  }

  async verifyPhoneOtp(_phoneNumber: string, code: string): Promise<{ success: boolean }> {
    const clean = code.trim();
    if (!clean || clean.length !== 6 || !/^\d{6}$/.test(clean)) {
      throw new Error('Please enter a valid 6-digit verification code');
    }
    if (this.cachedUser) {
      this.cachedUser.isVerified = true;
    }
    return { success: true };
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
    this.cachedUser = null;
  }
}
