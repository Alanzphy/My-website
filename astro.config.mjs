// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://alan-z.github.io', // Reemplaza alan-z con tu usuario de GitHub
	base: '/my-website/', // Reemplaza my-website con el nombre de tu repositorio
	integrations: [mdx(), sitemap()],
});
