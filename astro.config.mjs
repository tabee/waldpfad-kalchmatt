// @ts-check
import { defineConfig } from "astro/config";

// Static, mobile-first site for the digital forest learning trail.
// Update `site` once the final domain is known ([Domain Placeholder]).
// `base` may be needed for GitHub Pages project hosting (e.g. "/waldpfad-kalchmatt").
export default defineConfig({
  site: "https://example.org",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  // Keep the public site German.
  i18n: undefined,
});
