## Version 1.08 (In Development)

Draft entry, updated as each implementation step lands. Not yet released — content, wording, and scope may still change before the version freezes per the release process.

- Rebalanced hero classes for more consistent performance across every class, promotion path, and progression stage, from early dungeons through raids and the endgame.
- Reworked raid set bonuses: each two-piece set now grants one of several bonus variants depending on your class role and weapon type, on top of reacting to whether you're wielding the critical or base-damage completion weapon. Improved Mystic and Paladin's survivability as raid wearers.
- Reworked Ascension into four choice rows — Foundation, Awakening, Mastery, and Capstone — with a meaningful pick at every stage of your 16-point build. Ranks can be freely added and removed at any time, including switching a row's pick within your current path; changing your Ascendant Path now uses a rare raid-crafted item instead of being free and unlimited.
- Rebalanced the Mist mechanic across all three Mist-affected dungeons for more consistent difficulty by tier; equipping a Mist Reduction pet bonus now genuinely reduces the extra enemy evasion Mist grants.
- Dungeon monster difficulty now scales smoothly by tier instead of using flat stats everywhere, for a steadier climb from Slime Forest through Eclipse Throne. Tower of Resonance floors 71-100 are now meaningfully harder as you climb toward the Apex, matched to the Echo Resonance investment expected at each checkpoint.
- Floor 80 is now the final Tower checkpoint that a completely unresonated formation can realistically clear. Starting at Floor 81, under-ranked formations face Echo Pressure: enemy health and attack rise with the team's missing average Echo Resonance rank, while entry remains unrestricted and properly resonated teams keep the intended balance.
- Every tenth Tower of Resonance floor (10 through 100) now also awards a Tower Keystone on its first clear, alongside the existing coin and permanent roster-slot rewards — a new crafting material set aside for a future use.
- Added ceilings for critical damage, lifesteal, regeneration, healing, and counter damage bonuses so extreme end-game gear stacking can't reach degenerate values, with generous headroom above anything reachable through normal play.
- Added a welcome-back summary after any meaningful time away, showing kills, XP, items, and crafting completed by every running expedition and raid while you were gone — with one-tap Collect All for Welcome Premium Pack owners.
- Fixed Android time tracking across device lock and resume so offline progress and crafting catch-up calculate correctly.
- Added Android notifications for finished crafting jobs, hero promotions, offline rewards, daily refreshes, and newly unlocked dungeons/raids. A new Notifications button in Settings lets you turn every device alert on or off at once, or control each of the seven alert types individually, with clear status if an alert is blocked by your device's notification permission.
- Every armor type now offers Attack-focused and Defense-focused variants; every weapon type now offers Critical-hit and Base-damage variants; combat accessories are now split into Tank, DPS, and Support/Healer variants.
- Added 16 new weapons across the Melee, Ranged, and Magic weapon lines so every class can find at least one weapon of its type that benefits its specialty — previously several classes (healers, tanks, and utility specialists among them) had no weapon of their own type that actually helped their role.
- Equipment pickers now show the exact stat change versus your currently equipped item for every candidate piece.
- Long-press a hero during combat to manage their equipment and runes without pausing the fight.
- Combat arenas keep every hero and monster in a fixed position for the whole fight — defeated entities no longer cause the rest of the formation to reshuffle.
- Combat entities are now sized to match their health bars, and the Mist/Stats arena buttons are cleaner without boxed backgrounds. The Stats control is now intentionally larger, remains pinned safely to the top-right, and opens a combat-statistics surface styled like Settings Statistics.
- Combat Stats, hero-selection, and pet-selection popups launched from an arena now match the exact size of the combat popup that opened them, instead of floating smaller.
- Fixed nested popups (like hero details opened from a team picker) sometimes rendering behind their parent or failing to restore the exact previous view when closed.
- Notifications now always render above every popup and menu.
- Hero Details now shows each hero's combat role (Tank, DPS, Healer, or Support), and hero cards across the roster and team-selection screens now show Echo Resonance rank.
- The promotion Choose button now sits at the top of the specialization preview so you can confirm without scrolling.
- Dungeon clear requirements are now on one consistent progression system; a new safeguard keeps dungeon fights from stalling indefinitely.
- Coin prices and rewards are now shown consistently with the wallet's denomination icons everywhere in the game.
- Dungeon and raid icons now show a tier badge matching the item-icon style.
- Normalized icon sizing and padding across the interface — the Mist control keeps its compact utility size while the Stats control is deliberately emphasized, and several undersized icons (including the hero rename icon) are corrected to a consistent visual weight.
- The Wiki link now opens a three-button main index page.
- Redesigned the gem balance display into a single banner with the gem icon and a dedicated plus button built into its frame, keeping your current balance clear and readable at every screen size.
- Fixed a rare bug where a renamed or no-longer-usable equipped item could vanish on load instead of being returned to your inventory.
- Settings items in the right-hand column now show their label on the left with the icon aligned to the right, for a more consistent reading order across the screen.
- The Low Battery setting is now called Battery Savings.
- Battery Savings and Language can now be turned on/off and switched directly from the Settings list — no popup required. Language shows a compact EN/IT selector right beside its icon.
- The Welcome Premium Pack is a real-money purchase in the Shop again instead of a free claim — if you already claimed it for free, you keep everything it granted. Added a new **Get free 300 gems** reward to the Gem Shop, claimable once per verified, signed-in Google Play profile after your account finishes syncing.
- Hero-selection lists across dungeons, raids, the Tower, and Echo Descent now sort your available heroes by level, highest first.
- The Tower of Ascension is now called the **Tower of Resonance**. Your progress, floor, and achievements are unchanged.
- Redesigned the Raids and Echo Descent screens around an Overview tab that opens first, showing current status, entry requirements, key rewards, and your formation in one place, plus a readiness line that explains exactly what's blocking a start; full mechanic explanations moved to a separate Guide tab. The Help button now stays visible on every tab and in every state.
- Added the Legendary Pet Pack to the Shop's Premium tab, directly below the Welcome Premium Pack: a one-time real-money purchase that grants the tier-6 Lightless family's Legendary Dreadbell Whale, statistically identical to a hatched Legendary pet, plus exactly 1,000 Gems. Checkout is blocked while your stable is full; if an owned purchase is restored while full, the Whale and Gems arrive together automatically as soon as a slot frees up.
- Added a shared Legendary pet pity counter across every family's egg: go 100 hatches in a row without a Legendary pet, from any egg, and your next hatch is guaranteed to be Legendary. A "Legendary pity" progress line now shows on the Pets Eggs tab, the Shop's Pet Egg Market, and every pet egg's detail screen.
- Added a new Achievements button to Settings showing every Play Games achievement, its store description, and your live progress — fully populated on Windows and while signed out of Google Play Games. The existing Google Play Games popup keeps its own Achievements button for the native overlay when connected.
- Added two Echo Resonance achievements — one for fully attuning a hero and one for lifetime Resonance progress — bringing the current Google Play Games total to 41 achievements worth 345 points.
- Added a Pets Upgrades tab: spend coin (and, at higher ranks, gate/item requirements) to permanently grow your pet stable's capacity and improve every family egg's Legendary hatch odds. The first three ranks reach 40 slots and a 1% Legendary chance; three Apex ranks extend that to 70 slots and 2%. New saves start with 10 pet slots instead of the old flat 60; existing saves keep every pet they already own and every capacity they'd already reached.
- Moved Echo Descent access inside the Tower of Resonance screen, right beside the title, instead of a separate icon on the Raids page; it stays visible (just disabled with a tooltip) before it unlocks. Added a notification badge to the Tower access button and the Echo icon that appears once per day when there's new daily activity ready, clearing independently as soon as you open each one. Newly unlocked dungeons now show a "new" badge on their card that clears as soon as you open them, even without starting a fight.
- Centered the Echo Descent icon inside its circular ring so the glyph and the border read as one concentric circle in every state, locked or unlocked.
- Fixed a rare bug where pets beyond your stable's capacity could be silently lost on load instead of kept; every pet you own is now always restored, with capacity limits only affecting new hatches and pet grants going forward.
- Rewrote every hero class's active and passive skill description to be shorter and to state the exact numbers (values, targets, durations, triggers) each skill grants, in both languages. Skill-description boxes across Hero Details, class promotion comparisons, and the in-combat inspector now size themselves to the text instead of reserving large empty space.
- Tower of Resonance floors past your Echo Descent unlock now tell you the exact Echo Resonance rank recommended for that floor if you're defeated, instead of a generic "try again."
- Added a new Mailbox letter for every Tower of Resonance checkpoint floor (10 through 90), telling the story of how the Tower's final boss came to be — Floor 100's letter is unchanged. Letters for Floors 70, 80, and 90 arrive from a new in-world voice found along the climb rather than from Eira.
- Redesigned the Ascension path as icon-only circular nodes in a state-colored ring instead of text-heavy cards, with every detail — name, description, rank, cost, and status — now living in a single detail box below the tree that updates as you select each node.
- Ascension badges on hero portraits now have tier-colored circular backing, and the first unlock sends one localized Mailbox letter explaining paths, points, respec costs, and irreversible promotion consequences.
- The Tower of Resonance popup and its victory screen now show progress toward all ten checkpoint materials, explaining they're saved for a future use.
- Added Waning Patience: Floor 100's Crown That Waits now grows enraged in a fight that runs long, escalating its attack in stacks up to a cap. The grace window and per-stack scaling are shown before you enter and tracked live in the combat status line once triggered.
- Added Tower of Resonance Auto-Advance: attempt consecutive floors automatically with your saved team and companions, starting from the next uncleared floor and stopping at the next multiple-of-ten checkpoint. A confirmation shows the exact range and rules before you start, live progress and a Stop After This Floor action replace the start button while it runs, and one summary shows exactly what it cleared when it stops.
- Added rotating Daily and Weekly Quests that progress automatically through normal play, including supported offline combat and crafting. Daily tasks award Coins, weekly tasks award Gems, completed unclaimed rewards are granted automatically at reset, and optional Coin-funded Quest ranks add slots and reward bonuses without adding penalties for unfinished tasks.
- Added 88 cosmetic Elite Skins — one for each elite class in each of the four raid themes — to a new Shop Skins tab. Each skin costs 1,000 Gems, can be equipped on any matching elite hero after purchase, and never changes combat stats.
- Pet eggs in the Gem Shop now scale by family tier, from 75 Gems for tier 3 to 300 Gems for tier 12. Orbitglass pets retain their T8 Max HP option, Starglass pets can roll the dungeon-only Drop Rate bonus at T9, and Eclipse pets can roll an EXP Rate bonus for their assigned heroes.
- Item details now explain every known acquisition source — monster or boss drop, dungeon or raid, crafting recipe, rotating Shop offer, Quest reward, or other special source — and link directly to the relevant activity where possible.
- Added a persistent exact Coin wallet display, so the Platinum, Gold, Silver, and Copper breakdown remains visible while browsing shops, upgrades, crafting, and other Coin-spending screens.
- Added local Lifetime Statistics in Settings for combat, progression, collection, economy, and play time. Historical values that cannot be reconstructed are truthfully labeled as tracked since version 1.08; the view works without Play Games sign-in.
- Added case-sensitive Reward Codes to the Shop's Premium tab. Eligible rewards are bound to the currently verified Play Games profile, recorded in the cloud to prevent repeat redemption, and remain available on Windows even when Google Play Billing is unavailable.
- Added a one-time Legendary Pet Pack reward-code entitlement that uses the same authoritative pet-and-Gem grant, capacity checks, recovery, and profile-bound cloud receipt as a normal pack purchase.
- Added a versioned What's New popup that presents the main 1.08 highlights once per save, with a Settings button to reopen it later. Help topics are now collapsible, and player-facing status names and bilingual terminology are more consistent.
- Retuned campaign XP pacing, progression costs, and Tower preparation so a competent player checking in two or three times per day can reach the Echo Descent unlock in about six days without paid acceleration.
- Reduced startup work by loading noninitial menus, hidden textures, Android monetization, Settings, hero-management, Ascension, promotion, and help content only when needed. Inventory and recipe lists also populate more efficiently.
- Reworked the Android launcher artwork so the full Idle Party Dungeon title stays legible inside adaptive circle, squircle, rounded-square, legacy, and store icon masks.

## Version 1.07 — Controls & Navigation Fix

- Fixed an issue in version 1.06 that could leave buttons and menus unresponsive after installing the update.
- Touch controls and scrolling now work normally on Android, and mouse controls now work normally on Windows.
- Added extra release checks to help prevent this issue from returning. Your saved progress is unaffected.

## Version 1.06 — Companions, Ascension & Endgame

- Added expedition companions. Collect eggs from six pet families, hatch Common, Rare, Epic, or 0.5%-chance Legendary pets with 2, 3, 4, or 5 party bonuses, assign one companion to an expedition, and raise it to level 20 through Bond XP.
- Linked dungeon and raid bosses can drop pet eggs. Every family egg is also available from the Shop for 150 Gems.
- Undeployed pets can now be sold for Coins; their value scales with family tier and rarity, not Bond level.
- Reworked Ascension. Elite level-50 heroes can choose one of four paths and build within a 15-point budget, with every upgrade tier available immediately, free resets, and full refunds when changing paths.
- Revamped hero active skills, passive skills, and class roles across the promotion tree.
- Reworked all four raid mechanics with clearer action windows and improved enemy skills. Matching a crafted raid weapon with its unique accessory now activates a two-piece set bonus.
- Rebuilt the Tower of Ascension as ten themed wings with 100 Tower-exclusive enemies, fixed retry encounters, two companion slots, named checkpoint bosses, and The Crown That Waits as the final Floor 100 battle.
- Echo Descent now unlocks after Tower Floor 70 and coexists with the remaining Tower climb. Its separate Raids-tab icon keeps both activities available while preventing simultaneous runs.
- The first reward-eligible Echo Guardian clear each UTC day now secures the next Anchor and grants +1 permanent Echo Resonance to exactly five heroes, up to Rank 10. Later same-day Guardian clears are practice runs that grant Bond XP and return to the existing Anchor. Each rank adds 2% max HP and Attack plus 0.5 Defense and Magic Defense.
- Replaced Echo's stat-only mutations with nine mechanics-driven daily laws: one survival pressure, one enemy adaptation, and one counterplay opportunity per day. Rotations can suppress Mana, tax active skills, reduce healing, grant genuine Magic or physical damage immunity, force alternating damage types, or reward mixed parties, critical hits, and harmful effects with Echo Exposure.
- Rebalanced Tower Floors 71-100 around eight daily Resonance claims at the new one-rank cadence, with expected targets of Rank 2 / 4 / 6 / 8 across Floors 71-80 / 81-90 / 91-99 / 100. The floor-by-floor viability targets remain unchanged and attempts never use a hard Resonance entry lock. Checkpoint Coin rewards rise from two accessory-craft equivalents early to five at Floor 100, and every tenth-floor first clear adds +1 permanent hero roster slot (+10 total).
- Improved dungeon combat progression, equipment milestones, boss-material rewards, authored loot rates, and Rune costs. Innate title bonuses now grant 10%.
- Added 23 Google Play Games achievements for promotions, Ascension, raid crafting, raid sets, pet hatching, maxed Tavern and Workshop upgrades, long-term lifetime goals, and every tenth-floor Tower boss, bringing the game to 39 achievements worth 320 points. Tower achievement descriptions now name their bosses and identify Floor 70 as the Echo unlock.
- Improved mobile layouts, equipment details, hero Resonance display, raid views, touch and mouse scrolling, combat feedback, popup navigation, and item presentation.
- The first-launch guide now explains how to sell spare items for gold and recruit more heroes at the Tavern.
- The Gem button remains accessible on every platform, and the Welcome Premium Pack can still be claimed for free.
- Strengthened startup Play update checks, Billing recovery, cloud deletion, consent handling, and required privacy choices.
- Play Games saves are now bound to the verified player account, preventing one account from silently adopting another account's progress.
- Reduced the Android release bundle size and expanded automated release validation.

## Version 1.04

- The game interface has received a major visual and readability pass, with new page backgrounds, typography, navigation art, currency icons, item presentation, and clearer mobile layouts.
- Dungeon progression has been rebalanced across all 12 tiers. Encounters now run at a more consistent pace, while XP, drop rates, enemy strength, and crafting times follow a smoother long-term curve.
- New progression accessories provide additional equipment milestones, including experience-focused rewards for later tiers.
- Raid cards now show availability, quest progress, unlock pathways, party size, and daily-entry status more clearly. Raid mechanic descriptions now explain their exact effects.
- Combat statuses now have clearer names, values, and tooltips. Immunity, cleansing, dispelling, evasion, regeneration, and effects that depend on harmful statuses behave more consistently.
- Tavern offers now include a healer whenever an unlocked healer class is available, making it easier to build a sustainable party.
- Mail has redesigned letter cards and unread alerts, while dungeon reports, inventories, hero details, class trees, promotion choices, team slots, and bestiary entries are easier to read and use.
- Save handling now respects local saves deleted outside the game and uses backup saves only to recover an existing but unreadable primary save. Cloud restores safely resume normal saving.
- Fixed layout and overflow issues in promotion choices, raid formations, bestiary details, gem controls, and other mobile popups.

## Version 1.03

- New players now receive a compact first-launch welcome guide, while existing saves upgrade without replaying it.
- Recruited heroes receive distinct fantasy names, with safe migration from legacy class-number names.
- Combat now has clearer ally/enemy targeting cues, active-skill feedback, raid mechanic transitions, and a redesigned entity inspector.
- Wave rewards are consolidated into a readable reward turn before the next encounter begins.
- The Last Road includes staged runway trials, preparation rewards, clearer retry behavior, and expanded balance coverage.
- Save migration, popup cleanup, hero selection, raid accessories, class skill behavior, and full-run progression received additional release hardening.

## Version 1.02

- Settings' Play Games section now includes a confirmed Delete Data option that permanently removes local progress, recovery copies, preferences, and the player's private Google Play Games cloud save.
- Google Play Games cloud saves now keep progress available across Android devices, with safe recovery copies and an explicit choice when two save histories conflict.
- The shop now supports three gem packs and the one-time Welcome Premium Pack, including pending-purchase handling and restored entitlements.
- Android downloads are smaller thanks to ARM64-only release builds and optimized game textures.
- Release validation now covers progression, raids, runes, Play Games, cloud saves, purchases, premium entitlements, offline behavior, and upgrade safety.
- Updated the Play Store presentation and app icon for this release.

## Version 1.01

- Raids have larger arenas, clearer combat cards, five-column formations, and separate Battle and Info tabs.
- All four raids have been rebalanced, including fixes to Rootbound healing.
- Promotion-ready heroes are easier to spot.
- New notifications cover completed crafts, mail, shop and daily raid refreshes, and raid results.
- Settings, popups, inventory, and crafting are easier to use on touchscreens.
- Google Play Games adds player profiles, achievements, and leaderboards on Android.

## Version 1.0 — First Closed-Test Build

- Released the first closed-test baseline for Android (version code 1) and Windows (version 1.0.0.0), with portrait-first mobile presentation and desktop support.
- Introduced automatic, turn-based party combat with Dexterity turn order, weighted Threat targeting, active and passive skills, status effects, hit feedback, and a death XP penalty.
- Added 11 recruitable base classes and their full two-branch promotion trees: 55 class stages spanning base, specialized, and elite heroes.
- Added hero attributes, advanced combat stats, equipment restrictions, class trees, promotion choices, titles, and detailed hero inspection.
- Launched the 12-tier dungeon campaign with concurrent expedition parties, objectives, unlock progression, story mail, materials, bosses, and up to 12 hours of offline combat catch-up.
- Added four large-party raids with dedicated formations, encounter chains, bosses, daily progression, and raid rewards.
- Added the Tavern, Inventory, Workshop, item discovery, equipment management, town upgrades, and the first 16 crafting recipes.
- Added the original Ascension progression system and long-term accessory milestones for advanced heroes.
- Added medieval interface styling, touch-drag scrolling, grid views, coin denominations, combat effects, original music, and expanded catalog/help screens.
- Added encrypted local progress plus the original optional Google Drive app-data cloud-save flow with explicit conflict selection.
