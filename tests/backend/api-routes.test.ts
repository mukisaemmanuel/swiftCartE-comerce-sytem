import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from '../../server/app';

describe('SwiftCart Backend API Routes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Health and System Status', () => {
    it('GET /api/health should return 200 with HEALTHY status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        status: 'HEALTHY',
        service: 'swiftcart-backend',
        version: '1.0.0',
      });
      expect(res.body.timestamp).toBeDefined();
    });

    it('GET /api/ready should return 200 with READY status', async () => {
      const res = await request(app).get('/api/ready');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ status: 'READY' });
    });

    it('should set essential security headers on all responses', async () => {
      const res = await request(app).get('/api/health');
      expect(res.headers['x-content-type-options']).toBe('nosniff');
      expect(res.headers['x-frame-options']).toBe('DENY');
      expect(res.headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    });

    it('GET /api/nonexistent-route should return 404 in standardized error format', async () => {
      const res = await request(app).get('/api/nonexistent-route');
      expect(res.status).toBe(404);
      expect(res.body).toMatchObject({
        success: false,
        error: {
          code: 'NOT_FOUND',
        },
      });
    });
  });

  describe('Authentication Enforcement & Protection', () => {
    it('POST /api/checkout should reject unauthenticated request with 401 UNAUTHENTICATED', async () => {
      const res = await request(app)
        .post('/api/checkout')
        .send({
          items: [{ productId: 'prod-1', quantity: 1 }],
          deliveryType: 'boda',
          paymentMethod: 'pesapal',
        });

      expect(res.status).toBe(401);
      expect(res.body).toMatchObject({
        success: false,
        error: {
          code: 'UNAUTHENTICATED',
        },
      });
    });

    it('POST /api/checkout should reject invalid bearer token with 401', async () => {
      const res = await request(app)
        .post('/api/checkout')
        .set('Authorization', 'Bearer fake-invalid-token')
        .send({
          items: [{ productId: 'prod-1', quantity: 1 }],
          deliveryType: 'boda',
          paymentMethod: 'pesapal',
        });

      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });

    it('GET /api/orders/:orderId/delivery-code should reject unauthenticated request with 401', async () => {
      const res = await request(app).get('/api/orders/order-123/delivery-code');
      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });

    it('POST /api/deliveries/:deliveryId/verify-code should reject unauthenticated request with 401', async () => {
      const res = await request(app)
        .post('/api/deliveries/del-123/verify-code')
        .send({ code: '123456' });

      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });

    it('POST /api/admin/deliveries/:deliveryId/unlock should reject unauthenticated request with 401', async () => {
      const res = await request(app)
        .post('/api/admin/deliveries/del-123/unlock')
        .send({ reason: 'Manual inspection completed' });

      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });

    it('POST /api/orders/returns should reject unauthenticated request with 401', async () => {
      const res = await request(app)
        .post('/api/orders/returns')
        .send({
          orderId: 'ord-123',
          reason: 'Defective item',
          details: 'Item does not turn on',
        });

      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });

    it('POST /api/admin/payouts/:payoutId/approve should reject unauthenticated request with 401', async () => {
      const res = await request(app)
        .post('/api/admin/payouts/payout-123/approve')
        .send({});

      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHENTICATED');
    });
  });

  describe('Pesapal IPN Endpoint', () => {
    it('POST /api/payments/ipn should reject requests missing tracking parameters with 400', async () => {
      const res = await request(app).post('/api/payments/ipn').send({});
      expect(res.status).toBe(400);
      expect(res.body.error).toContain('OrderTrackingId is required');
    });
  });
});
