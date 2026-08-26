export type Metric = {
  value: string;
  label: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ExpertiseArea = {
  title: string;
  summary: string;
  topics: string[];
};

export type CareerEntry = {
  period: string;
  title: string;
  organization: string;
  scope?: string;
  location?: string;
  description: string;
  highlights?: string[];
  concurrent?: boolean;
};

export type CaseStudy = {
  slug: string;
  number: string;
  label: string;
  title: string;
  /** Short title for <title> and search results. Falls back to `title`. */
  metaTitle?: string;
  summary: string;
  /** 120-160 char description for search results. Falls back to `summary`. */
  metaDescription?: string;
  deck: string;
  context?: string;
  approach?: string;
  enabled?: string;
  role: string;
  facts: { label: string; value: string }[];
  challengeHeading: string;
  challenge: string;
  roleHeading: string;
  roleDescription: string;
  contributions: string[];
  supportingDomains?: string[];
  impact: { label: string; detail: string }[];
  lesson: string;
  featured: boolean;
  visual?: {
    type: "image" | "text" | "diagram";
    src?: string;
    alt?: string;
    caption: string;
    diagram?: "digital-health" | "utility" | "eadrasha";
  };
};

export type Project = {
  name: string;
  title: string;
  problem: string;
  built: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Native-script name, where the product has one. */
  nativeName?: string;
  nameMeaning?: string;
  tagline: string;
  status: string;
  /** The real-world problem, stated without product language. */
  problem: string;
  /** What the system does differently, and why that matters. */
  approach: string;
  uses: string[];
  stack: { label: string; items: string[] }[];
};
