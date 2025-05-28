// Cal.com Configuration and Types

export interface CalConfig {
  apiBaseUrl: string;
  defaultLayout: string;
  defaultTeam?: string;
}

export interface EventTypeData {
  title: string;
  slug: string;
  length: number;
  description?: string;
  price?: number;
  currency?: string;
  seatsPerTimeSlot?: number;
  minimumBookingNotice?: number;
  locations?: Array<{
    type: string;
    address?: string;
  }>;
  metadata?: Record<string, any>;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export const CAL_CONFIG: CalConfig = {
  apiBaseUrl: 'https://api.cal.com/v1',
  defaultLayout: 'month_view',
  defaultTeam: 'paddlesports',
};

// Helper function to generate Cal.com booking URLs
export function generateCalLink(username: string, eventSlug: string): string {
  return `${username}/${eventSlug}`;
}

// Helper function to create event type data for API calls
export function createEventTypeData(
  location: string,
  eventName: string,
  options: Partial<EventTypeData> = {},
): EventTypeData {
  const title = `${location} - ${eventName}`;
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return {
    title,
    slug,
    length: 60,
    currency: 'USD',
    seatsPerTimeSlot: 6,
    minimumBookingNotice: 24 * 60, // 24 hours in minutes
    locations: [
      {
        type: 'inPerson',
        address: `${location} - Location details will be provided upon booking`,
      },
    ],
    ...options,
  };
}
