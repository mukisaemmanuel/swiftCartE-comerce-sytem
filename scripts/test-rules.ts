import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
} from 'firebase/firestore';

const PROJECT_ID = 'swiftcart-rules-test';
const rules = readFileSync(resolve(process.cwd(), 'firestore.rules'), 'utf8');

let testEnv: RulesTestEnvironment;

interface TestCase {
  category: string;
  name: string;
  fn: () => Promise<void>;
}

const tests: TestCase[] = [];

function it(category: string, name: string, fn: () => Promise<void>) {
  tests.push({ category, name, fn });
}

// ============================================================================
// 1. USERS COLLECTION
// ============================================================================
it('Users', 'signed-out visitor cannot read user profile', async () => {
  const db = testEnv.unauthenticatedContext().firestore();
  await assertFails(getDoc(doc(db, 'users', 'buyer_1')));
});

it('Users', 'buyer can read and update own profile allow-listed fields', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'users', 'buyer_1'), {
      name: 'Buyer One',
      phone: '+256700111222',
      role: 'buyer',
      status: 'ACTIVE',
    });
  });

  const db = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(getDoc(doc(db, 'users', 'buyer_1')));
  await assertSucceeds(updateDoc(doc(db, 'users', 'buyer_1'), { name: 'Buyer One Updated' }));
});

it('Users', 'buyer cannot update role or status', async () => {
  const db = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertFails(updateDoc(doc(db, 'users', 'buyer_1'), { role: 'admin' }));
  await assertFails(updateDoc(doc(db, 'users', 'buyer_1'), { status: 'BANNED' }));
});

it('Users', 'buyer cannot read another user profile', async () => {
  const db = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(db, 'users', 'buyer_2')));
});

it('Users', 'admin can read any user profile and list users', async () => {
  const db = testEnv.authenticatedContext('admin_1', { role: 'admin' }).firestore();
  await assertSucceeds(getDoc(doc(db, 'users', 'buyer_1')));
  await assertSucceeds(getDocs(collection(db, 'users')));
});

// ============================================================================
// 2. SELLER PROFILES
// ============================================================================
it('SellerProfiles', 'public can read seller profile', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'sellerProfiles', 'seller_1'), {
      storeName: 'Pearl Tech',
      userId: 'seller_user_1',
      status: 'ACTIVE',
      balance: 100000,
    });
  });

  const db = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(db, 'sellerProfiles', 'seller_1')));
});

it('SellerProfiles', 'owning seller can update store name and description', async () => {
  const db = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(updateDoc(doc(db, 'sellerProfiles', 'seller_1'), {
    storeName: 'Pearl Tech Store Uganda',
  }));
});

it('SellerProfiles', 'seller cannot update balance or status', async () => {
  const db = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertFails(updateDoc(doc(db, 'sellerProfiles', 'seller_1'), { balance: 99999999 }));
  await assertFails(updateDoc(doc(db, 'sellerProfiles', 'seller_1'), { status: 'APPROVED' }));
});

// ============================================================================
// 3. PRODUCTS
// ============================================================================
it('Products', 'public can read approved products', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'products', 'prod_1'), {
      title: 'Soundcore Space One',
      sellerId: 'seller_1',
      status: 'APPROVED',
      price: 388500,
    });
    await setDoc(doc(ctx.firestore(), 'products', 'prod_draft'), {
      title: 'Draft Product',
      sellerId: 'seller_1',
      status: 'DRAFT',
      price: 150000,
    });
  });

  const db = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(db, 'products', 'prod_1')));
  await assertFails(getDoc(doc(db, 'products', 'prod_draft')));
});

it('Products', 'owning seller can create DRAFT product', async () => {
  const db = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(setDoc(doc(db, 'products', 'prod_new_draft'), {
    title: 'New Wireless Headphones',
    sellerId: 'seller_1',
    status: 'DRAFT',
    price: 250000,
  }));
});

it('Products', 'seller cannot directly mark product APPROVED', async () => {
  const db = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertFails(setDoc(doc(db, 'products', 'prod_auto_approve'), {
    title: 'Hack Product',
    sellerId: 'seller_1',
    status: 'APPROVED',
    price: 100,
  }));
});

it('Products', 'other seller cannot update or delete product', async () => {
  const db = testEnv.authenticatedContext('other_seller_user', { role: 'seller', sellerId: 'seller_2' }).firestore();
  await assertFails(updateDoc(doc(db, 'products', 'prod_1'), { price: 500 }));
  await assertFails(deleteDoc(doc(db, 'products', 'prod_1')));
});

// ============================================================================
// 4. CATEGORIES
// ============================================================================
it('Categories', 'public can read categories, only admin can write', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'categories', 'electronics'), { name: 'Electronics' });
  });

  const dbPub = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(dbPub, 'categories', 'electronics')));
  await assertFails(setDoc(doc(dbPub, 'categories', 'fashion'), { name: 'Fashion' }));

  const dbAdmin = testEnv.authenticatedContext('admin_1', { role: 'admin' }).firestore();
  await assertSucceeds(setDoc(doc(dbAdmin, 'categories', 'fashion'), { name: 'Fashion' }));
});

// ============================================================================
// 5. CARTS
// ============================================================================
it('Carts', 'user can read and write own cart, other users denied', async () => {
  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(setDoc(doc(dbBuyer, 'carts', 'buyer_1'), {
    userId: 'buyer_1',
    items: [{ productId: 'prod_1', quantity: 2 }],
  }));
  await assertSucceeds(getDoc(doc(dbBuyer, 'carts', 'buyer_1')));

  const dbOther = testEnv.authenticatedContext('buyer_2', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(dbOther, 'carts', 'buyer_1')));
  await assertFails(setDoc(doc(dbOther, 'carts', 'buyer_1'), { items: [] }));
});

// ============================================================================
// 6. ORDERS & SUB-ORDERS
// ============================================================================
it('Orders', 'client direct write is strictly blocked', async () => {
  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertFails(setDoc(doc(dbBuyer, 'orders', 'order_client_fake'), {
    buyerId: 'buyer_1',
    totalUGX: 1000,
    status: 'PAID',
  }));
});

it('Orders', 'buyer and seller can read their own order, unauthorized denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'orders', 'ord_101'), {
      buyerId: 'buyer_1',
      sellerId: 'seller_1',
      status: 'PAID',
      totalUGX: 388500,
    });
    await setDoc(doc(ctx.firestore(), 'orders', 'ord_101', 'sub_orders', 'sub_1'), {
      sellerId: 'seller_1',
      subTotalUGX: 388500,
    });
  });

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(getDoc(doc(dbBuyer, 'orders', 'ord_101')));

  const dbSeller = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(getDoc(doc(dbSeller, 'orders', 'ord_101')));
  await assertSucceeds(getDoc(doc(dbSeller, 'orders', 'ord_101', 'sub_orders', 'sub_1')));

  const dbOther = testEnv.authenticatedContext('buyer_2', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(dbOther, 'orders', 'ord_101')));
});

// ============================================================================
// 7. PAYMENTS
// ============================================================================
it('Payments', 'buyer can read own payment record; client write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'payments', 'pay_101'), {
      buyerId: 'buyer_1',
      amountUGX: 388500,
      status: 'PAID',
      provider: 'PESAPAL',
    });
  });

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(getDoc(doc(dbBuyer, 'payments', 'pay_101')));
  await assertFails(setDoc(doc(dbBuyer, 'payments', 'pay_fake'), { amountUGX: 100 }));

  const dbOther = testEnv.authenticatedContext('buyer_2', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(dbOther, 'payments', 'pay_101')));
});

// ============================================================================
// 8. PAYOUT HOLDS
// ============================================================================
it('PayoutHolds', 'seller can read own hold; client write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'payoutHolds', 'hold_101'), {
      sellerId: 'seller_1',
      orderId: 'ord_101',
      amountUGX: 349650,
      status: 'HELD',
    });
  });

  const dbSeller = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(getDoc(doc(dbSeller, 'payoutHolds', 'hold_101')));
  await assertFails(updateDoc(doc(dbSeller, 'payoutHolds', 'hold_101'), { status: 'RELEASED' }));

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(dbBuyer, 'payoutHolds', 'hold_101')));
});

// ============================================================================
// 9. PAYOUTS
// ============================================================================
it('Payouts', 'seller can read own payouts; client write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'payouts', 'payout_101'), {
      sellerId: 'seller_1',
      netAmountUGX: 500000,
      status: 'PENDING',
    });
  });

  const dbSeller = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(getDoc(doc(dbSeller, 'payouts', 'payout_101')));
  await assertFails(setDoc(doc(dbSeller, 'payouts', 'payout_hack'), { netAmountUGX: 999999 }));
});

// ============================================================================
// 10. DELIVERIES
// ============================================================================
it('Deliveries', 'rider and seller can read assigned delivery; client write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'deliveries', 'deliv_101'), {
      orderId: 'ord_101',
      sellerId: 'seller_1',
      riderId: 'rider_1',
      status: 'ASSIGNED',
    });
  });

  const dbRider = testEnv.authenticatedContext('rider_1', { role: 'rider' }).firestore();
  await assertSucceeds(getDoc(doc(dbRider, 'deliveries', 'deliv_101')));
  await assertFails(updateDoc(doc(dbRider, 'deliveries', 'deliv_101'), { status: 'DELIVERED' }));

  const dbOtherRider = testEnv.authenticatedContext('rider_2', { role: 'rider' }).firestore();
  await assertFails(getDoc(doc(dbOtherRider, 'deliveries', 'deliv_101')));
});

// ============================================================================
// 11. COURIERS
// ============================================================================
it('Couriers', 'seller can read own couriers; client direct write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'couriers', 'cour_101'), {
      sellerId: 'seller_1',
      name: 'SafeBoda Musa',
      phone: '+256700888999',
    });
  });

  const dbSeller = testEnv.authenticatedContext('seller_user_1', { role: 'seller', sellerId: 'seller_1' }).firestore();
  await assertSucceeds(getDoc(doc(dbSeller, 'couriers', 'cour_101')));
  await assertFails(setDoc(doc(dbSeller, 'couriers', 'cour_fake'), { name: 'Fake' }));
});

// ============================================================================
// 12. HUBS
// ============================================================================
it('Hubs', 'public can read hubs; only admin can write', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'hubs', 'hub_kampala_central'), {
      name: 'Kampala Central Hub',
      address: 'Plot 14 Lumumba Avenue',
    });
  });

  const dbPub = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(dbPub, 'hubs', 'hub_kampala_central')));
  await assertFails(setDoc(doc(dbPub, 'hubs', 'hub_new'), { name: 'New' }));

  const dbAdmin = testEnv.authenticatedContext('admin_1', { role: 'admin' }).firestore();
  await assertSucceeds(setDoc(doc(dbAdmin, 'hubs', 'hub_new'), { name: 'New Hub' }));
});

// ============================================================================
// 13. RETURNS & DISPUTES
// ============================================================================
it('Returns and Disputes', 'parties can read; direct client write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'returns', 'ret_101'), {
      buyerId: 'buyer_1',
      sellerId: 'seller_1',
      orderId: 'ord_101',
      status: 'REQUESTED',
    });
    await setDoc(doc(ctx.firestore(), 'disputes', 'disp_101'), {
      buyerId: 'buyer_1',
      sellerId: 'seller_1',
      orderId: 'ord_101',
      status: 'OPENED',
    });
  });

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(getDoc(doc(dbBuyer, 'returns', 'ret_101')));
  await assertSucceeds(getDoc(doc(dbBuyer, 'disputes', 'disp_101')));
  await assertFails(setDoc(doc(dbBuyer, 'returns', 'ret_fake'), { status: 'APPROVED' }));
  await assertFails(setDoc(doc(dbBuyer, 'disputes', 'disp_fake'), { status: 'RESOLVED' }));
});

// ============================================================================
// 14. REVIEWS
// ============================================================================
it('Reviews', 'public can read reviews; client direct write denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'reviews', 'rev_101'), {
      productId: 'prod_1',
      buyerId: 'buyer_1',
      rating: 5,
      comment: 'Authentic headphones, fast dispatch!',
    });
  });

  const dbPub = testEnv.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(dbPub, 'reviews', 'rev_101')));
  await assertFails(setDoc(doc(dbPub, 'reviews', 'rev_fake'), { rating: 5 }));
});

// ============================================================================
// 15. NOTIFICATIONS
// ============================================================================
it('Notifications', 'recipient can read and update read flag; create/delete denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'notifications', 'notif_101'), {
      userId: 'buyer_1',
      title: 'Order Dispatched',
      read: false,
    });
  });

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertSucceeds(getDoc(doc(dbBuyer, 'notifications', 'notif_101')));
  await assertSucceeds(updateDoc(doc(dbBuyer, 'notifications', 'notif_101'), { read: true }));
  await assertFails(setDoc(doc(dbBuyer, 'notifications', 'notif_hack'), { title: 'Hack' }));
  await assertFails(deleteDoc(doc(dbBuyer, 'notifications', 'notif_101')));
});

// ============================================================================
// 16. AUDIT LOG
// ============================================================================
it('AuditLog', 'admin can read; client direct write strictly denied', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'auditLog', 'log_101'), {
      action: 'APPROVE_PAYOUT',
      actorUid: 'admin_1',
      timestamp: new Date().toISOString(),
    });
  });

  const dbAdmin = testEnv.authenticatedContext('admin_1', { role: 'admin' }).firestore();
  await assertSucceeds(getDoc(doc(dbAdmin, 'auditLog', 'log_101')));

  const dbBuyer = testEnv.authenticatedContext('buyer_1', { role: 'buyer' }).firestore();
  await assertFails(getDoc(doc(dbBuyer, 'auditLog', 'log_101')));
  await assertFails(setDoc(doc(dbBuyer, 'auditLog', 'log_hack'), { action: 'HACK' }));
});

// ============================================================================
// RUNNER
// ============================================================================
async function runAll() {
  console.log('Initializing Firestore Rules Test Environment...');
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules,
    },
  });

  let passed = 0;
  let failed = 0;

  console.log(`\nExecuting ${tests.length} Firestore Security Rules Test Cases across 16 Collections:\n`);

  for (const t of tests) {
    try {
      await t.fn();
      passed++;
      console.log(`  ✓ [${t.category}] ${t.name}`);
    } catch (err: any) {
      failed++;
      console.error(`  ✗ [${t.category}] ${t.name}:`, err.message);
    }
  }

  await testEnv.cleanup();

  console.log(`\n---------------------------------------------------------`);
  console.log(`Firestore Rules Test Suite: ${passed} passed, ${failed} failed (Total: ${tests.length})`);
  console.log(`---------------------------------------------------------\n`);

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runAll().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
