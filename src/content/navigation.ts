import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  { label: "Portfolio", href: "/work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export const footerNavigation: NavigationItem[] = [
  ...navigation,
  { label: "Contact", href: "/contact" },
];
