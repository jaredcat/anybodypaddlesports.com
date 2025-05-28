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
    id: 'miami',
    name: 'Miami',
    displayName: 'Miami',
    slug: 'miami',
    address: 'Biscayne Bay, Miami, FL',
    description: 'Urban paddleboarding in beautiful Biscayne Bay',
    active: true,
  },
  {
    id: 'key-largo',
    name: 'Key Largo',
    displayName: 'Key Largo',
    slug: 'key-largo',
    address: 'Key Largo, FL',
    description: 'Pristine waters and mangrove exploration',
    active: true,
  },
  {
    id: 'fort-lauderdale',
    name: 'Fort Lauderdale',
    displayName: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    address: 'Fort Lauderdale, FL',
    description: 'Urban waterways and beach access',
    active: true,
  },
  // Add new locations here:
  // {
  //   id: 'naples',
  //   name: 'Naples',
  //   displayName: 'Naples',
  //   slug: 'naples',
  //   address: 'Naples, FL',
  //   description: 'Calm waters and wildlife viewing',
  //   active: false, // Set to true when ready to launch
  // },
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
