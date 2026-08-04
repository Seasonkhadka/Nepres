// Resolves a root-relative /public asset path (e.g. '/images/foo.jpg')
// against Vite's configured base URL. Needed because the site is deployed
// to a GitHub Pages project subpath (/Nepres/), but data files store plain
// root-relative paths that Vite can't rewrite at build time since they're
// runtime strings, not static asset imports.
export function publicUrl(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
