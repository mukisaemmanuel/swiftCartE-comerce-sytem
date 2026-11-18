import express from 'express';
import cors from 'cors';
import { errorHandler, AppError } from './core/errors';
import { requireAuth, requireRole } from './core/authMiddleware';
import { validateBody } from './core/validation';
import { standardRateLimiter, sensitiveRateLimiter, publicRateLimiter } from './core/rateLimiter';

import { handleCheckout, checkoutSchema } from './core/checkout';
import { handlePaymentIpn, handlePaymentStatusPoll, handleRefund } from './core/payments';
import {
  handleCreateDispatch,
  createDispatchSchema,
  handleGetBuyerDeliveryCode,
  handleVerifyRiderDeliveryCode,
  verifyCodeSchema,
  handleAdminUnlockDelivery,
  handleListCouriers,
  handleAddCourier,
  addCourierSchema,
  handleListHubs,
} from './core/couriersHubs';
import {
  handleCreateReturnRequest,
  createReturnSchema,
  handleReviewReturn,
  reviewReturnSchema,
  handleCreateDispute,
  createDisputeSchema,
} from './core/returnsDisputes';
import { releaseEligiblePayoutHolds, approveSellerPayout } from './core/payouts';

export const app = express();

// ---------------------------------------------------------------------------
// 1. GLOBAL MIDDLEWARE
// ---------------------------------------------------------------------------
// Security Headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Request body size limit
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// CORS configuration with allowlist
const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:4173',
  'https://swiftcart.ug',
];

const configuredOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const allowedOrigins = [...new Set([...defaultAllowedOrigins, ...configuredOrigins])];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, server-to-server, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    credentials: true,
  })
);

// ---------------------------------------------------------------------------
// 2. HEALTH & MONITORING ENDPOINTS
// ---------------------------------------------------------------------------
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'HEALTHY',
    service: 'swiftcart-backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/ready', (_req, res) => {
  res.status(200).json({ status: 'READY' });
});

// ---------------------------------------------------------------------------
// 3. CHECKOUT & ORDERS
// ---------------------------------------------------------------------------
app.post(
  '/api/checkout',
  standardRateLimiter,
  requireAuth,
  validateBody(checkoutSchema),
  handleCheckout
);

// ---------------------------------------------------------------------------
// 4. PESAPAL PAYMENTS & IPN
// ---------------------------------------------------------------------------
// Pesapal IPN callback endpoint (Supports both GET and POST per Pesapal docs)
app.get('/api/payments/ipn', handlePaymentIpn);
app.post('/api/payments/ipn', handlePaymentIpn);

// Payment status polling
app.get('/api/payments/status/:orderId', publicRateLimiter, handlePaymentStatusPoll);

// Admin / Dispute refund
app.post('/api/orders/:orderId/refund', requireAuth, requireRole('admin', 'super-admin'), handleRefund);

// ---------------------------------------------------------------------------
// 5. DELIVERIES & 6-DIGIT CODE
// ---------------------------------------------------------------------------
// Dispatch order with courier & generate 6-digit code hash
app.post(
  '/api/deliveries/dispatch',
  standardRateLimiter,
  requireAuth,
  requireRole('seller', 'admin', 'super-admin', 'hub'),
  validateBody(createDispatchSchema),
  handleCreateDispatch
);

// Buyer gets delivery code status for an order
app.get('/api/orders/:orderId/delivery-code', requireAuth, handleGetBuyerDeliveryCode);

// Rider verifies 6-digit delivery code at handover
app.post(
  '/api/deliveries/:deliveryId/verify-code',
  sensitiveRateLimiter,
  requireAuth,
  requireRole('rider', 'admin', 'super-admin', 'hub'),
  validateBody(verifyCodeSchema),
  handleVerifyRiderDeliveryCode
);

// Admin unlock or reissue locked delivery
app.post(
  '/api/admin/deliveries/:deliveryId/unlock',
  requireAuth,
  requireRole('admin', 'super-admin'),
  handleAdminUnlockDelivery
);

// ---------------------------------------------------------------------------
// 6. RETURNS & DISPUTES
// ---------------------------------------------------------------------------
app.post(
  '/api/orders/returns',
  standardRateLimiter,
  requireAuth,
  validateBody(createReturnSchema),
  handleCreateReturnRequest
);

app.post(
  '/api/returns/:returnId/review',
  requireAuth,
  requireRole('seller', 'admin', 'super-admin'),
  validateBody(reviewReturnSchema),
  handleReviewReturn
);

app.post(
  '/api/orders/disputes',
  standardRateLimiter,
  requireAuth,
  validateBody(createDisputeSchema),
  handleCreateDispute
);

// ---------------------------------------------------------------------------
// 7. COURIERS & HUBS
// ---------------------------------------------------------------------------
app.get('/api/couriers', requireAuth, requireRole('seller', 'admin', 'super-admin'), handleListCouriers);
app.post(
  '/api/couriers',
  requireAuth,
  requireRole('seller', 'admin', 'super-admin'),
  validateBody(addCourierSchema),
  handleAddCourier
);
app.get('/api/hubs', publicRateLimiter, handleListHubs);

// ---------------------------------------------------------------------------
// 8. PAYOUTS & COMMISSION (ADMIN)
// ---------------------------------------------------------------------------
app.post(
  '/api/admin/payouts/release-holds',
  requireAuth,
  requireRole('admin', 'super-admin'),
  async (_req, res, next) => {
    try {
      const result = await releaseEligiblePayoutHolds();
      res.status(200).json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  '/api/admin/payouts/:payoutId/approve',
  requireAuth,
  requireRole('admin', 'super-admin'),
  async (req, res, next) => {
    try {
      const payoutId = String(req.params.payoutId);
      const result = await approveSellerPayout(payoutId, req.user!.uid);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
);

// ---------------------------------------------------------------------------
// 9. ERROR HANDLING
// ---------------------------------------------------------------------------
app.use('/api', (_req, _res, next) => {
  next(AppError.notFound('API endpoint not found'));
});

app.use(errorHandler);
