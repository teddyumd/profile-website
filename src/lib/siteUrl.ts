const FALLBACK_ORIGIN = "http://localhost:3000";

/**
 * Reads the site origin from the environment.
 *
 * Note the truthiness checks rather than `??`: a variable that exists but is
 * blank (easy to create in a hosting dashboard) is treated as unset, because
 * `new URL("")` throws and would fail the build.
 *
 * Every caller of this module renders on the server, so the unprefixed Vercel
 * variables below are readable. `VERCEL_PROJECT_PRODUCTION_URL` is the stable
 * production domain; `VERCEL_URL` is the per-deployment host used on previews.
 */
function readConfiguredOrigin() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit;

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || process.env.VERCEL_URL?.trim();
  if (vercelHost) return `https://${vercelHost}`;

  return FALLBACK_ORIGIN;
}

export function getSiteOrigin() {
  const configuredOrigin = readConfiguredOrigin();

  let parsedOrigin: URL;
  try {
    parsedOrigin = new URL(configuredOrigin);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be an absolute URL: ${configuredOrigin}`);
  }

  if (parsedOrigin.protocol !== "http:" && parsedOrigin.protocol !== "https:") {
    throw new Error(`NEXT_PUBLIC_SITE_URL must use http or https: ${configuredOrigin}`);
  }

  return parsedOrigin.origin;
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteOrigin()).toString();
}
