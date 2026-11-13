import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('ensures the headline text appears exactly once per active slide without duplicate layers', () => {
    render(
      <CartProvider>
        <HomePage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    // Initial slide: "Up to 40% Off Tech" should appear exactly once
    const slide1Headings = screen.getAllByText('Up to 40% Off Tech');
    expect(slide1Headings).toHaveLength(1);
    expect(screen.queryByText('Nakasero Flagship Sale')).not.toBeInTheDocument();
    expect(screen.queryByText('Nationwide Hub Pickups')).not.toBeInTheDocument();

    // Click dot 2 to switch to slide 2
    const dot2 = screen.getByLabelText('Go to slide 2');
    fireEvent.click(dot2);

    const slide2Headings = screen.getAllByText('Nakasero Flagship Sale');
    expect(slide2Headings).toHaveLength(1);
    expect(screen.queryByText('Up to 40% Off Tech')).not.toBeInTheDocument();
    expect(screen.queryByText('Nationwide Hub Pickups')).not.toBeInTheDocument();

    // Click dot 3 to switch to slide 3
    const dot3 = screen.getByLabelText('Go to slide 3');
    fireEvent.click(dot3);

    const slide3Headings = screen.getAllByText('Nationwide Hub Pickups');
    expect(slide3Headings).toHaveLength(1);
    expect(screen.queryByText('Up to 40% Off Tech')).not.toBeInTheDocument();
    expect(screen.queryByText('Nakasero Flagship Sale')).not.toBeInTheDocument();
  });
});

