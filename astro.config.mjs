import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  site: 'https://blog.np2gd.date',
  integrations: [preact()]
});