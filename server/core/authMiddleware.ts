import { Request, Response, NextFunction } from 'express';
import { DecodedIdToken } from 'firebase-admin/auth';
import { authAdmin } from './firebaseAdmin';
import { AppError } from './errors';

export type UserRole =
  | 'buyer'
  | 'seller'
  | 'admin'
  | 'super-admin'
  | 'rider'
  | 'hub';

export interface AuthenticatedUser {
  uid: string;
  email?: string;
  role: UserRole;
  roles: UserRole[];
  sellerId?: string;
  stationId?: string;
  emailVerified: boolean;
  token: DecodedIdToken;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

/**
 * Normalizes custom claims role string to canonical UserRole
 */
export function normalizeRole(rawRole?: string): UserRole {
  if (!rawRole) return 'buyer';
  const clean = rawRole.toLowerCase().trim().replace(/_/g, '-');
  if (clean === 'super-admin') return 'super-admin';
  if (clean === 'admin') return 'admin';
  if (clean === 'seller') return 'seller';
  if (clean === 'rider') return 'rider';
  if (clean === 'hub' || clean === 'hub-agent') return 'hub';
  return 'buyer';
}

/**
 * Authenticates requests via Firebase ID Token (Bearer token).
 * Strictly verifies against Firebase Auth Admin with NO mock bypasses.
 */
export async function requireAuth(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(AppError.unauthorized('Missing or malformed Authorization header. Bearer token required.'));
    }

    const idToken = authHeader.split('Bearer ')[1]?.trim();
    if (!idToken) {
      return next(AppError.unauthorized('Bearer token is empty.'));
    }

    let decodedToken: DecodedIdToken;
    try {
      decodedToken = await authAdmin.verifyIdToken(idToken);
    } catch (err: any) {
      const msg = err?.message || 'Invalid or expired Firebase ID token';
      return next(AppError.unauthorized(`Authentication failed: ${msg}`));
    }

    const primaryRole = normalizeRole(decodedToken.role as string | undefined);
    const rawRoles = Array.isArray(decodedToken.roles)
      ? (decodedToken.roles as string[])
      : [decodedToken.role as string].filter(Boolean);

    const roles: UserRole[] = Array.from(new Set(rawRoles.map(normalizeRole)));
    if (!roles.includes(primaryRole)) {
      roles.push(primaryRole);
    }

    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      role: primaryRole,
      roles,
      sellerId: decodedToken.sellerId as string | undefined,
      stationId: (decodedToken.stationId || decodedToken.hubId) as string | undefined,
      emailVerified: !!decodedToken.email_verified,
      token: decodedToken,
    };

    next();
  } catch (error) {
    next(error);
  }
}

/**
 * Middleware that restricts an endpoint to users with specific roles.
 * A user with 'super-admin' always satisfies 'admin' role requirements.
 */
export function requireRole(...allowedRoles: (UserRole | string)[]) {
  const normalizedAllowed = allowedRoles.map((r) => normalizeRole(String(r)));

  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(AppError.unauthorized('Authentication required'));
    }

    // Super-admin has administrative rights for any admin-required endpoint
    const isSuperAdmin = req.user.role === 'super-admin' || req.user.roles.includes('super-admin');
    const matchesRole = req.user.roles.some((r) => normalizedAllowed.includes(r));
    const adminSufficient = isSuperAdmin && normalizedAllowed.includes('admin');

    if (!matchesRole && !adminSufficient) {
      return next(
        AppError.forbidden(
          `Insufficient permissions. Requires one of [${normalizedAllowed.join(', ')}], user has [${req.user.roles.join(', ')}]`
        )
      );
    }

    next();
  };
}
