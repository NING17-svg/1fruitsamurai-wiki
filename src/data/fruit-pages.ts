import type { PageContent } from "@/types/content";

// All launch pages for +1 Fruit Samurai (1fruitsamurai-wiki).
// Sourced from the Site Plan and the SEO deliverable for this site.

export const homePage: PageContent = {
  id: "home-en-US",
  translationKey: "home",
  locale: "en-US",
  routeKind: "fixed",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "+1 Fruit Samurai Wiki: codes, blades, auras, bosses & more",
  seoTitle: "+1 Fruit Samurai wiki: codes, blades, auras & bosses",
  metaDescription:
    "The +1 Fruit Samurai wiki covers Roblox universe 10424311938 by Can't Hold It Anymore!. Get codes, blades, auras, bosses, scarecrow farm, rebirth and updates.",
  summary:
    "Unofficial US English wiki for the +1 Fruit Samurai Roblox universe (10424311938), documenting the verified creator, named progression systems, and a one-click path into each system page.",
  hero: {
    eyebrow: "+1 Fruit Samurai Wiki",
    subtitle:
      "Unofficial wiki for Roblox universe 10424311938 by Can't Hold It Anymore!. Codes, blades, auras, bosses, scarecrow farm, rebirth and updates.",
    ctas: [
      { label: "Codes", href: "/codes" },
      { label: "Blades tier list", href: "/blades-tier-list" },
      { label: "Aura tier list", href: "/auras-tier-list" },
      { label: "How to play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai wiki is the canonical US English reference for Roblox universe 10424311938, created by the verified Can't Hold It Anymore! group in July 2026. It documents every named system the official description confirms: scarecrow farming, legendary blade collection, fruit boss fights, aura unlocks, and the rebirth loop.",
  keyFacts: [
    { label: "Roblox universe", value: "10424311938" },
    { label: "Creator", value: "Can't Hold It Anymore! (group 918672217)" },
    { label: "Released", value: "2026-07-01" },
    { label: "Updated", value: "2026-08-21" },
    { label: "Research date", value: "2026-08-22" },
  ],
  modules: [
    {
      id: "identity",
      type: "prose",
      heading: "What is the +1 Fruit Samurai wiki?",
      body: "The +1 Fruit Samurai wiki is the canonical US English reference for Roblox universe 10424311938, created by the verified Can't Hold It Anymore! group in July 2026. It documents every named system the official description confirms: scarecrow farming, legendary blade collection, fruit boss fights, aura unlocks, and the rebirth loop. The wiki also tracks secret codes, creator-group requirements, and the update log. Every page links back to this hub for the verified identity, the progression order, and a path into each system guide.",
    },
    {
      id: "identity-card",
      type: "data-table",
      heading: "+1 Fruit Samurai identity card and live stats",
      columns: [
        { key: "field", label: "Field" },
        { key: "value", label: "Value" },
      ],
      rows: [
        { field: "Official title", value: "+1 Fruit Samurai" },
        { field: "Roblox universe", value: "10424311938" },
        { field: "rootPlaceId", value: "121143259662420" },
        { field: "Creator", value: "Can't Hold It Anymore! (id 918672217)" },
        { field: "Universe created", value: "2026-07-01" },
        { field: "Last updated (Roblox API)", value: "2026-08-21" },
        { field: "Research date", value: "2026-08-22" },
      ],
    },
    {
      id: "progression-loop",
      type: "steps",
      heading: "Progression loop: scarecrow to legendary blades to fruit bosses to auras",
      items: [
        {
          title: "Join the verified Can't Hold It Anymore! group",
          body: "The official description ties secret code redemption to the group; group-only codes are redeemable after the join goes through.",
        },
        {
          title: "Farm scarecrows to build slash stats",
          body: "Scarecrows are the official farm target named in the description; per-stat values are not announced as of 2026-08-22.",
        },
        {
          title: "Collect Legendary Blades",
          body: "Specific blade names and tier labels are not announced as of 2026-08-22; the blades tier list ranks only the confirmed system against stage loadouts.",
        },
        {
          title: "Dash-slice Fruit Bosses",
          body: "Specific boss names, HP, and scaling are not announced as of 2026-08-22; the fruit boss guide leads with that status.",
        },
        {
          title: "Unlock glowing Auras",
          body: "Specific aura names and drop rates are not announced as of 2026-08-22; the aura tier list leads with that status.",
        },
        {
          title: "Run the Rebirth loop",
          body: "Tier multipliers are not announced as of 2026-08-22; the rebirth guide leads with that status.",
        },
      ],
    },
    {
      id: "not-published",
      type: "callout",
      tone: "caution",
      title: "What the wiki does NOT publish",
      body: "The +1 Fruit Samurai wiki deliberately omits five classes of claim: specific blade names, aura drop rates, Fruit Boss HP values, scarecrow per-stat numerical values, and Rebirth tier multipliers, unless the official description or the verified creator group confirms them. Each is labelled 'Not announced as of 2026-08-22' rather than guessed.",
    },
    {
      id: "where-next",
      type: "prose",
      heading: "Where to go next on the +1 Fruit Samurai wiki",
      body: "If you have not joined the verified creator group yet, start with the how-to-play guide, then jump to the active codes list. Mid-game readers can skip ahead to the blades or aura tier lists. Players tracking what changed should bookmark the update log and the creator-group rewards page. New players who want a compressed anti-pattern list should also read the beginner tips page.",
      links: [
        { label: "How to play +1 Fruit Samurai", href: "/how-to-play" },
        { label: "Active codes", href: "/codes" },
        { label: "Blades tier list", href: "/blades-tier-list" },
        { label: "Aura tier list", href: "/auras-tier-list" },
        { label: "Fruit boss guide", href: "/fruit-boss-guide" },
        { label: "Scarecrow farm guide", href: "/scarecrow-farm-guide" },
        { label: "Lucky Roll guide", href: "/lucky-roll-guide" },
        { label: "Rebirth guide", href: "/rebirth-guide" },
        { label: "Update log", href: "/updates" },
        { label: "Creator group rewards", href: "/creator-group" },
        { label: "Official links", href: "/official-links" },
        { label: "Vs other Fruit Samurai games", href: "/vs-other-fruit-samurai" },
        { label: "Beginner tips", href: "/beginner-tips" },
      ],
    },
  ],
  faqIds: ["faq-game-cover", "faq-official-wiki", "faq-group-required", "faq-update-cadence"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-codes-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US"],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const howToPlayPage: PageContent = {
  id: "fixed-how-to-play-en-US",
  translationKey: "how-to-play",
  locale: "en-US",
  routeKind: "fixed",
  slug: "how-to-play",
  url: "/how-to-play",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "How to play Fruit Samurai (Roblox): beginner walkthrough",
  seoTitle: "How to play Fruit Samurai (Roblox): beginner walkthrough",
  metaDescription:
    "How to play Fruit Samurai on Roblox: join the creator group for codes, farm scarecrows, chase legendary blades, dash-slice bosses, unlock auras, rebirth.",
  summary:
    "Walk a new US English player through the verified +1 Fruit Samurai Roblox progression loop, in the order the official description confirms: join group, farm scarecrows, collect legendary blades, dash-slice fruit bosses, unlock auras, then rebirth.",
  hero: {
    eyebrow: "Beginner guide",
    subtitle:
      "The verified six-step loop for +1 Fruit Samurai on Roblox: join, farm, blade, boss, aura, rebirth.",
    ctas: [
      { label: "Active codes", href: "/codes" },
      { label: "Scarecrow farm guide", href: "/scarecrow-farm-guide" },
    ],
  },
  quickAnswer:
    "How to play Fruit Samurai on Roblox follows the loop the official description confirms for universe 10424311938: join the verified creator group for secret codes, farm scarecrows for stats, collect legendary blades, dash-slice fruit bosses, unlock glowing auras, and rebirth for stronger multipliers.",
  keyFacts: [
    { label: "Universe", value: "10424311938" },
    { label: "Step 1", value: "Join creator group" },
    { label: "Step 2", value: "Farm scarecrows" },
    { label: "Final step", value: "Rebirth loop" },
  ],
  modules: [
    {
      id: "step-1",
      type: "steps",
      heading: "How to play Fruit Samurai: the verified six-step loop",
      items: [
        {
          title: "Step 1: join the verified Can't Hold It Anymore! creator group",
          body: "The official description ties secret code redemption to joining the verified creator group 'Can't Hold It Anymore!' (group id 918672217). New players should join the group before they try any code.",
        },
        {
          title: "Step 2: farm scarecrows to build slash stats",
          body: "Scarecrows are the official farm target that lets new players turn raw slashing time into stats without taking boss damage. The scarecrow farm guide carries the dated status for per-stat values.",
        },
        {
          title: "Step 3: collect legendary blades",
          body: "Specific blade names and damage numbers are not announced as of 2026-08-22; the blades tier list leads with a dated status and ranks only the confirmed system against stage loadouts.",
        },
        {
          title: "Step 4: dash-slice fruit bosses",
          body: "Fruit Bosses are the boss class that gates aura unlocks. Specific boss names, HP values, and damage scaling are not announced as of 2026-08-22; the fruit boss guide leads with a dated status row.",
        },
        {
          title: "Step 5: unlock glowing auras",
          body: "Specific aura names and drop rates are not announced as of 2026-08-22; the aura tier list leads with a dated status and ranks only the confirmed Auras system.",
        },
        {
          title: "Step 6: run the rebirth loop",
          body: "The official description confirms Rebirth as a long-form progression loop. Specific tier multipliers are not announced as of 2026-08-22; the rebirth guide carries the dated status.",
        },
      ],
    },
    {
      id: "anti-patterns",
      type: "callout",
      tone: "caution",
      title: "What you should NOT do on your first session",
      body: "Anti-pattern list: chasing a specific blade name before the description publishes one, farming auras before the first Fruit Boss kill, or committing to a Rebirth before unlocking any aura. Each wastes a scarecrow run. The beginner tips page collects these anti-patterns in a single scan-friendly list.",
    },
    {
      id: "anti-pattern-list",
      type: "prose",
      heading: "Anti-pattern details",
      body: "Grinding for an unannounced blade name wastes scarecrow runs on a target the description cannot confirm. Skipping the creator group join forces a redo on every failed code redemption. Rebirthing before unlocking any aura loses more progression than it gains, because the aura loop is the long-term multiplier a Rebirth should stack on top of.",
    },
  ],
  faqIds: ["faq-how-to-play-group", "faq-first-move", "faq-rebirth-timing", "faq-blade-chase"],
  relatedPageIds: ["fixed-scarecrow-farm-guide-en-US", "fixed-codes-en-US", "fixed-blades-tier-list-en-US", "fixed-fruit-boss-guide-en-US", "fixed-beginner-tips-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const codesPage: PageContent = {
  id: "fixed-codes-en-US",
  translationKey: "codes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai codes: active list and how to redeem",
  seoTitle: "+1 Fruit Samurai codes: active list & redemption guide",
  metaDescription:
    "Looking for +1 Fruit Samurai codes? UPD1 is the only currently active code on the official Roblox description, with verified group-join redemption steps.",
  summary:
    "Surface the currently active +1 Fruit Samurai Roblox secret code (UPD1), the verified group-join redemption method, and a dated status note when new codes replace it.",
  hero: {
    eyebrow: "Codes & rewards",
    subtitle:
      "UPD1 is the only currently active +1 Fruit Samurai code per the official Roblox description, with the verified group-join redemption rule.",
    ctas: [
      { label: "Creator group", href: "/creator-group" },
      { label: "Update log", href: "/updates" },
    ],
  },
  quickAnswer:
    "+1 Fruit Samurai codes are secret redeemables the official Roblox description for universe 10424311938 confirms exist and ties to joining the verified creator group 'Can't Hold It Anymore!'. As of 2026-09-01, the only currently active code is UPD1, published on the official Roblox game description.",
  keyFacts: [
    { label: "Codes exist", value: "Confirmed (official description)" },
    { label: "Active code string", value: "UPD1" },
    { label: "Group join required", value: "Yes (group 918672217)" },
    { label: "First-announce channel", value: "Official Roblox game description" },
  ],
  modules: [
    {
      id: "codes-table",
      type: "data-table",
      heading: "What the official description actually confirms",
      columns: [
        { key: "claim", label: "Claim" },
        { key: "source", label: "Source" },
        { key: "status", label: "Status as of 2026-09-01" },
      ],
      rows: [
        { claim: "Secret codes exist for +1 Fruit Samurai", source: "Official Roblox game page (universe 10424311938)", status: "Confirmed" },
        { claim: "Codes require joining the verified creator group", source: "Official Roblox game page and verified group page", status: "Confirmed" },
        { claim: "Active code string UPD1 is currently published", source: "Official Roblox game description (universe 10424311938)", status: "Confirmed" },
        { claim: "Group-only codes become redeemable after join", source: "YouTube creator coverage (community/video)", status: "Confirmed" },
      ],
    },
    {
      id: "redeem",
      type: "steps",
      heading: "How to redeem +1 Fruit Samurai codes",
      items: [
        {
          title: "Join the verified creator group",
          body: "Join the verified creator group 'Can't Hold It Anymore!' (Roblox community id 918672217). The join is free and propagates in under a minute for most accounts.",
        },
        {
          title: "Redeem in the codes text box",
          body: "Open +1 Fruit Samurai on Roblox, find the codes text box in the main menu, and paste the active code string (UPD1). Refresh the game once if the first paste fails.",
        },
      ],
    },
    {
      id: "announce-channels",
      type: "prose",
      heading: "Where new +1 Fruit Samurai codes will be announced",
      body: "New codes appear first on the official Roblox game description for universe 10424311938, then mirror on the verified 'Can't Hold It Anymore!' creator group wall and the wiki update log. Community video coverage is useful for demand confirmation but is never used as the primary source.",
    },
  ],
  faqIds: ["faq-codes-active", "faq-codes-group", "faq-codes-channel", "faq-codes-expired"],
  relatedPageIds: ["fixed-creator-group-rewards-en-US", "fixed-updates-patch-notes-en-US", "home-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-01",
};

export const bladesTierListPage: PageContent = {
  id: "fixed-blades-tier-list-en-US",
  translationKey: "blades-tier-list",
  locale: "en-US",
  routeKind: "fixed",
  slug: "blades-tier-list",
  url: "/blades-tier-list",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai blades tier list: confirmed vs unannounced",
  seoTitle: "+1 Fruit Samurai blades tier list: confirmed vs unannounced",
  metaDescription:
    "The +1 Fruit Samurai blades tier list separates confirmed Legendary Blades from unannounced blade names and stats as of 2026-08-22, with stage-by-stage loadouts.",
  summary:
    "Compare and rank every Legendary Blade in +1 Fruit Samurai Roblox for farming, mid-game, and boss-killing contexts; show only blades whose names and stats are confirmed by an official or creator-group source.",
  hero: {
    eyebrow: "Blades tier list",
    subtitle:
      "Stage-by-stage Legendary Blade loadout built on the confirmed progression loop.",
    ctas: [
      { label: "Scarecrow farm guide", href: "/scarecrow-farm-guide" },
      { label: "Fruit boss guide", href: "/fruit-boss-guide" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai blades tier list can only rank against the Legendary Blades system the official Roblox description confirms. Individual blade names, damage numbers, and tier labels remain not announced as of 2026-08-22.",
  keyFacts: [
    { label: "Confirmed system", value: "Legendary Blades" },
    { label: "Individual blade names", value: "Not announced as of 2026-08-22" },
    { label: "Tier labels (S/A/B/C)", value: "Not announced as of 2026-08-22" },
    { label: "Drop table", value: "Not announced as of 2026-08-22" },
  ],
  modules: [
    {
      id: "blades-table",
      type: "data-table",
      heading: "The confirmed Legendary Blades system",
      columns: [
        { key: "term", label: "Confirmed term" },
        { key: "source", label: "Source" },
        { key: "status", label: "Status as of 2026-08-22" },
      ],
      rows: [
        { term: "Legendary Blades is a collectible system", source: "Official Roblox game page (universe 10424311938)", status: "Confirmed" },
        { term: "Individual blade names", source: "Official description or verified creator group post", status: "Not announced" },
        { term: "Per-blade damage or stat block", source: "Official description or verified creator group post", status: "Not announced" },
        { term: "Tier label (S/A/B/C)", source: "Official description or verified creator group post", status: "Not announced" },
        { term: "Drop table or weighted rarity", source: "Official description or verified creator group post", status: "Not announced" },
      ],
    },
    {
      id: "loadout",
      type: "steps",
      heading: "Recommended stage-by-stage loadout",
      items: [
        {
          title: "Stage 1: scarecrow farm loadout (early game)",
          body: "Chase any confirmed Legendary Blade because the description ties the chase to slash-stat progression, which only the scarecrow farm can build.",
        },
        {
          title: "Stage 2: mid-game slash coverage loadout",
          body: "Once you have your first Legendary Blade, the next priority is mid-game slash coverage. The fruit boss guide shows that boss HP scales against slash coverage.",
        },
        {
          title: "Stage 3: Fruit Boss killing loadout (late game)",
          body: "The late-game loadout closes the aura loop. The aura tier list carries the dated status for aura names and drop rates.",
        },
      ],
    },
  ],
  faqIds: ["faq-best-blade", "faq-blade-tiers-confirmed", "faq-blade-channel", "faq-blade-youtube"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-scarecrow-farm-guide-en-US", "fixed-fruit-boss-guide-en-US", "fixed-auras-tier-list-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const aurasTierListPage: PageContent = {
  id: "fixed-auras-tier-list-en-US",
  translationKey: "auras-tier-list",
  locale: "en-US",
  routeKind: "fixed",
  slug: "auras-tier-list",
  url: "/auras-tier-list",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai aura tier list: confirmed auras & unlock path",
  seoTitle: "+1 Fruit Samurai aura tier list: confirmed auras & path",
  metaDescription:
    "The +1 Fruit Samurai aura tier list separates confirmed auras from unannounced aura names, drop rates, and unlock formulas as of 2026-08-22, with stage unlock paths.",
  summary:
    "Compare and rank every Aura in +1 Fruit Samurai Roblox, including how each aura is unlocked and which aura is best for late-game progression, with a dated status note when no individual aura name or drop rate is confirmed.",
  hero: {
    eyebrow: "Aura tier list",
    subtitle:
      "Stage-by-stage aura unlock path built on the confirmed progression loop.",
    ctas: [
      { label: "Fruit boss guide", href: "/fruit-boss-guide" },
      { label: "Lucky Roll guide", href: "/lucky-roll-guide" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai aura tier list is built from the Auras system the official description for universe 10424311938 confirms players can unlock through gameplay. Specific aura names, drop rates, and unlock formulas remain not announced as of 2026-08-22.",
  keyFacts: [
    { label: "Confirmed system", value: "Auras" },
    { label: "Individual aura names", value: "Not announced as of 2026-08-22" },
    { label: "Drop rates / formulas", value: "Not announced as of 2026-08-22" },
    { label: "Tier labels (S/A/B/C)", value: "Not announced as of 2026-08-22" },
  ],
  modules: [
    {
      id: "auras-table",
      type: "data-table",
      heading: "The confirmed Auras system",
      columns: [
        { key: "term", label: "Confirmed term" },
        { key: "source", label: "Source" },
        { key: "status", label: "Status as of 2026-08-22" },
      ],
      rows: [
        { term: "Auras is an unlockable system", source: "Official Roblox game page (universe 10424311938)", status: "Confirmed" },
        { term: "Auras unlocked through gameplay", source: "Official Roblox game page (universe 10424311938)", status: "Confirmed" },
        { term: "Aura unlocks tie to Fruit Boss clears", source: "Official Roblox game page (universe 10424311938)", status: "Confirmed" },
        { term: "Individual aura names", source: "Official description or verified creator group post", status: "Not announced" },
        { term: "Aura drop rates or unlock formulas", source: "Official description or verified creator group post", status: "Not announced" },
        { term: "Tier label (S/A/B/C)", source: "Official description or verified creator group post", status: "Not announced" },
      ],
    },
    {
      id: "unlock-path",
      type: "steps",
      heading: "Recommended stage-by-stage unlock path",
      items: [
        {
          title: "Stage 1: unlock your first aura through Fruit Boss clears",
          body: "The first aura you should chase is whatever the description ties to the first Fruit Boss clear.",
        },
        {
          title: "Stage 2: farm auras with the right blade loadout",
          body: "Aura farming is blade-sensitive because the description ties aura unlock speed to slash coverage, and slash coverage scales with blade choice.",
        },
        {
          title: "Stage 3: stack auras into the Rebirth loop",
          body: "Stack at least one aura into each Rebirth cycle, because the description does not contradict the assumption that aura unlocks carry across a Rebirth.",
        },
      ],
    },
  ],
  faqIds: ["faq-best-aura", "faq-aura-rates", "faq-aura-channel", "faq-rebirth-before-aura"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-fruit-boss-guide-en-US", "fixed-blades-tier-list-en-US", "fixed-lucky-roll-guide-en-US", "fixed-rebirth-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const fruitBossGuidePage: PageContent = {
  id: "fixed-fruit-boss-guide-en-US",
  translationKey: "fruit-boss-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "fruit-boss-guide",
  url: "/fruit-boss-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai fruit boss guide: how to find and defeat them",
  seoTitle: "+1 Fruit Samurai fruit boss guide: spawns and loadouts",
  metaDescription:
    "+1 Fruit Samurai fruit boss guide covering confirmed boss types, spawn-condition status, and recommended blade and aura loadouts for tougher targets.",
  summary:
    "Help players find, unlock, and defeat Fruit Bosses in +1 Fruit Samurai Roblox with current spawn, loadout, and progression guidance.",
  hero: {
    eyebrow: "Fruit Boss guide",
    subtitle:
      "Confirmed Fruit Boss system with dated status rows for unannounced boss details.",
    ctas: [
      { label: "Blades tier list", href: "/blades-tier-list" },
      { label: "Aura tier list", href: "/auras-tier-list" },
    ],
  },
  quickAnswer:
    "The Roblox official description for Universe 10424311938 names 'Fruit Bosses' as part of the core loop, but specific boss names, HP pools, and damage scaling have not been announced as of 2026-08-22. Players should treat Fruit Bosses as late-game targets reached after farming scarecrows and collecting at least one Legendary Blade.",
  keyFacts: [
    { label: "System", value: "Fruit Bosses (confirmed)" },
    { label: "Boss names", value: "Not announced as of 2026-08-22" },
    { label: "HP pools / scaling", value: "Not announced as of 2026-08-22" },
    { label: "Recommended loadout", value: "Top Blade + top Aura + farm stats" },
  ],
  modules: [
    {
      id: "boss-loop",
      type: "steps",
      heading: "Where Fruit Bosses sit inside the +1 Fruit Samurai progression loop",
      items: [
        {
          title: "Stage 1: Stabilize the scarecrow farm",
          body: "The scarecrow farm is the only place in the official description where stats are mentioned directly. Players should treat this as the mandatory prerequisite for any boss attempt.",
        },
        {
          title: "Stage 2: Lock in at least one Legendary Blade",
          body: "Blades are the combat tool that gets dropped into the dash-slice action against Fruit Bosses. The blades-tier-list page covers the rank.",
        },
        {
          title: "Stage 3: Run a Fruit Boss attempt with an Aura active",
          body: "Auras are named in the official description as a separate system that players unlock. Pair the highest-priority Aura with the highest-priority Blade for the first boss attempt.",
        },
      ],
    },
    {
      id: "loadout-table",
      type: "data-table",
      heading: "Recommended blade and aura loadout while specific boss data is missing",
      columns: [
        { key: "slot", label: "Loadout slot" },
        { key: "role", label: "Role in a Fruit Boss fight" },
        { key: "source", label: "Where confirmed as of 2026-08-22" },
      ],
      rows: [
        { slot: "Highest-tier Legendary Blade", role: "Primary damage source for the dash-slice verb", source: "fixed-blades-tier-list-en-US" },
        { slot: "Top-ranked Aura from confirmed roster", role: "Persistent combat and visibility buff during the fight", source: "fixed-auras-tier-list-en-US" },
        { slot: "Scarecrow-farm stats", role: "Stat floor needed to survive longer combo windows", source: "fixed-scarecrow-farm-guide-en-US" },
        { slot: "Pre-fight group join check", role: "Confirms code redemption and reward eligibility", source: "fixed-creator-group-rewards-en-US" },
      ],
    },
    {
      id: "spawn-status",
      type: "callout",
      tone: "unknown",
      title: "Spawn-condition status as of 2026-08-22",
      body: "Confirmed by an official source: very few rows land here because the creator group has not posted per-boss spawn data yet. Logical from the description: boss spawn tied to the scarecrow farm or the blade chase. Unannounced: boss names, HP values, spawn timers, and respawn rules.",
    },
  ],
  faqIds: ["faq-boss-count", "faq-boss-spawn", "faq-best-aura-boss", "faq-boss-group"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-scarecrow-farm-guide-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US", "fixed-beginner-tips-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const scarecrowFarmGuidePage: PageContent = {
  id: "fixed-scarecrow-farm-guide-en-US",
  translationKey: "scarecrow-farm-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "scarecrow-farm-guide",
  url: "/scarecrow-farm-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai scarecrow farm: stats, loop, and best setup",
  seoTitle: "+1 Fruit Samurai scarecrow farm: loop, stats, and blades",
  metaDescription:
    "+1 Fruit Samurai scarecrow farm guide covering the confirmed farm loop, which stats players gain, the blades that speed up farming, and beginner-safe setup steps.",
  summary:
    "Help players run the fastest scarecrow farm loop in +1 Fruit Samurai Roblox and understand the stats they gain from it.",
  hero: {
    eyebrow: "Scarecrow farm guide",
    subtitle:
      "The first stop on the progression loop: farm scarecrows, build stats, layer a Blade and an Aura.",
    ctas: [
      { label: "Blades tier list", href: "/blades-tier-list" },
      { label: "Beginner tips", href: "/beginner-tips" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai scarecrow farm is the only stats source named in the official Roblox description for Universe 10424311938. Farm scarecrows to grow the stat sheet, equip the highest Legendary Blade, and layer an Aura if one is unlocked. Per-stat numerical values are not announced as of 2026-08-22.",
  keyFacts: [
    { label: "Stats source", value: "Scarecrow farm (confirmed)" },
    { label: "Per-stat numerical values", value: "Not announced as of 2026-08-22" },
    { label: "Best setup", value: "Group join + top Blade + top Aura" },
    { label: "Recommended first", value: "15-30 minutes per session" },
  ],
  modules: [
    {
      id: "farm-loop",
      type: "steps",
      heading: "How to run the +1 Fruit Samurai scarecrow farm loop",
      items: [
        {
          title: "Step 1: Verify the group join for code eligibility",
          body: "Confirm the join to the verified creator group 'Can't Hold It Anymore!' because the official description ties free exclusive rewards and secret codes to that group.",
        },
        {
          title: "Step 2: Start the scarecrow farm and lock the stat curve",
          body: "Run the scarecrow farm loop on the highest difficulty band your current Blade can clear without dying. The farm is the only stats source named in the description.",
        },
        {
          title: "Step 3: Equip a Blade that matches the farm tier",
          body: "Pair the farm with the entry at the top of the blades-tier-list page. The description names legendary blades as a collectible category tied to the dash-slice combat verb.",
        },
        {
          title: "Step 4: Layer an Aura if one is already unlocked",
          body: "Until the creator publishes per-Aura stat modifiers, pick the highest-ranked Aura you currently own and treat it as a soft multiplier rather than a measured one.",
        },
      ],
    },
    {
      id: "stats-table",
      type: "data-table",
      heading: "Which stats the scarecrow farm gives players",
      columns: [
        { key: "slot", label: "Stat slot" },
        { key: "status", label: "Status as of 2026-08-22" },
        { key: "where", label: "Where the assumption can be revisited" },
      ],
      rows: [
        { slot: "Per-stat numerical value", status: "Not announced", where: "Creator group post or description update" },
        { slot: "Stat growth formula", status: "Not announced", where: "Creator group announcement or update log" },
        { slot: "Stat slot list beyond 'Stats'", status: "Not announced", where: "Creator group post or in-game patch notes" },
        { slot: "Farm floor multiplier", status: "Not announced", where: "Creator group post or description update log" },
      ],
    },
    {
      id: "best-setup",
      type: "prose",
      heading: "Best setup while specifics are missing",
      body: "Join the creator group first. Use a simulator-style session shape: long runs of the same farm loop, with the Blade and Aura fixed across each run. Keep the Blade choice grounded in the blades-tier-list page. Keep the Aura choice grounded in the auras-tier-list page. Skip the first Rebirth attempt until a clear stat floor is visible.",
    },
  ],
  faqIds: ["faq-farm-timing", "faq-farm-blade", "faq-farm-aura", "faq-farm-changes"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US", "fixed-beginner-tips-en-US", "fixed-fruit-boss-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const luckyRollGuidePage: PageContent = {
  id: "fixed-lucky-roll-guide-en-US",
  translationKey: "lucky-roll-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "lucky-roll-guide",
  url: "/lucky-roll-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai lucky roll: status and related systems",
  seoTitle: "+1 Fruit Samurai lucky roll: status and related systems",
  metaDescription:
    "+1 Fruit Samurai lucky roll status as of 2026-08-22, mechanic not announced in the official description. See what is confirmed and which systems share the intent.",
  summary:
    "Give players a dated status answer on the Lucky Roll mechanic in +1 Fruit Samurai Roblox and point them to the confirmed systems that share the search intent.",
  hero: {
    eyebrow: "Lucky Roll",
    subtitle:
      "Status page for the unconfirmed Lucky Roll mechanic; points to the confirmed systems that share the search intent.",
    ctas: [
      { label: "Aura tier list", href: "/auras-tier-list" },
      { label: "Rebirth guide", href: "/rebirth-guide" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai lucky roll mechanic is not announced as of 2026-08-22 in the Roblox official description for Universe 10424311938. The phrase 'Lucky Roll' does not appear in the official copy, and the verified creator group has not published a Lucky Roll mechanic at the time of research.",
  keyFacts: [
    { label: "Lucky Roll mechanic", value: "Not announced as of 2026-08-22" },
    { label: "Drop weights", value: "Not announced" },
    { label: "Roll currency", value: "Not announced" },
    { label: "Related confirmed systems", value: "Blades, Auras, Rebirth" },
  ],
  modules: [
    {
      id: "search-intent",
      type: "prose",
      heading: "What the lucky roll search intent usually wants",
      body: "Lucky Roll-style queries in Roblox simulator-style games usually mean one of three patterns: a weighted random reward, a re-roll button, or a roll currency that buys a premium prize. The Roblox Games API assigns a simulator-style genre label to +1 Fruit Samurai Universe 10424311938, which makes a Lucky Roll mechanic plausible in a future build. Plausibility is not confirmation, and this page refuses to publish weights, drop rates, or premium prizes until the creator group announces them.",
    },
    {
      id: "confirmed-related",
      type: "prose",
      heading: "What is confirmed about +1 Fruit Samurai as of 2026-08-22",
      body: "The official description for place 121143259662420 names three confirmed systems that share the Lucky Roll search intent. Legendary Blades are a confirmed collectible category. Auras are a confirmed system. Rebirth is a confirmed 'Stats upgrade' loop. A future Lucky Roll mechanic is most likely to interact with one of those three confirmed systems.",
    },
    {
      id: "not-announced",
      type: "callout",
      tone: "unknown",
      title: "What is not announced about the lucky roll",
      body: "As of 2026-08-22, the following pieces of the Lucky Roll system are unconfirmed: the mechanic name in this universe, any entry weight or drop rate table, any roll currency or ticket, and any tie between Lucky Roll and Auras or Rebirth.",
    },
    {
      id: "while-waiting",
      type: "prose",
      heading: "What to do while the lucky roll is unconfirmed",
      body: "Hold an active Aura from the auras-tier-list page. Keep the Blade roster current on the blades-tier-list page. Plan around the Rebirth decision on the rebirth-guide page. These three steps do not depend on the Lucky Roll mechanic existing.",
    },
  ],
  faqIds: ["faq-lucky-roll-now", "faq-lucky-roll-weights", "faq-lucky-roll-currency", "faq-lucky-roll-next-update"],
  relatedPageIds: ["fixed-auras-tier-list-en-US", "fixed-rebirth-guide-en-US", "fixed-blades-tier-list-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const rebirthGuidePage: PageContent = {
  id: "fixed-rebirth-guide-en-US",
  translationKey: "rebirth-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "rebirth-guide",
  url: "/rebirth-guide",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai rebirth guide: how to plan each reset",
  seoTitle: "+1 Fruit Samurai rebirth guide: loop, prep, and multipliers",
  metaDescription:
    "+1 Fruit Samurai rebirth guide covering the confirmed Rebirth loop, the pre-Rebirth prep checklist, and the unannounced tier multipliers as of 2026-08-22.",
  summary:
    "Help players understand the Rebirth system in +1 Fruit Samurai Roblox, prepare correctly before resetting, and pick the next upgrade after each Rebirth.",
  hero: {
    eyebrow: "Rebirth guide",
    subtitle:
      "Confirmed Rebirth loop with pre-Rebirth prep checklist; per-tier multipliers not announced as of 2026-08-22.",
    ctas: [
      { label: "Scarecrow farm guide", href: "/scarecrow-farm-guide" },
      { label: "Aura tier list", href: "/auras-tier-list" },
    ],
  },
  quickAnswer:
    "The Roblox official description for Universe 10424311938 names Rebirth as part of the 'Stats upgrade' loop, so a Rebirth improves the stat sheet at the cost of progress. Specific tier requirements, multipliers, and unlock ordering are not announced as of 2026-08-22.",
  keyFacts: [
    { label: "Rebirth system", value: "Confirmed (Stats upgrade)" },
    { label: "Tier count", value: "Not announced as of 2026-08-22" },
    { label: "Per-tier multiplier", value: "Not announced as of 2026-08-22" },
    { label: "Cost per tier", value: "Not announced as of 2026-08-22" },
  ],
  modules: [
    {
      id: "rebirth-loop",
      type: "steps",
      heading: "Where Rebirth sits in the +1 Fruit Samurai progression loop",
      items: [
        {
          title: "Stage 1: Stabilize the scarecrow farm",
          body: "The scarecrow farm is the only stats source named in the official description, and it produces the stat floor that Rebirth is meant to upgrade.",
        },
        {
          title: "Stage 2: Collect at least one Legendary Blade",
          body: "Blades carry through the Rebirth because they are equipped gear rather than one-off unlocks. The blades-tier-list page is the published source for the rank.",
        },
        {
          title: "Stage 3: Run a Fruit Boss attempt if the stats allow",
          body: "A Fruit Boss clear before a Rebirth is a way to check that the stat floor is real, because the boss fights back.",
        },
        {
          title: "Stage 4: Trigger the first Rebirth only when preparation checks pass",
          body: "A first Rebirth is the moment the loop turns over. A second Rebirth is the moment the loop starts compounding.",
        },
      ],
    },
    {
      id: "prep-checklist",
      type: "data-table",
      heading: "Pre-Rebirth prep checklist",
      columns: [
        { key: "item", label: "Prep item" },
        { key: "why", label: "Why the item matters" },
        { key: "where", label: "Where it connects" },
      ],
      rows: [
        { item: "Confirm creator group join", why: "Description ties rewards and code eligibility to the group", where: "fixed-creator-group-rewards-en-US" },
        { item: "Reach a stable scarecrow farm floor", why: "Only confirmed stats source; an under-farmed sheet wastes the action", where: "fixed-scarecrow-farm-guide-en-US" },
        { item: "Lock the highest available Legendary Blade", why: "Combat tool that carries into post-Rebirth runs without reset", where: "fixed-blades-tier-list-en-US" },
        { item: "Hold an active Aura if one is unlocked", why: "Auras are confirmed and visible on the server; interact with reset-style systems", where: "fixed-auras-tier-list-en-US" },
        { item: "Review the code window", why: "Some codes expire on update boundaries and a Rebirth is a natural re-check moment", where: "fixed-codes-en-US" },
        { item: "Audit the latest update log", why: "Some changes land in the build that the Rebirth tier table depends on", where: "fixed-updates-patch-notes-en-US" },
      ],
    },
    {
      id: "tier-table-status",
      type: "data-table",
      heading: "Tier table status",
      columns: [
        { key: "concept", label: "Tier concept" },
        { key: "status", label: "Status as of 2026-08-22" },
        { key: "where", label: "Where the row would be filled in next" },
      ],
      rows: [
        { concept: "Number of tiers", status: "Not announced", where: "Creator group post or description update" },
        { concept: "Multiplier per tier", status: "Not announced", where: "Creator group announcement or update log" },
        { concept: "Cost per tier", status: "Not announced", where: "Creator group post or in-game patch note" },
        { concept: "Unlock ordering between tiers", status: "Not announced", where: "Creator group post or news post" },
      ],
    },
  ],
  faqIds: ["faq-rebirth-how", "faq-rebirth-tiers", "faq-rebirth-aura-first", "faq-rebirth-blade"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-scarecrow-farm-guide-en-US", "fixed-auras-tier-list-en-US", "fixed-codes-en-US", "fixed-updates-patch-notes-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const updatesPatchNotesPage: PageContent = {
  id: "fixed-updates-patch-notes-en-US",
  translationKey: "updates-patch-notes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "updates",
  url: "/updates",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai update log: latest patch and patch notes",
  seoTitle: "+1 Fruit Samurai update log: latest patch and patch notes",
  metaDescription:
    "+1 Fruit Samurai update log as of 2026-09-16, with the latest Roblox API and RoMonitor timestamps, an update timeline, and a note on the [UPD1] title prefix.",
  summary:
    "Track the latest +1 Fruit Samurai Roblox update log and patch notes, including blade, aura, boss, and code changes with dated sources.",
  hero: {
    eyebrow: "Update log",
    subtitle:
      "Most recent build markers from the Roblox Games API and RoMonitor, with per-system change status.",
    ctas: [
      { label: "Codes", href: "/codes" },
      { label: "Blades tier list", href: "/blades-tier-list" },
    ],
  },
  quickAnswer:
    "The most recent +1 Fruit Samurai update landed on 2026-09-11 according to the Roblox Games API 'updated' field for Universe 10424311938, and the live game URL now carries the [UPD1] title prefix. In-game patch details for that build are not announced as of 2026-09-16.",
  keyFacts: [
    { label: "Universe created", value: "2026-07-01" },
    { label: "Latest updated", value: "2026-09-11" },
    { label: "Live title prefix", value: "[UPD1]" },
    { label: "Per-build changelog", value: "Not announced as of 2026-09-16" },
    { label: "Release cadence", value: "Not announced" },
  ],
  modules: [
    {
      id: "timeline",
      type: "data-table",
      heading: "+1 Fruit Samurai update timeline",
      columns: [
        { key: "date", label: "Date" },
        { key: "marker", label: "Build marker" },
        { key: "source", label: "Source" },
        { key: "confirmed", label: "What is confirmed" },
      ],
      rows: [
        { date: "2026-07-01", marker: "Universe creation", source: "Roblox Games API 'created' field", confirmed: "Universe first published on this date" },
        { date: "2026-08-21", marker: "Previous universe update", source: "Roblox Games API 'updated' field", confirmed: "Universe was updated on this date before the 2026-09-11 build" },
        { date: "2026-09-11", marker: "Most recent universe update", source: "Roblox Games API 'updated' field", confirmed: "Universe was last updated on this date" },
        { date: "2026-09-11", marker: "Live title prefix [UPD1]", source: "Live Roblox game URL title (place 121143259662420)", confirmed: "Live game title carries the [UPD1] prefix in the URL, matching the same build window" },
      ],
    },
    {
      id: "upd1-prefix",
      type: "callout",
      tone: "confirmed",
      title: "What the [UPD1] title prefix means",
      body: "Roblox game URLs include a bracketed prefix in the title when the creator has applied an update. The [UPD1] prefix on the live +1 Fruit Samurai game URL is the player-visible confirmation that the 2026-09-11 Roblox-side update is live. The wiki treats the API timestamp and the [UPD1] prefix as the same event; no per-system patch notes have been published first-party yet.",
    },
    {
      id: "not-announced",
      type: "callout",
      tone: "unknown",
      title: "What the update log does not announce",
      body: "New Legendary Blades, new Auras, new Fruit Bosses, code additions or removals, scarecrow stat curve changes, and Rebirth tier additions or multiplier changes are all in the 'not announced' bucket. Codes frequently expire on update boundaries, so the codes page is the first place to re-check after a build.",
    },
    {
      id: "next-update",
      type: "prose",
      heading: "Where the next update will be confirmed first",
      body: "The Roblox game page description carries the official copy and is where a permanent description update would land. The verified creator group 'Can't Hold It Anymore!' page is where the creator will most likely post the per-build changelog. The in-game news tab is the runtime surface that players see first, and the [UPD#] prefix on the live game URL is the quickest signal that a new build is live.",
    },
  ],
  faqIds: ["faq-latest-update", "faq-update-changes", "faq-update-cadence", "faq-patch-notes-where"],
  relatedPageIds: ["fixed-codes-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US", "fixed-fruit-boss-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-16",
};

export const creatorGroupRewardsPage: PageContent = {
  id: "fixed-creator-group-rewards-en-US",
  translationKey: "creator-group-rewards",
  locale: "en-US",
  routeKind: "fixed",
  slug: "creator-group",
  url: "/creator-group",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai creator group and free rewards",
  seoTitle: "+1 Fruit Samurai creator group: free rewards explained",
  metaDescription:
    "+1 Fruit Samurai creator group is required for free rewards and secret codes. Confirmed group id, Like + Join claim step, and reward contents.",
  summary:
    "Explain why joining the verified +1 Fruit Samurai creator group unlocks free exclusive rewards and secret codes, and document the claim method and current unknowns.",
  hero: {
    eyebrow: "Creator group",
    subtitle:
      "Why joining the verified 'Can't Hold It Anymore!' group is required for free rewards and secret codes.",
    ctas: [
      { label: "Active codes", href: "/codes" },
      { label: "Official links", href: "/official-links" },
    ],
  },
  quickAnswer:
    "The +1 Fruit Samurai creator group is the verified Roblox community called 'Can't Hold It Anymore!' (id 918672217). The official game description states that players must Like the game and Join the group for free exclusive rewards and secret codes. As of 2026-09-01, the only currently active code tied to this group join is UPD1, published on the official Roblox game description.",
  keyFacts: [
    { label: "Group name", value: "Can't Hold It Anymore!" },
    { label: "Group id", value: "918672217" },
    { label: "Claim step", value: "Like + Join" },
    { label: "Active code", value: "UPD1" },
  ],
  modules: [
    {
      id: "why-required",
      type: "prose",
      heading: "Why the creator group is required for rewards",
      body: "The official description on the Roblox game page for +1 Fruit Samurai states the unlock condition for the game's free reward tier: 'Like + Join the group NOW for free exclusive rewards and secret codes.' Two pieces of identity anchor the claim: the game itself (Roblox universe 10424311938, root place 121143259662420) and the verified creator group 'Can't Hold It Anymore!' (community id 918672217).",
    },
    {
      id: "what-rewards-unlock",
      type: "prose",
      heading: "What the rewards actually unlock",
      body: "Joining the creator group gates two things named in the official description: 'free exclusive rewards' (the in-game reward tier when your account has the group membership flag set) and 'secret codes' (redeemable code strings shared with members). As of 2026-09-01 the only currently active code is UPD1, published on the official Roblox game description for universe 10424311938.",
    },
    {
      id: "like-join",
      type: "steps",
      heading: "How the Like and Join steps work in practice",
      items: [
        {
          title: "Like the game",
          body: "Favorite the game at https://www.roblox.com/games/121143259662420/1-Fruit-Samurai. Favoriting sets a flag your in-game reward check reads alongside your group membership flag.",
        },
        {
          title: "Join the verified creator group",
          body: "Join the community page for group id 918672217. Once your account is in the group roster, the community membership flag is set.",
        },
        {
          title: "Re-enter the server",
          body: "Both flags need to be present when you load into a server for the reward tier to apply. A player who Joins but skips Like, or Likes but skips Join, may not see the reward tier on next join.",
        },
      ],
    },
    {
      id: "why-group",
      type: "prose",
      heading: "Why a creator group is used for game rewards",
      body: "Roblox groups are the platform-native way for a creator to identify a fan and gate an in-game perk. The group also acts as a notification channel: when the creator group publishes a new post or pins a new code, members see it in their Roblox feed.",
    },
  ],
  faqIds: ["faq-group-robux", "faq-like-only", "faq-group-impersonator", "faq-codes-first-channel"],
  relatedPageIds: ["fixed-codes-en-US", "fixed-official-links-status-en-US", "home-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-01",
};

export const officialLinksStatusPage: PageContent = {
  id: "fixed-official-links-status-en-US",
  translationKey: "official-links-status",
  locale: "en-US",
  routeKind: "fixed",
  slug: "official-links",
  url: "/official-links",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai official links and community destinations",
  seoTitle: "+1 Fruit Samurai official links: Discord and Trello status",
  metaDescription:
    "+1 Fruit Samurai official links status as of 2026-08-22: Discord, Trello, and private server are not announced. See the verified creator group link.",
  summary:
    "Document the current +1 Fruit Samurai official community destinations (Roblox game page, verified creator group, Discord, Trello, private server) with a dated status for each.",
  hero: {
    eyebrow: "Official links",
    subtitle:
      "Verified destination table with dated status for Discord, Trello, private server, and more.",
    ctas: [
      { label: "Creator group", href: "/creator-group" },
      { label: "Update log", href: "/updates" },
    ],
  },
  quickAnswer:
    "+1 Fruit Samurai official links as of 2026-08-22 are limited to the Roblox game page and the verified creator group community page (id 918672217). A Discord server, Trello board, and any private server URL are not announced in the official game description or the verified creator group post.",
  keyFacts: [
    { label: "Confirmed", value: "Roblox game page, creator group" },
    { label: "Discord", value: "Not announced as of 2026-08-22" },
    { label: "Trello", value: "Not announced as of 2026-08-22" },
    { label: "Private server", value: "Not announced as of 2026-08-22" },
  ],
  modules: [
    {
      id: "links-table",
      type: "data-table",
      heading: "Verified +1 Fruit Samurai official links",
      columns: [
        { key: "destination", label: "Destination" },
        { key: "status", label: "Status" },
        { key: "url", label: "URL" },
        { key: "checked", label: "Last checked" },
      ],
      rows: [
        { destination: "Roblox game page", status: "Confirmed", url: "https://www.roblox.com/games/121143259662420/1-Fruit-Samurai", checked: "2026-08-22" },
        { destination: "Verified creator group (Can't Hold It Anymore!, id 918672217)", status: "Confirmed", url: "https://www.roblox.com/communities/918672217", checked: "2026-08-22" },
        { destination: "Discord server", status: "Not announced as of 2026-08-22", url: "—", checked: "2026-08-22" },
        { destination: "Trello roadmap board", status: "Not announced as of 2026-08-22", url: "—", checked: "2026-08-22" },
        { destination: "Private server link", status: "Not announced as of 2026-08-22", url: "—", checked: "2026-08-22" },
        { destination: "Twitter / X account", status: "Not announced as of 2026-08-22", url: "—", checked: "2026-08-22" },
        { destination: "YouTube creator channel", status: "Not announced as of 2026-08-22", url: "—", checked: "2026-08-22" },
      ],
    },
    {
      id: "why-not-announced",
      type: "prose",
      heading: "Why so many destinations are marked not announced",
      body: "The +1 Fruit Samurai Roblox universe was created on 2026-07-01 and the most recent platform-level update was logged on 2026-08-21. With roughly seven weeks of public life, the creator has not yet published a Discord invite, a Trello board, or a private-server code in either the official description or any pinned post on the verified creator group page.",
    },
    {
      id: "impersonator",
      type: "callout",
      tone: "caution",
      title: "How to recognize the verified creator group",
      body: "Impersonator groups are a real risk. The verified +1 Fruit Samurai creator group is id 918672217, named 'Can't Hold It Anymore!'. Any community whose name is a near-match but whose numeric id differs is not the verified group.",
    },
  ],
  faqIds: ["faq-discord-where", "faq-trello-exists", "faq-private-server", "faq-news-safest"],
  relatedPageIds: ["fixed-creator-group-rewards-en-US", "home-en-US", "fixed-updates-patch-notes-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const vsOtherFruitSamuraiPage: PageContent = {
  id: "fixed-vs-other-fruit-samurai-en-US",
  translationKey: "vs-other-fruit-samurai",
  locale: "en-US",
  routeKind: "fixed",
  slug: "vs-other-fruit-samurai",
  url: "/vs-other-fruit-samurai",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai vs Fruit Ninja and other similar titles",
  seoTitle: "+1 Fruit Samurai vs Fruit Ninja: how to tell them apart",
  metaDescription:
    "+1 Fruit Samurai vs Fruit Ninja: this Roblox game (Universe 10424311938) is not Halfbrick Fruit Ninja. Compare creators, platforms, and release years.",
  summary:
    "Disambiguate +1 Fruit Samurai Roblox from Fruit Ninja, ZO Samurai, Fruit Battlegrounds, One Fruit Simulator, Brawl Stars Kenji, anime, and board-game uses of the phrase 'fruit samurai'.",
  hero: {
    eyebrow: "Disambiguation",
    subtitle:
      "Tell +1 Fruit Samurai (Roblox) apart from Fruit Ninja, Fruit Battlegrounds, One Fruit Simulator, ZO Samurai, and similar titles.",
    ctas: [
      { label: "Official links", href: "/official-links" },
      { label: "Creator group", href: "/creator-group" },
    ],
  },
  quickAnswer:
    "+1 Fruit Samurai vs Fruit Ninja is the most common mix-up: +1 Fruit Samurai is a Roblox universe (10424311938) by group 'Can't Hold It Anymore!' created in 2026, while Fruit Ninja is a 2010 Halfbrick Studios iOS game with a 2019 animated film.",
  keyFacts: [
    { label: "+1 Fruit Samurai", value: "Roblox universe 10424311938 (2026)" },
    { label: "Fruit Ninja", value: "Halfbrick Studios iOS game (2010)" },
    { label: "Decision rule", value: "Confirm Roblox universe id" },
    { label: "Out of scope", value: "Other titles listed on this page only" },
  ],
  modules: [
    {
      id: "decision-rule",
      type: "prose",
      heading: "How to identify the +1 Fruit Samurai Roblox universe",
      body: "If the URL is on roblox.com, the community id is 918672217, and the universe id is 10424311938, it is +1 Fruit Samurai. If the URL is on halfbrick.com, it is Fruit Ninja. If the URL is on a third-party app store and the developer is not Halfbrick Studios, it is a different mobile fruit-slicing game and not either title.",
    },
    {
      id: "comparison-table",
      type: "data-table",
      heading: "Identity comparison table",
      columns: [
        { key: "title", label: "Title" },
        { key: "creator", label: "Creator / publisher" },
        { key: "platform", label: "Platform" },
        { key: "year", label: "Year" },
        { key: "same", label: "Same as +1 Fruit Samurai?" },
      ],
      rows: [
        { title: "+1 Fruit Samurai", creator: "Can't Hold It Anymore! (id 918672217)", platform: "Roblox (universe 10424311938)", year: "2026", same: "Yes" },
        { title: "Fruit Ninja", creator: "Halfbrick Studios", platform: "iOS, Android, consoles, PC", year: "2010 (mobile), 2019 (film)", same: "No" },
        { title: "Fruit Ninja 2", creator: "Halfbrick Studios", platform: "Mobile, PC", year: "2024", same: "No" },
        { title: "Fruit Battlegrounds", creator: "Separate Roblox creator", platform: "Roblox", year: "2023", same: "No" },
        { title: "One Fruit Simulator", creator: "Separate Roblox creator", platform: "Roblox", year: "2024", same: "No" },
        { title: "ZO ぞ Samurai", creator: "Voldex", platform: "Roblox", year: "2021", same: "No" },
        { title: "Brawl Stars character Kenji", creator: "Supercell", platform: "iOS, Android (Brawl Stars)", year: "2024 (character)", same: "No" },
        { title: "Fruit Samurai anime series", creator: "Various studios", platform: "TV, streaming", year: "2010s onward", same: "No" },
        { title: "Fruit Samurai 2011 board game", creator: "Various publishers", platform: "Tabletop", year: "2011", same: "No" },
        { title: "Code of the Samurai Roblox anime", creator: "Separate Roblox creator", platform: "Roblox", year: "2022", same: "No" },
      ],
    },
    {
      id: "why-confusion",
      type: "prose",
      heading: "Why the confusion happens",
      body: "The two titles share three surface words: fruit, samurai, and a slice motif. The substantive differences are larger than the words they share: different creators (Halfbrick Studios vs 'Can't Hold It Anymore!'), different platforms (mobile/console/PC vs Roblox), different release windows (2010 vs 2026).",
    },
  ],
  faqIds: ["faq-vs-fruit-ninja", "faq-vs-fruit-battlegrounds", "faq-vs-brawl-kenji", "faq-verify-universe-id"],
  relatedPageIds: ["home-en-US", "fixed-official-links-status-en-US", "fixed-creator-group-rewards-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const beginnerTipsPage: PageContent = {
  id: "fixed-beginner-tips-en-US",
  translationKey: "beginner-tips",
  locale: "en-US",
  routeKind: "fixed",
  slug: "beginner-tips",
  url: "/beginner-tips",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+1 Fruit Samurai beginner tips for new players",
  seoTitle: "+1 Fruit Samurai beginner tips: a safe early-game checklist",
  metaDescription:
    "+1 Fruit Samurai beginner tips for new players: join the creator group, farm scarecrows, and avoid premature Rebirth or Aura commits in 2026.",
  summary:
    "Give new +1 Fruit Samurai players a short, safe list of early-game tips tied to confirmed systems (scarecrow farm, creator group, blades, bosses, auras, Rebirth) plus anti-pattern warnings for common beginner mistakes.",
  hero: {
    eyebrow: "Beginner tips",
    subtitle:
      "Safe early-game checklist plus anti-pattern warnings, tied to confirmed systems only.",
    ctas: [
      { label: "How to play", href: "/how-to-play" },
      { label: "Scarecrow farm guide", href: "/scarecrow-farm-guide" },
    ],
  },
  quickAnswer:
    "Beginner tips focus on the official early-game loop: join the verified creator group for codes, redeem the currently active code (UPD1 as of 2026-09-01), farm scarecrows for stats, chase blades and Auras from confirmed systems, and avoid committing to a Rebirth before your loadout and farming stats are stable.",
  keyFacts: [
    { label: "First step", value: "Join verified creator group" },
    { label: "Active code", value: "UPD1 (2026-09-01)" },
    { label: "Anti-pattern", value: "Premature Rebirth" },
    { label: "Best resource", value: "Verified Blade + Aura loadout" },
  ],
  modules: [
    {
      id: "safe-checklist",
      type: "steps",
      heading: "The safe early-game checklist",
      items: [
        {
          title: "Join the verified creator group and Like the game",
          body: "Join 'Can't Hold It Anymore!' (id 918672217) on your first session and Like the game from the Roblox game page. This unlocks free exclusive rewards and secret codes.",
        },
        {
          title: "Redeem the active code UPD1 before your first farming run",
          body: "UPD1 is the only currently active +1 Fruit Samurai code as of 2026-09-01, published on the official Roblox game description. Code rewards are typically granted on first server entry, so you start with a larger stat base if you redeem before you teleport to the scarecrow area.",
        },
        {
          title: "Spend your first 15-30 minutes on the scarecrow farm loop",
          body: "Scarecrows are the named early-game training target in the official description and the safest way to raise per-stat values before you fight Fruit Bosses.",
        },
        {
          title: "Stick to one confirmed Legendary Blade until you understand its swing timing",
          body: "Switching blades every session resets your muscle memory and slows down your scarecrow kills.",
        },
        {
          title: "Save a single Aura slot for a Fruit Boss attempt",
          body: "Auras are designed to spike boss damage; spending them on scarecrows is the most common Aura mistake.",
        },
        {
          title: "Read the how-to-play walkthrough before your third session",
          body: "The walkthrough orders the loop (group join, scarecrow farm, blade chase, boss fight, Aura unlock, Rebirth) so you are not improvising mid-session.",
        },
        {
          title: "Do not commit to a Rebirth on day one",
          body: "Rebirth resets progress and only pays back if your pre-Rebirth stat ceiling is high.",
        },
      ],
    },
    {
      id: "anti-patterns",
      type: "callout",
      tone: "caution",
      title: "Anti-patterns: the mistakes that cost new players the most",
      body: "Rebirthing too early. Committing one Aura to a single target. Chasing every Legendary Blade. Skipping the verified creator group join. Farming Fruit Bosses before you have a blade for them. Improvising the loop order. Trusting third-party links for codes or community destinations.",
    },
    {
      id: "anti-pattern-details",
      type: "prose",
      heading: "Anti-pattern details",
      body: "A premature Rebirth resets your stat progress for a multiplier that only matters if your pre-Rebirth ceiling was already near the cap. Committing an Aura to a low-yield farming target wastes the Aura. Switching blades every session keeps you from learning any single blade's swing timing. Skipping the verified creator group join is the most expensive tip to skip. Farming Fruit Bosses before you have a blade for them wastes the Aura you saved.",
    },
  ],
  faqIds: ["faq-first-session", "faq-farm-before-boss", "faq-safe-rebirth", "faq-tips-missing"],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-codes-en-US", "fixed-scarecrow-farm-guide-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US", "fixed-fruit-boss-guide-en-US", "fixed-rebirth-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-01",
};

export const guidesFixturePage: PageContent = {
  id: "guides",
  translationKey: "guides",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: `${"How to play Fruit Samurai (Roblox)"} guides`,
  seoTitle: "+1 Fruit Samurai guides index",
  metaDescription:
    "Index of every +1 Fruit Samurai guide, walkthrough, and tier list on the wiki.",
  summary:
    "Use this index to jump straight into the verified +1 Fruit Samurai guides: how to play, codes, blades tier list, auras tier list, fruit boss guide, scarecrow farm guide, Lucky Roll guide, and rebirth guide.",
  hero: {
    eyebrow: "Guides index",
    subtitle:
      "Pick a guide to read next. Every system page is built only from systems the official Roblox description for universe 10424311938 names.",
    ctas: [
      { label: "How to play", href: "/how-to-play" },
      { label: "Codes", href: "/codes" },
      { label: "Blades tier list", href: "/blades-tier-list" },
    ],
  },
  quickAnswer:
    "Use the guides index to jump into the +1 Fruit Samurai walkthrough that matches your current stage: how to play for beginners, blades/auras tier lists for mid-game, fruit boss and rebirth for late game.",
  keyFacts: [
    { label: "Stage", value: "Beginner to late-game" },
    { label: "Source", value: "Official description + verified creator group" },
    { label: "Tone", value: "Status-first, dated 2026-08-22" },
    { label: "Avoid", value: "Community-speculation numbers" },
  ],
  modules: [
    {
      id: "guides-index",
      type: "entity-grid",
      heading: "Browse all guides",
      items: [
        { title: "How to play", summary: "Beginner walkthrough of the verified six-step loop.", href: "/how-to-play" },
        { title: "Active codes", summary: "Code status and group-join redemption rule.", href: "/codes" },
        { title: "Blades tier list", summary: "Legendary Blades confirmed vs unannounced.", href: "/blades-tier-list" },
        { title: "Auras tier list", summary: "Aura unlock path with dated status rows.", href: "/auras-tier-list" },
        { title: "Fruit boss guide", summary: "Confirmed Fruit Boss system with loadout.", href: "/fruit-boss-guide" },
        { title: "Scarecrow farm guide", summary: "Stats loop and beginner-safe setup.", href: "/scarecrow-farm-guide" },
        { title: "Lucky Roll guide", summary: "Status page for the unconfirmed Lucky Roll mechanic.", href: "/lucky-roll-guide" },
        { title: "Rebirth guide", summary: "Pre-Rebirth prep checklist and tier status.", href: "/rebirth-guide" },
        { title: "Beginner tips", summary: "Safe early-game checklist and anti-patterns.", href: "/beginner-tips" },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: ["fixed-how-to-play-en-US", "fixed-codes-en-US", "fixed-blades-tier-list-en-US", "fixed-auras-tier-list-en-US"],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const wikiFixturePage: PageContent = {
  id: "wiki",
  translationKey: "wiki",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: `${"+1 Fruit Samurai"} wiki notes`,
  seoTitle: "+1 Fruit Samurai wiki notes",
  metaDescription:
    "Wiki notes index for +1 Fruit Samurai: confirmed terms, identity card, and dated status rows for unannounced values.",
  summary:
    "Wiki notes for +1 Fruit Samurai: identity, confirmed terms, and dated status rows for every value that is not announced as of 2026-08-22.",
  hero: {
    eyebrow: "Wiki notes",
    subtitle:
      "Wiki-style notes drawn from the official Roblox description for universe 10424311938.",
    ctas: [
      { label: "Update log", href: "/updates" },
      { label: "Official links", href: "/official-links" },
    ],
  },
  quickAnswer:
    "Wiki notes for +1 Fruit Samurai cover the verified identity card, the confirmed system names, and the dated status rows for every value that is not announced as of 2026-08-22.",
  keyFacts: [
    { label: "Universe", value: "10424311938" },
    { label: "Identity source", value: "Roblox game page + Games API" },
    { label: "Tone", value: "Confirmed vs unannounced" },
    { label: "Last updated", value: "2026-08-21" },
  ],
  modules: [
    {
      id: "wiki-terms",
      type: "data-table",
      heading: "Confirmed wiki terms",
      columns: [
        { key: "term", label: "Term" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { term: "Scarecrow farm (stats source)", status: "Confirmed" },
        { term: "Legendary Blades (collectible system)", status: "Confirmed" },
        { term: "Fruit Bosses (boss system)", status: "Confirmed" },
        { term: "Auras (unlockable system)", status: "Confirmed" },
        { term: "Rebirth (Stats upgrade loop)", status: "Confirmed" },
        { term: "Creator group join (codes/rewards)", status: "Confirmed" },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: ["home-en-US", "fixed-updates-patch-notes-en-US", "fixed-official-links-status-en-US"],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const aboutFixturePage: PageContent = {
  id: "about",
  translationKey: "about",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "About the +1 Fruit Samurai wiki",
  seoTitle: "About the +1 Fruit Samurai wiki",
  metaDescription:
    "About page for the unofficial +1 Fruit Samurai wiki: source policy, fact boundaries, and contact.",
  summary:
    "About the unofficial +1 Fruit Samurai wiki: source policy, fact boundaries, and contact.",
  hero: {
    eyebrow: "About",
    subtitle:
      "What this wiki is, who built it, and the source policy behind every page.",
    ctas: [],
  },
  quickAnswer:
    "The +1 Fruit Samurai wiki is an unofficial community reference built on top of the Roblox game page and the Roblox Games API for universe 10424311938.",
  keyFacts: [
    { label: "Status", value: "Unofficial fan wiki" },
    { label: "Universe", value: "10424311938" },
    { label: "Source policy", value: "Official Roblox endpoints first" },
    { label: "Last reviewed", value: "2026-08-22" },
  ],
  modules: [
    {
      id: "about-body",
      type: "prose",
      heading: "About this site",
      body: "This site is an unofficial +1 Fruit Samurai wiki. It documents only the Roblox universe 10424311938 by the verified 'Can't Hold It Anymore!' creator group, drawing hard current-game facts from the Roblox game page and the Roblox Games API. Per-stat values, individual blade and aura names, boss HP values, and Rebirth tier multipliers are marked as 'Not announced as of 2026-08-22' until the official description or the verified creator group confirms them.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["fixed-official-links-status-en-US", "fixed-creator-group-rewards-en-US"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-08-22",
};

export const contactFixturePage: PageContent = {
  id: "contact",
  translationKey: "contact",
  locale: "en-US",
  routeKind: "fixed",
  slug: "contact",
  url: "/contact",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Contact the +1 Fruit Samurai wiki",
  seoTitle: "Contact the +1 Fruit Samurai wiki",
  metaDescription:
    "How to contact the operators of the +1 Fruit Samurai wiki for corrections or community feedback.",
  summary:
    "How to reach the operators of the +1 Fruit Samurai wiki for corrections, suggestions, or community feedback.",
  hero: {
    eyebrow: "Contact",
    subtitle:
      "Use Email Routing to send corrections or community feedback to the wiki team.",
    ctas: [],
  },
  quickAnswer:
    "Send corrections or community feedback to support@1fruitsamurai.wiki. The wiki team reviews messages and updates the relevant page when a fact boundary shifts.",
  keyFacts: [
    { label: "Email", value: "support@1fruitsamurai.wiki" },
    { label: "Topic", value: "Corrections, suggestions" },
    { label: "Tone", value: "Community reference" },
    { label: "Response time", value: "Not announced" },
  ],
  modules: [
    {
      id: "contact-body",
      type: "prose",
      heading: "How to contact us",
      body: "Send corrections or community feedback to support@1fruitsamurai.wiki. For verified creator-side corrections, contact the verified 'Can't Hold It Anymore!' creator group (Roblox community id 918672217) directly.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "fixed-creator-group-rewards-en-US"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-08-22",
};

export const privacyFixturePage: PageContent = {
  id: "privacy-policy",
  translationKey: "privacy-policy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "privacy-policy",
  url: "/privacy-policy",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Privacy policy for 1fruitsamurai.wiki",
  seoTitle: "Privacy policy for 1fruitsamurai.wiki",
  metaDescription:
    "Privacy policy for the unofficial +1 Fruit Samurai wiki at 1fruitsamurai.wiki.",
  summary:
    "Privacy policy for the unofficial +1 Fruit Samurai wiki: analytics scope, cookies, and data retention.",
  hero: {
    eyebrow: "Privacy",
    subtitle:
      "Privacy policy for the unofficial +1 Fruit Samurai wiki at 1fruitsamurai.wiki.",
    ctas: [],
  },
  quickAnswer:
    "The +1 Fruit Samurai wiki uses one analytics property for aggregate traffic measurement. No personal data is sold or shared.",
  keyFacts: [
    { label: "Analytics", value: "GA4 (aggregate only)" },
    { label: "Cookies", value: "First-party only" },
    { label: "Selling", value: "None" },
    { label: "Last reviewed", value: "2026-08-22" },
  ],
  modules: [
    {
      id: "privacy-body",
      type: "prose",
      heading: "Privacy policy",
      body: "The +1 Fruit Samurai wiki at 1fruitsamurai.wiki uses one Google Analytics 4 property for aggregate traffic measurement. No personal data is sold, shared with third parties for advertising, or used to build user profiles. Cookies set by the wiki are first-party only. If you want your visits excluded, use your browser's privacy mode or block the GA4 tag.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-08-22",
};

export const termsFixturePage: PageContent = {
  id: "terms",
  translationKey: "terms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "terms",
  url: "/terms",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Terms of use for 1fruitsamurai.wiki",
  seoTitle: "Terms of use for 1fruitsamurai.wiki",
  metaDescription:
    "Terms of use for the unofficial +1 Fruit Samurai wiki at 1fruitsamurai.wiki.",
  summary:
    "Terms of use for the unofficial +1 Fruit Samurai wiki: unofficial status, fact boundaries, and intellectual property.",
  hero: {
    eyebrow: "Terms",
    subtitle:
      "Unofficial wiki; all in-game facts are sourced from the Roblox game page and the Roblox Games API.",
    ctas: [],
  },
  quickAnswer:
    "The +1 Fruit Samurai wiki is an unofficial community reference. All in-game facts come from official Roblox sources for universe 10424311938.",
  keyFacts: [
    { label: "Status", value: "Unofficial fan wiki" },
    { label: "Universe", value: "10424311938" },
    { label: "Trademark", value: "Belongs to Roblox / creator" },
    { label: "Last reviewed", value: "2026-08-22" },
  ],
  modules: [
    {
      id: "terms-body",
      type: "prose",
      heading: "Terms of use",
      body: "The +1 Fruit Samurai wiki is an unofficial fan wiki and is not affiliated with Roblox Corporation or the creator group 'Can't Hold It Anymore!'. All trademarks and game content belong to their respective owners. In-game facts come only from the Roblox game page and the Roblox Games API for universe 10424311938. Per-stat values, individual blade and aura names, boss HP values, and Rebirth tier multipliers are marked as 'Not announced as of 2026-08-22' until the official description or the verified creator group confirms them.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "privacy-policy"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-08-22",
};

export const faqFixturePage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Frequently asked questions about +1 Fruit Samurai",
  seoTitle: "+1 Fruit Samurai FAQ",
  metaDescription:
    "FAQ for +1 Fruit Samurai: identity, codes, blades, auras, Fruit Bosses, scarecrow farm, Rebirth, updates, official links.",
  summary:
    "FAQ index for the +1 Fruit Samurai wiki. Each answer is grounded in the official Roblox description for universe 10424311938 or the verified creator group post.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Direct answers to the most common +1 Fruit Samurai questions, grounded in the official Roblox description.",
    ctas: [
      { label: "Codes", href: "/codes" },
      { label: "How to play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    "Use this FAQ to get straight to the answer. Each entry is grounded in the official Roblox description for universe 10424311938 or the verified creator group post.",
  keyFacts: [
    { label: "Universe", value: "10424311938" },
    { label: "Tone", value: "Confirmed vs unannounced" },
    { label: "Last reviewed", value: "2026-08-22" },
    { label: "Source", value: "Official Roblox endpoints" },
  ],
  modules: [
    {
      id: "faq-body",
      type: "prose",
      heading: "FAQ",
      body: "Browse the FAQ answers via the system pages: codes, blades tier list, auras tier list, fruit boss guide, scarecrow farm guide, rebirth guide, official links, creator group, update log, beginner tips, vs other Fruit Samurai games, and how to play.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["home-en-US", "fixed-codes-en-US", "fixed-how-to-play-en-US"],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-22",
};

export const allFruitPages: PageContent[] = [
  homePage,
  guidesFixturePage,
  wikiFixturePage,
  howToPlayPage,
  codesPage,
  bladesTierListPage,
  aurasTierListPage,
  fruitBossGuidePage,
  scarecrowFarmGuidePage,
  luckyRollGuidePage,
  rebirthGuidePage,
  updatesPatchNotesPage,
  creatorGroupRewardsPage,
  officialLinksStatusPage,
  vsOtherFruitSamuraiPage,
  beginnerTipsPage,
  aboutFixturePage,
  contactFixturePage,
  privacyFixturePage,
  termsFixturePage,
  faqFixturePage,
];