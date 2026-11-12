import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { buyerRoutes } from '../src/routes/buyer';
import { BuyerView } from '../src/views/BuyerView';
import { CartProvider } from '../src/context/CartContext';
import { MockAuthRepository } from '../src/data/auth.repository';
import SixDigitCodeInput from '../src/components/shared/SixDigitCodeInput';

describe('Stage 2: Buyer Routes Completeness & Auth', () => {
  it('every buyer route renders a real component without RoutePlaceholder', () => {
    // There are 80 buyer routes in buyerRoutes
    expect(buyerRoutes.length).toBeGreaterThanOrEqual(70);

    for (const route of buyerRoutes) {
      const { container, unmount } = render(
        <CartProvider>
          <BuyerView route={route} onNavigate={vi.fn()} />
        </CartProvider>
      );

      // Verify RoutePlaceholder was NOT rendered for this route
      const placeholderTitle = container.querySelector('[data-testid="route-placeholder"]');
      expect(
        placeholderTitle,
        `Route ${route.path} rendered RoutePlaceholder but must render a real buyer screen!`
      ).toBeNull();

      // Check text does not say "Screen Under Construction" or "Mockup Preview"
      expect(container.textContent).not.toContain('Screen Under Construction');

      unmount();
    }
  });

  it('SixDigitCodeInput renders 6 distinct inputs and accepts numeric input', () => {
    let code = '123';
    const handleChange = (val: string) => {
      code = val;
    };

    const { rerender } = render(
      <SixDigitCodeInput value={code} onChange={handleChange} />
    );

    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(6);
    expect(inputs[0].getAttribute('value')).toBe('1');
    expect(inputs[1].getAttribute('value')).toBe('2');
    expect(inputs[2].getAttribute('value')).toBe('3');
    expect(inputs[3].getAttribute('value')).toBe('');

    rerender(<SixDigitCodeInput value="123456" onChange={handleChange} />);
    expect(inputs[5].getAttribute('value')).toBe('6');
  });

  it('MockAuthRepository enforces real validation and session management', async () => {
    const authRepo = new MockAuthRepository();

    // 1. Invalid sign in
    await expect(authRepo.signIn('', '123456')).rejects.toThrow();
    await expect(authRepo.signIn('+256772123456', '123')).rejects.toThrow();

    // 2. Valid sign in
    const user = await authRepo.signIn('+256 772 123456', 'pass123');
    expect(user).toBeDefined();
    expect(user.phoneNumber).toBe('+256 772 123456');

    // 3. Current user
    const current = await authRepo.getCurrentUser();
    expect(current?.id).toBe(user.id);

    // 4. Sign out
    await authRepo.signOut();
    const afterSignOut = await authRepo.getCurrentUser();
    expect(afterSignOut).toBeNull();
  });
});
