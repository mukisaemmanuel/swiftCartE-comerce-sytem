import { test, expect } from '@playwright/test';
import { runHonestFidelity } from '../../scripts/run-fidelity';

test.describe('Honest Fidelity Audit', () => {
  test('executes fidelity comparison for all screen mockups', async () => {
    test.setTimeout(300000); // 5 minutes
    const res = await runHonestFidelity();
    expect(res.sumTotal).toBeGreaterThan(0);
  });
});
