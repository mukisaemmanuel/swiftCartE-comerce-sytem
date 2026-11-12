export type UserRole = 'buyer' | 'seller' | 'admin' | 'super-admin' | 'rider' | 'hub';

export interface RouteDefinition {
  path: string;
  name: string;
  role: UserRole;
  designFiles: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    all: string[];
  };
}

