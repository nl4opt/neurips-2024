import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nl4opt.github.io',
  base: '/neurips-2023',
  jsx: 'react',
  integrations: [
    react(),
  ],
  dependencies: ['@astrojs/renderer-react'],
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
  ],
});
