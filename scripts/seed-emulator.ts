/**
 * Emulator Seed Script
 *
 * Populates categories, sample sellers, sample products, pickup stations,
 * and test users for each role (buyer, seller, rider, hub, admin, super-admin)
 * into the local Firebase Auth and Firestore emulators.
 *
 * Usage:
 *   npx tsx scripts/seed-emulator.ts
 */

import { adminAuth, adminDb } from '../server/core/firebaseAdmin';
import {
  MOCK_CATEGORIES,
  MOCK_SELLERS,
  MOCK_PRODUCTS,
  MOCK_PICKUP_STATIONS,
  MOCK_REVIEWS,
} from '../src/data/mockData';

process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || 'localhost:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST || 'localhost:9099';

interface TestUserDef {
  uid: string;
  email: string;
  password: string;
  displayName: string;
  role: 'buyer' | 'seller' | 'admin' | 'super-admin' | 'rider' | 'hub';
  phoneNumber: string;
}

const TEST_USERS: TestUserDef[] = [
  {
    uid: 'test-superadmin-uid',
    email: 'superadmin@swiftcart.ug',
    password: 'Password123!',
    displayName: 'Super Admin User',
    role: 'super-admin',
    phoneNumber: '+256700000001',
  },
  {
    uid: 'test-admin-uid',
    email: 'admin@swiftcart.ug',
    password: 'Password123!',
    displayName: 'Admin User',
    role: 'admin',
    phoneNumber: '+256700000002',
  },
  {
    uid: 'test-seller-uid',
    email: 'seller@swiftcart.ug',
    password: 'Password123!',
    displayName: 'Verified Seller Store',
    role: 'seller',
    phoneNumber: '+256700000003',
  },
  {
    uid: 'test-rider-uid',
    email: 'rider@swiftcart.ug',
    password: 'Password123!',
    displayName: 'Speedy Boda Rider',
    role: 'rider',
    phoneNumber: '+256700000004',
  },
  {
    uid: 'test-hub-uid',
    email: 'hub@swiftcart.ug',
    password: 'Password123!',
    displayName: 'Kampala Central Hub Agent',
    role: 'hub',
    phoneNumber: '+256700000005',
  },
  {
    uid: 'test-buyer-uid',
    email: 'buyer@swiftcart.ug',
    password: 'Password123!',
    displayName: 'John Doe Buyer',
    role: 'buyer',
    phoneNumber: '+256700000006',
  },
];

async function seedUsers() {
  console.log('Seeding Auth users and custom claims...');
  for (const u of TEST_USERS) {
    try {
      try {
        await adminAuth.getUser(u.uid);
        await adminAuth.updateUser(u.uid, {
          email: u.email,
          password: u.password,
          displayName: u.displayName,
          phoneNumber: u.phoneNumber,
        });
      } catch {
        await adminAuth.createUser({
          uid: u.uid,
          email: u.email,
          password: u.password,
          displayName: u.displayName,
          phoneNumber: u.phoneNumber,
        });
      }

      await adminAuth.setCustomUserClaims(u.uid, { role: u.role });

      await adminDb.collection('users').doc(u.uid).set(
        {
          id: u.uid,
          email: u.email,
          fullName: u.displayName,
          role: u.role,
          phoneNumber: u.phoneNumber,
          isVerified: true,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log(`  ✓ User ${u.email} (${u.role}) seeded.`);
    } catch (err: any) {
      console.warn(`  ! Error seeding user ${u.email}:`, err.message);
    }
  }
}

async function seedCategories() {
  console.log(`Seeding ${MOCK_CATEGORIES.length} categories...`);
  const batch = adminDb.batch();
  for (const cat of MOCK_CATEGORIES) {
    const ref = adminDb.collection('categories').doc(cat.id);
    batch.set(ref, cat, { merge: true });
  }
  await batch.commit();
  console.log('  ✓ Categories seeded.');
}

async function seedSellers() {
  console.log(`Seeding ${MOCK_SELLERS.length} sellers...`);
  const batch = adminDb.batch();
  for (const seller of MOCK_SELLERS) {
    const ref = adminDb.collection('sellers').doc(seller.id);
    batch.set(ref, seller, { merge: true });
  }
  await batch.commit();
  console.log('  ✓ Sellers seeded.');
}

async function seedProducts() {
  console.log(`Seeding ${MOCK_PRODUCTS.length} products...`);
  const batch = adminDb.batch();
  for (const prod of MOCK_PRODUCTS) {
    const ref = adminDb.collection('products').doc(prod.id);
    batch.set(ref, prod, { merge: true });
  }
  await batch.commit();
  console.log('  ✓ Products seeded.');
}

async function seedPickupStations() {
  console.log(`Seeding ${MOCK_PICKUP_STATIONS.length} pickup stations...`);
  const batch = adminDb.batch();
  for (const station of MOCK_PICKUP_STATIONS) {
    const ref = adminDb.collection('pickupStations').doc(station.id);
    batch.set(ref, station, { merge: true });
  }
  await batch.commit();
  console.log('  ✓ Pickup stations seeded.');
}

async function seedReviews() {
  console.log(`Seeding ${MOCK_REVIEWS.length} reviews...`);
  const batch = adminDb.batch();
  for (const rev of MOCK_REVIEWS) {
    const ref = adminDb.collection('reviews').doc(rev.id);
    batch.set(ref, rev, { merge: true });
  }
  await batch.commit();
  console.log('  ✓ Reviews seeded.');
}

async function main() {
  console.log('--- Starting SwiftCart Emulator Seeding ---');
  await seedUsers();
  await seedCategories();
  await seedSellers();
  await seedProducts();
  await seedPickupStations();
  await seedReviews();
  console.log('--- Emulator Seeding Complete ---');
}

main().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
