import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
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

  // Build configuration with optimizations
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto', // Inline small CSS files
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  // Image optimization settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false, // Allow large images
      },
    },
  },

  // Vite configuration for development and build optimization
  vite: {
    css: {
      devSourcemap: true,
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      cssCodeSplit: true, // Split CSS by page
      rollupOptions: {
        output: {
          // Optimize chunk splitting
          manualChunks: {
            'cal-embed': ['@/components/LocationBookingSection.astro'],
          },
        },
      },
    },
  },

  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
});
