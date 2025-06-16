// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Alanzphy.github.io", // Updated with your GitHub username
  base: "/My-website/", // Updated with your repository name
  integrations: [mdx(), sitemap()],
});
