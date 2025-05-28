import { SITE_CONFIG } from '@/config/site';

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_CONFIG.url}/sitemap.xml

# Block admin and API routes from crawling
Disallow: /admin/
Disallow: /api/

# Block .astro build artifacts
Disallow: /.astro/

# Allow important pages
Allow: /
Allow: /what-to-expect
Allow: /locations
Allow: /contact
Allow: /book

# Crawl delay for polite crawling
Crawl-delay: 1
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
