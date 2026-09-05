import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Home FAQs
  {
    id: "faq-game-cover",
    question: "What game does the +1 Fruit Samurai wiki cover?",
    answer:
      "The +1 Fruit Samurai wiki covers the Roblox universe 10424311938 created by the verified group 'Can't Hold It Anymore!' (id 918672217) in July 2026. It does not cover Fruit Ninja, ZO ぞ Samurai, Fruit Battlegrounds, One Fruit Simulator, the Brawl Stars character Kenji, the anime, or the board game.",
    pageIds: ["home-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-official-wiki",
    question: "Is the +1 Fruit Samurai wiki official?",
    answer:
      "The wiki itself is a community reference built on top of official Roblox sources. All hard current-game facts come from the Roblox game page and the Roblox Games API for universe 10424311938, with release and last-release timestamps cross-checked against RoMonitor's acquisition page.",
    pageIds: ["home-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-group-required",
    question: "Why do I need to join the creator group to use the wiki?",
    answer:
      "Joining the verified creator group is not required to read the +1 Fruit Samurai wiki. The official description ties secret code redemption to the group, so most wiki pages on codes, rewards, and progression assume the reader has joined or will join.",
    pageIds: ["home-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-update-cadence",
    question: "How often does the +1 Fruit Samurai wiki update?",
    answer:
      "The wiki mirrors the Roblox Games API 'updated' field for universe 10424311938 and the RoMonitor last-release timestamp for cross-checking. In-game patch details stay labelled as not announced as of 2026-08-22 until the official description or the verified creator group confirms them.",
    pageIds: ["home-en-US", "fixed-updates-patch-notes-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // How to play FAQs
  {
    id: "faq-how-to-play-group",
    question: "Do I need to join the creator group to play +1 Fruit Samurai?",
    answer:
      "The verified creator group is not required to load the game, but it is required to redeem any secret code the description mentions. New players should join the verified 'Can't Hold It Anymore!' group (id 918672217) before they try to type a code into the redemption box.",
    pageIds: ["fixed-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-first-move",
    question: "What should I do first in +1 Fruit Samurai?",
    answer:
      "The verified first move is to join the creator group, then farm scarecrows to build slash stats. The description ties scarecrows to slash-stat progression and ties Fruit Bosses to aura unlocks, so the order matters.",
    pageIds: ["fixed-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-rebirth-timing",
    question: "When should I Rebirth in +1 Fruit Samurai?",
    answer:
      "Rebirth only after unlocking at least one Aura. The description confirms Rebirth exists but does not publish tier multipliers as of 2026-08-22, so the safest first Rebirth is the one that resets a player who has already started the aura loop.",
    pageIds: ["fixed-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-blade-chase",
    question: "Are there confirmed blade names I should chase first?",
    answer:
      "No specific blade names are confirmed by the official description as of 2026-08-22. The blades tier list treats the Legendary Blades system as confirmed and treats individual blade names as not announced.",
    pageIds: ["fixed-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Codes FAQs
  {
    id: "faq-codes-active",
    question: "Are there any active +1 Fruit Samurai codes right now?",
    answer:
      "Yes. UPD1 is the only currently active +1 Fruit Samurai code as of 2026-09-01, published on the official Roblox game description for universe 10424311938. The official description confirms that codes exist and ties them to joining the verified creator group.",
    pageIds: ["fixed-codes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-codes-group",
    question: "Do I need to join the creator group to redeem +1 Fruit Samurai codes?",
    answer:
      "Yes. The official Roblox game page ties secret code redemption to joining the verified 'Can't Hold It Anymore!' group (id 918672217). Players who skip the join will see the redemption fail.",
    pageIds: ["fixed-codes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-codes-channel",
    question: "Where will new +1 Fruit Samurai codes be posted first?",
    answer:
      "The verified creator group wall (id 918672217) is the highest-authority channel. The official Roblox game page description and the wiki update log mirror the same codes once they are published.",
    pageIds: ["fixed-codes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-codes-expired",
    question: "Do expired +1 Fruit Samurai codes get a separate list?",
    answer:
      "Yes, but the expired list is empty as of 2026-09-01 because UPD1 is the only code currently published on the official Roblox description; nothing has been retired yet.",
    pageIds: ["fixed-codes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Blades tier list FAQs
  {
    id: "faq-best-blade",
    question: "What is the best Legendary Blade in +1 Fruit Samurai?",
    answer:
      "The official description does not name any individual blade as of 2026-08-22, so the blades tier list cannot name a single best blade. The wiki recommends a stage-by-stage loadout built on the confirmed progression loop instead.",
    pageIds: ["fixed-blades-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-blade-tiers-confirmed",
    question: "Are blade tiers confirmed for +1 Fruit Samurai?",
    answer:
      "No. Tier labels (S/A/B/C and equivalents) are not announced by the official description or the verified creator group as of 2026-08-22.",
    pageIds: ["fixed-blades-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-blade-channel",
    question: "Where will new +1 Fruit Samurai blade names be announced first?",
    answer:
      "The verified 'Can't Hold It Anymore!' creator group post (Roblox community id 918672217) is the highest-authority channel.",
    pageIds: ["fixed-blades-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-blade-youtube",
    question: "Should I chase a specific blade name from a YouTube video?",
    answer:
      "No. The blades tier list treats community video names as unverified until the official description or the verified creator group confirms them.",
    pageIds: ["fixed-blades-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Auras tier list FAQs
  {
    id: "faq-best-aura",
    question: "What is the best aura in +1 Fruit Samurai?",
    answer:
      "The official description does not name any individual aura as of 2026-08-22, so the aura tier list cannot name a single best aura. The wiki recommends a stage-by-stage unlock path built on the confirmed progression loop instead.",
    pageIds: ["fixed-auras-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-aura-rates",
    question: "Are aura drop rates confirmed for +1 Fruit Samurai?",
    answer:
      "No. Drop rates, unlock formulas, and stacking multipliers are not announced by the official description or the verified creator group as of 2026-08-22.",
    pageIds: ["fixed-auras-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-aura-channel",
    question: "Where will new +1 Fruit Samurai aura names be announced first?",
    answer:
      "The verified 'Can't Hold It Anymore!' creator group post (Roblox community id 918672217) is the highest-authority channel.",
    pageIds: ["fixed-auras-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-rebirth-before-aura",
    question: "Should I Rebirth before unlocking any aura?",
    answer:
      "No. The aura tier list recommends unlocking at least one aura before a first Rebirth.",
    pageIds: ["fixed-auras-tier-list-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Fruit boss guide FAQs
  {
    id: "faq-boss-count",
    question: "How many Fruit Bosses are in +1 Fruit Samurai right now?",
    answer:
      "The total boss count is not announced as of 2026-08-22. The Roblox official description names the Fruit Boss system but does not list individual bosses. Watch the verified creator group for roster updates.",
    pageIds: ["fixed-fruit-boss-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-boss-spawn",
    question: "Where do Fruit Bosses spawn?",
    answer:
      "Spawn locations for individual Fruit Bosses are not announced as of 2026-08-22. The description only confirms that Fruit Bosses exist as the late-game target of the loop.",
    pageIds: ["fixed-fruit-boss-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-best-aura-boss",
    question: "What is the strongest Aura for Fruit Bosses?",
    answer:
      "Per-aura damage against bosses is not announced as of 2026-08-22. Players should pick the top entry on the auras-tier-list page.",
    pageIds: ["fixed-fruit-boss-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-boss-group",
    question: "Do I need to join the verified creator group to fight Fruit Bosses?",
    answer:
      "Group join is required by the official description for free exclusive rewards and secret codes, but boss-access gating tied to group membership is not announced as of 2026-08-22. Join the group anyway because it unlocks the rewards system.",
    pageIds: ["fixed-fruit-boss-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Scarecrow farm FAQs
  {
    id: "faq-farm-timing",
    question: "How long does a +1 Fruit Samurai scarecrow farm run take?",
    answer:
      "Per-run timing is not announced as of 2026-08-22. Compare two sessions of equal length with the same Blade to produce a player-level benchmark.",
    pageIds: ["fixed-scarecrow-farm-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-farm-blade",
    question: "Which Blade is best for the scarecrow farm in +1 Fruit Samurai?",
    answer:
      "The blades-tier-list page is the published source for blade ranks. Until a per-stat curve is released, the highest-ranked confirmed blade on that list is the safest farm pick.",
    pageIds: ["fixed-scarecrow-farm-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-farm-aura",
    question: "Does the +1 Fruit Samurai scarecrow farm need an Aura?",
    answer:
      "Auras are confirmed as a separate system in the description, but per-Aura modifiers on farm stats are not announced as of 2026-08-22.",
    pageIds: ["fixed-scarecrow-farm-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-farm-changes",
    question: "Where can I see the +1 Fruit Samurai scarecrow farm latest changes?",
    answer:
      "The updates-patch-notes page tracks each game build. Any stat-formula change or new farm band will appear there before it appears on the scarecrow farm guide.",
    pageIds: ["fixed-scarecrow-farm-guide-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Lucky Roll FAQs
  {
    id: "faq-lucky-roll-now",
    question: "Is there a +1 Fruit Samurai lucky roll right now?",
    answer:
      "The +1 Fruit Samurai lucky roll mechanic is not announced as of 2026-08-22. The official description does not name the mechanic.",
    pageIds: ["fixed-lucky-roll-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-lucky-roll-weights",
    question: "What are the lucky roll weights in +1 Fruit Samurai?",
    answer:
      "Drop weights have not been published by an official source as of 2026-08-22.",
    pageIds: ["fixed-lucky-roll-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-lucky-roll-currency",
    question: "Does +1 Fruit Samurai have a roll currency?",
    answer:
      "A roll currency, ticket, or counter is not announced as of 2026-08-22.",
    pageIds: ["fixed-lucky-roll-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-lucky-roll-next-update",
    question: "Will the +1 Fruit Samurai lucky roll land in the next update?",
    answer:
      "A future update can add the mechanic at any time, but no specific date or build is announced as of 2026-08-22.",
    pageIds: ["fixed-lucky-roll-guide-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Rebirth FAQs
  {
    id: "faq-rebirth-how",
    question: "How does Rebirth work in +1 Fruit Samurai right now?",
    answer:
      "Rebirth is confirmed in the official description as a 'Stats upgrade' action. The exact requirements and per-tier effects are not announced as of 2026-08-22.",
    pageIds: ["fixed-rebirth-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-rebirth-tiers",
    question: "How many Rebirth tiers are in +1 Fruit Samurai?",
    answer:
      "The tier count is not announced as of 2026-08-22. The official description names the Rebirth system without enumerating tiers.",
    pageIds: ["fixed-rebirth-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-rebirth-aura-first",
    question: "Should I Rebirth before unlocking an Aura?",
    answer:
      "Auras are confirmed in the description, but per-Rebirth unlock ordering is not announced as of 2026-08-22. The prep checklist is the safe guideline.",
    pageIds: ["fixed-rebirth-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-rebirth-blade",
    question: "What is the best Blade to use right before a Rebirth?",
    answer:
      "The blades-tier-list page is the published source for Blade ranks. Until per-tier multiplier data is published, the highest-ranked confirmed Blade is the safest pre-Rebirth choice.",
    pageIds: ["fixed-rebirth-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Update log FAQs
  {
    id: "faq-latest-update",
    question: "When was the latest +1 Fruit Samurai update?",
    answer:
      "The most recent +1 Fruit Samurai update is dated 2026-08-21 on the Roblox Games API 'updated' field for Universe 10424311938.",
    pageIds: ["fixed-updates-patch-notes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-update-changes",
    question: "What changed in the latest +1 Fruit Samurai update?",
    answer:
      "Per-build patch details are not announced as of 2026-08-22. The verified creator group has not posted a changelog tied to the 2026-08-21 build at the time of research.",
    pageIds: ["fixed-updates-patch-notes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-patch-notes-where",
    question: "Where can I find +1 Fruit Samurai patch notes?",
    answer:
      "The official description and the verified creator group page are the two public channels tied to the game. A future in-game news tab or per-build changelog would surface the same content.",
    pageIds: ["fixed-updates-patch-notes-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Creator group FAQs
  {
    id: "faq-group-robux",
    question: "Do I need to spend Robux to join the +1 Fruit Samurai creator group?",
    answer:
      "No. Joining a Roblox community group is free.",
    pageIds: ["fixed-creator-group-rewards-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-like-only",
    question: "What happens if I Join but forget to Like the game?",
    answer:
      "The official description pairs Like and Join as the two-step unlock. If your account shows group membership but not the Like flag, your in-game reward tier may not activate. Re-favorite the game and re-enter the server.",
    pageIds: ["fixed-creator-group-rewards-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-group-impersonator",
    question: "How do I find the verified group and not an impersonator?",
    answer:
      "The verified +1 Fruit Samurai creator group is id 918672217, named 'Can't Hold It Anymore!'. Any community with a different id is not the verified group.",
    pageIds: ["fixed-creator-group-rewards-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-codes-first-channel",
    question: "Where do new secret codes get posted first?",
    answer:
      "New codes are typically surfaced on the verified creator group community page and in the active code list on the codes page.",
    pageIds: ["fixed-creator-group-rewards-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Official links FAQs
  {
    id: "faq-discord-where",
    question: "Where is the +1 Fruit Samurai Discord?",
    answer:
      "As of 2026-08-22, the +1 Fruit Samurai Discord is not announced on the Roblox game page or in the verified creator group post.",
    pageIds: ["fixed-official-links-status-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-trello-exists",
    question: "Is there a Trello board for +1 Fruit Samurai?",
    answer:
      "Not announced as of 2026-08-22. The official description does not link a Trello.",
    pageIds: ["fixed-official-links-status-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-private-server",
    question: "How do I get a private server link?",
    answer:
      "Private server links are not announced as of 2026-08-22. Roblox private servers are created from inside the game client by players who have the right.",
    pageIds: ["fixed-official-links-status-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-news-safest",
    question: "What is the safest way to follow +1 Fruit Samurai news today?",
    answer:
      "Bookmark the verified creator group at https://www.roblox.com/communities/918672217 and the official game page.",
    pageIds: ["fixed-official-links-status-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Vs other fruit samurai FAQs
  {
    id: "faq-vs-fruit-ninja",
    question: "Is +1 Fruit Samurai the same as Fruit Ninja?",
    answer:
      "No. +1 Fruit Samurai is a Roblox universe (id 10424311938) by group 'Can't Hold It Anymore!' created in 2026. Fruit Ninja is a 2010 mobile game by Halfbrick Studios with a 2019 animated film.",
    pageIds: ["fixed-vs-other-fruit-samurai-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-vs-fruit-battlegrounds",
    question: "Is +1 Fruit Samurai a Fruit Battlegrounds reskin?",
    answer:
      "No. Fruit Battlegrounds is a separate Roblox fighting game by a different creator.",
    pageIds: ["fixed-vs-other-fruit-samurai-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-vs-brawl-kenji",
    question: "Is +1 Fruit Samurai connected to Brawl Stars Kenji?",
    answer:
      "No. Brawl Stars is a Supercell mobile game and Kenji is a character inside that game.",
    pageIds: ["fixed-vs-other-fruit-samurai-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-verify-universe-id",
    question: "Where can I verify the Roblox universe id for +1 Fruit Samurai?",
    answer:
      "The official game page and the Roblox Games API endpoint both report universe id 10424311938 and root place id 121143259662420.",
    pageIds: ["fixed-vs-other-fruit-samurai-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Beginner tips FAQs
  {
    id: "faq-first-session",
    question: "What should I do in my very first +1 Fruit Samurai session?",
    answer:
      "Join the verified creator group and Like the game, redeem any active code, and spend your first 15-30 minutes on the scarecrow farm.",
    pageIds: ["fixed-beginner-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-farm-before-boss",
    question: "How long should I farm scarecrows before I fight a Fruit Boss?",
    answer:
      "Stay on the farm until your per-stat gains start to slow down; then move to a Fruit Boss attempt with one saved Aura.",
    pageIds: ["fixed-beginner-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-safe-rebirth",
    question: "When is it safe to Rebirth?",
    answer:
      "Rebirth is safe to attempt once your scarecrow farm has plateaued and you have at least one confirmed Aura you are willing to spend on the post-Rebirth loop.",
    pageIds: ["fixed-beginner-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-tips-missing",
    question: "Are there any beginner tips that are not on this page?",
    answer:
      "The system-specific pages (how to play, scarecrow farm guide, blades tier list, auras tier list, fruit boss guide, rebirth guide) go deeper on each tip listed here.",
    pageIds: ["fixed-beginner-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];