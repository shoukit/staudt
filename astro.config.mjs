// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Rebuild of the Staudt Hydraulik WordPress/Elementor site (Cloudways staging).
 * Slugs match the predecessor so the pages can replace theirs 1:1.
 */
export default defineConfig({
  site: 'https://staudt-hydraulik.de',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
