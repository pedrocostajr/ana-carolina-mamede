import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://carolinamamede.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/obrigado') && !page.includes('/404')
    })
  ]
});
