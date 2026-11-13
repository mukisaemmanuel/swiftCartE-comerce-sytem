import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { allRoutes, findRouteByPath } from './routes';
import type { RouteDefinition, UserRole } from './routes/types';
import DevRoleSwitcher from './components/dev/DevRoleSwitcher';
import { Icon } from './components/shared/Icon';

// Code-split (lazy) views per role
const BuyerView = lazy(() => import('./views/BuyerView'));
const SellerView = lazy(() => import('./views/SellerView'));
const AdminView = lazy(() => import('./views/AdminView'));
const RiderView = lazy(() => import('./views/RiderView'));
const HubView = lazy(() => import('./views/HubView'));

// Router helper: map pathname to route definition
export const pathToView = (pathname: string): RouteDefinition => {
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';
  const found = findRouteByPath(normalized);
  if (found) return found;

  // Fallback to Home if unknown route
  return (
    allRoutes.find((r) => r.path === '/') || {
      path: '/',
      name: 'SwiftCart Marketplace Home',
      role: 'buyer',
      designFiles: {
        all: ['design/mobile/buyer/home_swiftcart_marketplace_2'],
      },
    }
  );
};

// Router helper: map route definition to pathname
export const viewToPath = (route: RouteDefinition): string => {
  return route.path;
};

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const activeRoute = pathToView(currentPath);

  // User role state (in DEV, defaults to route's role for easy inspection)
  const [userRole, setUserRole] = useState<UserRole>(() => {
    if (import.meta.env.DEV && activeRoute.role) {
      return activeRoute.role;
    }
    return 'buyer';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic navigation
  const navigate = (newPath: string) => {
    if (newPath !== currentPath) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', newPath);
      }
      setCurrentPath(newPath);
      window.scrollTo(0, 0);

      // In DEV: auto-align role when clicking into a role-specific screen
      if (import.meta.env.DEV) {
        const targetRoute = pathToView(newPath);
        if (targetRoute.role && targetRoute.role !== userRole) {
          setUserRole(targetRoute.role);
        }
      }
    }
  };

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    // Navigate to role's primary overview
    const defaultPaths: Record<UserRole, string> = {
      buyer: '/',
      seller: '/seller',
      admin: '/admin',
      'super-admin': '/super-admin',
      rider: '/rider',
      hub: '/hub',
    };
    navigate(defaultPaths[newRole]);
  };

  // Role Guard Check
  const isAuthorized = () => {
    if (activeRoute.role === 'buyer') return true;
    if (userRole === 'super-admin') return true;
    if (userRole === 'admin' && activeRoute.role === 'admin') return true;
    return userRole === activeRoute.role;
  };

  const renderRoleView = () => {
    if (!isAuthorized()) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--d-bg)] text-[var(--d-text-primary)]">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[var(--d-surface)] border border-[var(--d-border)] text-center shadow-xl flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Icon name="lock" className="text-[32px]" />
            </div>
            <h2 className="text-[20px] font-bold">Access Restricted</h2>
            <p className="text-[14px] text-[var(--d-text-secondary)]">
              This screen requires {activeRoute.role} privileges. Your current active role is {userRole}.
            </p>
            {import.meta.env.DEV && (
              <button
                type="button"
                onClick={() => setUserRole(activeRoute.role)}
                className="touch-target px-4 py-2 rounded-xl bg-[#FF8A1F] hover:bg-[#DA3700] text-white text-[14px] font-bold shadow transition-colors"
              >
                Switch to {activeRoute.role} Role (DEV)
              </button>
            )}
          </div>
        </div>
      );
    }

    switch (activeRoute.role) {
      case 'seller':
        return <SellerView route={activeRoute} onNavigate={navigate} />;
      case 'admin':
      case 'super-admin':
        return <AdminView route={activeRoute} onNavigate={navigate} />;
      case 'rider':
        return <RiderView route={activeRoute} onNavigate={navigate} />;
      case 'hub':
        return <HubView route={activeRoute} onNavigate={navigate} />;
      case 'buyer':
      default:
        return <BuyerView route={activeRoute} onNavigate={navigate} />;
    }
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-[var(--d-bg)] text-[var(--d-text-primary)]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#FF8A1F] border-t-transparent rounded-full animate-spin" />
                <span className="text-[14px] font-semibold text-[var(--d-text-secondary)]">
                  Loading SwiftCart Portal...
                </span>
              </div>
            </div>
          }
        >
          {renderRoleView()}
        </Suspense>

        {/* Mock Role Switcher (DEV only) */}
        <DevRoleSwitcher currentRole={userRole} onRoleChange={handleRoleChange} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;

