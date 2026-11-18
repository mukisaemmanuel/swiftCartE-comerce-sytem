import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export type ErrorCode =
  | 'INVALID_ARGUMENT'
  | 'UNAUTHENTICATED'
  | 'PERMISSION_DENIED'
  | 'NOT_FOUND'
  | 'ALREADY_EXISTS'
  | 'FAILED_PRECONDITION'
  | 'RESOURCE_EXHAUSTED'
  | 'INTERNAL'
  | 'UNAVAILABLE'
  | 'PAYMENT_FAILED'
  | 'OTP_INVALID'
  | 'OTP_EXPIRED'
  | 'OTP_LOCKED'
  | 'STATE_TRANSITION_INVALID'
  | (string & {});

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly details?: unknown;

  constructor(
    statusCode: number,
    code: ErrorCode,
    message: string,
    details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  static badRequest(message: string, code: ErrorCode = 'INVALID_ARGUMENT', details?: unknown) {
    return new AppError(400, code, message, details);
  }

  static unauthorized(message: string = 'Authentication required', code: ErrorCode = 'UNAUTHENTICATED') {
    return new AppError(401, code, message);
  }

  static forbidden(message: string = 'Insufficient permissions', code: ErrorCode = 'PERMISSION_DENIED') {
    return new AppError(403, code, message);
  }

  static notFound(message: string = 'Resource not found', code: ErrorCode = 'NOT_FOUND') {
    return new AppError(404, code, message);
  }

  static conflict(message: string = 'Resource conflict', code: ErrorCode = 'ALREADY_EXISTS') {
    return new AppError(409, code, message);
  }

  static failedPrecondition(message: string, code: ErrorCode = 'FAILED_PRECONDITION') {
    return new AppError(412, code, message);
  }

  static tooManyRequests(message: string = 'Rate limit exceeded', code: ErrorCode = 'RESOURCE_EXHAUSTED') {
    return new AppError(429, code, message);
  }

  static internal(message: string = 'Internal server error', code: ErrorCode = 'INTERNAL') {
    return new AppError(500, code, message);
  }

  static unavailable(message: string = 'Service temporarily unavailable', code: ErrorCode = 'UNAVAILABLE') {
    return new AppError(503, code, message);
  }
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (res.headersSent) {
    return _next(err);
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
        ...(err.details ? { details: err.details } : {}),
      },
    });
  }

  if (err instanceof ZodError) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of err.issues) {
      const key = issue.path.join('.') || 'body';
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return res.status(400).json({
      success: false,
      error: {
        code: 'INVALID_ARGUMENT',
        message: 'Validation failed for request data',
        details: fieldErrors,
      },
    });
  }

  const errObj =
    typeof err === 'object' && err !== null ? (err as { statusCode?: unknown; code?: unknown; message?: unknown }) : {};
  const statusCode = typeof errObj.statusCode === 'number' ? errObj.statusCode : 500;
  const message =
    statusCode < 500
      ? typeof errObj.message === 'string' && errObj.message
        ? errObj.message
        : 'Client error'
      : 'Internal server error';
  const code =
    typeof errObj.code === 'string' && errObj.code
      ? errObj.code
      : statusCode === 404
        ? 'NOT_FOUND'
        : 'INTERNAL';

  if (statusCode >= 500) {
    console.error('[UnhandledError]', err);
  }

  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
    },
  });
}
