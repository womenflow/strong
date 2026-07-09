import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your deployed URL (Netlify address or custom domain).
export default defineConfig({
  site: 'https://bubblelime-strong-home.netlify.app',
  integrations: [sitemap()],
});
