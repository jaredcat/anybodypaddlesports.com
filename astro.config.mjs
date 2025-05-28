import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Use Vercel adapter for serverless functions
  adapter: vercel(),

  // Enable SSR for server-side API calls
  output: 'server',

  // Site configuration (will be your Vercel domain)
  site: 'https://anybodypaddlesports.vercel.app', // Update this with your actual Vercel domain

  // Build configuration
  build: {
    assets: 'assets',
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  // Vite configuration for development
  vite: {
    css: {
      devSourcemap: true,
    },
    server: {
      port: 3000,
      host: true,
    },
  },

  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
