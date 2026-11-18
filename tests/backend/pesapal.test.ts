import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PesapalClient } from '../../server/core/pesapal';
import { AppError } from '../../server/core/errors';

describe('Pesapal 3.0 Client Unit & Integration Tests', () => {
  const originalFetch = global.fetch;
  let client: PesapalClient;

  beforeEach(() => {
    client = new PesapalClient({
      env: 'sandbox',
      consumerKey: 'test_consumer_key_123',
      consumerSecret: 'test_consumer_secret_456',
      ipnId: 'ipn-uuid-789',
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('initializes with correct sandbox and production base URLs', () => {
    expect(client.getBaseUrl()).toBe('https://cybqa.pesapal.com/pesapalv3');

    const liveClient = new PesapalClient({ env: 'live' });
    expect(liveClient.getBaseUrl()).toBe('https://pay.pesapal.com/v3');
  });

  it('retrieves and caches auth Bearer token', async () => {
    let fetchCalls = 0;
    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      fetchCalls++;
      if (url.includes('/api/Auth/RequestToken')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            token: 'mock_jwt_token_abc',
            expiryDate: new Date(Date.now() + 3600 * 1000).toISOString(),
            status: '200',
          }),
        };
      }
      return { ok: false, status: 404 };
    });

    const token1 = await client.getAuthToken();
    expect(token1).toBe('mock_jwt_token_abc');
    expect(fetchCalls).toBe(1);

    // Second call should return cached token without making another HTTP request
    const token2 = await client.getAuthToken();
    expect(token2).toBe('mock_jwt_token_abc');
    expect(fetchCalls).toBe(1);
  });

  it('submits order request with strict UGX currency and server amount', async () => {
    let capturedBody: any;
    let capturedHeaders: any;

    global.fetch = vi.fn().mockImplementation(async (url: string, opts: any) => {
      if (url.includes('/api/Auth/RequestToken')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            token: 'valid_bearer_token',
            expiryDate: new Date(Date.now() + 3600 * 1000).toISOString(),
          }),
        };
      }
      if (url.includes('/api/Transactions/SubmitOrderRequest')) {
        capturedHeaders = opts.headers;
        capturedBody = JSON.parse(opts.body);
        return {
          ok: true,
          status: 200,
          json: async () => ({
            order_tracking_id: 'tracking-uuid-112233',
            merchant_reference: 'ORD-UG-999',
            redirect_url: 'https://cybqa.pesapal.com/pesapalv3/pay?id=tracking-uuid-112233',
            status: '200',
          }),
        };
      }
      return { ok: false, status: 404 };
    });

    const result = await client.submitOrder({
      merchantReference: 'ORD-UG-999',
      amountUGX: 388500,
      description: 'Order #ORD-UG-999 payment',
      callbackUrl: 'https://swiftcart.ug/checkout-one-flow-payment-waiting',
      billingAddress: {
        emailAddress: 'buyer@example.com',
        phoneNumber: '+256700111222',
        firstName: 'Emmanuel',
        lastName: 'Mukisa',
      },
    });

    expect(capturedHeaders['Authorization']).toBe('Bearer valid_bearer_token');
    expect(capturedBody.currency).toBe('UGX');
    expect(capturedBody.amount).toBe(388500);
    expect(capturedBody.id).toBe('ORD-UG-999');
    expect(capturedBody.notification_id).toBe('ipn-uuid-789');

    expect(result.orderTrackingId).toBe('tracking-uuid-112233');
    expect(result.merchantReference).toBe('ORD-UG-999');
    expect(result.redirectUrl).toContain('tracking-uuid-112233');
  });

  it('queries transaction status and extracts status code and confirmation code', async () => {
    global.fetch = vi.fn().mockImplementation(async (url: string) => {
      if (url.includes('/api/Auth/RequestToken')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({ token: 'mock_token', expiryDate: new Date(Date.now() + 3600000).toISOString() }),
        };
      }
      if (url.includes('/api/Transactions/GetTransactionStatus')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            payment_method: 'MobileMoney',
            amount: 388500,
            currency: 'UGX',
            status_code: 1, // 1 = COMPLETED
            payment_status_description: 'Completed',
            confirmation_code: 'MOMO-REF-8899',
            merchant_reference: 'ORD-UG-999',
          }),
        };
      }
      return { ok: false, status: 404 };
    });

    const status = await client.getTransactionStatus('tracking-uuid-112233');
    expect(status.statusCode).toBe(1);
    expect(status.paymentStatusDescription).toBe('COMPLETED');
    expect(status.confirmationCode).toBe('MOMO-REF-8899');
    expect(status.paymentMethod).toBe('MobileMoney');
    expect(status.amount).toBe(388500);
  });

  it('submits refund request with confirmation code and amount', async () => {
    let capturedRefundBody: any;
    global.fetch = vi.fn().mockImplementation(async (url: string, opts: any) => {
      if (url.includes('/api/Auth/RequestToken')) {
        return {
          ok: true,
          status: 200,
          json: async () => ({ token: 'mock_token', expiryDate: new Date(Date.now() + 3600000).toISOString() }),
        };
      }
      if (url.includes('/api/Transactions/RefundRequest')) {
        capturedRefundBody = JSON.parse(opts.body);
        return {
          ok: true,
          status: 200,
          json: async () => ({
            status: '200',
            message: 'Refund initiated successfully',
          }),
        };
      }
      return { ok: false, status: 404 };
    });

    const refundRes = await client.requestRefund({
      confirmationCode: 'MOMO-REF-8899',
      amountUGX: 388500,
      username: 'admin@swiftcart.ug',
      remarks: 'Customer dispute resolution: returned damaged package',
    });

    expect(capturedRefundBody.confirmation_code).toBe('MOMO-REF-8899');
    expect(capturedRefundBody.amount).toBe('388500.00');
    expect(refundRes.message).toBe('Refund initiated successfully');
  });

  it('throws AppError when auth fails and never exposes secret', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      text: async () => 'Invalid consumer key or secret',
    });

    await expect(client.getAuthToken()).rejects.toThrow(AppError);
  });
});
