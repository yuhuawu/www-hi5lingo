// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn", "zh-tw"],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});