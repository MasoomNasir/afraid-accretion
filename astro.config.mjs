import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      // Enable full dev UI classes
      applyBaseStyles: false,
    }),
    react(),
  ],
});
