import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work/caseStudies";
import { absoluteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact", "/resume"];
  const lastModified = new Date();
  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/work/${study.slug}`),
      lastModified,
    })),
  ];
}
