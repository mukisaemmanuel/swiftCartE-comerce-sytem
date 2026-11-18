import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

let adminApp: App;

if (getApps().length === 0) {
  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GCLOUD_PROJECT ||
    'swiftcart-uganda';

  // If a service account key path is specified, use cert credentials
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    try {
      adminApp = initializeApp({
        credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
        projectId,
      });
    } catch {
      adminApp = initializeApp({ projectId });
    }
  } else {
    // Default ADC or emulator
    adminApp = initializeApp({ projectId });
  }
} else {
  adminApp = getApps()[0];
}

export const authAdmin = getAuth(adminApp);
export const dbAdmin = getFirestore(adminApp);
export const storageAdmin = getStorage(adminApp);
export { authAdmin as adminAuth, dbAdmin as adminDb };
export { adminApp };
