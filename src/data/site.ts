import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "+1 Fruit Samurai Wiki",
  brandMark: "FS",
  gameName: "+1 Fruit Samurai",
  domain: "1fruitsamurai.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://1fruitsamurai.wiki").replace(/\/$/, ""),
  description:
    "Unofficial fan wiki and guides for +1 Fruit Samurai on Roblox — codes, blades tier list, auras, fruit bosses, rebirth, lucky rolls, scarecrow farming, and beginner tips.",
  tagline: "Unofficial wiki and guides for +1 Fruit Samurai on Roblox.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "+1 Fruit Samurai Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official Roblox game page",
      href: "https://www.roblox.com/games/121143259662420/1-Fruit-Samurai",
      description: "Roblox listing for +1 Fruit Samurai by Can't Hold It Anymore!.",
    },
    {
      label: "Creator group",
      href: "https://www.roblox.com/communities/918672217",
      description: "Verified creator group for +1 Fruit Samurai codes and rewards.",
    },
  ],
  disclaimer:
    "Unofficial fan wiki. Not affiliated with Roblox or the creator of +1 Fruit Samurai. Game facts cross-referenced against the official Roblox listing and creator group.",
};
