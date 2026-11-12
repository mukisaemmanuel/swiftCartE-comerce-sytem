import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/buyer/HomePage';
import { CartProvider } from '../src/context/CartContext';

describe('Quality Gate: Mobile Home Banner Layout Check', () => {
  const dummyNavigate = vi.fn();

  const widths = [360, 390, 430];

  widths.forEach((width) => {
    it(`renders banner without clipping at ${width}px mobile width`, () => {
      const { container } = render(
        <div style={{ width: `${width}px`, maxWidth: `${width}px`, overflow: 'hidden' }}>
          <CartProvider>
            <HomePage onNavigate={dummyNavigate} />
          </CartProvider>
        </div>
      );

      const heading = screen.getByText('Up to 40% Off Tech');
      expect(heading).toBeInTheDocument();

      // Heading container must have padding and wrap
      const textContainer = heading.closest('div');
      expect(textContainer).not.toBeNull();
      expect(textContainer?.className).toContain('px-4');
      expect(heading.className).toContain('break-words');

      // The container width matches
      expect(container.firstChild).toHaveStyle({ width: `${width}px` });
    });
  });
});

