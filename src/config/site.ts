export const SITE_CONFIG = {
  name: import.meta.env.SITE_NAME || 'AnyBody Paddlesports',
  description:
    import.meta.env.SITE_DESCRIPTION ||
    'Professional paddle board tours and equipment rentals. Experience the beauty of local waterways with certified instructors and top-quality gear.',
  url: import.meta.env.SITE_URL || 'https://anybodypaddlesports.vercel.app',

  contact: {
    phone: import.meta.env.CONTACT_PHONE || '(555) 800-0000',
    email: import.meta.env.CONTACT_EMAIL || 'nick@anybodypaddlesports.com',
    address:
      import.meta.env.CONTACT_ADDRESS || 'Greater Los Angeles Area, California',
  },

  social: {
    facebook:
      import.meta.env.SOCIAL_FACEBOOK ||
      'https://www.facebook.com/profile.php?id=100064883417806',
    instagram:
      import.meta.env.SOCIAL_INSTAGRAM ||
      'https://www.instagram.com/anybodypaddlesports/',
    youtube: import.meta.env.SOCIAL_YOUTUBE || '',
  },
} as const;
