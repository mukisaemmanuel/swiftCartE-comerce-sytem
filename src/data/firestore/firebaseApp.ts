import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore/lite';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyFakeKeyForLocalDevOnly',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'swiftcart-uganda.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'swiftcart-uganda',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'swiftcart-uganda.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1234567890',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1234567890:web:abcdef',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

function hasInternalFlag(target: object, key: string): boolean {
  return Boolean((target as unknown as Record<string, unknown>)[key]);
}

// In development or if emulator enabled, connect to local emulators
if (typeof window !== 'undefined' && (import.meta.env.DEV || import.meta.env.VITE_USE_EMULATOR === 'true')) {
  try {
    if (!hasInternalFlag(auth, '_emulatorConfig')) {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    }
    if (!hasInternalFlag(db, '_settingsFrozen')) {
      connectFirestoreEmulator(db, 'localhost', 8080);
    }
    if (!hasInternalFlag(storage, '_emulatorConfig')) {
      connectStorageEmulator(storage, 'localhost', 9199);
    }
  } catch {
    // Emulator connection errors ignored in production builds
  }
}

export default app;
