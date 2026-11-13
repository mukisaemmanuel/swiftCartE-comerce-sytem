import { describe, it, expect } from 'vitest';
import { getBreakpoint } from '../src/hooks/useBreakpoint';

describe('useBreakpoint Logic', () => {
  it('switches breakpoints at exact pixel boundaries', () => {
    // Mobile: < 768px
    expect(getBreakpoint(320)).toBe('mobile');
    expect(getBreakpoint(360)).toBe('mobile');
    expect(getBreakpoint(390)).toBe('mobile');
    expect(getBreakpoint(430)).toBe('mobile');
    expect(getBreakpoint(767)).toBe('mobile');

    // Tablet: 768px - 1023px
    expect(getBreakpoint(768)).toBe('tablet');
    expect(getBreakpoint(834)).toBe('tablet');
    expect(getBreakpoint(1023)).toBe('tablet');

    // Desktop: >= 1024px
    expect(getBreakpoint(1024)).toBe('desktop');
    expect(getBreakpoint(1280)).toBe('desktop');
    expect(getBreakpoint(1440)).toBe('desktop');
    expect(getBreakpoint(1920)).toBe('desktop');
  });
});
