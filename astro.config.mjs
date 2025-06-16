// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://iamalanrz.com", // Your custom domain
  base: "/", // Set to root as the custom domain points to the project root
  integrations: [mdx(), sitemap()],
});
