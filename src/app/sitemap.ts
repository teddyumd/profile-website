import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work/caseStudies";
import { absoluteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact", "/resume"];
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
