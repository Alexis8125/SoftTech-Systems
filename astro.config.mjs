import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://alexis8125.github.io',
  base: '/SoftTech-Systems', // Cambia esto por el nombre de tu repositorio
});