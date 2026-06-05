// Helper for building internal URLs that respect Astro's configured `base`.
// On GitHub Pages the site is served from a sub-path (e.g. /waldpfad-kalchmatt/),
// so every internal link and asset reference must include that prefix.
const base = import.meta.env.BASE_URL;

/**
 * Prefix an absolute site path (e.g. "/pfad/") with the configured base path.
 * Safe against double slashes regardless of how `base` is configured.
 */
export function withBase(path: string): string {
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
