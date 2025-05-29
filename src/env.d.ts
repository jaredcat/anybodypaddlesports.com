/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Existing API keys
  readonly CAL_API_KEY: string;
  readonly CONVERTKIT_API_KEY: string;
  readonly CONVERTKIT_FORM_ID: string;

  // Site Configuration
  readonly SITE_NAME?: string;
  readonly SITE_DESCRIPTION?: string;
  readonly SITE_URL?: string;

  // Contact Information
  readonly CONTACT_PHONE?: string;
  readonly CONTACT_EMAIL?: string;
  readonly CONTACT_ADDRESS?: string;

  // Social Media Links
  readonly SOCIAL_FACEBOOK?: string;
  readonly SOCIAL_INSTAGRAM?: string;
  readonly SOCIAL_YOUTUBE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
