import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // GitHub Pages configuration
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://jaredcat.github.io/anybodypaddlesports.com'
      : 'http://localhost:3000',
  base:
    process.env.NODE_ENV === 'production' ? '/anybodypaddlesports.com/' : '',

  // Output configuration for static site generation
  output: 'static',

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
