// Locations Configuration for AnyBody Paddlesports
export interface Location {
  id: string;
  name: string;
  displayName: string;
  slug: string;
  address?: string;
  description?: string;
  active: boolean;
}

export const LOCATIONS: Location[] = [
  {
    id: 'Tualatin',
    name: 'Tualatin Community Park',
    displayName: 'Tualatin',
    slug: 'tualatin',
    address: '8515 SW Tualatin Rd, Tualatin, OR 97062',
    description: 'Urban paddleboarding in beautiful Biscayne Bay',
    active: true,
  },
  {
    id: 'silverton-reservoir',
    name: 'Silverton Reservoir',
    displayName: 'Silverton Reservoir',
    slug: 'silverton',
    address: '15074 Huiras Ln NE, Silverton, OR 97381',
    description: 'Pristine waters and mangrove exploration',
    active: true,
  },
  {
    id: 'estacada',
    name: 'North Fork Estacada Reservoir',
    displayName: 'Estacada',
    slug: 'estacada',
    address: 'North Fork Estacada Reservoir',
    description: 'Urban waterways and beach access',
    active: true,
  },
];

// Helper functions
export const getActiveLocations = (): Location[] => {
  return LOCATIONS.filter((location) => location.active);
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return LOCATIONS.find((location) => location.slug === slug);
};

export const getLocationById = (id: string): Location | undefined => {
  return LOCATIONS.find((location) => location.id === id);
};

// For use in components - returns just the names for dropdowns
export const getLocationNames = (): string[] => {
  return getActiveLocations().map((location) => location.name);
};

// For generating event type slugs
export const generateEventSlug = (
  locationSlug: string,
  eventName: string,
): string => {
  const cleanEventName = eventName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return `${locationSlug}-${cleanEventName}`;
};
