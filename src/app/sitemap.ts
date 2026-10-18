import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work/caseStudies";
import { absoluteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/life-in-layers/" is a static page under /public rather than a route,
  // but it is a real destination and belongs in the sitemap.
  const routes = ["", "/work", "/about", "/contact", "/resume", "/life-in-layers/"];
  // No lastModified: it would be build time, not content time, so every
  // redeploy would claim every page had just changed. An absent signal is
  // better than one crawlers learn to distrust.
  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route || "/"),
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/work/${study.slug}`),
    })),
  ];
}
