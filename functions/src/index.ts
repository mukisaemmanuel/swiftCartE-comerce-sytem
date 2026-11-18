import { onRequest } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { defineSecret, defineString } from 'firebase-functions/params';
import { app } from '../../server/app';
import { releaseEligiblePayoutHolds } from '../../server/core/payouts';

// Secret definitions for Cloud Functions Secret Manager
export const pesapalConsumerKey = defineSecret('PESAPAL_CONSUMER_KEY');
export const pesapalConsumerSecret = defineSecret('PESAPAL_CONSUMER_SECRET');
export const pesapalIpnId = defineSecret('PESAPAL_IPN_ID');

export const pesapalEnv = defineString('PESAPAL_ENV', { default: 'sandbox' });
export const appUrl = defineString('APP_URL', { default: 'https://swiftcart.ug' });

// 1. HTTP API Cloud Function
export const api = onRequest(
  {
    region: 'us-central1',
    cors: false, // Handled internally by server cors middleware with allowlist
    timeoutSeconds: 60,
    memory: '256MiB',
    secrets: [pesapalConsumerKey, pesapalConsumerSecret, pesapalIpnId],
  },
  app
);

// 2. Scheduled Job: Release Eligible Payout Holds (Runs hourly)
export const scheduledPayoutHoldRelease = onSchedule(
  {
    schedule: '0 * * * *',
    region: 'us-central1',
    timeZone: 'Africa/Kampala',
    retryCount: 2,
    secrets: [pesapalConsumerKey, pesapalConsumerSecret, pesapalIpnId],
  },
  async () => {
    console.log('[Scheduler] Executing scheduled payout hold release...');
    const result = await releaseEligiblePayoutHolds();
    console.log(`[Scheduler] Payout hold release finished: ${result.releasedCount} holds processed.`);
    return result;
  }
);
