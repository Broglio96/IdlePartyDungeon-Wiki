/*
 * Player-facing guide content for Idle Party Dungeon 1.11.
 * Update history is kept in the Patch Notes chapter.
 * Updated 28 July 2026.
 */
window.WIKI_CONTENT = Object.freeze({
  version: {
    game: "1.11",
    updated: "28 July 2026",
    status: "Current closed-test release"
  },

  patchNotes: [
    {
      version: "1.11",
      title: "Save Recovery & Language Foundation",
      date: "28 July 2026",
      status: "Current closed-test release",
      notes: [
        "Added Save Recovery to Play Games settings, available even while signed out. On Android it can export the exact encrypted local save through the system file picker, validate and preview a selected backup before a confirmed replacement, and preserve a verified pre-change archive.",
        "A save linked to another Play Games profile can be explicitly reassociated after a fresh identity check and then compared with the current profile's cloud copy. The game never chooses a history automatically, requires a second confirmation, keeps local play available, and reports the actual payload size and limit when a cloud upload is too large.",
        "The language list is now one simple row per language: flag first, then the language's own name. Languages that are not ready remain visible but disabled, without rollout labels or status text cluttering the picker.",
        "German and French translations now cover the complete game catalog. Both remain disabled while their layouts and native-language review are completed, so players never receive a partially reviewed language or English fallback text."
      ]
    },
    {
      version: "1.10",
      title: "Raid Reforge & Echo Themes",
      date: "28 July 2026",
      status: "Previous closed-test release",
      notes: [
        "Every raid's unique accessory can now be reforged to a higher tier, the same way its weapon and armor already could. A reforged accessory keeps its raid identity, its set bonus, and its triggered effect while only the stats scale, so a set assembled at its own raid tier can be carried up with the party.",
        "The daily Echo Descent Guardian fight now runs under one of twelve named themes — Arcane Famine, Prismatic Relay, Last Arrow and nine more — each bundling three of the ten Echo laws into a single readable strategy. Themes rotate at 00:00 UTC, and a fight already under way keeps the laws it began with until it resolves. The Echo Descent overview shows today's theme and its three laws.",
        "Equipment now arrives on a steadier cadence. Every ordinary tier offers the three Core weapons plus exactly one variant line — critical-hit weapons on tiers 1, 5, 7 and 11, specialist weapons on tiers 2, 4, 8 and 10 — instead of swinging between three and eight new pieces per tier. Raid tiers 3, 6, 9 and 12 offer only the three Core weapons and three Core armors that raid reforging consumes.",
        "Guard armor now covers one weight per ordinary even tier — Light, Medium, Heavy, then Light again — rather than all three weights at once. Plan for a critical-hit build waiting up to four tiers between upgrades rather than two, because the raid tiers no longer carry that line.",
        "Hero selection has a sort control in the Workshop's compact style: order the available heroes by level, Echo Resonance, class or name, each with an up and a down arrow. It appears in every hero picker — expeditions, raids, the Tower and Echo Descent — and applies immediately without losing the team you have assembled. Level, highest first, remains the default.",
        "Companion selection gained the same control, ordering companions by level, rarity or family in either direction. Family follows the order you met them in, from the earliest dungeon to the latest, so every companion of a family sits together.",
        "The Workshop's recipe list has a tier filter beside the type and sort controls: pick T1 through T12 to see only that tier's recipes. It stacks with the type filter, the search box, and the status chips, and clearing it back to “Tier” restores the full list.",
        "Recipe sorting reads as compact labels — Qty, Tier and A-Z with an up or down arrow — so all three controls fit one row on a phone. Reverse alphabetical is new; every other order is unchanged.",
        "Fixed the black screen on Google Play Games on PC, where the game booted and reached a fully interactive menu but its frames never reached the window. Phones are untouched. Google Play Games on PC also gained a native build, cutting startup there from about 5.1 seconds to about 1.8.",
        "Repainted the tier-8 Shattered Observatory weapons — Orbit Warbow, Comet Featherblade and Starglass Hungering Crook — into the family's gilded orrery palette, and rethemed the weapons that moved tier so each still reads as the work of its own dungeon.",
        "Cleared the decorative flourish that ran across page, section, card and hero titles, where it collapsed onto the text at the shipping title size. The selected navigation button now uses the ornate style instead of the flat pressed one."
      ]
    },
    {
      version: "1.09",
      title: "Resonance & Progression Update",
      date: "27 July 2026",
      status: "Previous closed-test release",
      notes: [
        "Rebalanced hero classes for more consistent performance across every class, promotion path, and progression stage, from early dungeons through raids and the endgame.",
        "Reworked raid set bonuses: each raid's set is now three pieces — its crafted weapon, its crafted armor, and its unique accessory. Any two pieces grant a flat stat rider, and the full three-piece set additionally awakens an effect that adapts to class role and weapon type in the raid's own critical or base-damage mode. Mystic and Paladin raid wearers also gained better survivability.",
        "Every raid now has its own gear identity — the Marching Grove protects, the Lightless Armada sustains, the Broken Sky crits, and the Last Road balances. Each raid offers one weapon per weapon type plus three new craftable raid armors (Light, Medium, Heavy) in that identity, and reforging a raid piece to a higher tier keeps its identity and effects while only the stats scale up — so every raid's set can be carried all the way to tier 12 and all four remain viable endgame choices. The older off-identity raid weapons have been retired from the game entirely.",
        "Reworked Ascension into four choice rows — Foundation, Awakening, Mastery, and Capstone — with a meaningful pick at every stage of a 16-point build. Ranks can be freely reallocated, including switching a row’s pick within the current path; changing Ascendant Path now uses a rare raid-crafted item.",
        "Rebalanced Mist across all three affected dungeons for more consistent difficulty by tier. Mist Reduction pet bonuses now genuinely reduce the extra enemy evasion granted by Mist.",
        "Dungeon monster difficulty now scales smoothly by tier for a steadier climb from Slime Forest through Eclipse Throne. Tower of Resonance Floors 71–100 are also harder as the party approaches the Apex, matched to expected Echo Resonance investment.",
        "Floor 80 is now the final Tower checkpoint a completely unresonated formation can realistically clear. From Floor 81, under-ranked formations face Echo Pressure: enemy Health and Attack rise with the party’s missing average Echo Resonance rank, while entry remains unrestricted.",
        "Every tenth Tower of Resonance floor, from 10 through 100, now awards a Tower Keystone on its first clear alongside the existing Coin and permanent roster-slot rewards. These ten materials are reserved for a future use.",
        "Added ceilings for Critical Damage, Lifesteal, Regeneration, Healing, and Counter Damage bonuses so extreme endgame gear stacking cannot reach degenerate values, with generous headroom above normal builds.",
        "Added a welcome-back summary after any meaningful time away, showing kills, XP, items, and crafting completed by every running expedition and raid. Welcome Premium Pack owners can collect everything with one tap.",
        "Fixed Android time tracking across device lock and resume so offline progress and crafting catch-up calculate correctly.",
        "Added Android notifications for finished crafting jobs, hero promotions, offline rewards, daily refreshes, and newly unlocked dungeons or raids. Settings now includes global and individual controls for all seven alert types, plus clear device-permission status.",
        "Weapons and armor offer Critical-hit and Base-damage variants, and Attack-focused and Defense-focused variants, staggered so each tier introduces one new family rather than all of them at once: critical-hit weapons arrive on tiers 1, 3, 5, 7, 9 and 11, Attack/Defense armor on tiers 2, 4, 6, 8, 10 and 12. Every tier still brings a full set of new gear, with fewer and clearer choices at each step. Combat accessories are split into Tank, DPS, and Support or Healer variants.",
        "Added 16 weapons across the Melee, Ranged, and Magic lines so every class can find at least one weapon of its type that supports its specialty.",
        "Equipment pickers now show the exact stat change versus the currently equipped item for every candidate piece.",
        "Long-press a hero during combat to manage equipment and Runes without pausing the fight.",
        "Combat arenas now keep every hero and monster in a fixed position for the entire fight; defeated entities no longer make the remaining formation reshuffle.",
        "Combat entities are now sized to match their Health bars, and the Mist and Stats arena buttons are larger and cleaner without boxed backgrounds.",
        "Combat Stats, hero-selection, and pet-selection popups opened from an arena now match the exact size of the combat popup that opened them.",
        "Fixed nested popups sometimes rendering behind their parent or failing to restore the exact previous view when closed.",
        "Notifications now always render above every popup and menu.",
        "Hero Details now shows each hero’s combat role, and hero cards across roster and team-selection screens show Echo Resonance rank.",
        "The promotion Choose button now sits at the top of the specialization preview so it can be confirmed without scrolling.",
        "Dungeon clear requirements now use one consistent progression system, with a new safeguard that prevents dungeon fights from stalling indefinitely.",
        "Coin prices and rewards are now shown consistently with the wallet’s denomination icons throughout the game.",
        "Dungeon and raid icons now show a tier badge matching the item-icon style.",
        "Normalized icon sizing and padding across the interface, including matching Mist and Stats combat icons and correcting several undersized icons.",
        "The Wiki link now opens a three-button main index page.",
        "Redesigned the Gem balance as a single banner with its icon and a dedicated plus button built into the frame.",
        "Fixed a rare bug where a renamed or no-longer-usable equipped item could vanish on load instead of returning to the inventory.",
        "Settings items in the right-hand column now place the label on the left and the icon on the right for a consistent reading order.",
        "The Low Battery setting is now called Battery Savings.",
        "Battery Savings and Language can now be changed directly from the Settings list. Language uses a compact EN/IT selector beside its icon.",
        "The Welcome Premium Pack is a real-money Shop purchase again; previous free claims remain owned. The Gem Shop also adds a one-time free 300 Gems reward for each verified, signed-in Google Play profile after account sync.",
        "Hero-selection lists across dungeons, raids, the Tower, and Echo Descent now sort available heroes by level, highest first.",
        "The Tower of Ascension is now called the Tower of Resonance. Existing progress, floor, and achievements are unchanged.",
        "Raids and Echo Descent now open on an Overview tab showing status, entry requirements, key rewards, formation, and a readiness explanation. Detailed mechanics moved to a Guide tab, while Help remains visible everywhere.",
        "Every raid now keeps a Fastest Clears leaderboard of its ten quickest runs, ranked with the time and date of each, shown in the arena Stats panel, the raid’s Records tab, and Settings > Achievements > Raid Records. Saves made before the update start from the record times they already held.",
        "Echo Descent is now a single Guardian fight each UTC day instead of a five-depth stratum. Winning grants +1 permanent Echo Resonance to each of the five victorious heroes, up to Rank 10, and closes Echo until the next 00:00 UTC. A defeat or an abandonment never consumes the day: the same laws, the same enemy formation, and the same reward stay available to retry.",
        "Every UTC day draws three of the nine mechanics-driven daily laws — one Environment, one Adaptation, and one Opportunity — for 27 possible law sets that the rotation walks through before it repeats. Laws suppress Mana, charge Health for active skills, cut healing received, deny a damage type outright, or expose enemies to extra damage. A fight that has already started keeps the laws and enemy formation it began with.",
        "Tower of Resonance Floors 71–100 are paced around eight daily Resonance claims at the one-rank-per-day cadence, with expected targets of Rank 2 / 4 / 6 / 8 across Floors 71–80 / 81–90 / 91–99 / 100. These stay build-readiness targets rather than entry locks.",
        "Added the Legendary Pet Pack below the Welcome Premium Pack: a one-time purchase granting the Lightless family’s Legendary Dreadbell Whale, statistically identical to a hatched Legendary. Full stables block checkout, and restored purchases grant the pet automatically when a slot opens.",
        "Added a shared Legendary pity counter across every family’s eggs. After 100 consecutive hatches without a Legendary pet, the next hatch is guaranteed Legendary; progress appears on the Pets Eggs tab, Pet Egg Market, and egg details.",
        "Added an Achievements button to Settings with every Play Games achievement, its store description, and live progress, including on Windows and while signed out. The connected Play Games popup keeps its native-overlay button.",
        "Added two Echo Resonance achievements — one for fully attuning a hero and one for lifetime Resonance progress.",
        "Added Every Path Mastered, an endgame achievement for holding one hero of every elite class in the roster at the same time — all 22 at once. Rosters that already qualify unlock it on load, and dismissing a hero never revokes it. The total is now 42 achievements worth 365 points.",
        "Added a Pets Upgrades tab for permanently increasing stable capacity and every family egg’s Legendary chance. The first three ranks reach 40 slots and a 1% Legendary chance; three Apex ranks extend that to 70 slots and 2%. New saves start with 10 pet slots, while existing saves keep all pets and previously reached capacity.",
        "Moved Echo Descent access inside the Tower of Resonance screen beside the title, visible but disabled before unlock. Tower, Echo, and newly unlocked dungeons now use activity badges that clear when their corresponding screen or card is opened.",
        "Centered the Echo Descent icon inside its circular ring in every locked and unlocked state.",
        "Fixed a rare bug where pets beyond stable capacity could be lost on load. All owned pets are now restored; capacity only limits new hatches and grants.",
        "Rewrote every hero class’s active and passive skill description in both languages to state exact values, targets, durations, and triggers. Skill-description boxes now fit their content.",
        "After a defeat beyond the Echo Descent unlock, Tower floors now show the exact Echo Resonance rank recommended for that floor.",
        "Added a Mailbox letter for every Tower checkpoint from Floor 10 through 90, expanding the story behind the final boss. The Floor 100 letter remains unchanged.",
        "Redesigned Ascension paths as icon-only circular nodes in a state-colored ring, with name, description, rank, cost, and status shown in one detail box below the tree.",
        "The Tower popup and victory screen now track progress toward all ten checkpoint materials and explain that they are being saved for a future use.",
        "Added Waning Patience to Floor 100: The Crown That Waits gains stacking Attack after a grace window in long fights, with the timing and scaling shown before entry and tracked live in combat.",
        "Added Tower of Resonance Auto-Advance, which attempts consecutive uncleared floors with the saved team and companions until the next multiple-of-ten checkpoint. Confirmation, live progress, stop controls, and a final summary cover the whole run.",
        "Added rotating Daily and Weekly Quests that progress automatically through normal play, including supported offline combat and crafting. Daily tasks award Coins, weekly tasks award Gems, completed unclaimed rewards are granted automatically at reset, and optional Coin-funded Quest ranks add slots and reward bonuses without penalties for unfinished tasks.",
        "Added 88 cosmetic Elite Skins — one for every elite class in each of the four raid themes — to a new Shop Skins tab. Each costs 1,000 Gems, can be equipped on any matching elite hero after purchase, and never changes combat stats.",
        "Pet eggs in the Gem Shop now scale by family tier, from 75 Gems at tier 3 to 300 Gems at tier 12. Chimeric pets can now roll a dungeon-only Drop Rate bonus, while Eclipse pets can roll an EXP Rate bonus for assigned heroes.",
        "Item details now explain every known acquisition source — monster or boss drops, dungeons or raids, crafting recipes, rotating Shop offers, Quest rewards, and special sources — and link to the relevant activity where possible.",
        "Added a persistent exact Coin wallet display, keeping the Platinum, Gold, Silver, and Copper breakdown visible across shops, upgrades, crafting, and other Coin-spending screens.",
        "Added local Lifetime Statistics in Settings for combat, progression, collection, economy, and play time. Values that cannot be reconstructed are labeled as tracked since version 1.08, and the view works without Play Games sign-in.",
        "Added case-sensitive Reward Codes to the Shop’s Premium tab. Eligible rewards are bound to the verified Play Games profile, recorded in the cloud against repeat redemption, and remain available on Windows without Google Play Billing.",
        "Added a versioned What’s New popup that presents the main 1.09 highlights once per save, with a Settings button to reopen it. Help topics are now collapsible, and player-facing status names and bilingual terminology are more consistent.",
        "Retuned campaign XP pacing, progression costs, and Tower preparation so a competent player checking in two or three times per day can reach the Echo Descent unlock in about six days without paid acceleration.",
        "Reduced startup work by loading noninitial menus, hidden textures, Android monetization, Settings, hero management, Ascension, promotion, and help content only when needed. Inventory and recipe lists also populate more efficiently.",
        "Quest guidance moved from its own tab to the Help icon in the Quests title bar, matching Tavern, Shop, Inventory, Workshop, and Pets. Quests now opens on Daily, Weekly, and Upgrades.",
        "Menu buttons respond faster: measured on a phone with a full endgame save, every menu button improved - the Workshop opens in about a third of its former time, Quests and Tavern in about half, and every other screen between a quarter and half faster, and Pets, Tavern, Shop and Bestiary tabs switch instantly because their contents stay alive instead of being rebuilt on every selection. Expedition reports no longer build a card for every possible drop before appearing, and text sizing and button styling no longer repeat their work on each screen.",
        "Collect All is about five times faster - collecting from every expedition rebuilt the Dungeons page 36 times before responding and now refreshes once - and Heroes opens straight away on a large roster, filling the rest in behind the first cards."
      ]
    },
    {
      version: "1.07",
      title: "Controls & Navigation Fix",
      date: "19 July 2026",
      status: "Closed-test release",
      notes: [
        "Fixed an issue in version 1.06 that could leave buttons and menus unresponsive after installing the update.",
        "Touch controls and scrolling now work normally on Android, and mouse controls now work normally on Windows.",
        "Added extra release checks to help prevent this issue from returning. Saved progress is unaffected."
      ]
    },
    {
      version: "1.06",
      title: "Companions & Ascension",
      date: "18 July 2026",
      status: "Closed-test release",
      notes: [
        "Added expedition companions. Collect eggs from six pet families, hatch Common, Rare, Epic, or 0.5%-chance Legendary pets with 2, 3, 4, or 5 party bonuses, assign one companion to an expedition, and raise it to level 20 through Bond XP.",
        "Linked dungeon and raid bosses can drop pet eggs. Every family egg is also available from the Shop for 150 Gems.",
        "Undeployed pets can now be sold for Coins; their value scales with family tier and rarity, not Bond level.",
        "Reworked Ascension. Elite level-50 heroes can choose one of four paths and build within a 15-point budget. Every upgrade is available immediately, while free resets and path changes refund every point.",
        "Revamped hero active skills, passive skills, and class roles across the promotion tree.",
        "Reworked all four raid mechanics with clearer action windows and improved enemy skills. Matching a crafted raid weapon with its unique accessory now activates a two-piece set bonus.",
        "Expanded the Tower of Ascension into 100 persistent floors with fixed retry encounters, first-clear checkpoint rewards, two companion slots, and a dedicated Floor 100 apex challenge.",
        "Added Echo Descent after the Tower's 70th challenge: one five-hero daily Guardian fight with two companions and Bond XP instead of ordinary loot. Winning grants +1 Resonance, while nine daily laws combine survival pressure, enemy adaptation, and counterplay opportunities.",
        "Improved dungeon combat progression, equipment milestones, boss-material rewards, loot rates, and Rune costs. Innate title bonuses now grant 10%.",
        "Added 23 Google Play Games achievements for promotions, Ascension, raid crafting, raid sets, pet hatching, maxed Tavern and Workshop upgrades, long-term lifetime goals, and every tenth-floor Tower boss, bringing the game to 39 achievements worth 320 points.",
        "Improved mobile layouts, equipment details, raid views, touch and mouse scrolling, combat feedback, popup navigation, and item presentation.",
        "The first-launch guide now explains how to sell spare items for Coins and recruit more heroes at the Tavern.",
        "The Gem button remains accessible on every platform, and the Welcome Premium Pack can still be claimed for free.",
        "Strengthened startup Play update checks, Billing recovery, cloud deletion, consent handling, and required privacy choices.",
        "Play Games saves are now bound to the verified player account, preventing one account from silently adopting another account's progress.",
        "Reduced the Android release bundle size and expanded automated release validation."
      ]
    },
    {
      version: "1.04",
      title: "Progression & Interface Update",
      date: "17 July 2026",
      status: "Closed-test release",
      notes: [
        "The game interface received a major visual and readability pass, with new page backgrounds, typography, navigation art, currency icons, item presentation, and clearer mobile layouts.",
        "Dungeon progression was rebalanced across all 12 tiers. Encounters now run at a more consistent pace, while XP, drop rates, enemy strength, party-size limits, and crafting times follow a smoother long-term curve.",
        "Added progression accessories for new equipment milestones, including the experience-focused Rootbound Almanac, Astral Wayfinder, and Lastlight Chronicle.",
        "Raid cards now show availability, quest progress, unlock pathways, party size, and daily-entry status more clearly. Raid mechanic descriptions now explain their exact effects.",
        "Combat statuses now have clearer names, values, and tooltips. Immunity, cleansing, dispelling, evasion, regeneration, and effects that depend on harmful statuses behave more consistently.",
        "Tavern offers now include a healer whenever an unlocked healer class is available, making it easier to build a sustainable party.",
        "Mail gained redesigned letter cards and unread alerts, while dungeon reports, inventories, hero details, class trees, promotion choices, team slots, and bestiary entries became easier to read and use.",
        "Save handling now respects local saves deleted outside the game and uses backup saves only to recover an existing but unreadable primary save. Cloud restores safely resume normal saving.",
        "Fixed layout and overflow issues in promotion choices, raid formations, bestiary details, gem controls, item icons, and other mobile popups."
      ]
    },
    {
      version: "1.03",
      title: "Welcome & Battle Clarity",
      date: "16 July 2026",
      status: "Closed-test release",
      notes: [
        "New players now receive a compact first-launch welcome guide, while existing saves upgrade without replaying it.",
        "Recruited heroes receive distinct fantasy names, with safe migration from legacy class-number names.",
        "Saved squad presets and improved team workflows make recurring dungeon and raid formations easier to restore while reporting unavailable heroes.",
        "Combat gained clearer ally and enemy targeting cues, active-skill feedback, raid mechanic transitions, richer animations, and a redesigned entity inspector.",
        "Wave rewards are consolidated into a readable reward turn before the next encounter begins.",
        "Hero skill profiles were rebalanced and the passive skill icon set was completed across the class tree.",
        "The Last Road gained staged runway trials, preparation rewards, clearer retry behavior, and expanded balance coverage.",
        "Fixed raid accessory behavior, enabled the native Windows audio driver, and improved save upgrades, popup cleanup, hero selection, and class skill behavior."
      ]
    },
    {
      version: "1.02",
      title: "Cloud Saves & Rune Progression",
      date: "16 July 2026",
      status: "Closed Alpha release",
      notes: [
        "Settings' Play Games section now includes a confirmed Delete Data option that permanently removes local progress, recovery copies, preferences, and the player's private Google Play Games cloud save.",
        "Google Play Games cloud saves now keep progress available across Android devices, with encrypted recovery copies and an explicit choice when two save histories conflict.",
        "Added tiered monster-material progression and six permanent Rune tracks with guaranteed upgrades for long-term hero building.",
        "The shop now supports three Gem packs and the one-time Welcome Premium Pack, including pending-purchase handling and restored entitlements.",
        "Added the daily rewarded-Gem flow, advertising consent controls, and resilient recovery when an ad, Billing connection, or purchase finalization is interrupted.",
        "Introduced innate hero titles, base-class roster sorting, promotion ability cards, and clearer hero advancement tools.",
        "Mapped Play Games achievements to every dungeon and raid and configured production platform service identifiers.",
        "Improved touch navigation, team and equipment selection, battle and reward reporting, settings, and feature-reference help.",
        "Android downloads became smaller through ARM64-only stripped release builds and optimized textures.",
        "Expanded release validation across progression, raids, Runes, Play Games, cloud saves, purchases, premium entitlements, offline behavior, and supported upgrades."
      ]
    },
    {
      version: "1.01",
      title: "Raids & Platform Services",
      date: "15 July 2026",
      status: "Closed-test update",
      notes: [
        "Raids gained larger arenas, clearer combat cards, five-column formations, and separate Battle and Info tabs.",
        "All four raids were rebalanced, including bounded Rootbound healing and clearer boss encounter behavior.",
        "Promotion-ready heroes became easier to identify in the roster and hero interfaces.",
        "New notifications cover completed crafts, incoming mail, shop refreshes, daily raid refreshes, and raid results.",
        "Settings, popups, inventory, crafting, scrolling, and selection controls became easier to use on touchscreens.",
        "Google Play Games added Android player profiles, achievements, and leaderboards.",
        "Dungeon and raid drop presentation received dedicated artwork and clearer reward reporting."
      ]
    },
    {
      version: "1.0",
      title: "First Closed-Test Build",
      date: "15 July 2026",
      status: "Closed-test baseline",
      notes: [
        "Released the first closed-test baseline for Android and Windows, with portrait-first mobile presentation and desktop support.",
        "Introduced automatic, turn-based party combat with Dexterity turn order, weighted Threat targeting, active and passive skills, status effects, hit feedback, and a death XP penalty.",
        "Added 11 recruitable base classes and their full two-branch promotion trees: 55 class stages spanning base, specialized, and elite heroes.",
        "Added hero attributes, advanced combat stats, equipment restrictions, class trees, promotion choices, titles, and detailed hero inspection.",
        "Launched the 12-tier dungeon campaign with concurrent expedition parties, objectives, unlock progression, story mail, materials, bosses, and up to 12 hours of offline combat catch-up.",
        "Added four large-party raids with dedicated formations, encounter chains, bosses, daily progression, and raid rewards.",
        "Added the Tavern, Inventory, Workshop, item discovery, equipment management, town upgrades, and the first 16 crafting recipes.",
        "Added the original Ascension progression system and long-term accessory milestones for advanced heroes.",
        "Added medieval interface styling, touch-drag scrolling, grid views, coin denominations, combat effects, original music, and expanded catalog and help screens.",
        "Added encrypted local progress plus the original optional Google Drive app-data cloud-save flow with explicit conflict selection."
      ]
    }
  ],

  privacyPolicy: {
    title: "Idle Party Dungeon Privacy Policy",
    effectiveDate: "28 July 2026",
    intro: "Idle Party Dungeon is developed and published by BroglioGames. This policy explains how the game handles information.",
    sections: [
      {
        id: "information-handled",
        title: "Information handled by the game",
        paragraphs: [
          "The game stores gameplay progress, settings, and any custom names you give your heroes locally on your device. Gameplay progress and custom hero names are kept in an encrypted save file; some preferences, such as audio settings, are kept in a separate local settings file. Gameplay data includes features such as heroes and their titles, inventory, crafting, raids, mail, shop state, notification state, premium entitlements, and one-way hashes used to prevent duplicate purchase fulfillment. A randomly generated save profile identifier and a shortened one-way hash derived from the device identifier are included in save metadata to identify save versions and prevent save conflicts. They are not used for advertising or tracking and are not sent to BroglioGames.",
          "On Android, Google Play Games Services may handle your Play Games player identifier, profile and display name, achievement progress, leaderboard scores, and a private Saved Games snapshot containing the gameplay data described above. The game temporarily displays your Play Games display name while it is running but does not add it to the save. Google handles platform authentication and cloud storage; Idle Party Dungeon does not receive or store your Google password. Divergent device and cloud histories are not merged automatically: the game keeps encrypted recovery copies and asks you which history to continue.",
          "On Android, Save Recovery can export an encrypted copy of the local save to a document location you choose through the system file picker, and can import a backup file that you explicitly select. These files are transferred only between the game and the location you choose; they are not automatically sent to BroglioGames, Google Play Games, Discord, or another third party. Anyone who can access an exported backup file may retain, copy, or delete it, so store it in a location you control.",
          "The Android version uses Google AdMob to provide optional rewarded advertisements. Google and its advertising partners may process device information, advertising identifiers where available, IP address, ad interactions, diagnostics, and consent choices to deliver, measure, prevent fraud in, and where permitted personalize advertisements. The game requests applicable advertising consent before requesting ads.",
          "Premium Pack purchases are processed by Google Play Billing. Google processes payment details, purchase history, tax, fraud-prevention data, and receipts. Idle Party Dungeon receives the product identifier, purchase status, and purchase token needed to unlock and restore the purchase; it does not receive your full card or bank details."
        ]
      },
      {
        id: "use",
        title: "How information is used",
        paragraphs: [
          "Information is used to operate the game, save and restore progress locally and through Play Games Saved Games, provide achievements and leaderboards, show optional rewarded ads, prevent advertising and payment fraud, and fulfill or restore purchases. BroglioGames does not sell personal information.",
          "Google processes Play Games, AdMob, consent, and Google Play Billing information under [Google's Privacy Policy](https://policies.google.com/privacy). Advertising partners participating in an AdMob request may also process information according to the consent choices and Google's publisher controls."
        ]
      },
      {
        id: "community",
        title: "Community and external links",
        paragraphs: [
          "The Settings screen includes an optional link to the Idle Party Dungeon community on Discord. Selecting it opens Discord or your web browser. The game does not send your save data or Play Games profile to Discord, but Discord and your browser may independently process information such as your IP address, device or browser information, Discord account information, and activity on Discord. Discord's handling of that information is described in the [Discord Privacy Policy](https://discord.com/privacy). Information you choose to post in the community is shared with Discord and the people who can access that community."
        ]
      },
      {
        id: "retention-deletion",
        title: "Storage, retention, and deletion",
        paragraphs: [
          "Local game data remains on your device until you use **Settings > Play Games > Delete Data**, clear the app's data, or uninstall it, subject to your platform's backup behaviour. After explicit confirmation, **Delete Data** removes the local save, backup and recovery copies, local audio settings, cloud-sync metadata, and the game's private Play Games Saved Games snapshot. It cannot delete backup files that you previously exported through the Android system file picker; you manage those files in the document location you selected. It does not delete the Google Account, Play Games profile, achievements, leaderboard entries, advertising consent records, or Google Play purchase records; those are retained under Google's policies and managed through Google's account and privacy controls. A non-consumable purchase can be restored from the Google Play account that bought it. Content posted on Discord is retained and can be managed under Discord's policies and account controls."
        ]
      },
      {
        id: "children",
        title: "Children",
        paragraphs: [
          "Idle Party Dungeon is a general-audience fantasy game and does not knowingly collect personal information from children. Google services are controlled by the user's Google Account and Google's age and supervision rules. The advertising integration is marked as not directed to children or users under the age of consent; the Play Console target-audience declaration must match the audience actually selected by the publisher."
        ]
      },
      {
        id: "security",
        title: "Security",
        paragraphs: [
          "Reasonable technical measures are used to protect locally stored game data. Play Games, advertising, consent, and payment communications are handled by Google's SDKs. No storage or transmission method can be guaranteed to be completely secure."
        ]
      },
      {
        id: "changes",
        title: "Changes",
        paragraphs: [
          "This policy may be updated when the game's features or legal obligations change. The effective date above will be updated when material changes are made."
        ]
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "For privacy questions or deletion assistance, contact BroglioGames at [broglio096@gmail.com](mailto:broglio096@gmail.com)."
        ]
      }
    ]
  },

  quickstart: [
    {
      step: "01",
      title: "Recruit a balanced opening roster",
      text: "The Tavern begins with five offers and always tries to include a healer-class offer. Your first recruit costs 200 Coins; every hero already owned adds 100 Coins to the next recruitment cost.",
      tip: "A Guardian or Fighter, a Cleric or Bard, and mixed Melee/Ranged/Magic damage give the safest start."
    },
    {
      step: "02",
      title: "Start Slime Forest",
      text: "Open Dungeons, choose Slime Forest, place up to four available heroes, optionally save the formation, and start. Battles are automatic and the expedition repeats until you stop it.",
      tip: "One hero cannot be assigned to two running dungeons or raids at the same time."
    },
    {
      step: "03",
      title: "Collect, craft, equip",
      text: "Dungeon XP is applied immediately to surviving heroes; materials stay pending in the expedition until collected. Use those materials and Coins to craft gear, then equip matching weapon and armor types.",
      tip: "You have three crafting queue slots. A batch is one job, and cancelling an unfinished job refunds its reserved costs."
    },
    {
      step: "04",
      title: "Complete each story objective",
      text: "Campaign meters count kills, encounters, or named targets. When a boss is required, meeting the meter forces the boss as the next encounter. Defeat it to open the next dungeon and its story mail.",
      tip: "A wipe on a forced boss resets that objective run; rebuild or improve equipment before trying again."
    },
    {
      step: "05",
      title: "Promote and specialize",
      text: "At level 25 a base class chooses one of two specializations. At level 50 that specialization promotes to its linked elite class and resets to level 0, immediately unlocking Ascension.",
      tip: "Promotion replaces the active and passive skill kit, so read both paths before committing."
    },
    {
      step: "06",
      title: "Prepare for raids",
      text: "Campaign milestones reveal four raid quests. Pay their material and Coin requirements once to unlock daily raids, then clear 15 normal encounters and the boss for Rune Pieces, boss materials, pets, and raid gear.",
      tip: "Starting a daily raid consumes that raid's entry. Failure or abandonment does not refund it; a refresh costs 50 Gems."
    }
  ],

  mechanics: [
    {
      id: "loop",
      eyebrow: "The loop",
      title: "Recruit → deploy → collect → craft → advance",
      summary: "Idle Party Dungeon runs several persistent expedition and workshop systems at once. The strategic work is roster allocation, formation, gear, class paths, and deciding when a team is ready to move forward.",
      bullets: [
        "Combat is automatic and turn-based; living combatants are sorted by Dexterity when an encounter begins or live stats are refreshed.",
        "XP is split across living heroes. Drops stay attached to their dungeon or raid until you collect them.",
        "Every running dungeon has its own party. Raids use a separate formation but draw from the same unavailable-while-deployed roster.",
        "Reports track elapsed time, kills, deaths, gross XP, XP lost, net XP, item totals, and per-hour rates.",
        "The Bestiary, class catalog, item catalog, status reference, and story mailbox turn discoveries into permanent reference entries."
      ]
    },
    {
      id: "offline",
      eyebrow: "Persistence",
      title: "Offline combat is capped; crafting catches up fully",
      summary: "When a save is restored, dungeon and raid combat simulate at most 12 hours. Crafting instead advances by the full elapsed interval, processing queued jobs in order.",
      bullets: [
        "Combat simulation converts elapsed seconds into whole combat ticks using each activity's turn interval.",
        "Offline battle logs are suppressed, but XP, deaths, objective progress, and drops are resolved.",
        "Craft jobs continue beyond the 12-hour combat cap and can complete multiple queued batches during a long absence.",
        "The game saves periodically every 30 seconds and during important state changes; a local backup accompanies the main save.",
        "Supported Android builds can reconcile an encrypted private Google Play Games snapshot and preserve the unselected side of a conflict as a recovery copy."
      ]
    },
    {
      id: "heroes",
      eyebrow: "Roster rules",
      title: "Every hero is an individual build",
      summary: "A hero combines a class kit, career progression, title, four equipment slots, six Runes, one Ascendant Path, and an optional expedition pet.",
      bullets: [
        "Base roster capacity is 8. Tavern capacity upgrades and up to three weekly Shop expansions add slots.",
        "Heroes can be renamed, reordered, sorted, promoted, equipped, and removed while not deployed.",
        "Removing a hero returns equipped items and refunds every invested Rune Piece.",
        "Equipment slots are Weapon, Armor, Accessory 1, and Accessory 2. Unique-equipped means one copy of that item per hero.",
        "Saved team presets remember exact positions, including empty positions; unavailable or removed heroes are reported when loading."
      ]
    },
    {
      id: "failure",
      eyebrow: "Defeat",
      title: "Expeditions recover, but defeat costs momentum",
      summary: "A defeated hero loses 10% of the XP already earned toward the current level. If the whole party falls, the expedition rebuilds its hero entities and starts another encounter automatically.",
      bullets: [
        "Only living heroes share a defeated monster's XP pool.",
        "A story-boss wipe resets the current completion run and forces rebuilding the meter before the next boss attempt.",
        "A raid failure ends the raid and records a failed attempt; its daily entry remains consumed.",
        "Every five normal raid encounters, a wing transition restores 10% Health and Mana to living heroes.",
        "Pending drops are retained until collection unless a special non-reward trial explicitly disables rewards."
      ]
    },
    {
      id: "mist",
      eyebrow: "Environment",
      title: "Mist amplifies attacks and raises enemy Evade",
      summary: "Mist strengthens outgoing damage for attackers with Mist Damage and adds Evade to enemies in configured dungeons and upper-Tower bands. Mist Reduction counters both interactions.",
      bullets: [
        "Effective Mist = Mist × (1 − target Mist Reduction ÷ 100).",
        "Mist multiplier = 1 + (effective Mist ÷ 100) × (attacker Mist Damage ÷ 100).",
        "Enemy Mist Evade = round(Mist × the activity's Evade rate). An attacking hero removes the same percentage of that Mist-derived Evade as their Mist Reduction.",
        "Mist Reduction cannot reduce effective Mist or the Mist-derived Evade contribution below 0.",
        "Later dungeons can begin with Mist and change it periodically; Tower Floors 71–100 use fixed bands that rise toward the apex.",
        "Mage-aligned builds and certain enemies carry native Mist Damage; equipment, pets, and effects can add Mist Reduction."
      ]
    },
    {
      id: "discovery",
      eyebrow: "Information",
      title: "Discovery is part of progression",
      summary: "The in-game catalogs deliberately hide unseen content, but this Codex exposes the complete 1.11 ruleset as an end-to-end strategy reference.",
      bullets: [
        "A monster enters the Bestiary when its wave is first seen.",
        "An item is discovered through drops, collection, crafting, purchase, equipment restoration, or explicit rewards.",
        "Story mail communicates dungeon unlocks, raid quests, first Rune Pieces, first clears, and unique accessory finds.",
        "The reference pages bring current game rules, exact values, and practical guidance together in one place.",
        "All percentage tables in this site show base chances unless an adjusted multiplier is displayed beside them."
      ]
    }
  ],

  formulas: [
    {
      name: "Maximum Health",
      formula: "(base HP + 10 × (career level − 1) + 5 × Strength + flat gear HP) × elite growth × title × Vitality Rune",
      details: "Elite growth rises linearly to +10% at elite level 50. Health titles add 10%; Vitality adds 1.5% per Rune rank."
    },
    {
      name: "Attack",
      formula: "(primary attribute + 2 × (career level − 1) + flat gear Attack) × elite growth × title × Might Rune",
      details: "Primary attribute is Strength for Melee, Dexterity for Ranged, and Intelligence for Magic."
    },
    {
      name: "Damage range",
      formula: "minimum = floor(0.70 × Attack); maximum = ceil(1.30 × Attack)",
      details: "Each basic hit rolls uniformly between the inclusive minimum and maximum, before outgoing modifiers, critical damage, Mist, and defense."
    },
    {
      name: "Basic damage",
      formula: "rolled damage × outgoing multipliers × critical multiplier × Mist multiplier × (1 − defense reduction ÷ 100)",
      details: "Hero attacks use ×2.5 rolled damage before other modifiers. Healer-class attacks use 35% of that amount. Monster attacks also use ×2.5. Final successful hits deal at least 1."
    },
    {
      name: "Defense",
      formula: "reduction = matching Defense or Magic Defense + active and passive bonuses",
      details: "Physical attacks use Defense; Magic attacks use Magic Defense. Hero Defense, Magic Defense, and Evade cap at 80%; critical chance and immunity cap at 100%. Defense ignore is applied multiplicatively to the reduction."
    },
    {
      name: "Evade",
      formula: "1–100 roll ≤ effective Evade → avoid the entire direct hit",
      details: "Effective Evade includes temporary effects and attacker-specific passive adjustments. Guaranteed-hit effects bypass the ordinary roll."
    },
    {
      name: "Critical hit",
      formula: "1–100 roll ≤ effective Critical Chance → multiply by Critical Damage ÷ 100",
      details: "Base hero critical damage is 150%. Critical chance can be modified by effects, passives, titles, equipment, Runes, pets, and some raid signs."
    },
    {
      name: "Threat targeting",
      formula: "target chance = max(1, target Threat + Threat Up) ÷ sum of all living candidate weights",
      details: "Intercept can redirect a direct attack after target selection. Threat is a weight, not a guaranteed taunt."
    },
    {
      name: "Mana per basic action",
      formula: "8 + round(2 × √Intelligence), then path/passive modifiers",
      details: "Heroes use a 100-point skill meter. A full meter is spent when the active skill is attempted; silence prevents use. Monsters that use active skills follow the same square-root gain with a 30-point per-action cap."
    },
    {
      name: "Healing",
      formula: "base heal × healer's Healing stat × raid phase modifiers × target anti-heal",
      details: "Healing Reduction caps at 95%. Lightless Pressure ≥70 applies ×0.80 and Total Eclipse applies ×0.65 only to healing from active and passive skills. Regeneration, lifesteal, HoTs, and direct self-heals bypass those two raid gates. Overhealing becomes a barrier only when a passive explicitly says so."
    },
    {
      name: "Standard drop chance",
      formula: "min(100%, base drop % × dungeon progression multiplier × global premium multiplier)",
      details: "Drops with a 100% base chance stay at 100%. The Welcome bonus raises the global multiplier to 1.10. Exclusive story-boss drops use only the global premium multiplier."
    },
    {
      name: "Encounter composition",
      formula: "team probability = team weight ÷ sum of non-boss team weights",
      details: "Boss groups are excluded from the random encounter pool and appear only when their objective or raid sequence calls for them. Raid bosses always follow 15 cleared normal encounters."
    }
  ],

  stats: [
    {name:"Strength", kind:"Attribute", text:"Adds 5 maximum HP per point and is the primary Attack attribute for Melee heroes."},
    {name:"Dexterity", kind:"Attribute", text:"Primary Attack attribute for Ranged heroes. Combatants are sorted by Dexterity at encounter creation and after live stat refreshes."},
    {name:"Intelligence", kind:"Attribute", text:"Primary Attack attribute for Magic heroes and raises mana gained per basic action with square-root scaling."},
    {name:"Attack", kind:"Offense", text:"Creates the ±30% base damage range used by basic attacks and many skill power calculations."},
    {name:"Health", kind:"Defense", text:"Maximum HP. Barriers absorb incoming damage before HP but do not increase maximum HP."},
    {name:"Defense", kind:"Defense", text:"Percentage-point reduction against Melee and Ranged damage; heroes cap at 80%."},
    {name:"Magic Defense", kind:"Defense", text:"Percentage-point reduction against Magic damage; heroes cap at 80%."},
    {name:"Evade", kind:"Avoidance", text:"Percentage chance to avoid a direct basic attack or damaging skill; heroes cap at 80%."},
    {name:"Critical Chance", kind:"Offense", text:"Percentage chance for a hit to use Critical Damage; caps at 100%."},
    {name:"Critical Damage", kind:"Offense", text:"Damage multiplier on a critical. A displayed 150% means ×1.5 damage; the raw value caps at 300%."},
    {name:"Immunity", kind:"Resistance", text:"Percentage chance to resist a newly applied harmful status; base heroes begin with 10% before class and equipment additions."},
    {name:"Threat", kind:"Targeting", text:"Weighted contribution to direct enemy target selection. Higher Threat is more likely, never absolute by itself."},
    {name:"Counter Chance", kind:"Defense", text:"Chance to reflect damage after a successful incoming hit when counter power is available."},
    {name:"Counter Damage", kind:"Defense", text:"Percentage of the received HP damage reflected; base physical counter power is 50% and the final value caps at 150%."},
    {name:"Lifesteal", kind:"Sustain", text:"Heals the attacker for a percentage of HP damage dealt; caps at 50%."},
    {name:"Regeneration", kind:"Sustain", text:"Restores a flat amount of HP during the entity's turn processing; caps at 50."},
    {name:"Healing", kind:"Support", text:"Percentage scale applied to healing performed and relevant self-healing; caps at 300%."},
    {name:"Decay", kind:"Effect", text:"Built-in ongoing Magic damage dealt during the affected entity's turn processing."},
    {name:"Mist Damage", kind:"Environment", text:"Scales outgoing damage by the target's effective Mist exposure."},
    {name:"Mist Reduction", kind:"Environment", text:"Reduces the Mist percentage used against this target."},
    {name:"EXP Rate", kind:"Progression", text:"Multiplies the hero's share of XP before global and dungeon XP multipliers."}
  ],

  statuses: [
    {id:"damage_buff", name:"Damage Up", kind:"buff", text:"Increases all outgoing damage by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"crit_damage_buff", name:"Critical Damage Up", kind:"buff", text:"Increases the damage multiplier of critical hits by the displayed amount.", stacking:"Strongest value; duration refreshes."},
    {id:"defense_buff", name:"Defense Up", kind:"buff", text:"Adds displayed percentage points to Defense against Melee and Ranged damage.", stacking:"Strongest value; duration refreshes."},
    {id:"mdef_buff", name:"Magic Defense Up", kind:"buff", text:"Adds displayed percentage points to Magic Defense.", stacking:"Strongest value; duration refreshes."},
    {id:"evade_buff", name:"Evade Up", kind:"buff", text:"Adds displayed percentage points to effective Evade.", stacking:"Strongest value; duration refreshes."},
    {id:"crit_buff", name:"Critical Chance Up", kind:"buff", text:"Adds displayed percentage points to effective Critical Chance.", stacking:"Strongest value; duration refreshes."},
    {id:"counter_buff", name:"Counter Chance Up", kind:"buff", text:"Adds displayed percentage points to Counter Chance.", stacking:"Strongest value; duration refreshes."},
    {id:"counter_power", name:"Counter Power Up", kind:"buff", text:"Adds displayed percentage points to reflected counter damage.", stacking:"Strongest value; duration refreshes."},
    {id:"immunity_buff", name:"Immunity Up", kind:"buff", text:"Adds displayed percentage points to the chance to resist newly applied harmful statuses.", stacking:"Strongest value; duration refreshes."},
    {id:"hot", name:"Regeneration", kind:"buff", text:"Restores the displayed HP at the start of each turn; applied by active skills.", stacking:"Strongest value; duration refreshes."},
    {id:"healer_hot", name:"Regeneration", kind:"buff", text:"Restores displayed HP at the start of each turn; applied by a healer's action passive.", stacking:"Strongest value; duration refreshes."},
    {id:"healing_buff", name:"Healing Up", kind:"buff", text:"Increases healing performed and self-healing by the displayed percentage points.", stacking:"Strongest value; duration refreshes."},
    {id:"threat_buff", name:"Threat Up", kind:"buff", text:"Adds displayed Threat to weighted enemy target selection.", stacking:"Strongest value; duration refreshes."},
    {id:"intercept", name:"Intercept", kind:"buff", text:"Redirects direct enemy attacks from allies to this entity while active.", stacking:"No visible strength."},
    {id:"momentum", name:"Momentum", kind:"buff", text:"Adds outgoing damage as a class passive builds momentum during the encounter.", stacking:"Additive."},
    {id:"attack_down", name:"Attack Down", kind:"debuff", text:"Reduces all outgoing damage by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"vulnerability", name:"Vulnerability", kind:"debuff", text:"Increases direct damage and DoT received by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"pattern_vulnerability", name:"Vulnerability", kind:"debuff", text:"Increases damage received as Veyra's Eye observes distinct party attack types.", stacking:"Strongest value; duration refreshes."},
    {id:"echo_exposure", name:"Vulnerability", kind:"debuff", text:"Increases damage received after fulfilling the current Echo law's counterplay condition.", stacking:"Strongest value; duration refreshes."},
    {id:"dot", name:"DoT", kind:"debuff", text:"Deals the displayed Magic damage at the start of each turn.", stacking:"Strongest value; duration refreshes."},
    {id:"silence", name:"Silence", kind:"debuff", text:"Prevents an active skill from being used while the status remains.", stacking:"No visible strength."},
    {id:"evade_down", name:"Evade Down", kind:"debuff", text:"Subtracts displayed percentage points from effective Evade.", stacking:"Strongest value; duration refreshes."},
    {id:"anti_heal", name:"Healing Reduction", kind:"debuff", text:"Reduces all healing received by the displayed percentage, capped at 95% reduction.", stacking:"Strongest value; duration refreshes."},
    {id:"linked", name:"Root Linked", kind:"special", text:"Each living Root Node grants this enemy +4 Defense and +1% damage. It restores 3% max HP per node on its action, capped at 9%.", stacking:"Persists for the encounter."},
    {id:"low_hp_barrier_cooldown", name:"Barrier Cooldown", kind:"special", text:"Prevents the entity's low-health barrier passive from triggering again until the timer expires.", stacking:"Hidden cooldown state."}
  ],

  titles: [
    {id:"stalwart", name:"The Stalwart", stat:"Defense", bonus:10, unit:"points"},
    {id:"warded", name:"The Warded", stat:"Magic Defense", bonus:10, unit:"points"},
    {id:"nimble", name:"The Nimble", stat:"Evade", bonus:10, unit:"points"},
    {id:"keen_eyed", name:"Keen-Eyed", stat:"Critical Chance", bonus:10, unit:"points"},
    {id:"vigorous", name:"The Vigorous", stat:"Health", bonus:10, unit:"percent"},
    {id:"forceful", name:"The Forceful", stat:"Attack", bonus:10, unit:"percent"}
  ],

  runes: [
    {id:"might", name:"Rune of Might", stat:"Attack", perRank:1, unit:"%", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-might.png", text:"Permanently increases Attack by 1% per rank."},
    {id:"vitality", name:"Rune of Vitality", stat:"Health", perRank:1.5, unit:"%", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-vitality.png", text:"Permanently increases maximum Health by 1.5% per rank."},
    {id:"agility", name:"Rune of Agility", stat:"Evade", perRank:1, unit:" point", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-agility.png", text:"Adds 1 percentage point of Evade per rank."},
    {id:"precision", name:"Rune of Precision", stat:"Critical Chance", perRank:1, unit:" point", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-precision.png", text:"Adds 1 percentage point of Critical Chance per rank."},
    {id:"bulwark", name:"Rune of Bulwark", stat:"Defense", perRank:1, unit:" point", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-bulwark.png", text:"Adds 1 percentage point of Defense per rank."},
    {id:"warding", name:"Rune of Warding", stat:"Magic Defense", perRank:1, unit:" point", material:"Verdant → Tidal → Astral → Eclipse", icon:"res://resources/runes/rune-warding.png", text:"Adds 1 percentage point of Magic Defense per rank."}
  ],

  ascension: [
    {
      id:"ember_crown", name:"The Ember Crown", role:"DPS", color:"#e36b32", icon:"res://resources/ui/ascension_ember_crown.png",
      text:"A martial path of decisive blows, critical strikes, and merciless finishes.",
      skills:[
        {name:"Ashen Might", tier:0, ranks:5, cost:1, text:"Gain +1% Strength per rank."},
        {name:"Hunter's Pulse", tier:0, ranks:5, cost:1, text:"Gain +1% Dexterity per rank."},
        {name:"Cinder Insight", tier:0, ranks:5, cost:1, text:"Gain +1% Intelligence per rank."},
        {name:"Scorched Veins", tier:0, ranks:5, cost:1, text:"Gain +1% maximum Health per rank."},
        {name:"Serrated Radiance", tier:1, ranks:3, cost:2, text:"Gain +2% Critical Damage per rank."},
        {name:"Opening Fury", tier:1, ranks:3, cost:2, text:"Gain +2% Critical Chance per rank."},
        {name:"Duelist's Hunger", tier:1, ranks:3, cost:2, text:"Gain +1% Lifesteal per rank."},
        {name:"Merciless Focus", tier:2, ranks:3, cost:2, text:"Deal +2% damage per rank to enemies below half Health."},
        {name:"Sundering Edge", tier:2, ranks:3, cost:2, text:"Attacks ignore 2% of enemy Defense per rank."},
        {name:"Crown of Cinders", tier:3, ranks:1, cost:1, text:"Unique: deal 8% more damage."}
      ]
    },
    {
      id:"stone_aegis", name:"The Stone Aegis", role:"Tank", color:"#b68b4b", icon:"res://resources/ui/ascension_stone_aegis.png",
      text:"An oath of endurance that turns a hero into the party's immovable last wall.",
      skills:[
        {name:"Adamant Blood", tier:0, ranks:5, cost:1, text:"Gain +1% maximum Health per rank."},
        {name:"Bastion Training", tier:0, ranks:5, cost:1, text:"Gain +1% Strength per rank."},
        {name:"Oathbound Vigor", tier:0, ranks:5, cost:1, text:"Gain +1% Intelligence per rank."},
        {name:"Stone Reflexes", tier:0, ranks:5, cost:1, text:"Gain +1% Dexterity per rank."},
        {name:"Commanding Presence", tier:1, ranks:3, cost:2, text:"Gain +1 Threat per rank."},
        {name:"Grounded Bulwark", tier:1, ranks:3, cost:2, text:"Gain +1 Defense and Magic Defense per rank."},
        {name:"Retaliating Wall", tier:1, ranks:3, cost:2, text:"Gain +2% Counter Chance per rank."},
        {name:"Sacred Resistance", tier:2, ranks:3, cost:2, text:"Gain +1 Defense and Magic Defense per rank while at full Health."},
        {name:"Weight of Mountains", tier:2, ranks:3, cost:2, text:"Falling below 35% Health raises a barrier equal to 2% of maximum Health per rank."},
        {name:"Last Citadel", tier:3, ranks:1, cost:1, text:"Unique: take 8% less damage."}
      ]
    },
    {
      id:"wellspring_grace", name:"Wellspring Grace", role:"Healer", color:"#6bc6a0", icon:"res://resources/ui/ascension_wellspring_grace.png",
      text:"A gentle path whose living light sustains, protects, and renews the wounded.",
      skills:[
        {name:"Living Waters", tier:0, ranks:5, cost:1, text:"Gain +1% Intelligence per rank."},
        {name:"Patient Hands", tier:0, ranks:5, cost:1, text:"Gain +1% Dexterity per rank."},
        {name:"Rooted Resolve", tier:0, ranks:5, cost:1, text:"Gain +1% Strength per rank."},
        {name:"Vital Springs", tier:0, ranks:5, cost:1, text:"Gain +1% maximum Health per rank."},
        {name:"Overflowing Mercy", tier:1, ranks:3, cost:2, text:"Increase healing done by +2% per rank."},
        {name:"Blossoming Light", tier:1, ranks:3, cost:2, text:"Gain +1 Regeneration per rank."},
        {name:"Desperate Grace", tier:1, ranks:3, cost:2, text:"Gain +2% status Immunity per rank."},
        {name:"Luminous Rhythm", tier:2, ranks:3, cost:2, text:"After using a skill, heal the most wounded ally for 2% of their maximum Health per rank."},
        {name:"Deep Wellspring", tier:2, ranks:3, cost:2, text:"Healing grants a barrier equal to 1% of the target's maximum Health per rank."},
        {name:"Dawn Refrain", tier:3, ranks:1, cost:1, text:"Unique: increase all healing done by 8%."}
      ]
    },
    {
      id:"tempest_chorus", name:"The Tempest Chorus", role:"AoE & Effects", color:"#6daee8", icon:"res://resources/ui/ascension_tempest_chorus.png",
      text:"A storm-song that spreads attacks across foes and turns every impact into a blessing or curse.",
      skills:[
        {name:"Tempest Reach", tier:0, ranks:5, cost:1, text:"Gain +1% Dexterity per rank."},
        {name:"Resonant Current", tier:0, ranks:5, cost:1, text:"Gain +1% Intelligence per rank."},
        {name:"Static Charge", tier:0, ranks:5, cost:1, text:"Gain +1% Strength per rank."},
        {name:"Lingering Storm", tier:0, ranks:5, cost:1, text:"Gain +1% maximum Health per rank."},
        {name:"Gale Mark", tier:1, ranks:3, cost:2, text:"Gain +2% Critical Chance per rank."},
        {name:"Thunderhead", tier:1, ranks:3, cost:2, text:"Gain +2% Critical Damage per rank."},
        {name:"Squall Dance", tier:1, ranks:3, cost:2, text:"Gain +2% Evade per rank."},
        {name:"Rallying Thunder", tier:2, ranks:3, cost:2, text:"Skill use has a +4% chance per rank to grant all allies +10% damage for 2 turns."},
        {name:"Stormfront", tier:2, ranks:3, cost:2, text:"Skills that hit all enemies deal +2% damage per rank."},
        {name:"Eye of the Storm", tier:3, ranks:1, cost:1, text:"Unique: increase active-skill damage, direct healing, barriers, and numeric buffs and debuffs by 8%."}
      ]
    }
  ],

  petEffects: [
    {id:"attack", name:"Attack", base:2, unit:"%"},
    {id:"healing", name:"Healing", base:3, unit:" points"},
    {id:"magic_defense", name:"Magic Defense", base:2, unit:" points"},
    {id:"regeneration", name:"Regeneration", base:2, unit:""},
    {id:"immunity", name:"Immunity", base:1, unit:" point"},
    {id:"mist_reduction", name:"Mist Reduction", base:3, unit:" points"},
    {id:"max_hp", name:"Maximum HP", base:4, unit:"%"},
    {id:"critical_chance", name:"Critical Chance", base:1, unit:" point"},
    {id:"critical_damage", name:"Critical Damage", base:3, unit:" points"},
    {id:"evade", name:"Evade", base:1, unit:" point"},
    {id:"lifesteal", name:"Lifesteal", base:1, unit:" point"},
    {id:"defense", name:"Defense", base:2, unit:" points"},
    {id:"threat", name:"Threat", base:1, unit:""},
    {id:"counter_chance", name:"Counter Chance", base:1, unit:" point"},
    {id:"counter_damage", name:"Counter Damage", base:3, unit:" points"},
    {id:"mana_gain", name:"Mana Gain", base:2, unit:"%"},
    {id:"drop_rate", name:"Drop Rate", base:2, unit:"%"},
    {id:"exp_rate", name:"EXP Rate", base:2, unit:"%"}
  ],

  raidMechanics: {
    march_rootbound: {
      label:"Root Network", color:"#6f984b",
      rules:[
        "Each encounter begins with 2 nodes in Wing I, 3 in Wing II, 4 in Wing III, and 4 for the boss; missing nodes are added when needed.",
        "Every living Root Node gives linked non-node enemies +4 Defense and +1% outgoing damage.",
        "When a linked enemy acts, it heals 3% maximum HP per living node, capped at 9%.",
        "Root Nodes take +25% damage from Magic attackers or attackers with Decay, and −20% from other sources.",
        "At 70% HP, Orrun absorbs living nodes: +5% to its Attack stat and +0.1% max-HP regeneration per absorbed node. Current basic and skill damage ranges are not rebuilt from that Attack-stat change. At 40%, two new nodes appear.",
        "The two nodes summoned at 40% immediately restore 3% max HP each on Orrun's actions. Their Defense and damage links remain inactive until one of them dies.",
        "Orrun is forced to refill mana every fifth boss action."
      ]
    },
    lightless_armada: {
      label:"Crushing Tide", color:"#4c9db7",
      rules:[
        "Pressure begins at 20; the boss encounter begins at 30. Every enemy action adds 4 Pressure.",
        "At 100 Pressure, every living hero takes 10% maximum-HP Magic damage and Pressure resets to 60.",
        "A Pressure Wisp kill removes 20; an Abyssal Lamplighter kill removes 12.",
        "The first Ranged critical in an action removes 3 Pressure; the first Magic critical removes 1.",
        "At Pressure 40 or higher, living heroes lose 10 percentage points of effective Evade.",
        "At Pressure 70 or higher, healing from active and passive skills is multiplied by 0.80; regeneration, lifesteal, HoTs, and direct self-heals bypass it. Enemies entering a wave scale Attack and damage by ×(1 + Pressure ÷ 500).",
        "Every normal clear first deals 4% maximum-HP Magic damage and adds 10 Pressure. After clears 5, 10, and 15, Pressure resets to 20; only clears 5 and 10 also restore 10% HP and Mana. The boss spawn then sets Pressure to 30.",
        "Below 30 Pressure, Nhalassa gains 20% Vulnerability for 2 turns. Adds appear at 75%, 50%, and 25% boss HP; Nhalassa refills mana every fourth boss action."
      ]
    },
    broken_sky_hunt: {
      label:"Constellation Dial", color:"#8070c5",
      summary:"Match the current Melee, Ranged, or Magic sign with three successful damaging hits before 10 hero actions expire; the same hero may contribute on later actions.",
      rules:[
        "The sign begins Melee and rotates Melee → Ranged → Magic after each 10 hero actions.",
        "Three matching successful damaging hits must land within the 10-action window. The same hero may contribute again on a later action.",
        "Completing the sign removes one Star Hunger and grants every living hero +12% damage and +10% healing for 2 turns.",
        "Every sign turn deals 4% maximum-HP Magic damage to the party, completed or not. Missing the sign adds one Star Hunger, up to five.",
        "Each Star Hunger gives enemies +4% outgoing damage. Alignment and the completion flag reset at the next sign.",
        "Wing checkpoints reset Star Hunger, Alignment, completion, and the 10-action window while retaining the current sign.",
        "At 20% HP, Veyra gains +35% damage for 6 turns and begins Devour the Pattern. Completing the current constellation after Devour begins removes that damage buff."
      ]
    },
    last_road: {
      label:"Eclipse Clock", color:"#c3944d",
      rules:[
        "Dawn lasts 12 hero actions: Magic deals +20% and Melee deals −20% for both sides. Each positive heal from an active or passive skill adds min(3, actual HP restored ÷ target max HP × 10) Lastlight.",
        "Dusk lasts 12 hero actions: Melee deals +20% and Magic deals −20% for both sides. Each successful hero critical adds 5 Lastlight.",
        "Total Eclipse lasts 6 hero actions, multiplies healing from active and passive skills by 0.65, begins with 10% maximum-HP Magic damage to the party, then returns to Dawn. Regeneration, lifesteal, HoTs, and direct self-heals bypass the phase healing multiplier.",
        "Ranged damage is neutral in Dawn and Dusk. Phase duration counts hero actions, not whole rounds or seconds.",
        "At 80% boss HP a Dawnless Knight appears; at 40%, two Eclipse Engines appear. Turn the Clock advances the current phase counter by 4; a Lastlight Seraph's Light Theft removes 15 Lastlight.",
        "At 15% HP, 100 Lastlight consumes to give Aster Null 35% Attack Down for 8 turns; otherwise Aster gains +55% damage for 8 turns."
      ]
    }
  },

  probabilityFacts: [
    {id:"cluster", name:"Gem Cluster per dungeon monster", value:"0.1%", detail:"Base roll on every defeated dungeon monster, multiplied by the global drop multiplier. Each collected cluster opens automatically."},
    {id:"gems", name:"Gems inside one cluster", value:"1–5", detail:"1: 80% · 2: 12% · 3: 5% · 4: 2% · 5: 1%. Expected value: 1.32 Gems."},
    {id:"title", name:"Tavern offer has a title", value:"25%", detail:"If successful, one of six titles is chosen uniformly: 4.1667% absolute chance for a specific title per offer. Health and Attack are ×1.10; Defense, Magic Defense, Evade, and Critical Chance gain 10 points."},
    {id:"egg", name:"Eligible boss drops its pet egg", value:"1% dungeon / 20% raid", detail:"Applies to each eligible dungeon or raid boss kill. A dungeon egg boss dies around 70 times across one overnight farm, so its per-kill rate is low; every raid boss dies at most once a day on its single daily entry, so its per-kill rate is high. Both sources land at roughly the same eggs per day. Family eggs cost 75–300 Gems according to tier: 75 at Tier 3, 125 at Tier 5, 150 at Tier 6, 225 at Tier 9, and 300 at Tier 12."},
    {id:"rarity", name:"Pet hatch rarity — base", value:"74.5 / 20 / 5 / 0.5", detail:"Base odds are Common 74.5%, Rare 20%, Epic 5%, Legendary 0.5%, with 2, 3, 4, or 5 distinct family effects. Permanent hatchery upgrades raise Legendary odds to 2%, and the shared pity guarantees the next Legendary after 100 misses."},
    {id:"runeEarly", name:"Raid Rune Piece — early enemy", value:"1.5%", detail:"Rolled on every eligible non-node raid monster before the raid has completed 10 encounters."},
    {id:"runeLate", name:"Raid Rune Piece — late enemy", value:"3%", detail:"Rolled after 10 normal clears: encounters 11–15 and eligible non-node boss adds. Root Nodes never roll bespoke raid rewards."},
    {id:"runeBoss", name:"Raid Rune Piece — boss", value:"10%", detail:"Separate from the guaranteed boss material roll."},
    {id:"bossMat", name:"Boss drops two materials", value:"25%", detail:"Every raid boss drops at least one boss material; 25% of kills produce a second."},
    {id:"accessory", name:"Raid accessory repeat copy", value:"15%", detail:"Until a copy is discovered or already pending, the roll escalates 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, then guarantees clear 10. It returns to 15% afterward."},
    {id:"daily", name:"Raid entry reset", value:"00:00 UTC", detail:"Each of the four raids tracks its own daily entry. Starting consumes it. A manual refresh costs 50 Gems."},
    {id:"reward", name:"Daily Gem reward", value:"35 Gems", detail:"One claim per UTC day. Welcome Premium Pack owners receive it instantly; otherwise the reward path requires successful rewarded-ad completion when available."}
  ],

  towerPlayGames: {
    leaderboard: {key:"highest_tower_floor", name:"Highest Tower Floor", minimum:1, maximum:100},
    achievements: [
      {floor:10, key:"tower_floor_10", name:"Foundations Shaken"},
      {floor:20, key:"tower_floor_20", name:"Above the Flood"},
      {floor:30, key:"tower_floor_30", name:"Iron Boughs Broken"},
      {floor:40, key:"tower_floor_40", name:"Lanterns Within Reach"},
      {floor:50, key:"tower_floor_50", name:"Ashen Vault Opened"},
      {floor:60, key:"tower_floor_60", name:"Stars Underfoot"},
      {floor:70, key:"tower_floor_70", name:"Past the Chimera"},
      {floor:80, key:"tower_floor_80", name:"A Spire Uncrowned"},
      {floor:90, key:"tower_floor_90", name:"Worldroot Crowned"},
      {floor:100, key:"tower_floor_100", name:"At the Zenith"}
    ]
  },

  townSystems: [
    {name:"Tavern", icon:"res://resources/ui/icon_tavern.png", lead:"Recruitment, roster capacity, offer count, and refresh speed.", facts:["5 starting offers; at least one healer when a healer class is available", "3-hour base refresh", "8 base hero slots", "200 + 100 × current roster size recruitment cost", "+10% refresh speed per speed-upgrade level", "25% title chance per generated offer"]},
    {name:"Workshop", icon:"res://resources/ui/icon_craft.png", lead:"Recipes, batch jobs, queue capacity, and offline completion.", facts:["3 starting queue slots", "+10% crafting speed per speed-upgrade level", "A batch occupies one job", "Cancelling an unfinished job refunds reserved items and Coins", "Crafting catches up across the full elapsed offline interval"]},
    {name:"Regular Shop", icon:"res://resources/ui/icon_shop.png", lead:"Campaign-appropriate materials sold for Coins.", facts:["4 offers", "3-hour refresh", "Each offer can be bought once per refresh", "Offer tier follows the highest unlocked dungeon tier", "Purchases discover the item immediately"]},
    {name:"Weekly Shop", icon:"res://resources/ui/gem.svg", lead:"Permanent capacity expansions bought with Gems.", facts:["7-day refresh", "Tavern Expansion: +1 hero slot", "Workshop Expansion: +1 queue slot", "500 Gems per upgrade", "Maximum 3 levels of each upgrade"]},
    {name:"Inventory", icon:"res://resources/ui/icon_inventory.png", lead:"Collected materials, equipment, selling, and discovery.", facts:["Ordinary items may be sold for their listed Coin value", "Quest keys, Rune Pieces, unique raid accessories, and protected items cannot be sold", "Equipment must satisfy slot and proficiency rules", "One hero cannot equip two copies of the same unique-equipped item"]},
    {name:"Mailbox", icon:"res://resources/ui/icon_mail_letter.png", lead:"Story beats, unlock guidance, and rare-discovery notices.", facts:["Prologue and campaign unlock mail", "Raid quest and first-clear mail", "First Rune Piece tutorial", "Unique raid accessory discoveries", "Read state persists in the save"]},
    {name:"Pets", icon:"res://resources/ui/icon_pets.png", lead:"Boss eggs hatch into expedition companions with persistent bond levels.", facts:["New saves start with 10 stable slots; six upgrade ranks extend capacity through 20, 30, 40, 50, 60, and 70", "The same upgrades raise every family's Legendary chance from 0.5% to 2%; after 100 misses, the next hatch is guaranteed Legendary", "Family eggs cost 75–300 Gems by tier", "One pet per dungeon or permanent raid; up to two in Tower and Echo Descent", "1 Bond XP per ordinary encounter and 10 per eligible boss kill; Tower encounters grant 25 or 250, and the daily Echo fight grants 250", "Level cap 20; effect values reach ×3 base, including Chimeric Drop Rate and Eclipse EXP Rate"]},
    {name:"Quests", icon:"res://resources/ui/icon_mail_objective_complete.png", lead:"Rotating Daily and Weekly objectives add reliable account progression.", facts:["Daily Quests reward Coins; Weekly Quests reward Gems", "Boards rotate on their own reset cadence", "Completed unclaimed rewards are granted automatically when a board resets", "Optional Coin-purchased Quest ranks scale available objectives and rewards", "Quest progress and ready-to-claim badges update from ordinary play"]},
    {name:"Elite Skins", icon:"res://resources/ui/icon_heroes.png", lead:"Cosmetic looks for every elite class, themed after the permanent raids.", facts:["88 skins across 22 elite classes and four raid themes", "Each skin costs 1,000 Gems", "Skins are cosmetic only and never change combat stats", "Owned and equipped looks persist per hero"]},
    {name:"Lifetime Statistics", icon:"res://resources/ui/statistics/icon_statistics_progression.png", lead:"A local Settings reference for long-term combat, progression, collection, economy, and play time.", facts:["Works without Play Games sign-in", "Tracks five categories of lifetime totals", "Values introduced in 1.08 that cannot be reconstructed are clearly labeled", "Statistics persist with the save"]},
    {name:"Premium & daily", icon:"res://resources/ui/icon_rewarded_ad.png", lead:"Optional purchases, account rewards, Reward Codes, and daily Gems.", facts:["The Welcome Premium Pack is a one-time real-money purchase", "It grants a level-25 Trickster with Ironbark Blade and Ranger Leather, permanent +10% XP and standard drop multiplier, and instant daily 35-Gem claims", "The Legendary Pet Pack grants a Legendary Dreadbell Whale when capacity is available", "A verified signed-in profile can claim 300 Gems once after sync", "Case-sensitive Reward Codes bind eligible rewards to the verified profile and remain redeemable on Windows", "Gem packs are credited only after platform confirmation"]}
  ],

  interactions: [
    {area:"Main navigation", actions:["City opens Tavern, Shop, Workshop, Inventory, Pets, Quests, Mail, and town references.", "Heroes opens the roster; select a portrait/card for stats, equipment, skills, promotion, Runes, Ascension, skins, title, rename, or removal.", "Dungeons and Raids open their activity lists; the Raids screen contains the Tower of Resonance, whose title-bar Echo control becomes available after Floor 70.", "Selecting an activity opens formation, status, report, rewards, and combat.", "Settings contains audio, help/reference catalogs, Lifetime Statistics, achievements, What's New, privacy, Discord, Play Games/cloud, and data deletion."]},
    {area:"Formation", actions:["Select an empty slot, then choose an available hero. Selecting an occupied slot lets you replace or remove it.", "Use the hero picker's sort control to order the available heroes by level, Echo Resonance, class or name, ascending or descending; the companion picker sorts by level, rarity or family. Both choices persist and never change which heroes or companions are eligible.", "A saved preset stores every formation position, including gaps. Loading skips heroes who were removed or are deployed elsewhere and reports the omissions.", "Ordinary activities accept one pet; Tower and Echo accept up to two distinct pets. A pet preset is scoped to the activity.", "Most activities start with at least one valid hero; Echo Descent requires exactly five. No selected hero or pet may already be deployed elsewhere."]},
    {area:"Running combat", actions:["Combat advances automatically at the activity's listed action interval; no manual attack input is required.", "Select or inspect a combatant to view live HP, Mana, barriers, stats, skills, equipment, and active statuses.", "Battle cues show attacks, heals, skills, evades, criticals, counters, barriers, and harmful-effect resistance.", "Stop a dungeon without losing its pending drops. Abandoning a permanent raid keeps its daily entry consumed; Tower attempts remain unlimited, while an Echo failure or abandonment keeps today's fight available to retry."]},
    {area:"Rewards & reports", actions:["Collect on an activity transfers pending items to Inventory; Gem Clusters open automatically and pet-egg tokens become hatchable eggs.", "Collect All processes every dungeon with pending rewards and reports combined items, Gems, and dungeon count.", "Reports preserve the just-collected session summary and show live per-hour estimates before collection.", "Drops shown inside a running activity are pending, not yet usable in crafting or equipment."]},
    {area:"Hero detail", actions:["Equipment slots filter compatible items: Melee/Ranged/Magic weapons, Light/Medium/Heavy armor, and accessories.", "Promotion at level 25 presents two specialization cards; promotion at level 50 presents the linked elite class.", "Each Rune upgrade is guaranteed when its matching piece is available. Rune ranks are not random.", "Elite promotion unlocks Ascension immediately at reset level 0. Levels 4–46 award 15 points and level 50 awards the final point, for a 16-point budget.", "Choose one Ascendant Path and one option per Foundation, Awakening, Mastery, and Capstone row. Same-path reassignment is free; only changing paths consumes a crafted Sigil of Rebirth and refunds all points."]},
    {area:"Crafting & items", actions:["Open a recipe to review result, quantity, Coin cost, craft time, tier, raid requirement, and every ingredient.", "Set the Item type filter to Undiscovered to shortlist recipes that make something you have never seen and use a material you currently hold; names and icons stay masked until you find them.", "Set the Tier filter to T1-T12 to list only that tier's recipes, matching the tier badge on each card; it narrows whatever the type filter, search text, and status chips already select.","Starting a batch reserves all ingredients and Coins immediately.","Use queue cards to inspect completion time or cancel an unfinished job for a full reserved-cost refund.", "Selling is disabled for protected items; equipping removes the item from ordinary inventory until unequipped."]},
    {area:"Pets", actions:["Boss-dropped eggs appear after activity rewards are collected. Family eggs cost 75–300 Gems according to tier.", "Hatch to roll rarity and a shuffled set of distinct family effects; the creature sprite follows rarity. Hatchery upgrades can raise Legendary odds to 2%, and the shared pity guarantees the next Legendary after 100 misses.", "Rename a pet, assign it to a formation, save it in that activity's preset, or sell it for Coins while not deployed.", "Pet sell value scales with family tier and rarity; Bond level does not affect it.", "Pet effect strength increases nonlinearly with level; level 20 is exactly three times the level-1 base value."]},
    {area:"Cloud & deletion", actions:["Sync Now requests Google Play Games cloud reconciliation on supported authenticated Android builds.", "If histories diverge, compare timestamps and progression summaries before choosing this device or cloud; the valid unselected side is archived as recovery data.", "Play Games identity/achievements and gameplay cloud progress are separate services.", "Delete Data is destructive: after confirmation it removes local progress, preferences, encrypted recovery copies, and the private cloud snapshot."]}
  ],

  economyTables: {
    tavern_capacity: [
      {gate:1,coin:1000},{gate:1,coin:2000},{gate:2,coin:3500},{gate:2,coin:5000},{gate:3,coin:8000},{gate:3,coin:12000,items:"Tier 3 Construction Bundle ×1"},{gate:5,coin:20000},{gate:5,coin:28000,items:"Tier 5 Construction Bundle ×1"},{gate:7,coin:50000},{gate:7,coin:75000,items:"Tier 7 Construction Bundle ×1"},{gate:9,coin:130000},{gate:9,coin:190000,items:"Tier 9 Construction Bundle ×2"},{gate:11,coin:320000},{gate:11,coin:450000,items:"Tier 11 Construction Bundle ×2"}
    ],
    tavern_refresh: [
      {gate:2,coin:4000},{gate:3,coin:9000,items:"Tier 3 Construction Bundle ×1"},{gate:4,coin:18000,items:"Tier 4 Construction Bundle ×1"},{gate:5,coin:32000,items:"Tier 5 Construction Bundle ×1"},{gate:6,coin:55000,items:"Tier 6 Construction Bundle ×1"},{gate:7,coin:90000,items:"Tier 7 Construction Bundle ×1"},{gate:8,coin:145000,items:"Tier 8 Construction Bundle ×1"},{gate:10,coin:300000,items:"Tier 10 Construction Bundle ×2"},{gate:11,coin:475000,items:"Tier 11 Construction Bundle ×2"},{gate:12,coin:700000,items:"Tier 12 Construction Bundle ×2"}
    ],
    tavern_offers: [
      {gate:3,coin:12000,items:"Tier 3 Construction Bundle ×1"},{gate:5,coin:35000,items:"Tier 5 Construction Bundle ×1"},{gate:7,coin:95000,items:"Tier 7 Construction Bundle ×1"},{gate:9,coin:240000,items:"Tier 9 Construction Bundle ×2"},{gate:11,coin:525000,items:"Tier 11 Construction Bundle ×2"},{gate:12,coin:850000,items:"Tier 12 Construction Bundle ×3"}
    ],
    craft_capacity: [
      {gate:2,coin:4000},{gate:4,coin:18000,items:"Tier 4 Construction Bundle ×1"},{gate:6,coin:60000,items:"Tier 6 Construction Bundle ×1"},{gate:8,coin:160000,items:"Tier 8 Construction Bundle ×2"},{gate:10,coin:390000,items:"Tier 10 Construction Bundle ×2"},{gate:12,coin:900000,items:"Tier 12 Construction Bundle ×3"}
    ],
    craft_speed: [
      {gate:1,coin:2000},{gate:2,coin:5000},{gate:3,coin:11000,items:"Tier 3 Construction Bundle ×1"},{gate:4,coin:20000,items:"Tier 4 Construction Bundle ×1"},{gate:5,coin:36000,items:"Tier 5 Construction Bundle ×1"},{gate:6,coin:60000,items:"Tier 6 Construction Bundle ×1"},{gate:7,coin:100000,items:"Tier 7 Construction Bundle ×1"},{gate:8,coin:165000,items:"Tier 8 Construction Bundle ×2"},{gate:10,coin:350000,items:"Tier 10 Construction Bundle ×2"},{gate:12,coin:800000,items:"Tier 12 Construction Bundle ×3"}
    ]
  },

  accuracyNotes: [
    {title:"Current guide version", text:"Every strategy chapter and calculator describes game version 1.11, the current closed-test release. Update history is limited to Patch Notes."},
    {title:"Title bonuses grant 10", text:"A generated offer has a 25% title chance. Health and Attack use ×1.10; Defense, Magic Defense, Evade, and Critical Chance add 10 percentage points."},
    {title:"First accessory has a progressive guarantee", text:"Until the first copy is discovered or already pending, a raid accessory starts at 15%, rises by 5 percentage points each clear, and is guaranteed on clear 10. Later copies are 15%."},
    {title:"Raid clocks count hero actions", text:"Constellation uses 10 hero actions and needs three successful matching hits; the same hero may contribute on later actions. Eclipse phases last 12 Dawn, 12 Dusk, and 6 Total Eclipse hero actions."},
    {title:"Monster damage follows Attack", text:"A monster's primary attribute determines its Attack, and each basic hit rolls within a ±30% range."},
    {title:"Some starter skill labels are descriptive", text:"The four elemental slimes in Slime Forest use basic attacks even when their Mana is full."},
    {title:"Recommended raid readiness is advisory", text:"Recommended career level and gear tier are guidance. After completing the unlock quest, you may start a permanent raid with any available team that fits its capacity."}
  ]
});
