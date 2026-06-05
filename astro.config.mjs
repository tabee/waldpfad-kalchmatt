// @ts-check
import { defineConfig } from "astro/config";

// Static, mobile-first site for the digital forest learning trail.
// Hosted on GitHub Pages as a project site: https://tabee.github.io/waldpfad-kalchmatt/
// When a custom domain is set up later ([Domain Placeholder]), update `site`
// to that domain and remove `base`.
export default defineConfig({
  site: "https://tabee.github.io",
  base: "/waldpfad-kalchmatt",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  // Keep the public site German.
  i18n: undefined,
});
