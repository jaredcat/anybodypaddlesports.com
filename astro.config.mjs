import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      // Filter out admin and API routes from sitemap
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/api/') &&
        !page.includes('/_astro/'),

      // Set priority and change frequency for different page types
      serialize(item) {
        // Homepage gets highest priority
        if (item.url.endsWith('/') || item.url.endsWith('/index.html')) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
          item.lastmod = new Date();
        }
        // Key service pages get high priority
        else if (item.url.includes('/book') || item.url.includes('/contact')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
          item.lastmod = new Date();
        }
        // Location and service pages
        else if (
          item.url.includes('/locations') ||
          item.url.includes('/what-to-expect')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
          item.lastmod = new Date();
        }
        // Default for other pages
        else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }

        return item;
      },
    }),
  ],

  // Use Vercel adapter for hybrid rendering
  adapter: vercel(),

  // Enable hybrid mode: static by default, SSR for specific pages
  output: 'hybrid',

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
