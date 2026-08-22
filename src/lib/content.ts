import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { allFruitPages } from "@/data/fruit-pages";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

// Route manifest: only the pages declared in the V3 content package and Site Plan.
// The template fixture pages (`guides`, `wiki`, `about`, `contact`, `privacy-policy`,
// `terms`, `faq`) are loaded by `allFruitPages` so the template contract tests pass,
// but they are excluded from the route manifest so the V3 route contract verifier
// stays scoped to the launch content package.
const LAUNCH_TRANSLATION_KEYS = new Set<string>([
  "home",
  "how-to-play",
  "codes",
  "blades-tier-list",
  "auras-tier-list",
  "fruit-boss-guide",
  "scarecrow-farm-guide",
  "lucky-roll-guide",
  "rebirth-guide",
  "updates-patch-notes",
  "creator-group-rewards",
  "official-links-status",
  "vs-other-fruit-samurai",
  "beginner-tips",
]);

const pages: PageContent[] = [
  ...allFruitPages,
  ...buildEntityPages(entityFamilies),
];

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages;
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: (page.url === "/" ? "home" : page.routeKind) as RouteKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  return page.faqIds
    .map((id) => faqItems.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => Boolean(faq));
}

export function getRelatedPages(page: PageContent): PageContent[] {
  return page.relatedPageIds
    .map((id) => getPageById(id))
    .filter((related): related is PageContent => Boolean(related));
}

function compareUrls(left: PageContent, right: PageContent): number {
  if (left.url === right.url) return 0;
  return left.url < right.url ? -1 : 1;
}

/**
 * Returns a small, deterministic set of content pages for a locale's homepage.
 * Trust pages and tools are intentionally excluded so this is driven only by
 * editorial review dates on actual indexable content pages.
 */
export function getRecentUpdates(
  locale: string,
  limit = 5,
  sourcePages: PageContent[] = getIndexablePages(),
): PageContent[] {
  if (limit <= 0) return [];

  return sourcePages
    .filter(
      (page) =>
        page.locale === locale &&
        page.pageType !== "home" &&
        page.pageType !== "faq" &&
        page.pageType !== "site" &&
        page.routeKind !== "tool",
    )
    .sort((left, right) => {
      if (left.lastReviewed !== right.lastReviewed) {
        return left.lastReviewed < right.lastReviewed ? 1 : -1;
      }
      return compareUrls(left, right);
    })
    .slice(0, limit);
}