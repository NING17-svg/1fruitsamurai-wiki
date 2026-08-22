import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/how-to-play", labels: { "en-US": "How to play" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/blades-tier-list", labels: { "en-US": "Blades" } },
  { href: "/auras-tier-list", labels: { "en-US": "Auras" } },
  { href: "/fruit-boss-guide", labels: { "en-US": "Fruit Bosses" } },
  { href: "/rebirth-guide", labels: { "en-US": "Rebirth" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/scarecrow-farm-guide", labels: { "en-US": "Scarecrow farm" } },
  { href: "/lucky-roll-guide", labels: { "en-US": "Lucky Roll" } },
  { href: "/creator-group", labels: { "en-US": "Creator group" } },
  { href: "/official-links", labels: { "en-US": "Official links" } },
  { href: "/vs-other-fruit-samurai", labels: { "en-US": "Disambiguation" } },
  { href: "/beginner-tips", labels: { "en-US": "Beginner tips" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}