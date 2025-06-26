import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://factory-info-portal.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: currentDate
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: currentDate
  },
  {
    url: '/projects',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: currentDate
  },
  {
    url: '/awards',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: currentDate
  },
  {
    url: '/management',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: currentDate
  },
  {
    url: '/e-auction',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: currentDate
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: currentDate
  },
  {
    url: '/reports',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: currentDate
  },
  {
    url: '/news',
    changefreq: 'daily',
    priority: '0.9',
    lastmod: currentDate
  }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log(`📄 Generated sitemap with ${pages.length} pages`);
}

generateSitemap(); 