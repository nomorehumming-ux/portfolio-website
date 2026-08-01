// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nomorehumming-ux.github.io',
  base: '/portfolio-website',
  integrations: [react()],
  vite: {
    build: {
      // Lightning CSS (Vite's default CSS minifier) drops the unprefixed
      // `backdrop-filter` declaration when a `-webkit-backdrop-filter`
      // fallback is also present, breaking the nav blur in Chrome/Firefox
      // on the built site. esbuild doesn't have this bug.
      cssMinify: 'esbuild',
    },
  },
});
