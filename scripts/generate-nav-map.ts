import { sellerRoutes } from '../src/routes/seller';
import { adminRoutes } from '../src/routes/admin';
import { superAdminRoutes } from '../src/routes/superAdmin';
import { riderRoutes } from '../src/routes/rider';
import { hubRoutes } from '../src/routes/hub';
import fs from 'fs';
import path from 'path';

const roles = [
  { name: 'seller', routes: sellerRoutes },
  { name: 'admin', routes: adminRoutes },
  { name: 'super-admin', routes: superAdminRoutes },
  { name: 'rider', routes: riderRoutes },
  { name: 'hub', routes: hubRoutes },
];

for (const { name, routes } of roles) {
  console.log(`\n=== ROLE: ${name.toUpperCase()} (${routes.length} routes) ===`);
  const uniquePaths = new Map<string, string>();
  for (const r of routes) {
    const mobileDesign = r.designFiles?.mobile || '';
    uniquePaths.set(r.path, mobileDesign);
  }
  for (const [p, design] of uniquePaths.entries()) {
    console.log(`- ${p} -> ${design}`);
  }
}
