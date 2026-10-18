import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  { label: "Portfolio", href: "/work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Career Map", href: "/life-in-layers/", external: true },
];

export const footerNavigation: NavigationItem[] = [
  ...navigation,
  { label: "Contact", href: "/contact" },
];
