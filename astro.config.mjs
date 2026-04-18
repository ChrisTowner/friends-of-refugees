import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teritowner.ca',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
