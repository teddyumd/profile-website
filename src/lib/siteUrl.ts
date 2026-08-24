export function getSiteOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
