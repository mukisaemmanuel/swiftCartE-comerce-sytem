import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PaymentWaitingPage from '../src/legacy/buyer/PaymentWaitingPage';

describe('DEV-Only UI Guard', () => {
  it('does NOT render simulation buttons or Idempotency Key in production mode (DEV=false)', () => {
    vi.stubEnv('DEV', false);

    render(<PaymentWaitingPage onNavigate={() => {}} />);

    expect(screen.queryByText(/Simulate PIN Entered/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Simulate Failed \/ Cancelled/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Idempotency Key/i)).not.toBeInTheDocument();

    vi.unstubAllEnvs();
  });
});

