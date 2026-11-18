import dotenv from 'dotenv';
dotenv.config();

import { authAdmin, dbAdmin } from '../server/core/firebaseAdmin';
import { logAuditEvent } from '../server/core/audit';

async function main() {
  const identifier = process.argv[2]?.trim();

  if (!identifier) {
    console.error('Usage: npx tsx scripts/set-super-admin-claim.ts <uid-or-email>');
    console.error('Example: npx tsx scripts/set-super-admin-claim.ts alex@swiftcart.ug');
    console.error('Example: npx tsx scripts/set-super-admin-claim.ts 4X7kL90Qv...');
    process.exit(1);
  }

  console.log(`[SuperAdminSetup] Locating user with identifier: ${identifier}...`);

  let userRecord;
  if (identifier.includes('@')) {
    try {
      userRecord = await authAdmin.getUserByEmail(identifier);
    } catch (err: any) {
      console.error(`[SuperAdminSetup] User with email "${identifier}" not found: ${err?.message}`);
      process.exit(1);
    }
  } else {
    try {
      userRecord = await authAdmin.getUser(identifier);
    } catch (err: any) {
      console.error(`[SuperAdminSetup] User with UID "${identifier}" not found: ${err?.message}`);
      process.exit(1);
    }
  }

  const uid = userRecord.uid;
  console.log(`[SuperAdminSetup] Found user ${userRecord.email || uid} (UID: ${uid}).`);

  // Set custom claims
  const newClaims = {
    role: 'super-admin',
    roles: ['super-admin', 'admin'],
  };

  await authAdmin.setCustomUserClaims(uid, newClaims);
  console.log(`[SuperAdminSetup] Custom claims set on Firebase Auth:`, newClaims);

  // Update or create Firestore user profile
  const userRef = dbAdmin.collection('users').doc(uid);
  const existingDoc = await userRef.get();

  const userProfileData = {
    uid,
    email: userRecord.email || null,
    role: 'super-admin',
    status: 'ACTIVE',
    updatedAt: new Date().toISOString(),
    ...(existingDoc.exists ? {} : { createdAt: new Date().toISOString(), name: userRecord.displayName || 'Super Admin' }),
  };

  await userRef.set(userProfileData, { merge: true });
  console.log(`[SuperAdminSetup] Firestore user document users/${uid} updated with role: 'super-admin'.`);

  // Log audit event
  await logAuditEvent({
    actorUid: 'CLI_ADMIN',
    actorRole: 'SYSTEM',
    action: 'SET_SUPER_ADMIN_CLAIM',
    targetId: uid,
    targetType: 'USER',
    after: newClaims,
  });

  console.log(`\n======================================================`);
  console.log(`SUCCESS: User ${userRecord.email || uid} is now SUPER-ADMIN.`);
  console.log(`Note: The user must sign out and sign back in (or refresh their ID token) for the new claim to take effect.`);
  console.log(`======================================================\n`);
  process.exit(0);
}

main().catch((err) => {
  console.error('[SuperAdminSetup] Unexpected failure:', err);
  process.exit(1);
});
