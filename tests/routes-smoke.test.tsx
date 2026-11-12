import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { allRoutes, findRouteByPath } from '../src/routes';
import { pathToView, viewToPath } from '../src/App';
import RoutePlaceholder from '../src/components/shared/RoutePlaceholder';

describe('Quality Gate: Route Smoke Tests', () => {
  it('should find every registered route by its path', () => {
    expect(allRoutes.length).toBeGreaterThan(50);

    for (const route of allRoutes) {
      const found = findRouteByPath(route.path);
      expect(found, `Route not found for path: ${route.path}`).toBeDefined();
      expect(found?.path).toBe(route.path);
    }
  });

  it('pathToView and viewToPath should be consistent', () => {
    for (const route of allRoutes) {
      const view = pathToView(route.path);
      expect(view).toBeDefined();
      expect(view.path).toBe(route.path);
      expect(viewToPath(view)).toBe(route.path);
    }
  });

  it('should render RoutePlaceholder for every route without crashing', () => {
    for (const route of allRoutes) {
      const { unmount } = render(
        <RoutePlaceholder route={route} siblingRoutes={[]} />
      );
      unmount();
    }
  });
});
