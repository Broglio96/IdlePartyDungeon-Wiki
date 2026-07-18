/*
 * Normalized, GDScript-only guide data for Idle Party Dungeon 1.05.
 * Catalog-backed entities are loaded directly from data/catalogs at runtime.
 * Last source audit: 2026-07-18, local source commit 6d7b014, save schema 20.
 */
window.WIKI_CONTENT = Object.freeze({
  version: {
    game: "1.05",
    windows: "1.0.5.0",
    saveSchema: 20,
    verified: "18 July 2026",
    commit: "6d7b014"
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
      text: "At level 25 a base class chooses one of two specializations. At level 50 that specialization promotes to its linked elite class. Elite level 50 unlocks Ascension.",
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
      title: "Mist amplifies attackers, not a flat hazard tick",
      summary: "Effective Mist is the dungeon's current Mist percentage reduced by the target's Mist Reduction. An attacker's Mist Damage then scales its damage from that effective value.",
      bullets: [
        "Effective Mist = Mist × (1 − target Mist Reduction ÷ 100).",
        "Mist multiplier = 1 + (effective Mist ÷ 100) × (attacker Mist Damage ÷ 100).",
        "Mist Reduction is clamped to a maximum practical reduction of 100% in the formula.",
        "Later dungeons can begin with Mist and change it periodically; each dungeon detail page lists its authored settings.",
        "Mage-aligned builds and certain enemies carry native Mist Damage; equipment, pets, and effects can add Mist Reduction."
      ]
    },
    {
      id: "discovery",
      eyebrow: "Information",
      title: "Discovery is part of progression",
      summary: "The in-game catalogs deliberately hide unseen content, but this Codex exposes the complete 1.05 ruleset as an end-to-end strategy reference.",
      bullets: [
        "A monster enters the Bestiary when its wave is first seen.",
        "An item is discovered through drops, collection, crafting, purchase, equipment restoration, or explicit rewards.",
        "Story mail communicates dungeon unlocks, raid quests, first Rune Pieces, first clears, and unique accessory finds.",
        "The exact-reference pages distinguish authored catalog text, tuning metadata, and behavior actually dispatched by runtime code.",
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
      details: "Hero damage has a global ×2.5 combat scalar. Healer-class damage uses 35% of that scalar. Monster damage uses ×2.5. Final successful hits deal at least 1."
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
      details: "Heroes use a 100-point skill meter. A full meter is spent when the active skill is attempted; silence prevents use. Monsters with implemented active skills use the same square-root gain with a 30-point per-action cap."
    },
    {
      name: "Healing",
      formula: "base heal × source Healing rate × raid phase modifiers × target anti-heal",
      details: "Healing Reduction caps at 95%. Lightless Pressure ≥70 applies ×0.80 and Total Eclipse applies ×0.65 only to sourced action/passive healing. Regeneration, lifesteal, HoTs, and direct self-heals bypass those two raid gates. Overhealing becomes a barrier only when a passive explicitly says so."
    },
    {
      name: "Standard drop chance",
      formula: "min(100%, base drop % × dungeon progression multiplier × global premium multiplier)",
      details: "Authored 100% drops stay 100%. The Welcome entitlement raises the global multiplier to 1.10. Exclusive story-boss drops use only the global premium multiplier."
    },
    {
      name: "Encounter composition",
      formula: "team probability = team weight ÷ sum of non-boss team weights",
      details: "Rows marked is_boss are excluded from weighted random selection and forced separately; current catalogs also assign them weight 0. Raid bosses always follow 15 cleared normal encounters."
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
    {name:"Critical Damage", kind:"Offense", text:"Damage multiplier on a critical. A displayed 150% means ×1.5 damage."},
    {name:"Immunity", kind:"Resistance", text:"Percentage chance to resist a newly applied harmful status; base heroes begin with 10% before class and equipment additions."},
    {name:"Threat", kind:"Targeting", text:"Weighted contribution to direct enemy target selection. Higher Threat is more likely, never absolute by itself."},
    {name:"Counter Chance", kind:"Defense", text:"Chance to reflect damage after a successful incoming hit when counter power is available."},
    {name:"Counter Damage", kind:"Defense", text:"Percentage of the received HP damage reflected; base physical counter power is 50%."},
    {name:"Lifesteal", kind:"Sustain", text:"Heals the attacker for a percentage of HP damage dealt."},
    {name:"Regeneration", kind:"Sustain", text:"Restores a flat amount of HP during the entity's turn processing."},
    {name:"Healing", kind:"Support", text:"Percentage scale applied to healing performed and relevant self-healing."},
    {name:"Decay", kind:"Effect", text:"Built-in ongoing Magic damage dealt during the affected entity's turn processing."},
    {name:"Mist Damage", kind:"Environment", text:"Scales outgoing damage by the target's effective Mist exposure."},
    {name:"Mist Reduction", kind:"Environment", text:"Reduces the Mist percentage used against this target."},
    {name:"EXP Rate", kind:"Progression", text:"Multiplies the hero's share of XP before global and dungeon XP multipliers."}
  ],

  statuses: [
    {id:"damage_buff", name:"Damage Up", kind:"buff", text:"Increases all outgoing damage by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"defense_buff", name:"Defense Up", kind:"buff", text:"Adds displayed percentage points to Defense against Melee and Ranged damage.", stacking:"Strongest value; duration refreshes."},
    {id:"mdef_buff", name:"Magic Defense Up", kind:"buff", text:"Adds displayed percentage points to Magic Defense.", stacking:"Strongest value; duration refreshes."},
    {id:"evade_buff", name:"Evade Up", kind:"buff", text:"Adds displayed percentage points to effective Evade.", stacking:"Strongest value; duration refreshes."},
    {id:"crit_buff", name:"Critical Chance Up", kind:"buff", text:"Adds displayed percentage points to effective Critical Chance.", stacking:"Strongest value; duration refreshes."},
    {id:"counter_buff", name:"Counter Chance Up", kind:"buff", text:"Adds displayed percentage points to Counter Chance.", stacking:"Strongest value; duration refreshes."},
    {id:"counter_power", name:"Counter Power Up", kind:"buff", text:"Adds displayed percentage points to reflected counter damage.", stacking:"Strongest value; duration refreshes."},
    {id:"immunity_buff", name:"Immunity Up", kind:"buff", text:"Adds displayed percentage points to the chance to resist newly applied harmful statuses.", stacking:"Strongest value; duration refreshes."},
    {id:"hot", name:"Skill Regeneration", kind:"buff", text:"Restores the displayed HP at the start of each turn; applied by active skills.", stacking:"Strongest value; duration refreshes."},
    {id:"healer_hot", name:"Passive Regeneration", kind:"buff", text:"Restores displayed HP at the start of each turn; applied by a healer's action passive.", stacking:"Strongest value; duration refreshes."},
    {id:"healing_buff", name:"Healing Up", kind:"buff", text:"Increases healing performed and self-healing by the displayed percentage points.", stacking:"Strongest value; duration refreshes."},
    {id:"threat_buff", name:"Threat Up", kind:"buff", text:"Adds displayed Threat to weighted enemy target selection.", stacking:"Strongest value; duration refreshes."},
    {id:"intercept", name:"Intercept", kind:"buff", text:"Redirects direct enemy attacks from allies to this entity while active.", stacking:"No visible strength."},
    {id:"momentum", name:"Momentum", kind:"buff", text:"Adds outgoing damage as a class passive builds momentum during the encounter.", stacking:"Additive."},
    {id:"attack_down", name:"Attack Down", kind:"debuff", text:"Reduces all outgoing damage by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"vulnerability", name:"Vulnerability", kind:"debuff", text:"Increases direct and ongoing damage received by the displayed percentage.", stacking:"Strongest value; duration refreshes."},
    {id:"pattern_vulnerability", name:"Observed Pattern", kind:"debuff", text:"Increases damage received as Veyra's Eye observes distinct party attack types.", stacking:"Strongest value; duration refreshes."},
    {id:"dot", name:"Ongoing Damage", kind:"debuff", text:"Deals the displayed Magic damage at the start of each turn.", stacking:"Strongest value; duration refreshes."},
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
    {id:"keen_eyed", name:"The Keen-Eyed", stat:"Critical Chance", bonus:10, unit:"points"},
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
      id:"ember_crown", name:"The Ember Crown", role:"DPS", color:"#e36b32", icon:"res://resources/ui/divinity_ember_crown.png",
      text:"Decisive blows, critical strikes, and merciless finishes.",
      skills:[
        {name:"Ashen Might", tier:0, ranks:5, cost:1, text:"Deal +2% damage per rank."},
        {name:"Hunter's Pulse", tier:0, ranks:5, cost:1, text:"Gain +2% Critical Chance per rank."},
        {name:"Serrated Radiance", tier:1, ranks:3, cost:2, text:"Critical hits deal +10% damage per rank."},
        {name:"Merciless Focus", tier:1, ranks:3, cost:2, text:"Deal +8% damage per rank to enemies below half health."},
        {name:"Crown of Cinders", tier:2, ranks:1, cost:3, text:"Unique: deal 35% more damage to enemies below 20% health."}
      ]
    },
    {
      id:"stone_aegis", name:"The Stone Aegis", role:"Tank", color:"#b68b4b", icon:"res://resources/ui/divinity_stone_aegis.png",
      text:"Endurance, control resistance, and a final wall against lethal damage.",
      skills:[
        {name:"Adamant Blood", tier:0, ranks:5, cost:1, text:"Gain +2% maximum HP per rank."},
        {name:"Bastion Training", tier:0, ranks:5, cost:1, text:"Gain +1 Defense and Magic Defense per rank."},
        {name:"Commanding Presence", tier:1, ranks:3, cost:2, text:"Gain +2 Threat per rank."},
        {name:"Sacred Resistance", tier:1, ranks:3, cost:2, text:"Gain +5% status Immunity per rank."},
        {name:"Last Citadel", tier:2, ranks:1, cost:3, text:"Unique: the first lethal blow each expedition leaves the hero at 1 HP and grants a 20% HP barrier."}
      ]
    },
    {
      id:"wellspring_grace", name:"Wellspring Grace", role:"Healer", color:"#6bc6a0", icon:"res://resources/ui/divinity_wellspring_grace.png",
      text:"Healing throughput, regeneration, protective overflow, and mana cadence.",
      skills:[
        {name:"Living Waters", tier:0, ranks:5, cost:1, text:"Increase healing done by +3% per rank."},
        {name:"Patient Hands", tier:0, ranks:5, cost:1, text:"Gain +1 Regeneration per rank."},
        {name:"Overflowing Mercy", tier:1, ranks:3, cost:2, text:"Healing grants a barrier equal to 3% of the target's max HP per rank."},
        {name:"Luminous Rhythm", tier:1, ranks:3, cost:2, text:"Gain +5% mana generation per rank."},
        {name:"Dawn Refrain", tier:2, ranks:1, cost:3, text:"Unique: after using a skill, heal the most wounded ally for 12% of maximum HP."}
      ]
    },
    {
      id:"tempest_chorus", name:"The Tempest Chorus", role:"AoE & Effects", color:"#6daee8", icon:"res://resources/ui/divinity_tempest_chorus.png",
      text:"Area damage, stronger effects, vulnerability procs, and skill echoes.",
      skills:[
        {name:"Tempest Reach", tier:0, ranks:5, cost:1, text:"Skills that hit all enemies deal +3% damage per rank."},
        {name:"Resonant Current", tier:0, ranks:5, cost:1, text:"Skill buffs and debuffs are +2% stronger per rank."},
        {name:"Gale Mark", tier:1, ranks:3, cost:2, text:"Hits gain +7% chance per rank to inflict 8% Vulnerability for 2 turns."},
        {name:"Rallying Thunder", tier:1, ranks:3, cost:2, text:"Skill use gains +10% chance per rank to give all allies +10% damage for 2 turns."},
        {name:"Eye of the Storm", tier:2, ranks:1, cost:3, text:"Unique: damaging skills echo for 40% power against every other living enemy."}
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
    {id:"mana_gain", name:"Mana Gain", base:2, unit:"%"}
  ],

  raidMechanics: {
    march_rootbound: {
      label:"Root Network", color:"#6f984b",
      rules:[
        "Each encounter is seeded with 2 nodes in Wing I, 3 in Wing II, 4 in Wing III, and 4 for the boss; missing nodes are added even when the authored team lists fewer.",
        "Every living Root Node gives linked non-node enemies +4 Defense and +1% outgoing damage.",
        "When a linked enemy acts, it heals 3% maximum HP per living node, capped at 9%.",
        "Root Nodes take +25% damage from Magic attackers or attackers with Decay, and −20% from other sources.",
        "At 70% HP, Orrun absorbs living nodes: +5% to its Attack stat and +0.1% max-HP regeneration per absorbed node. Current basic and skill damage ranges are not rebuilt from that Attack-stat change. At 40%, two new nodes appear.",
        "The two nodes summoned at 40% immediately restore 3% max HP each on Orrun's actions. Current runtime does not refresh their network counter on summon, so their Defense/damage links remain at 0 until one dies and the surviving-node count refreshes.",
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
        "At Pressure 70 or higher, sourced action/passive healing is multiplied by 0.80; regeneration, lifesteal, HoTs, and direct self-heals bypass it. Enemies entering a wave scale Attack and damage by ×(1 + Pressure ÷ 500).",
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
        "Dawn lasts 12 hero actions: Magic deals +20% and Melee deals −20% for both sides. Each positive sourced action/passive heal adds min(3, actual HP restored ÷ target max HP × 10) Lastlight.",
        "Dusk lasts 12 hero actions: Melee deals +20% and Magic deals −20% for both sides. Each successful hero critical adds 5 Lastlight.",
        "Total Eclipse lasts 6 hero actions, multiplies sourced action/passive healing by 0.65, begins with 10% maximum-HP Magic damage to the party, then returns to Dawn. Regeneration, lifesteal, HoTs, and direct self-heals bypass the phase healing multiplier.",
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
    {id:"egg", name:"Eligible boss drops its pet egg", value:"15%", detail:"Applies to each configured dungeon or raid boss kill. Buying a family egg costs 150 Gems."},
    {id:"rarity", name:"Pet hatch rarity", value:"75 / 20 / 5", detail:"Common 75%, Rare 20%, Epic 5%. They receive 2, 3, or 4 distinct effects respectively from that family's shuffled pool."},
    {id:"runeEarly", name:"Raid Rune Piece — early enemy", value:"1.5%", detail:"Rolled on every eligible non-node raid monster before the raid has completed 10 encounters."},
    {id:"runeLate", name:"Raid Rune Piece — late enemy", value:"3%", detail:"Rolled after 10 normal clears: encounters 11–15 and eligible non-node boss adds. Root Nodes never roll bespoke raid rewards."},
    {id:"runeBoss", name:"Raid Rune Piece — boss", value:"10%", detail:"Separate from the guaranteed boss material roll."},
    {id:"bossMat", name:"Boss drops two materials", value:"25%", detail:"Every raid boss drops at least one boss material; 25% of kills produce a second."},
    {id:"accessory", name:"Raid accessory repeat copy", value:"5%", detail:"Until a copy is discovered or already pending, the roll escalates 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, then guarantees clear 10. It returns to 5% afterward."},
    {id:"daily", name:"Raid entry reset", value:"00:00 UTC", detail:"Each of the four raids tracks its own daily entry. Starting consumes it. A manual refresh costs 50 Gems."},
    {id:"reward", name:"Daily Gem reward", value:"35 Gems", detail:"One claim per UTC day. With the free Welcome entitlement it is granted instantly; otherwise the reward path requires successful rewarded-ad completion when available."}
  ],

  townSystems: [
    {name:"Tavern", icon:"res://resources/ui/icon_tavern.png", lead:"Recruitment, roster capacity, offer count, and refresh speed.", facts:["5 starting offers; at least one healer when a healer class is available", "3-hour base refresh", "8 base hero slots", "200 + 100 × current roster size recruitment cost", "+10% refresh speed per speed-upgrade level", "25% title chance per generated offer"]},
    {name:"Workshop", icon:"res://resources/ui/icon_craft.png", lead:"Recipes, batch jobs, queue capacity, and offline completion.", facts:["3 starting queue slots", "+10% crafting speed per speed-upgrade level", "A batch occupies one job", "Cancelling an unfinished job refunds reserved items and Coins", "Crafting catches up across the full elapsed offline interval"]},
    {name:"Regular Shop", icon:"res://resources/ui/icon_shop.png", lead:"Campaign-appropriate materials sold for Coins.", facts:["4 offers", "3-hour refresh", "Each offer can be bought once per refresh", "Offer tier follows the highest unlocked dungeon tier", "Purchases discover the item immediately"]},
    {name:"Weekly Shop", icon:"res://resources/ui/gem.svg", lead:"Permanent capacity expansions bought with Gems.", facts:["7-day refresh", "Tavern Expansion: +1 hero slot", "Workshop Expansion: +1 queue slot", "500 Gems per upgrade", "Maximum 3 levels of each upgrade"]},
    {name:"Inventory", icon:"res://resources/ui/icon_inventory.png", lead:"Collected materials, equipment, selling, and discovery.", facts:["Ordinary items may be sold for their authored Coin value", "Quest keys, Rune Pieces, unique raid accessories, and protected items cannot be sold", "Equipment must satisfy slot and proficiency rules", "One hero cannot equip two copies of the same unique-equipped item"]},
    {name:"Mailbox", icon:"res://resources/ui/icon_mail_letter.png", lead:"Story beats, unlock guidance, and rare-discovery notices.", facts:["Prologue and campaign unlock mail", "Raid quest and first-clear mail", "First Rune Piece tutorial", "Unique raid accessory discoveries", "Read state persists in the save"]},
    {name:"Pets", icon:"res://resources/ui/icon_pets.png", lead:"Boss eggs hatch into expedition companions with persistent bond levels.", facts:["60-pet stable capacity", "Only one pet per activity", "A deployed pet cannot serve elsewhere", "1 XP per raid encounter; 10 XP per configured boss kill", "Level cap 20; effect values reach ×3 base at level 20"]},
    {name:"Premium & daily", icon:"res://resources/ui/icon_rewarded_ad.png", lead:"Optional Gems and a one-time current Welcome entitlement.", facts:["Current UI exposes the Welcome Pack as a FREE one-time claim", "Level-25 Trickster with Ironbark Blade and Ranger Leather", "Permanent +10% XP and standard drop multiplier", "Daily 35-Gem claim; entitlement makes it instant", "Gem pack fulfillment is platform-confirmed before credit"]}
  ],

  interactions: [
    {area:"Main navigation", actions:["City opens Tavern, Shop, Workshop, Inventory, Pets, Mail, and town references.", "Heroes opens the roster; select a portrait/card for stats, equipment, skills, promotion, Runes, Ascension, title, rename, or removal.", "Dungeons and Raids open their activity lists; selecting an entry opens formation, status, report, rewards, and combat.", "Settings contains audio, help/reference catalogs, privacy, Discord, Play Games/cloud, and data deletion."]},
    {area:"Formation", actions:["Select an empty slot, then choose an available hero. Selecting an occupied slot lets you replace or remove it.", "A saved preset stores every formation position, including gaps. Loading skips heroes who were removed or are deployed elsewhere and reports the omissions.", "Choose an available pet separately. A pet preset is scoped to the activity.", "Start is enabled with at least one valid hero and no selected hero/pet already deployed elsewhere."]},
    {area:"Running combat", actions:["Combat advances automatically at the activity's authored interval; no manual attack input is required.", "Select or inspect a combatant to view live HP, Mana, barriers, stats, skills, equipment, and active statuses.", "Battle cues show attacks, heals, skills, evades, criticals, counters, barriers, and harmful-effect resistance.", "Stop a dungeon without losing its pending drops. Abandoning a raid ends the run and keeps its entry consumed."]},
    {area:"Rewards & reports", actions:["Collect on an activity transfers pending items to Inventory; Gem Clusters open automatically and pet-egg tokens become hatchable eggs.", "Collect All processes every dungeon with pending rewards and reports combined items, Gems, and dungeon count.", "Reports preserve the just-collected session summary and show live per-hour estimates before collection.", "Drops shown inside a running activity are pending, not yet usable in crafting or equipment."]},
    {area:"Hero detail", actions:["Equipment slots filter compatible items: Melee/Ranged/Magic weapons, Light/Medium/Heavy armor, and accessories.", "Promotion at level 25 presents two specialization cards; promotion at level 50 presents the linked elite class.", "Each Rune upgrade is guaranteed when its matching piece is available. Rune ranks are not random.", "At elite level 50, choose one Ascendant Path, spend up to 15 points, and reset freely; changing paths refunds all points."]},
    {area:"Crafting & items", actions:["Open a recipe to review result, quantity, Coin cost, craft time, tier, raid requirement, and every ingredient.", "Starting a batch reserves all ingredients and Coins immediately.", "Use queue cards to inspect completion time or cancel an unfinished job for a full reserved-cost refund.", "Selling is disabled for protected items; equipping removes the item from ordinary inventory until unequipped."]},
    {area:"Pets", actions:["Boss-dropped eggs appear after activity rewards are collected. Family eggs can also be bought for 150 Gems.", "Hatch to roll rarity and a shuffled set of distinct family effects; the creature sprite follows rarity.", "Rename a pet, assign it to a formation, save it in that activity's preset, or release it while not deployed.", "Pet effect strength increases nonlinearly with level; level 20 is exactly three times the level-1 base value."]},
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
    {title:"Runtime beats legacy guide art", text:"The Discord guide panels were authored for game 1.02. This Codex uses the 1.05 catalogs and runtime implementation when they conflict."},
    {title:"Title bonuses are 10, not 5", text:"A generated offer has a 25% title chance. Health and Attack use ×1.10; Defense, Magic Defense, Evade, and Critical Chance add 10 percentage points."},
    {title:"First accessory has pity", text:"Until the first copy is discovered or already pending, a raid accessory rises by 5 percentage points each clear and is guaranteed on clear 10. Later copies are 5%."},
    {title:"Raid clocks count hero actions", text:"Constellation uses 10 hero actions and needs three successful matching hits; the same hero may contribute on later actions. Eclipse phases last 12 Dawn, 12 Dusk, and 6 Total Eclipse hero actions."},
    {title:"Authored monster damage ranges are not live", text:"Runtime derives monster Attack from the matching primary attribute and rebuilds damage as ±30%. Catalog damage_min/damage_max fields are display/tuning remnants."},
    {title:"Some starter skill labels are descriptive only", text:"The four Slime Forest elemental active-skill names are not dispatched by the current monster active-skill switch, so those slimes basic-attack even at full Mana."},
    {title:"Recommended raid readiness is advisory", text:"Recommended career level and gear tier are displayed guidance. The permanent raid start check accepts any non-empty available team within capacity after the unlock quest."},
    {title:"Difficulty and XP/hour are tuning metadata", text:"Dungeon difficulty_index and target_xp_per_hour support balance reports but do not directly change runtime combat or rewards."}
  ]
});
