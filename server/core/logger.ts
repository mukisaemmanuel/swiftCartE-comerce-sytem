export function maskPhoneNumber(phone?: string): string {
  if (!phone) return '';
  const clean = phone.trim();
  if (clean.length < 6) return '***';
  const prefix = clean.slice(0, 4);
  const suffix = clean.slice(-3);
  return `${prefix}*****${suffix}`;
}

export function sanitizeLogData(data: any): any {
  if (data === null || data === undefined) return data;
  if (typeof data !== 'object') return data;

  if (Array.isArray(data)) {
    return data.map(sanitizeLogData);
  }

  const sanitized: Record<string, any> = {};
  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase();
    if (
      lowerKey.includes('authorization') ||
      lowerKey.includes('password') ||
      lowerKey.includes('token') ||
      lowerKey.includes('secret') ||
      lowerKey.includes('consumer_secret') ||
      lowerKey.includes('consumersecret') ||
      lowerKey.includes('otp') ||
      lowerKey.includes('pin') ||
      lowerKey.includes('cvv') ||
      lowerKey.includes('apikey') ||
      lowerKey.includes('api_key')
    ) {
      sanitized[key] = '[REDACTED]';
    } else if (
      lowerKey.includes('phone') ||
      lowerKey.includes('momonumber') ||
      lowerKey.includes('msisdn')
    ) {
      sanitized[key] = typeof value === 'string' ? maskPhoneNumber(value) : '[REDACTED_PHONE]';
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeLogData(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

export const logger = {
  info(message: string, context?: Record<string, any>) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message,
      ...(context ? { context: sanitizeLogData(context) } : {}),
    };
    console.log(JSON.stringify(entry));
  },

  warn(message: string, context?: Record<string, any>) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'WARN',
      message,
      ...(context ? { context: sanitizeLogData(context) } : {}),
    };
    console.warn(JSON.stringify(entry));
  },

  error(message: string, error?: any, context?: Record<string, any>) {
    const entry = {
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      ...(error ? { error: error?.message || String(error), stack: error?.stack } : {}),
      ...(context ? { context: sanitizeLogData(context) } : {}),
    };
    console.error(JSON.stringify(entry));
  },
};
