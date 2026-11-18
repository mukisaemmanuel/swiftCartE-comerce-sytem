import { logger } from './logger';
import { AppError } from './errors';

export interface PesapalConfig {
  env?: 'sandbox' | 'live';
  consumerKey?: string;
  consumerSecret?: string;
  ipnId?: string;
}

export interface PesapalSubmitOrderParams {
  merchantReference: string;
  amountUGX: number;
  description: string;
  callbackUrl: string;
  notificationId?: string;
  billingAddress: {
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
  };
}

export interface PesapalSubmitOrderResult {
  orderTrackingId: string;
  merchantReference: string;
  redirectUrl: string;
  status: string;
}

export interface PesapalTransactionStatus {
  orderTrackingId: string;
  paymentMethod: string;
  amount: number;
  currency: string;
  statusCode: number; // 0=INVALID, 1=COMPLETED, 2=FAILED, 3=REVERSED
  paymentStatusDescription: string;
  confirmationCode?: string;
  paymentAccount?: string;
  merchantReference?: string;
  message?: string;
}

export interface PesapalRefundParams {
  confirmationCode: string;
  amountUGX: number;
  username: string;
  remarks: string;
}

export interface PesapalRefundResult {
  status: string;
  message: string;
}

interface PesapalAuthApiResponse {
  token?: string;
  expiryDate?: string;
}

interface PesapalIpnApiResponse {
  ipn_id?: string;
  ipnId?: string;
  url?: string;
}

interface PesapalSubmitOrderApiResponse {
  order_tracking_id?: string;
  merchant_reference?: string;
  redirect_url?: string;
  status?: string | number;
}

interface PesapalTransactionStatusApiResponse {
  payment_method?: string;
  amount?: number | string;
  currency?: string;
  status_code?: number | string;
  payment_status_description?: string;
  confirmation_code?: string;
  payment_account?: string;
  merchant_reference?: string;
  message?: string;
}

interface PesapalRefundApiResponse {
  status?: string | number;
  message?: string;
}

export class PesapalClient {
  private config: PesapalConfig;
  private cachedToken: { token: string; expiresAt: number } | null = null;

  constructor(config?: PesapalConfig) {
    this.config = config || {};
  }

  private getEnv(): 'sandbox' | 'live' {
    return this.config.env || (process.env.PESAPAL_ENV === 'live' ? 'live' : 'sandbox');
  }

  public getBaseUrl(): string {
    return this.getEnv() === 'live'
      ? 'https://pay.pesapal.com/v3'
      : 'https://cybqa.pesapal.com/pesapalv3';
  }

  private getConsumerKey(): string {
    const key = this.config.consumerKey || process.env.PESAPAL_CONSUMER_KEY;
    if (!key) {
      throw AppError.internal('Missing PESAPAL_CONSUMER_KEY in configuration/secrets');
    }
    return key;
  }

  private getConsumerSecret(): string {
    const secret = this.config.consumerSecret || process.env.PESAPAL_CONSUMER_SECRET;
    if (!secret) {
      throw AppError.internal('Missing PESAPAL_CONSUMER_SECRET in configuration/secrets');
    }
    return secret;
  }

  public async getAuthToken(): Promise<string> {
    const now = Date.now();
    // Cache token until 5 minutes before expiration
    if (this.cachedToken && this.cachedToken.expiresAt > now + 300000) {
      return this.cachedToken.token;
    }

    const key = this.getConsumerKey();
    const secret = this.getConsumerSecret();
    const url = `${this.getBaseUrl()}/api/Auth/RequestToken`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          consumer_key: key,
          consumer_secret: secret,
        }),
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => '');
        logger.error('[Pesapal] Auth request failed', undefined, { status: response.status, details: errText });
        throw AppError.internal(`Pesapal authentication failed: status ${response.status}`);
      }

      const data = (await response.json()) as PesapalAuthApiResponse;
      if (!data.token) {
        throw AppError.internal('Pesapal auth returned response without token');
      }

      const expiryMs = data.expiryDate ? new Date(data.expiryDate).getTime() : now + 3600000;
      this.cachedToken = {
        token: data.token,
        expiresAt: expiryMs,
      };

      return data.token;
    } catch (err: unknown) {
      if (err instanceof AppError) throw err;
      logger.error('[Pesapal] Network error during authentication', err);
      throw AppError.unavailable('Pesapal service currently unreachable');
    }
  }

  public async registerIpn(
    callbackUrl: string,
    notificationType: 'GET' | 'POST' = 'GET'
  ): Promise<{ ipnId: string; url: string }> {
    const token = await this.getAuthToken();
    const url = `${this.getBaseUrl()}/api/URLSetup/RegisterIPN`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        url: callbackUrl,
        ipn_notification_type: notificationType,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      logger.error('[Pesapal] IPN registration failed', undefined, { status: response.status, details: errText });
      throw AppError.internal(`Failed to register IPN with Pesapal: status ${response.status}`);
    }

    const data = (await response.json()) as PesapalIpnApiResponse;
    const ipnId = data.ipn_id || data.ipnId;
    if (!ipnId) {
      throw AppError.internal('Pesapal IPN registration response did not contain ipn_id');
    }

    return { ipnId, url: data.url || callbackUrl };
  }

  public async submitOrder(params: PesapalSubmitOrderParams): Promise<PesapalSubmitOrderResult> {
    const token = await this.getAuthToken();
    const notificationId = params.notificationId || this.config.ipnId || process.env.PESAPAL_IPN_ID;

    if (!notificationId) {
      throw AppError.internal('Missing Pesapal notificationId / PESAPAL_IPN_ID');
    }

    const payload = {
      id: params.merchantReference,
      currency: 'UGX',
      amount: params.amountUGX,
      description: params.description || `SwiftCart Order ${params.merchantReference}`,
      callback_url: params.callbackUrl,
      notification_id: notificationId,
      billing_address: {
        email_address: params.billingAddress.emailAddress || 'customer@swiftcart.ug',
        phone_number: params.billingAddress.phoneNumber || '',
        country_code: 'UG',
        first_name: params.billingAddress.firstName || 'SwiftCart Buyer',
        last_name: params.billingAddress.lastName || '',
      },
    };

    const url = `${this.getBaseUrl()}/api/Transactions/SubmitOrderRequest`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        logger.error('[Pesapal] Order submission failed', undefined, { status: response.status });
        throw AppError.badRequest(`Pesapal order submission rejected: status ${response.status}`);
      }

      const data = (await response.json()) as PesapalSubmitOrderApiResponse;
      if (!data.order_tracking_id || !data.redirect_url) {
        throw AppError.internal('Pesapal response missing order_tracking_id or redirect_url');
      }

      return {
        orderTrackingId: data.order_tracking_id,
        merchantReference: data.merchant_reference || params.merchantReference,
        redirectUrl: data.redirect_url,
        status: String(data.status || '200'),
      };
    } catch (err: unknown) {
      if (err instanceof AppError) throw err;
      logger.error('[Pesapal] Network error submitting order', err);
      throw AppError.unavailable('Pesapal service currently unreachable');
    }
  }

  public async getTransactionStatus(orderTrackingId: string): Promise<PesapalTransactionStatus> {
    const token = await this.getAuthToken();
    const url = `${this.getBaseUrl()}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(
      orderTrackingId
    )}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        logger.error('[Pesapal] GetTransactionStatus failed', undefined, {
          status: response.status,
          orderTrackingId,
        });
        throw AppError.badRequest(`Pesapal transaction query failed: status ${response.status}`);
      }

      const data = (await response.json()) as PesapalTransactionStatusApiResponse;

      return {
        orderTrackingId,
        paymentMethod: data.payment_method || '',
        amount: Number(data.amount || 0),
        currency: data.currency || 'UGX',
        statusCode: Number(data.status_code || 0),
        paymentStatusDescription: String(data.payment_status_description || '').toUpperCase(),
        confirmationCode: data.confirmation_code,
        paymentAccount: data.payment_account,
        merchantReference: data.merchant_reference,
        message: data.message,
      };
    } catch (err: unknown) {
      if (err instanceof AppError) throw err;
      logger.error('[Pesapal] Network error querying transaction status', err, { orderTrackingId });
      throw AppError.unavailable('Pesapal service currently unreachable');
    }
  }

  public async requestRefund(params: PesapalRefundParams): Promise<PesapalRefundResult> {
    const token = await this.getAuthToken();
    const url = `${this.getBaseUrl()}/api/Transactions/RefundRequest`;

    const payload = {
      confirmation_code: params.confirmationCode,
      amount: params.amountUGX.toFixed(2),
      username: params.username,
      remarks: params.remarks,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        logger.error('[Pesapal] Refund request rejected', undefined, { status: response.status });
        throw AppError.badRequest(`Pesapal refund failed: status ${response.status}`);
      }

      const data = (await response.json()) as PesapalRefundApiResponse;
      return {
        status: String(data.status || 'SUCCESS'),
        message: data.message || 'Refund request processed',
      };
    } catch (err: unknown) {
      if (err instanceof AppError) throw err;
      logger.error('[Pesapal] Network error during refund request', err);
      throw AppError.unavailable('Pesapal refund service unreachable');
    }
  }
}

export const pesapalClient = new PesapalClient();
