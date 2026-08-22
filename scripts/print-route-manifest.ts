import { allFruitPages } from "../src/data/fruit-pages";
import { getFinalRouteManifest } from "../src/lib/content";
import type { PageContent } from "../src/types/content";

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

const launchPages: PageContent[] = allFruitPages.filter((page) =>
  LAUNCH_TRANSLATION_KEYS.has(page.translationKey),
);

const manifest = `${JSON.stringify(getFinalRouteManifest(launchPages), null, 2)}\n`;

const args = process.argv.slice(2);
let outputPath = "route-manifest.json";
for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--output") {
    outputPath = args[i + 1] ?? outputPath;
    i += 1;
  }
}

import { writeFileSync } from "node:fs";
writeFileSync(outputPath, manifest, "utf8");
console.log(`route manifest written: ${outputPath}`);