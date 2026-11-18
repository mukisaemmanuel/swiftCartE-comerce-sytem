import type { AuthenticatedUser } from './core/authMiddleware';

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
