(function () {
  "use strict";

  const C = window.WIKI_CONTENT;
  const SOURCE_ROOT = /\/wiki(?:\/|$)/i.test(window.location.pathname) ? ".." : ".";
  const CATALOG_ROOT = `${SOURCE_ROOT}/data/catalogs`;
  const outlet = document.getElementById("route-outlet");
  const entityDialog = document.getElementById("entity-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const searchDialog = document.getElementById("search-dialog");
  const globalSearch = document.getElementById("global-search");
  const searchResults = document.getElementById("search-results");
  const searchMeta = document.getElementById("search-meta");

  const state = {
    data: null,
    searchIndex: [],
    searchSelection: -1,
    routeRenderId: 0
  };

  const catalogFiles = [
    "hero-catalog.json",
    "dungeon-catalog.json",
    "monster-catalog.json",
    "raid-catalog.json",
    "raid-monster-catalog.json",
    "item-catalog.json",
    "progression-item-catalog.json",
    "raid-item-catalog.json",
    "pet-family-catalog.json"
  ];

  const routeMeta = {
    home: ["Codex overview", "The complete, source-verified field guide to Idle Party Dungeon 1.05."],
    quickstart: ["New player path", "A spoiler-light route from an empty Tavern to the first raid."],
    mechanics: ["Core mechanics", "Progression, persistence, failure, roster rules, Mist, and discovery."],
    combat: ["Combat & formulas", "The exact order of battle, stat formulas, targeting, damage, healing, and statuses."],
    heroes: ["Hero class compendium", "All 55 base, specialized, and elite classes with paths, stats, skills, and restrictions."],
    effects: ["Effects & statuses", "Every visible status plus titles, advanced equipment triggers, and stacking rules."],
    dungeons: ["Dungeon atlas", "All 12 campaign areas, objectives, Mist rules, encounter weights, bosses, and effective loot odds."],
    monsters: ["Monster bestiary", "Every campaign and raid enemy with live derived stats, skills, locations, and drops."],
    raids: ["Raid command", "Four raids, exact action-based mechanics, unlock quests, encounters, bosses, and reward probabilities."],
    items: ["Items & crafting", "Every material, weapon, armor piece, accessory, quest item, raid item, and recipe."],
    pets: ["Pet families", "Every companion family, species, egg source, rarity roll, effect pool, and bond curve."],
    progression: ["Progression mastery", "Promotions, XP, Ascension, Runes, titles, and long-term hero building."],
    town: ["Town & economy", "Tavern, Workshop, Shops, Inventory, Mailbox, currencies, upgrades, and premium systems."],
    interactions: ["Interactions & menus", "What every major screen, button group, formation, collection, and account action does."],
    probability: ["Probability lab", "Interactive drop, encounter, pity, title, pet, and raid-odds calculators."],
    reference: ["Exact reference", "Coverage, implementation notes, source hierarchy, constants, and known catalog/runtime differences."]
  };

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slug(value) {
    return String(value ?? "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function norm(value) {
    return String(value ?? "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function asset(path) {
    if (!path) return `${SOURCE_ROOT}/resources/ui/item_unknown.png`;
    const text = String(path);
    if (text.startsWith("res://")) return `${SOURCE_ROOT}/${text.slice(6)}`;
    return text;
  }

  function statusIconId(statusId) {
    return ({ pattern_vulnerability: "vulnerability", momentum: "damage_buff" })[statusId] || statusId;
  }

  function titleBonusText(title) {
    return title.unit === "points"
      ? `+${title.bonus} percentage points to ${title.stat}`
      : `+${title.bonus}% ${title.stat}`;
  }

  function formatNumber(value, maximumFractionDigits = 0) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "—";
    return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(number);
  }

  function formatPercent(value, digits = 2) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "—";
    const resolved = Math.abs(number - Math.round(number)) < 0.0000001 ? 0 : digits;
    const fixed = number.toFixed(resolved);
    return `${resolved === 0 ? fixed : fixed.replace(/0+$/, "").replace(/\.$/, "")}%`;
  }

  function formatDuration(seconds) {
    const total = Math.max(0, Number(seconds) || 0);
    if (total < 60) return `${formatNumber(total, 1)} sec`;
    if (total < 3600) return `${formatNumber(total / 60, 1)} min`;
    return `${formatNumber(total / 3600, 2)} hr`;
  }

  function humanKey(key) {
    const labels = {
      hp: "HP", mp: "Mana gain", str: "Strength", dex: "Dexterity", intelligence: "Intelligence",
      df: "Defense", dfM: "Magic Defense", damage_min: "Authored min", damage_max: "Authored max",
      atk_type: "Attack type", threat: "Threat", evade: "Evade", crt_chance: "Critical chance",
      crt_rate: "Critical damage", immune_chance: "Immunity", counter_chance: "Counter chance",
      lifesteal_rate: "Lifesteal", counter_dmg: "Counter damage", counter_dmgM: "Magic counter",
      regen: "Regeneration", mist_dmg_rate: "Mist damage", mist_reduction: "Mist reduction",
      healing: "Healing", exp: "XP", decay: "Decay", max_hp: "Maximum HP"
    };
    if (labels[key]) return labels[key];
    return String(key).replaceAll("_", " ").replace(/\b\w/g, c => c.toUpperCase());
  }

  function tierLabel(tier) {
    return ({ 1: "Base", 2: "Specialized", 3: "Elite" })[Number(tier)] || `Tier ${tier}`;
  }

  function pageHeader(route, metaHtml = "") {
    const [title, intro] = routeMeta[route];
    return `
      <header class="page-header">
        <div>
          <span class="page-header__eyebrow">The Adventurer's Codex · Game ${esc(C.version.game)}</span>
          <h1>${esc(title)}</h1>
          <p>${esc(intro)}</p>
        </div>
        <div class="page-header__meta">${metaHtml}</div>
      </header>`;
  }

  function sectionHeading(eyebrow, title, text = "", link = "") {
    return `
      <div class="section-heading">
        <div>
          <span class="section-heading__eyebrow">${esc(eyebrow)}</span>
          <h2>${esc(title)}</h2>
          ${text ? `<p>${esc(text)}</p>` : ""}
        </div>
        ${link || ""}
      </div>`;
  }

  function badge(text, kind = "") {
    return `<span class="badge${kind ? ` badge--${esc(kind)}` : ""}">${esc(text)}</span>`;
  }

  function image(path, alt, className = "", attrs = "") {
    return `<img class="${esc(className)}" src="${esc(asset(path))}" alt="${esc(alt)}" loading="lazy" decoding="async" ${attrs}>`;
  }

  async function loadJson(name) {
    const response = await fetch(`${CATALOG_ROOT}/${name}`);
    if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
    return response.json();
  }

  async function loadData() {
    const results = await Promise.all(catalogFiles.map(loadJson));
    const [heroRaw, dungeonRaw, monsterRaw, raidRaw, raidMonsterRaw, itemRaw, progressionItemRaw, raidItemRaw, petRaw] = results;

    const heroes = Object.values(heroRaw.heroes || {}).sort((a, b) => Number(a.tier) - Number(b.tier) || a.base_class.localeCompare(b.base_class) || a.name.localeCompare(b.name));
    const dungeons = [...(dungeonRaw.dungeons || [])].sort((a, b) => Number(a.tier) - Number(b.tier));
    const raids = [...(raidRaw.raids || [])];

    const campaignMonsters = Object.entries(monsterRaw.monsters || {}).map(([name, definition]) => ({ name, ...definition, source_type: "dungeon" }));
    const raidMonsters = Object.entries(raidMonsterRaw.monsters || {}).map(([name, definition]) => ({ name, ...definition, source_type: "raid" }));
    const monsters = [...campaignMonsters, ...raidMonsters].sort((a, b) => a.name.localeCompare(b.name));

    const itemMap = new Map();
    const addItems = (object, source) => Object.entries(object || {}).forEach(([name, definition]) => {
      itemMap.set(name, { name, ...definition, source_catalog: source });
    });
    addItems(itemRaw.items, "core");
    addItems(progressionItemRaw.items, "progression");
    addItems(raidItemRaw.items, "raid");
    const items = [...itemMap.values()].sort((a, b) => a.name.localeCompare(b.name));

    const recipes = [
      ...(itemRaw.recipes || []).map(recipe => ({ ...recipe, source_catalog: "core" })),
      ...(progressionItemRaw.recipes || []).map(recipe => ({ ...recipe, source_catalog: "progression" })),
      ...(raidItemRaw.recipes || []).map(recipe => ({ ...recipe, source_catalog: "raid" }))
    ];

    const monsterLocations = new Map(monsters.map(monster => [monster.name, []]));
    dungeons.forEach(dungeon => {
      (dungeon.monster_teams || []).forEach(team => (team.monsters || []).forEach(name => {
        const existing = monsterLocations.get(name) || [];
        if (!existing.some(entry => entry.type === "dungeon" && entry.id === dungeon.name)) {
          existing.push({ type: "dungeon", id: dungeon.name, tier: dungeon.tier, boss: Boolean(team.is_boss) });
        }
        monsterLocations.set(name, existing);
      }));
    });
    raids.forEach(raid => {
      (raid.monster_teams || []).forEach(team => (team.monsters || []).forEach(name => {
        const existing = monsterLocations.get(name) || [];
        if (!existing.some(entry => entry.type === "raid" && entry.id === raid.id)) {
          existing.push({ type: "raid", id: raid.id, name: raid.name, boss: Boolean(team.is_boss) });
        }
        monsterLocations.set(name, existing);
      }));
    });

    const itemSources = new Map(items.map(item => [item.name, []]));
    monsters.forEach(monster => Object.entries(monster.drops || {}).forEach(([itemName, chance]) => {
      const sources = itemSources.get(itemName) || [];
      const locations = monsterLocations.get(monster.name) || [];
      sources.push({ kind: "drop", monster: monster.name, chance: Number(chance), locations });
      itemSources.set(itemName, sources);
    }));
    recipes.forEach(recipe => {
      const sources = itemSources.get(recipe.result) || [];
      sources.push({ kind: "recipe", recipe });
      itemSources.set(recipe.result, sources);
    });

    const petFamilies = Object.entries(petRaw.families || {}).map(([id, definition]) => ({ id, ...definition }));

    state.data = {
      heroRaw,
      heroes,
      dungeons,
      campaignMonsters,
      raidMonsters,
      monsters,
      raids,
      raidQuests: raidRaw.quests || {},
      items,
      itemMap,
      recipes,
      petFamilies,
      petRarity: petRaw.rarity_weights || {},
      monsterLocations,
      itemSources
    };

    buildSearchIndex();
    updateCounts();
  }

  function updateCounts() {
    const d = state.data;
    document.getElementById("nav-hero-count").textContent = d.heroes.length;
    document.getElementById("nav-dungeon-count").textContent = d.dungeons.length;
    document.getElementById("nav-monster-count").textContent = d.monsters.length;
    document.getElementById("nav-raid-count").textContent = d.raids.length;
  }

  function buildSearchIndex() {
    const d = state.data;
    const entries = [];
    d.heroes.forEach(hero => entries.push({ type: "Hero class", name: hero.name, subtitle: `${tierLabel(hero.tier)} · ${hero.base_class} · ${hero.weapon_type}`, route: "heroes", id: hero.name, icon: hero.texture, keywords: `${hero.description} ${hero.stats?.skill_act_name} ${hero.stats?.skill_psv_name} ${hero.parent}` }));
    d.monsters.forEach(monster => entries.push({ type: monster.source_type === "raid" ? "Raid monster" : "Monster", name: monster.name, subtitle: `${monster.stats?.atk_type || "Unknown"} · ${monster.source_type === "raid" ? "Raid" : "Campaign"}`, route: "monsters", id: monster.name, icon: monster.texture, keywords: `${monster.description} ${monster.stats?.skill_act_name || ""} ${monster.stats?.skill_psv_name || ""} ${(d.monsterLocations.get(monster.name) || []).map(x => x.name || x.id).join(" ")}` }));
    d.dungeons.forEach(x => entries.push({ type: "Dungeon", name: x.name, subtitle: `Campaign tier ${x.tier} · Team ${x.max_team_size}`, route: "dungeons", id: x.name, icon: x.icon, keywords: `${x.description} ${x.completion_boss || ""} ${x.material_family || ""}` }));
    d.raids.forEach(x => entries.push({ type: "Raid", name: x.name, subtitle: `${C.raidMechanics[x.id]?.label || x.mechanic_type} · Team ${x.hero_count}`, route: "raids", id: x.id, icon: x.icon, keywords: `${x.description} ${x.boss} ${x.rune_piece} ${x.boss_material} ${x.rare_accessory}` }));
    d.items.forEach(item => entries.push({ type: "Item", name: item.name, subtitle: `${itemCategory(item)}${item.equipment?.slot ? ` · ${item.equipment.slot}` : ""}`, route: "items", id: item.name, icon: item.icon, keywords: `${item.description} ${Object.keys(item.bonuses || {}).join(" ")} ${item.role_theme || ""}` }));
    d.petFamilies.forEach(family => entries.push({ type: "Pet family", name: family.name, subtitle: `${family.egg_name} · Tier ${family.tier}`, route: "pets", id: family.id, icon: family.egg_icon, keywords: `${family.source_boss} ${Object.values(family.sprites || {}).map(s => s.name).join(" ")} ${(family.effect_pool || []).join(" ")}` }));
    C.statuses.forEach(status => entries.push({ type: "Status", name: status.name, subtitle: status.kind, route: "effects", id: status.id, icon: `res://resources/ui/statuses/${statusIconId(status.id)}.png`, keywords: `${status.text} ${status.stacking}` }));
    C.runes.forEach(rune => entries.push({ type: "Rune", name: rune.name, subtitle: rune.stat, route: "progression", id: rune.id, icon: rune.icon, keywords: rune.text }));
    C.ascension.forEach(path => entries.push({ type: "Ascension", name: path.name, subtitle: path.role, route: "progression", id: path.id, icon: path.icon, keywords: `${path.text} ${path.skills.map(s => `${s.name} ${s.text}`).join(" ")}` }));
    Object.entries(routeMeta).forEach(([route, [name, subtitle]]) => entries.push({ type: "Guide", name, subtitle, route, id: "", icon: "", keywords: subtitle }));
    state.searchIndex = entries.map(entry => ({ ...entry, haystack: norm(`${entry.name} ${entry.subtitle} ${entry.type} ${entry.keywords || ""}`) }));
  }

  function itemCategory(item) {
    if (item.rune_material) return "Rune material";
    if (item.transient_reward) return "Reward";
    if (item.quest_item || item.quest_key) return "Quest item";
    if (item.equipment?.slot === "Weapon") return "Weapon";
    if (item.equipment?.slot === "Armor") return "Armor";
    if (item.equipment?.slot === "Accessory") return "Accessory";
    if (item.name.includes("Construction Bundle")) return "Construction";
    if (item.unsellable) return "Protected material";
    return "Material";
  }

  function getItemTier(item) {
    if (item.accessory_tier) return Number(item.accessory_tier);
    const recipes = state.data.recipes.filter(recipe => recipe.result === item.name);
    if (recipes.length) return Math.min(...recipes.map(recipe => Number(recipe.required_tier || 1)));
    const sources = state.data.itemSources.get(item.name) || [];
    const tiers = sources.flatMap(source => (source.locations || []).map(location => Number(location.tier || 0))).filter(Boolean);
    return tiers.length ? Math.min(...tiers) : 0;
  }

  function teamOdds(activity) {
    const teams = (activity.monster_teams || []).filter(team => !team.is_boss && Number(team.weight) > 0);
    const total = teams.reduce((sum, team) => sum + Number(team.weight || 0), 0);
    return teams.map(team => ({ ...team, probability: total ? Number(team.weight) / total * 100 : 0 }));
  }

  function teamNames(team) {
    const counts = new Map();
    (team.monsters || []).forEach(name => counts.set(name, (counts.get(name) || 0) + 1));
    return [...counts.entries()].map(([name, count]) => count > 1 ? `${name} ×${count}` : name).join(" · ");
  }

  function effectiveDropChance(base, dungeon, itemName, premium = false) {
    const item = state.data.itemMap.get(itemName) || {};
    const global = premium ? 1.1 : 1;
    if (item.exclusive_boss_drop) return Math.min(100, Number(base) * global);
    if (Number(base) >= 100) return 100;
    return Math.min(100, Number(base) * Number(dungeon?.progression_drop_chance_multiplier || 1) * global);
  }

  function monsterDerived(monster) {
    const stats = monster.stats || {};
    const attackType = stats.atk_type || "Melee";
    const primary = attackType === "Magic" ? Number(stats.intelligence || 0) : attackType === "Ranged" ? Number(stats.dex || 0) : Number(stats.str || 0);
    const hpPerStrength = Object.prototype.hasOwnProperty.call(stats, "hp_per_strength") ? Number(stats.hp_per_strength) : 5;
    const hp = Number(stats.hp || 0) + Number(stats.str || 0) * hpPerStrength;
    return {
      attack: primary,
      damageMin: Math.max(1, Math.floor(primary * .7)),
      damageMax: Math.max(1, Math.ceil(primary * 1.3)),
      hp
    };
  }

  function renderHome() {
    const d = state.data;
    const counts = [
      [d.heroes.length, "Hero classes"],
      [d.monsters.length, "Monsters"],
      [d.dungeons.length, "Dungeons"],
      [d.raids.length, "Raids"],
      [d.items.length, "Items"],
      [d.recipes.length, "Recipes"]
    ];
    const features = [
      ["01", "Heroes", "Compare all 55 class kits and promotion paths.", "heroes", "♜"],
      ["02", "Dungeon atlas", "See objectives, exact encounter weights, bosses, and loot.", "dungeons", "▰"],
      ["03", "Raid command", "Learn every action-based mechanic and first-copy pity roll.", "raids", "◆"],
      ["04", "Bestiary", "Inspect 76 enemies and the stats runtime actually uses.", "monsters", "♞"],
      ["05", "Build systems", "Plan Runes, Ascension, pets, titles, and equipment.", "progression", "✦"],
      ["06", "Probability lab", "Model drops, pity, hatches, and encounter composition.", "probability", "%"]
    ];
    return `
      <section class="hero-banner">
        <div class="hero-banner__art" style="background-image:url('${esc(asset("res://store_assets/final/feature_graphic_1024x500.png"))}')"></div>
        <div class="hero-banner__content">
          <div class="hero-banner__seal">Source-verified for ${esc(C.version.game)}</div>
          <h1>The final guide to every road below.</h1>
          <p class="hero-banner__lede">Classes, combat, dungeons, raids, monsters, loot tables, recipes, pets, status effects, town systems, interactions, and exact probabilities—one searchable Codex.</p>
          <div class="hero-banner__actions">
            <a class="button button--primary" href="#quickstart">Begin the field guide <span aria-hidden="true">→</span></a>
            <button class="button button--ghost" type="button" data-open-search>Search everything <span aria-hidden="true">/</span></button>
          </div>
        </div>
      </section>
      <div class="home-content">
        <div class="metric-strip">${counts.map(([value, label]) => `<div class="metric"><strong>${formatNumber(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div>
        <div class="page">
          <section class="home-section">
            ${sectionHeading("One living reference", "Choose your route", "The Codex works like an in-game compendium with the spoilers unlocked. Every entity card opens exact detail.")}
            <div class="feature-grid">${features.map(([index, title, text, route, glyph]) => `
              <a class="feature-card" href="#${route}" data-glyph="${esc(glyph)}">
                <span class="feature-card__index">${index}</span>
                <h3>${esc(title)}</h3>
                <p>${esc(text)}</p>
                <span class="feature-card__action">Open chapter →</span>
              </a>`).join("")}</div>
          </section>
          <section class="home-section">
            ${sectionHeading("Accuracy first", "Built from the game, not the old poster", "The current runtime disagrees with some legacy 1.02 guide panels. These are the corrections that matter most in 1.05.")}
            <div class="callout callout--green">
              <strong>Current headline rules:</strong>
              <p>Title bonuses are 10 rather than the legacy 5; first raid accessories have escalating pity; Constellation needs 3 matching hits within 10 hero actions; Eclipse uses 12 / 12 / 6 hero actions; dungeon combat is capped to 12 offline hours while crafting catches up fully.</p>
            </div>
          </section>
          <section class="home-section">
            ${sectionHeading("The complete loop", "From an empty Tavern to the Last Road", "The game rewards parallel teams, deliberate class coverage, and patient equipment progression.", `<a class="section-heading__link" href="#mechanics">All mechanics →</a>`)}
            <div class="odds-list">
              ${[
                ["Recruit", 15], ["Deploy", 31], ["Collect", 47], ["Craft & equip", 64], ["Promote & master", 82], ["Raid & ascend", 100]
              ].map(([label, width]) => `<div class="odds-row"><span class="odds-row__label">${label}</span><span class="odds-row__track"><span class="odds-row__bar" style="width:${width}%"></span></span><span class="odds-row__value">${width === 100 ? "Endgame" : "Progress"}</span></div>`).join("")}
            </div>
          </section>
        </div>
      </div>`;
  }

  function renderQuickstart() {
    return `<div class="page">${pageHeader("quickstart", badge("6 steps", "gold"))}
      <div class="step-list">${C.quickstart.map(step => `
        <article class="step-card">
          <div class="step-card__number">${esc(step.step)}</div>
          <div><h2>${esc(step.title)}</h2><p>${esc(step.text)}</p><p class="step-card__tip"><strong>Field note:</strong> ${esc(step.tip)}</p></div>
        </article>`).join("")}</div>
      <section class="section-block">
        <div class="callout"><strong>First-session target:</strong><p>Recruit three complementary heroes, run Slime Forest, collect enough gels for your first crafts, equip the party, and let the 425-kill objective build while you explore the catalogs and town upgrades.</p></div>
      </section>
    </div>`;
  }

  function renderMechanics() {
    return `<div class="page">${pageHeader("mechanics", `${badge("12h combat cap", "gold")}${badge("30s autosave", "green")}`)}
      <div class="mechanic-list">${C.mechanics.map(group => `
        <article class="mechanic-panel" id="mechanic-${esc(group.id)}">
          <div class="mechanic-panel__title"><span class="eyebrow">${esc(group.eyebrow)}</span><h2>${esc(group.title)}</h2><p>${esc(group.summary)}</p></div>
          <div class="mechanic-panel__content"><ul>${group.bullets.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div>
        </article>`).join("")}</div>
      <section class="section-block">
        <div class="callout callout--red"><strong>Defeat detail:</strong><p>The 10% death penalty is floor(10% of the hero's XP currently stored toward the next level), not 10% of the expedition's lifetime XP. Dead heroes also receive none of the XP from kills resolved while they are down.</p></div>
      </section>
    </div>`;
  }

  function renderCombat() {
    return `<div class="page">${pageHeader("combat", `${badge("0.65s authored tick", "gold")}${badge("DEX order")}`)}
      <section class="section-block" style="margin-top:0">
        ${sectionHeading("Resolution order", "What happens on one action", "The sequence matters: several effects trigger after an action, and status durations tick on their owner.")}
        <div class="feature-grid">
          ${[
            ["1", "Start-of-turn effects", "Skill regeneration, healer regeneration, then ongoing damage resolve. Ongoing damage can defeat the actor before it acts."],
            ["2", "Skill or basic", "At 100 Mana an unsilenced active skill is attempted; otherwise the unit uses a basic attack and gains Mana even when that basic misses."],
            ["3", "After-action kit", "Healer action passive, flat regeneration, equipment triggers, low-HP barriers, and Decay resolve."],
            ["4", "Duration & next unit", "The acting entity's statuses lose one turn, defeated entities resolve, then the turn index advances through DEX-sorted combatants."],
            ["5", "Wave reward beat", "After all enemies fall, one tick presents the wave reward and the next spawns a new composition."],
            ["6", "Wipe behavior", "Dungeons rebuild the full party and continue. Raids end the attempt and keep the daily entry consumed."]
          ].map(([index, title, text]) => `<article class="feature-card" data-glyph="${index}"><span class="feature-card__index">STEP ${index}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}
        </div>
      </section>
      <section class="section-block">
        ${sectionHeading("Exact formulas", "The arithmetic behind a build", "The implementation uses percentage-point defenses and avoidance, plus multiplicative growth for HP and Attack.")}
        <div class="formula-grid">${C.formulas.map(entry => `<article class="formula-card"><h3>${esc(entry.name)}</h3><div class="formula-card__expression">${esc(entry.formula)}</div><p>${esc(entry.details)}</p></article>`).join("")}</div>
      </section>
      <section class="section-block">
        ${sectionHeading("Stat dictionary", "Every build stat", "Hero details, equipment, pets, Runes, titles, and effects all feed this shared combat model.")}
        <div class="stat-grid">${C.stats.map(stat => `<article class="status-card"><div class="status-card__top"><div><span class="eyebrow">${esc(stat.kind)}</span><h3>${esc(stat.name)}</h3></div></div><p>${esc(stat.text)}</p></article>`).join("")}</div>
      </section>
      <section class="section-block"><div class="callout"><strong>Runtime note:</strong><p>Catalog damage_min and damage_max values are not used for live heroes or monsters. Runtime derives Attack from the primary attribute and builds a fresh ±30% damage range.</p></div></section>
    </div>`;
  }

  function heroCard(hero) {
    const stats = hero.stats || {};
    return `<article class="entity-card portrait-card" data-openable="true" tabindex="0" role="button" data-entity-type="hero" data-entity-id="${esc(hero.name)}" aria-label="Open ${esc(hero.name)} details">
      <div class="entity-card__media entity-card__media--portrait">
        ${image(hero.texture, `${hero.name} class portrait`)}
        <div class="entity-card__badge-row">${badge(tierLabel(hero.tier), `tier-${hero.tier}`)}${badge(hero.weapon_type)}${badge(hero.armor_type)}</div>
      </div>
      <div class="entity-card__body">
        <div class="entity-card__kicker">${esc(hero.base_class)} path${hero.parent ? ` · from ${esc(hero.parent)}` : ""}</div>
        <h3>${esc(hero.name)}</h3>
        <p class="entity-card__desc">${esc(hero.description)}</p>
        <div class="entity-card__facts">
          <div class="entity-card__fact"><span>Active</span><strong>${esc(stats.skill_act_name || "None")}</strong></div>
          <div class="entity-card__fact"><span>Passive</span><strong>${esc(stats.skill_psv_name || "None")}</strong></div>
        </div>
        <div class="entity-card__footer">Full class sheet</div>
      </div>
    </article>`;
  }

  function classTree(baseName) {
    const heroes = state.data.heroes;
    const base = heroes.find(hero => hero.name === baseName);
    if (!base) return "";
    const branches = (base.promotion_options || []).map(specName => {
      const spec = heroes.find(hero => hero.name === specName);
      const eliteName = spec?.promotion_options?.[0];
      const elite = heroes.find(hero => hero.name === eliteName);
      return `<button class="button button--ghost button--small" type="button" data-entity-type="hero" data-entity-id="${esc(specName)}">${esc(specName)} → ${esc(elite?.name || "Elite")}</button>`;
    }).join("");
    return `<article class="info-card"><span class="info-card__eyebrow">${esc(base.weapon_type)} · ${esc(base.armor_type)}</span><h3>${esc(base.name)}</h3><p>${esc(base.description)}</p><div class="hero-banner__actions">${branches}</div></article>`;
  }

  function renderHeroes() {
    const bases = state.data.heroRaw.base_classes || [];
    const baseOptions = bases.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join("");
    return `<div class="page">${pageHeader("heroes", `${badge(`${state.data.heroes.length} classes`, "gold")}${badge("11 complete trees", "green")}`)}
      <section class="section-block" style="margin-top:0">
        ${sectionHeading("Promotion map", "Eleven roots, twenty-two final builds", "Recruitable base classes branch at level 25, then reach their path's elite class at level 50.")}
        <div class="info-grid">${bases.map(classTree).join("")}</div>
      </section>
      <section class="section-block">
        ${sectionHeading("Complete catalog", "Compare every class", "Catalog numbers are class previews; an owned hero promotes from its current rolled stats and receives a favored-stat bonus.")}
        <div class="filter-bar" data-filter-scope="heroes">
          <div class="filter-bar__search"><input type="search" id="hero-filter-search" placeholder="Filter classes or skills…" aria-label="Filter hero classes"></div>
          <select id="hero-filter-base" aria-label="Filter by base class"><option value="">All base classes</option>${baseOptions}</select>
          <select id="hero-filter-tier" aria-label="Filter by class tier"><option value="">All tiers</option><option value="1">Base</option><option value="2">Specialized</option><option value="3">Elite</option></select>
          <select id="hero-filter-attack" aria-label="Filter by weapon type"><option value="">All weapons</option><option>Melee</option><option>Ranged</option><option>Magic</option></select>
          <span class="filter-bar__count" id="hero-filter-count"></span>
        </div>
        <div class="catalog-grid" id="hero-grid">${state.data.heroes.map(heroCard).join("")}</div>
      </section>
    </div>`;
  }

  function bindHeroFilters() {
    const inputs = ["hero-filter-search", "hero-filter-base", "hero-filter-tier", "hero-filter-attack"].map(id => document.getElementById(id));
    if (inputs.some(input => !input)) return;
    const [query, base, tier, attack] = inputs;
    const apply = () => {
      const q = norm(query.value);
      const matches = state.data.heroes.filter(hero => {
        const text = norm(`${hero.name} ${hero.description} ${hero.parent} ${hero.base_class} ${hero.stats?.skill_act_name} ${hero.stats?.skill_act_desc} ${hero.stats?.skill_psv_name} ${hero.stats?.skill_psv_desc}`);
        return (!q || text.includes(q)) && (!base.value || hero.base_class === base.value) && (!tier.value || String(hero.tier) === tier.value) && (!attack.value || hero.weapon_type === attack.value);
      });
      document.getElementById("hero-grid").innerHTML = matches.length ? matches.map(heroCard).join("") : emptyState("No classes match those filters.");
      document.getElementById("hero-filter-count").textContent = `${matches.length} of ${state.data.heroes.length}`;
    };
    inputs.forEach(input => input.addEventListener("input", apply));
    apply();
  }

  function statusCard(status) {
    const iconId = statusIconId(status.id);
    return `<article class="status-card" data-status-kind="${esc(status.kind)}">
      <div class="status-card__top">${image(`res://resources/ui/statuses/${iconId}.png`, "", "status-card__icon")}<div>${badge(status.kind, status.kind)}<h3>${esc(status.name)}</h3><code>${esc(status.id)}</code></div></div>
      <p>${esc(status.text)}</p><div class="status-card__stack">${esc(status.stacking)}</div>
    </article>`;
  }

  function advancedEffectCards() {
    const effects = [];
    state.data.items.forEach(item => {
      if (item.advanced_effect) effects.push({ item, effect: item.advanced_effect, set: false });
      if (item.raid_set_bonus?.advanced_effect) effects.push({ item, effect: item.raid_set_bonus.advanced_effect, set: true, setName: item.raid_set_bonus.name });
    });
    return effects.map(entry => {
      const effect = entry.effect;
      const summary = Object.entries(effect).filter(([key]) => !["id", "trigger"].includes(key)).map(([key, value]) => `${humanKey(key)}: ${typeof value === "boolean" ? (value ? "Yes" : "No") : value}`).join(" · ");
      return `<article class="entity-card item-card" data-openable="true" tabindex="0" role="button" data-entity-type="item" data-entity-id="${esc(entry.item.name)}">
        <div class="entity-card__media">${image(entry.item.icon, "")}</div>
        <div class="entity-card__body"><div class="entity-card__kicker">${entry.set ? `Raid set · ${esc(entry.setName)}` : `Trigger · ${esc(effect.trigger || "special")}`}</div><h3>${esc(entry.item.name)}</h3><p class="entity-card__desc">${esc(summary || entry.item.description)}</p></div>
      </article>`;
    }).join("");
  }

  function renderEffects() {
    return `<div class="page">${pageHeader("effects", `${badge(`${C.statuses.length} statuses`, "gold")}${badge("Strongest + refresh default")}`)}
      <section class="section-block" style="margin-top:0">
        ${sectionHeading("Status engine", "Every visible combat state", "Cleanse removes debuffs; dispel removes buffs. Special states are not removed by either ordinary operation.")}
        <div class="filter-bar">
          <select id="status-filter" aria-label="Filter status kind"><option value="">All status kinds</option><option value="buff">Buffs</option><option value="debuff">Debuffs</option><option value="special">Special</option></select>
          <span class="filter-bar__count" id="status-filter-count"></span>
        </div>
        <div class="status-grid" id="status-grid">${C.statuses.map(statusCard).join("")}</div>
      </section>
      <section class="section-block">
        ${sectionHeading("Permanent quirks", "Tavern titles", "Each offer rolls 25% for a title, then chooses uniformly among six. Defensive and chance bonuses are implemented as percentage points.")}
        <div class="stat-grid">${C.titles.map(title => `<article class="status-card"><span class="eyebrow">4.1667% per offer</span><h3>${esc(title.name)}</h3><p>${esc(titleBonusText(title))}. Persists through rename and promotion.</p></article>`).join("")}</div>
      </section>
      <section class="section-block">
        ${sectionHeading("Equipment logic", "Every advanced and raid-set trigger", "These fields are executable build rules, not flavor text. Open any card for its full item definition and bonuses.")}
        <div class="catalog-grid catalog-grid--wide">${advancedEffectCards()}</div>
      </section>
    </div>`;
  }

  function bindStatusFilter() {
    const select = document.getElementById("status-filter");
    if (!select) return;
    const apply = () => {
      const values = C.statuses.filter(status => !select.value || status.kind === select.value);
      document.getElementById("status-grid").innerHTML = values.map(statusCard).join("");
      document.getElementById("status-filter-count").textContent = `${values.length} effects`;
    };
    select.addEventListener("input", apply);
    apply();
  }

  function objectiveText(dungeon) {
    const amount = formatNumber(dungeon.completion_target_amount || 0);
    const type = String(dungeon.completion_target_type || "objective");
    if (type === "kills") return `${amount} individual kills`;
    if (type === "encounters") return `${amount} cleared encounters`;
    if (type === "targets") return `${amount} marked target kills`;
    return `${amount} ${humanKey(type).toLowerCase()}`;
  }

  function activityCard(activity, type) {
    const raid = type === "raid";
    const mechanic = raid ? C.raidMechanics[activity.id] : null;
    const facts = raid ? [
      `Team ${activity.hero_count}`,
      `15 + boss`,
      `Career ${activity.recommended_career_level}`,
      `Gear T${activity.recommended_gear_tier}`,
      mechanic?.label || humanKey(activity.mechanic_type)
    ] : [
      `Tier ${activity.tier}`,
      `Team ${activity.max_team_size}`,
      objectiveText(activity),
      activity.completion_boss ? `Boss: ${activity.completion_boss}` : "No story boss",
      Number(activity.base_mist_percentage || 0) > 0 ? `Mist ${activity.base_mist_percentage}%` : "Clear air"
    ];
    return `<article class="activity-card" tabindex="0" role="button" data-entity-type="${raid ? "raid" : "dungeon"}" data-entity-id="${esc(raid ? activity.id : activity.name)}" aria-label="Open ${esc(activity.name)} details">
      ${image(activity.combat_background, "", "activity-card__bg")}
      <div class="activity-card__top">${image(activity.icon, "", "activity-card__icon")}${badge(raid ? "Daily raid" : `Campaign ${activity.tier}`, "gold")}</div>
      <div class="activity-card__content"><span class="eyebrow">${raid ? esc(mechanic?.label || humanKey(activity.mechanic_type)) : esc(activity.material_family || "Campaign")}</span><h2>${esc(activity.name)}</h2><p>${esc(activity.description)}</p><div class="activity-card__facts">${facts.map(fact => `<span>${esc(fact)}</span>`).join("")}</div></div>
    </article>`;
  }

  function renderDungeons() {
    return `<div class="page">${pageHeader("dungeons", `${badge("12 campaign tiers", "gold")}${badge("Bosses are forced", "green")}`)}
      <div class="callout"><strong>How boss odds work:</strong><p>Rows marked <code>is_boss</code> are excluded from weighted random selection; current catalogs also give them weight 0. Once the story meter is met, runtime forces the required boss as the immediate next encounter. A boss win—or a full-party wipe during that attempt—resets the current meter.</p></div>
      <section class="section-block">
        <div class="dungeon-grid">${state.data.dungeons.map(dungeon => activityCard(dungeon, "dungeon")).join("")}</div>
      </section>
    </div>`;
  }

  function monsterCard(monster) {
    const stats = monster.stats || {};
    const derived = monsterDerived(monster);
    const locations = state.data.monsterLocations.get(monster.name) || [];
    const locationText = locations.map(location => location.name || location.id).join(", ") || "Unmapped";
    const boss = locations.some(location => location.boss);
    return `<article class="entity-card" data-openable="true" tabindex="0" role="button" data-entity-type="monster" data-entity-id="${esc(monster.name)}" aria-label="Open ${esc(monster.name)} details">
      <div class="entity-card__media">${image(monster.texture, `${monster.name} artwork`)}<div class="entity-card__badge-row">${badge(monster.source_type === "raid" ? "Raid" : "Campaign", monster.source_type === "raid" ? "gold" : "")}${boss ? badge("Boss", "red") : ""}${badge(stats.atk_type || "Unknown")}</div></div>
      <div class="entity-card__body"><div class="entity-card__kicker">${esc(locationText)}</div><h3>${esc(monster.name)}</h3><p class="entity-card__desc">${esc(monster.description)}</p>
        <div class="entity-card__facts"><div class="entity-card__fact"><span>Live base HP</span><strong>${formatNumber(derived.hp)}</strong></div><div class="entity-card__fact"><span>Basic range</span><strong>${formatNumber(derived.damageMin)}–${formatNumber(derived.damageMax)}</strong></div><div class="entity-card__fact"><span>XP</span><strong>${formatNumber(stats.exp || 0)}</strong></div></div>
        <div class="entity-card__footer">Full bestiary entry</div>
      </div>
    </article>`;
  }

  function renderMonsters() {
    const locationOptions = [
      ...state.data.dungeons.map(dungeon => `<option value="dungeon:${esc(dungeon.name)}">T${dungeon.tier} · ${esc(dungeon.name)}</option>`),
      ...state.data.raids.map(raid => `<option value="raid:${esc(raid.id)}">Raid · ${esc(raid.name)}</option>`)
    ].join("");
    return `<div class="page">${pageHeader("monsters", `${badge("51 campaign", "green")}${badge("25 raid", "gold")}`)}
      <div class="callout"><strong>Live-stat convention:</strong><p>This bestiary derives HP, Attack, and the ±30% basic range the runtime actually uses. Raid monster HP includes 5 × Strength before the raid HP multiplier. Catalog passive descriptions are treated as lore unless runtime dispatches a mechanic.</p></div>
      <section class="section-block">
        <div class="filter-bar">
          <div class="filter-bar__search"><input id="monster-filter-search" type="search" placeholder="Filter monsters, skills, or loot…" aria-label="Filter monsters"></div>
          <select id="monster-filter-source" aria-label="Filter monster source"><option value="">Campaign + raid</option><option value="dungeon">Campaign only</option><option value="raid">Raid only</option></select>
          <select id="monster-filter-attack" aria-label="Filter attack type"><option value="">All attack types</option><option>Melee</option><option>Ranged</option><option>Magic</option></select>
          <select id="monster-filter-location" aria-label="Filter monster location"><option value="">All locations</option>${locationOptions}</select>
          <span class="filter-bar__count" id="monster-filter-count"></span>
        </div>
        <div class="catalog-grid" id="monster-grid">${state.data.monsters.map(monsterCard).join("")}</div>
      </section>
    </div>`;
  }

  function bindMonsterFilters() {
    const inputs = ["monster-filter-search", "monster-filter-source", "monster-filter-attack", "monster-filter-location"].map(id => document.getElementById(id));
    if (inputs.some(input => !input)) return;
    const [query, source, attack, location] = inputs;
    const apply = () => {
      const q = norm(query.value);
      const values = state.data.monsters.filter(monster => {
        const locations = state.data.monsterLocations.get(monster.name) || [];
        const [locationType, locationId] = location.value.split(":");
        const matchLocation = !location.value || locations.some(entry => entry.type === locationType && entry.id === locationId);
        const text = norm(`${monster.name} ${monster.description} ${monster.stats?.skill_act_name || ""} ${monster.stats?.skill_act_desc || ""} ${Object.keys(monster.drops || {}).join(" ")}`);
        return (!q || text.includes(q)) && (!source.value || monster.source_type === source.value) && (!attack.value || monster.stats?.atk_type === attack.value) && matchLocation;
      });
      document.getElementById("monster-grid").innerHTML = values.length ? values.map(monsterCard).join("") : emptyState("No monsters match those filters.");
      document.getElementById("monster-filter-count").textContent = `${values.length} of ${state.data.monsters.length}`;
    };
    inputs.forEach(input => input.addEventListener("input", apply));
    apply();
  }

  function renderRaids() {
    return `<div class="page">${pageHeader("raids", `${badge("4 daily entries", "gold")}${badge("15 + boss each", "green")}`)}
      <div class="callout callout--red"><strong>Entry rule:</strong><p>Each permanent raid has its own daily entry at 00:00 UTC. Starting consumes it; failure and abandonment do not refund it. A replacement entry costs 50 Gems while that raid is idle.</p></div>
      <section class="section-block"><div class="raid-grid">${state.data.raids.map(raid => activityCard(raid, "raid")).join("")}</div></section>
      <section class="section-block">
        ${sectionHeading("Runtime rules", "The mechanics, corrected for 1.05", "These summaries count hero actions and use the current thresholds—not the older Discord panel timings.")}
        <div class="mechanic-list">${state.data.raids.map(raid => {
          const mechanic = C.raidMechanics[raid.id];
          return `<article class="mechanic-panel"><div class="mechanic-panel__title" style="background:linear-gradient(145deg,${esc(mechanic.color)}22,transparent)"><span class="eyebrow">${esc(raid.name)}</span><h2>${esc(mechanic.label)}</h2><p>${esc(mechanic.summary || raid.mechanic_summary)}</p></div><div class="mechanic-panel__content"><ul>${mechanic.rules.map(rule => `<li>${esc(rule)}</li>`).join("")}</ul></div></article>`;
        }).join("")}</div>
      </section>
      <section class="section-block">
        ${sectionHeading("Reward model", "Independent raid reward rolls", "Premium's +10% standard drop multiplier does not change bespoke Rune, material, accessory, or pet-egg rolls.")}
        <div class="probability-grid">${C.probabilityFacts.filter(x => ["runeEarly","runeLate","runeBoss","bossMat","accessory","egg"].includes(x.id)).map(probabilityCard).join("")}</div>
      </section>
    </div>`;
  }

  function itemCard(item) {
    const category = itemCategory(item);
    const tier = getItemTier(item);
    const bonuses = Object.entries(item.bonuses || {}).slice(0, 3).map(([name, value]) => `${name} +${value}`).join(" · ");
    return `<article class="entity-card item-card" data-openable="true" tabindex="0" role="button" data-entity-type="item" data-entity-id="${esc(item.name)}" aria-label="Open ${esc(item.name)} details">
      <div class="entity-card__media">${image(item.icon, `${item.name} icon`)}</div>
      <div class="entity-card__body"><div class="entity-card__kicker">${esc(category)}${tier ? ` · Tier ${tier}` : ""}</div><h3>${esc(item.name)}</h3><p class="entity-card__desc">${esc(bonuses || item.description)}</p></div>
    </article>`;
  }

  function recipeCard(recipe) {
    const item = state.data.itemMap.get(recipe.result) || { name: recipe.result };
    const ingredients = Object.entries(recipe.ingredients || {}).map(([name, quantity]) => `${name} ×${quantity}`).join(" · ");
    return `<article class="entity-card item-card" data-openable="true" tabindex="0" role="button" data-entity-type="item" data-entity-id="${esc(recipe.result)}">
      <div class="entity-card__media">${image(item.icon, "")}</div><div class="entity-card__body"><div class="entity-card__kicker">Recipe · T${esc(recipe.required_tier || 1)} · ${esc(formatDuration(recipe.craft_time_seconds || 0))}</div><h3>${esc(recipe.result)}${Number(recipe.quantity || 1) > 1 ? ` ×${recipe.quantity}` : ""}</h3><p class="entity-card__desc">${esc(ingredients)}</p></div>
    </article>`;
  }

  function renderItems() {
    const categories = [...new Set(state.data.items.map(itemCategory))].sort();
    return `<div class="page">${pageHeader("items", `${badge(`${state.data.items.length} items`, "gold")}${badge(`${state.data.recipes.length} recipes`, "green")}`)}
      <div class="callout"><strong>Equipment rules:</strong><p>Weapons must match Melee, Ranged, or Magic proficiency; armor must match Light, Medium, or Heavy. Every hero has one Weapon, one Armor, and two Accessory slots. Unique-equipped blocks duplicate copies on the same hero only.</p></div>
      <section class="section-block">
        <div class="filter-bar">
          <div class="filter-bar__search"><input id="item-filter-search" type="search" placeholder="Filter items, bonuses, effects, ingredients…" aria-label="Filter items and recipes"></div>
          <select id="item-view" aria-label="Choose item or recipe view"><option value="items">Item catalog</option><option value="recipes">Recipe catalog</option></select>
          <select id="item-filter-category" aria-label="Filter item category"><option value="">All categories</option>${categories.map(x => `<option>${esc(x)}</option>`).join("")}</select>
          <select id="item-filter-tier" aria-label="Filter item tier"><option value="">All tiers</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">Tier ${i+1}</option>`).join("")}</select>
          <span class="filter-bar__count" id="item-filter-count"></span>
        </div>
        <div class="catalog-grid catalog-grid--wide" id="item-grid">${state.data.items.map(itemCard).join("")}</div>
      </section>
    </div>`;
  }

  function bindItemFilters() {
    const inputs = ["item-filter-search", "item-view", "item-filter-category", "item-filter-tier"].map(id => document.getElementById(id));
    if (inputs.some(input => !input)) return;
    const [query, view, category, tier] = inputs;
    const apply = () => {
      const q = norm(query.value);
      let html = "";
      let count = 0;
      let total = 0;
      if (view.value === "items") {
        const values = state.data.items.filter(item => {
          const itemTier = getItemTier(item);
          const text = norm(`${item.name} ${item.description} ${Object.keys(item.bonuses || {}).join(" ")} ${JSON.stringify(item.advanced_effect || {})} ${JSON.stringify(item.raid_set_bonus || {})}`);
          return (!q || text.includes(q)) && (!category.value || itemCategory(item) === category.value) && (!tier.value || itemTier === Number(tier.value));
        });
        html = values.map(itemCard).join(""); count = values.length; total = state.data.items.length;
        category.disabled = false;
      } else {
        const values = state.data.recipes.filter(recipe => {
          const text = norm(`${recipe.result} ${Object.keys(recipe.ingredients || {}).join(" ")} ${recipe.required_raid || ""}`);
          return (!q || text.includes(q)) && (!tier.value || Number(recipe.required_tier || 1) === Number(tier.value));
        });
        html = values.map(recipeCard).join(""); count = values.length; total = state.data.recipes.length;
        category.disabled = true;
      }
      document.getElementById("item-grid").innerHTML = html || emptyState(`No ${view.value} match those filters.`);
      document.getElementById("item-filter-count").textContent = `${count} of ${total}`;
    };
    inputs.forEach(input => input.addEventListener("input", apply));
    apply();
  }

  function petFamilyCard(family) {
    const epic = family.sprites?.epic || {};
    return `<article class="entity-card portrait-card" data-openable="true" tabindex="0" role="button" data-entity-type="pet" data-entity-id="${esc(family.id)}">
      <div class="entity-card__media entity-card__media--portrait">${image(epic.texture || family.egg_icon, `${family.name} pet`)}<div class="entity-card__badge-row">${badge(`Tier ${family.tier}`)}${badge("15% egg", "gold")}</div></div>
      <div class="entity-card__body"><div class="entity-card__kicker">${esc(family.source_boss)}</div><h3>${esc(family.name)}</h3><p class="entity-card__desc">Common: ${esc(family.sprites?.common?.name)} · Rare: ${esc(family.sprites?.rare?.name)} · Epic: ${esc(family.sprites?.epic?.name)}</p><div class="entity-card__footer">Family & hatch detail</div></div>
    </article>`;
  }

  function renderPets() {
    return `<div class="page">${pageHeader("pets", `${badge("6 families", "gold")}${badge("75 / 20 / 5 rarity", "green")}`)}
      <div class="callout"><strong>Hatch sequence:</strong><p>An eligible boss independently rolls 15% for its family egg. Hatching then rolls Common 75%, Rare 20%, or Epic 5%, shuffles that family's six-effect pool, and takes 2, 3, or 4 distinct effects.</p></div>
      <section class="section-block"><div class="catalog-grid">${state.data.petFamilies.map(petFamilyCard).join("")}</div></section>
      <section class="section-block">
        ${sectionHeading("Bond scaling", "Every possible pet effect", "At level 20 each rolled effect is exactly three times its level-1 value. XP to the next level is 12 + 3 × level².")}
        <div class="stat-grid">${C.petEffects.map(effect => `<article class="status-card"><span class="eyebrow">Level 1 base</span><h3>${esc(effect.name)}</h3><p><strong>+${effect.base}${esc(effect.unit)}</strong> · Level 20: +${formatNumber(effect.base * 3, 1)}${esc(effect.unit)}</p></article>`).join("")}</div>
      </section>
    </div>`;
  }

  function renderRunes() {
    return `<div class="catalog-grid">${C.runes.map(rune => `<article class="entity-card" id="rune-${esc(slug(rune.id))}"><div class="entity-card__media">${image(rune.icon, "")}</div><div class="entity-card__body"><div class="entity-card__kicker">4 guaranteed ranks · ${esc(rune.stat)}</div><h3>${esc(rune.name)}</h3><p class="entity-card__desc">${esc(rune.text)}</p><div class="entity-card__facts"><div class="entity-card__fact"><span>At rank IV</span><strong>+${formatNumber(rune.perRank*4,1)}${esc(rune.unit)}</strong></div></div></div></article>`).join("")}</div>`;
  }

  function renderAscension() {
    return `<div class="path-grid">${C.ascension.map(path => `<article class="path-card" id="path-${esc(slug(path.id))}" style="--path-color:${esc(path.color)}"><div class="path-card__header">${image(path.icon, "", "path-card__icon")}<div><span class="eyebrow">${esc(path.role)}</span><h3>${esc(path.name)}</h3><p>${esc(path.text)}</p></div></div><div class="path-card__skills">${path.skills.map(skill => `<div class="path-skill"><div><strong>${esc(skill.name)}</strong><p>${esc(skill.text)}</p></div><div class="path-skill__meta">T${skill.tier+1}<br>${skill.ranks} rank${skill.ranks===1?"":"s"} · ${skill.cost} pt</div></div>`).join("")}</div></article>`).join("")}</div>`;
  }

  function renderProgression() {
    return `<div class="page">${pageHeader("progression", `${badge("15 Ascension points", "gold")}${badge("24 Rune ranks / hero", "green")}`)}
      <section class="section-block" style="margin-top:0">
        ${sectionHeading("Career", "Promotion and XP thresholds", "A hero's career preserves earlier growth even when promotion resets the displayed class level.")}
        <div class="info-grid">
          <article class="info-card"><span class="info-card__eyebrow">Level 25</span><h3>Base → specialization</h3><p>Choose one of two branches. Current nonzero HP, attributes, defenses, and Threat are multiplied by 1.2, rounded, then the destination's favored stat gains a random +1 to +3.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">Level 50</span><h3>Specialization → elite</h3><p>Promote into the class tied to that path. Elite level growth adds linearly up to +10% HP and Attack at elite level 50.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">XP formula</span><h3>floor(100 × 1.2^(level−1))</h3><p>Cumulative recruit to elite level 50 is 7,621,966 XP under the current thresholds. XP pauses whenever a promotion choice is due.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">Elite level 50</span><h3>Ascension unlock</h3><p>Choose one of four paths. Spend up to 15 points; middle skills require 5 already spent and capstones require 10. Reset and path changes refund every point.</p></article>
        </div>
      </section>
      <section class="section-block">${sectionHeading("Permanent engraving", "Six Runes", "Every upgrade succeeds when one matching piece is available: Verdant I, Tidal II, Astral III, Eclipse IV.")}${renderRunes()}</section>
      <section class="section-block">${sectionHeading("Elite mastery", "Four Ascendant Paths", "Paths are available to every elite-level-50 hero; class role and build goals determine the strongest fit.")}${renderAscension()}</section>
      <section class="section-block">${sectionHeading("Tavern rarity", "Six titles", "A 25% title roll followed by uniform selection makes each named title 4.1667% per generated offer.")}<div class="stat-grid">${C.titles.map(title => `<article class="status-card"><span class="eyebrow">${esc(title.stat)}</span><h3>${esc(title.name)}</h3><p>${esc(titleBonusText(title))}</p></article>`).join("")}</div></section>
    </div>`;
  }

  function economyTable(title, rows, note) {
    return `<article class="table-panel"><div class="table-panel__header"><h3>${esc(title)}</h3><p>${esc(note)}</p></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Upgrade</th><th>Dungeon gate</th><th class="numeric">Coins</th><th>Material</th></tr></thead><tbody>${rows.map((row,index)=>`<tr><td><strong>Level ${index+1}</strong></td><td>Tier ${row.gate}</td><td class="numeric">${formatNumber(row.coin)}</td><td>${esc(row.items || "—")}</td></tr>`).join("")}</tbody></table></div></article>`;
  }

  function renderTown() {
    return `<div class="page">${pageHeader("town", `${badge("500 starting Coins", "gold")}${badge("3h shop cycle", "green")}`)}
      <section class="section-block" style="margin-top:0"><div class="system-grid">${C.townSystems.map(system => `<article class="system-card"><div class="system-card__top">${image(system.icon, "", "system-card__icon")}<div><span class="eyebrow">City system</span><h3>${esc(system.name)}</h3></div></div><p>${esc(system.lead)}</p><ul>${system.facts.map(fact => `<li>${esc(fact)}</li>`).join("")}</ul></article>`).join("")}</div></section>
      <section class="section-block">
        ${sectionHeading("Progression economy", "Every permanent town-upgrade price", "Gate is the highest unlocked campaign tier. Construction Bundles are consumed with the listed Coins.")}
        <div class="mechanic-list">
          ${economyTable("Tavern capacity", C.economyTables.tavern_capacity, "+1 hero slot per level; 14 campaign upgrades.")}
          ${economyTable("Tavern refresh speed", C.economyTables.tavern_refresh, "Interval = 3 hours ÷ (1 + 0.10 × purchased levels).")}
          ${economyTable("Tavern offer count", C.economyTables.tavern_offers, "+1 generated offer per level.")}
          ${economyTable("Workshop capacity", C.economyTables.craft_capacity, "+1 crafting queue slot per level.")}
          ${economyTable("Workshop speed", C.economyTables.craft_speed, "Duration = base duration ÷ (1 + 0.10 × purchased levels).")}
        </div>
      </section>
      <section class="section-block"><div class="callout"><strong>Coin source correction:</strong><p>Current combat does not directly add Coins. Dungeon and raid loot becomes Coins chiefly when you sell ordinary inventory items; crafting and upgrades spend that wallet.</p></div></section>
    </div>`;
  }

  function renderInteractions() {
    return `<div class="page">${pageHeader("interactions", badge(`${C.interactions.length} screen groups`, "gold"))}
      <div class="info-grid">${C.interactions.map(group => `<article class="info-card"><span class="info-card__eyebrow">Interface guide</span><h3>${esc(group.area)}</h3><ul>${group.actions.map(action => `<li>${esc(action)}</li>`).join("")}</ul></article>`).join("")}</div>
      <section class="section-block"><div class="callout callout--red"><strong>Permanent action:</strong><p>Settings → Play Games → Delete Data removes local progress, preferences, encrypted recovery copies, and the private gameplay cloud snapshot after confirmation. It cannot be undone.</p></div></section>
    </div>`;
  }

  function probabilityCard(entry) {
    return `<article class="probability-card"><div class="probability-card__value">${esc(entry.value)}</div><h3>${esc(entry.name)}</h3><p>${esc(entry.detail)}</p></article>`;
  }

  function renderProbability() {
    const activities = [
      ...state.data.dungeons.map(dungeon => `<option value="dungeon:${esc(dungeon.name)}">T${dungeon.tier} · ${esc(dungeon.name)}</option>`),
      ...state.data.raids.map(raid => `<option value="raid:${esc(raid.id)}">Raid · ${esc(raid.name)}</option>`)
    ].join("");
    return `<div class="page">${pageHeader("probability", `${badge("Independent-roll model", "gold")}${badge("Base + adjusted odds")}`)}
      <section class="section-block" style="margin-top:0"><div class="probability-grid">${C.probabilityFacts.map(probabilityCard).join("")}</div></section>
      <section class="section-block">
        ${sectionHeading("Interactive", "At least one drop", "Model repeated independent kills with the dungeon and optional Welcome multipliers.")}
        <div class="calculator" id="drop-calculator"><div class="calculator__controls">
          <div class="field"><label for="calc-base">Authored base chance %</label><input id="calc-base" type="number" min="0" max="100" step="0.1" value="40"></div>
          <div class="field"><label for="calc-multiplier">Dungeon multiplier</label><input id="calc-multiplier" type="number" min="0" max="5" step="0.01" value="0.88"></div>
          <div class="field"><label for="calc-kills">Eligible kills</label><input id="calc-kills" type="number" min="1" max="100000" step="1" value="10"></div>
          <div class="field"><label for="calc-premium">Welcome multiplier</label><select id="calc-premium"><option value="1">Standard ×1.00</option><option value="1.1">Welcome ×1.10</option></select></div>
        </div><div class="calculator__result" id="drop-calculator-result"></div></div>
      </section>
      <section class="section-block">
        ${sectionHeading("Interactive", "First raid-accessory pity", "See the chance of having found the first copy by a chosen successful clear.")}
        <div class="calculator"><div class="calculator__controls"><div class="field"><label for="calc-clears">Successful clears</label><input id="calc-clears" type="number" min="1" max="10" step="1" value="5"></div></div><div class="calculator__result" id="pity-calculator-result"></div></div>
      </section>
      <section class="section-block">
        ${sectionHeading("Interactive", "Encounter composition", "Weight is normalized only across ordinary teams. A boss row is forced separately and never belongs in this denominator.")}
        <div class="calculator"><div class="calculator__controls"><div class="field"><label for="calc-activity">Activity</label><select id="calc-activity">${activities}</select></div></div><div class="calculator__result"><div class="odds-list" id="encounter-calculator-result"></div></div></div>
      </section>
      <section class="section-block">
        ${sectionHeading("Pet combinatorics", "How rare is a specific companion roll?", "Every family has six distinct eligible effects, sampled without replacement after rarity.")}
        <div class="probability-grid">
          ${[
            {value:"38.333%",name:"A particular effect appears",detail:"Unconditional across 75% Common ×2/6, 20% Rare ×3/6, and 5% Epic ×4/6."},
            {value:"5%",name:"A specific Common pair",detail:"75% rarity × 1/15 unordered effect pairs."},
            {value:"1%",name:"A specific Rare trio",detail:"20% rarity × 1/20 unordered effect trios."},
            {value:"0.333%",name:"A specific Epic quartet",detail:"5% rarity × 1/15 unordered effect quartets."}
          ].map(x=>probabilityCard(x)).join("")}
        </div>
      </section>
    </div>`;
  }

  function bindProbabilityCalculators() {
    const base = document.getElementById("calc-base");
    if (!base) return;
    const multiplier = document.getElementById("calc-multiplier");
    const kills = document.getElementById("calc-kills");
    const premium = document.getElementById("calc-premium");
    const renderDrop = () => {
      const perKill = Math.min(100, Math.max(0, Number(base.value) * Number(multiplier.value) * Number(premium.value)));
      const n = Math.max(1, Math.floor(Number(kills.value) || 1));
      const atLeast = (1 - Math.pow(1 - perKill / 100, n)) * 100;
      const expected = n * perKill / 100;
      document.getElementById("drop-calculator-result").innerHTML = `<strong>${formatPercent(atLeast, 4)}</strong><p>Chance of at least one drop. Effective per-kill chance: ${formatPercent(perKill,4)} · Expected copies: ${formatNumber(expected,3)}.</p>`;
    };
    [base,multiplier,kills,premium].forEach(input => input.addEventListener("input", renderDrop));
    renderDrop();

    const clears = document.getElementById("calc-clears");
    const renderPity = () => {
      const n = Math.min(10, Math.max(1, Math.floor(Number(clears.value) || 1)));
      let miss = 1;
      const rows = [];
      for (let clear=1; clear<=n; clear++) {
        const chance = clear >= 10 ? 1 : clear * .05;
        miss *= (1 - chance);
        rows.push(`${clear}: ${formatPercent(chance*100,0)}`);
      }
      const found = 1 - miss;
      document.getElementById("pity-calculator-result").innerHTML = `<strong>${formatPercent(found*100,4)}</strong><p>Cumulative chance by clear ${n}. Per-clear path: ${rows.join(" · ")}${n===10 ? " · guaranteed" : ""}.</p>`;
    };
    clears.addEventListener("input", renderPity); renderPity();

    const activity = document.getElementById("calc-activity");
    const renderEncounter = () => {
      const [type,id] = activity.value.split(":");
      const entry = type === "raid" ? state.data.raids.find(raid => raid.id === id) : state.data.dungeons.find(dungeon => dungeon.name === id);
      document.getElementById("encounter-calculator-result").innerHTML = teamOdds(entry).map(team => `<div class="odds-row"><span class="odds-row__label" title="${esc(teamNames(team))}">${esc(teamNames(team))}</span><span class="odds-row__track"><span class="odds-row__bar" style="width:${team.probability}%"></span></span><span class="odds-row__value">${formatPercent(team.probability,4)}</span></div>`).join("");
    };
    activity.addEventListener("input", renderEncounter); renderEncounter();
  }

  function renderReference() {
    const counts = [
      ["Hero classes",state.data.heroes.length,"hero-catalog.json + HeroSkillEffects.gd"],
      ["Campaign monsters",state.data.campaignMonsters.length,"monster-catalog.json + MonsterData.gd"],
      ["Raid monsters",state.data.raidMonsters.length,"raid-monster-catalog.json + RaidData.gd"],
      ["Dungeons",state.data.dungeons.length,"dungeon-catalog.json + DungeonData.gd"],
      ["Raids",state.data.raids.length,"raid-catalog.json + RaidData.gd"],
      ["Unique item names",state.data.items.length,"235 definitions normalize to 232 names; three progression definitions override starter duplicates"],
      ["Recipes",state.data.recipes.length,"three recipe arrays + GameManager.gd"],
      ["Pet families",state.data.petFamilies.length,"pet-family-catalog.json + PetData.gd"],
      ["Statuses",C.statuses.length,"StatusCatalog.gd"],
      ["Runes",C.runes.length,"RuneData.gd"],
      ["Ascendant Paths",C.ascension.length,"DivinityData.gd"]
    ];
    return `<div class="page">${pageHeader("reference", `${badge(`Verified ${C.version.verified}`, "green")}${badge(`Save ${C.version.saveSchema}`, "gold")}`)}
      <section class="section-block" style="margin-top:0">
        ${sectionHeading("Coverage", "What this Codex indexes", "Structured catalogs are loaded at page start; GDScript-only systems are normalized into the versioned guide layer.")}
        <article class="table-panel"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Domain</th><th class="numeric">Entries</th><th>Authoritative source</th></tr></thead><tbody>${counts.map(([domain,count,source])=>`<tr><td><strong>${esc(domain)}</strong></td><td class="numeric">${formatNumber(count)}</td><td>${esc(source)}</td></tr>`).join("")}</tbody></table></div></article>
      </section>
      <section class="section-block">
        ${sectionHeading("Method", "Source hierarchy", "When presentation copy and executable behavior differ, this guide follows the behavior a player encounters.")}
        <div class="info-grid">
          <article class="info-card"><span class="info-card__eyebrow">Priority 1</span><h3>Runtime implementation</h3><p>GameManager, DungeonData, RaidData, HeroData, CombatEntity, skill effects, and their tests decide the actual calculation and trigger.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">Priority 2</span><h3>Current 1.05 catalogs</h3><p>JSON supplies names, descriptions, authored stats, formations, weights, drops, recipes, icons, unlock requirements, and tuning multipliers.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">Priority 3</span><h3>Current UI help</h3><p>Screen-specific behavior and interaction labels are checked against the UI handlers, especially when an API exists but the interface gates it.</p></article>
          <article class="info-card"><span class="info-card__eyebrow">Context only</span><h3>Legacy community panels</h3><p>The 1.02 Discord panels inform visual tone and narrative framing, but never override the 1.05 runtime.</p></article>
        </div>
      </section>
      <section class="section-block">
        ${sectionHeading("Known differences", "Catalog, description, and runtime", "These notes prevent flavorful text or retired tuning fields from becoming false strategy advice.")}
        <div class="info-grid">${C.accuracyNotes.map(note=>`<article class="info-card"><span class="info-card__eyebrow">Implementation note</span><h3>${esc(note.title)}</h3><p>${esc(note.text)}</p></article>`).join("")}</div>
      </section>
      <section class="section-block"><div class="callout callout--green"><strong>Version stamp:</strong><p>Game ${esc(C.version.game)} · Windows ${esc(C.version.windows)} · save schema ${C.version.saveSchema} · source ${esc(C.version.commit)} · audited ${esc(C.version.verified)}. Content and artwork © 2026 BroglioGames. All rights reserved.</p></div></section>
    </div>`;
  }

  function emptyState(message) {
    return `<div class="empty-state"><div><strong>Nothing found</strong><p>${esc(message)}</p></div></div>`;
  }

  function renderCurrentRoute() {
    if (!state.data) return;
    const renderId = ++state.routeRenderId;
    const [rawRoute, rawId = ""] = location.hash.replace(/^#/, "").split("/");
    const route = Object.hasOwn(routeMeta, rawRoute) ? rawRoute : "home";
    const entityId = decodeURIComponent(rawId || "");
    if (entityDialog.open) entityDialog.close();
    if (searchDialog.open) searchDialog.close();
    const renderers = {
      home: renderHome, quickstart: renderQuickstart, mechanics: renderMechanics, combat: renderCombat,
      heroes: renderHeroes, effects: renderEffects, dungeons: renderDungeons, monsters: renderMonsters,
      raids: renderRaids, items: renderItems, pets: renderPets, progression: renderProgression,
      town: renderTown, interactions: renderInteractions, probability: renderProbability, reference: renderReference
    };
    document.title = route === "home" ? "Idle Party Dungeon — The Adventurer's Codex" : `${routeMeta[route][0]} — Idle Party Dungeon Codex`;
    outlet.innerHTML = renderers[route]();
    document.querySelectorAll("[data-route]").forEach(link => {
      if (link.dataset.route === route) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
    });
    document.body.classList.remove("sidebar-open");
    document.getElementById("menu-button").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "auto" });
    bindRoute(route);
    if (renderId === state.routeRenderId && entityId) requestAnimationFrame(() => openEntityFromRoute(route, entityId));
  }

  function bindRoute(route) {
    if (route === "heroes") bindHeroFilters();
    if (route === "effects") bindStatusFilter();
    if (route === "monsters") bindMonsterFilters();
    if (route === "items") bindItemFilters();
    if (route === "probability") bindProbabilityCalculators();
  }

  function findBySlug(collection, value, idKey = "name") {
    return collection.find(entry => slug(entry[idKey]) === value || String(entry[idKey]) === value);
  }

  function openEntityFromRoute(route, entitySlug) {
    const mapping = { heroes: "hero", dungeons: "dungeon", monsters: "monster", raids: "raid", items: "item", pets: "pet" };
    if (mapping[route]) openEntity(mapping[route], entitySlug, true);
    if (route === "progression") {
      const normalized = slug(entitySlug);
      const target = document.getElementById(`path-${normalized}`) || document.getElementById(`rune-${normalized}`);
      if (target) target.scrollIntoView({ block: "center" });
    }
    if (route === "effects") {
      const target = document.querySelector(`[data-status-kind] code`);
      const all = [...document.querySelectorAll(".status-card code")];
      const match = all.find(code => slug(code.textContent) === slug(entitySlug));
      (match?.closest(".status-card") || target?.closest(".status-card"))?.scrollIntoView({ block: "center" });
    }
  }

  function openEntity(type, rawId, fromRoute = false) {
    const d = state.data;
    const id = slug(rawId);
    let definition = null;
    if (type === "hero") definition = findBySlug(d.heroes, id);
    if (type === "monster") definition = findBySlug(d.monsters, id);
    if (type === "dungeon") definition = findBySlug(d.dungeons, id);
    if (type === "raid") definition = findBySlug(d.raids, id, "id");
    if (type === "item") definition = findBySlug(d.items, id);
    if (type === "pet") definition = findBySlug(d.petFamilies, id, "id");
    if (!definition) return;
    const renderers = { hero: heroDetail, monster: monsterDetail, dungeon: dungeonDetail, raid: raidDetail, item: itemDetail, pet: petDetail };
    dialogContent.innerHTML = renderers[type](definition);
    if (!entityDialog.open) entityDialog.showModal();
    entityDialog.querySelector(".entity-dialog__chrome").scrollTop = 0;
    if (!fromRoute) {
      const route = ({hero:"heroes",monster:"monsters",dungeon:"dungeons",raid:"raids",item:"items",pet:"pets"})[type];
      history.replaceState(null, "", `#${route}/${encodeURIComponent(slug(type === "raid" || type === "pet" ? definition.id : definition.name))}`);
    }
  }

  function statTiles(pairs) {
    return `<div class="stat-sheet">${pairs.filter(([,value]) => value !== undefined && value !== null && value !== "").map(([name,value]) => `<div class="stat-tile"><span>${esc(name)}</span><strong>${esc(value)}</strong></div>`).join("")}</div>`;
  }

  function heroDetail(hero) {
    const s = hero.stats || {};
    const pairs = [
      ["Base HP",formatNumber(s.hp)],["Strength",s.str],["Dexterity",s.dex],["Intelligence",s.intelligence],["Defense",s.df],["Magic Defense",s.dfM],
      ["Threat",s.threat],["Evade",`${s.evade || 0}%`],["Critical",`${s.crt_chance || 0}%`],["Critical Damage",`${s.crt_rate || 150}%`],["Immunity",`${s.immune_chance || 0}%`],
      ["Counter",`${s.counter_chance || 0}%`],["Lifesteal",`${s.lifesteal_rate || 0}%`],["Regeneration",s.regen || 0],["Mist Damage",`${s.mist_dmg_rate || 0}%`],["Mist Reduction",`${s.mist_reduction || 0}%`]
    ];
    const path = hero.parent ? `<button class="button button--small" data-entity-type="hero" data-entity-id="${esc(hero.parent)}" type="button">← ${esc(hero.parent)}</button>` : "";
    const promotions = (hero.promotion_options || []).map(name => `<button class="button button--small" data-entity-type="hero" data-entity-id="${esc(name)}" type="button">${esc(name)} →</button>`).join("");
    return `<header class="detail-hero">${image(hero.texture,"","detail-hero__art detail-hero__art--contain")}<div><div class="detail-hero__chips">${badge(tierLabel(hero.tier),"gold")}${badge(hero.base_class)}${badge(hero.weapon_type)}${badge(hero.armor_type)}</div><h1 id="dialog-title">${esc(hero.name)}</h1><p>${esc(hero.description)}</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Class preview</h2>${statTiles(pairs)}</section>
        <section class="detail-section"><h2>Skill kit</h2><div class="detail-grid"><article class="detail-box"><div class="detail-box__label">Active skill</div><h3>${esc(s.skill_act_name || "None")}</h3><p>${esc(s.skill_act_desc || "No active skill.")}</p></article><article class="detail-box"><div class="detail-box__label">Passive skill</div><h3>${esc(s.skill_psv_name || "None")}</h3><p>${esc(s.skill_psv_desc || "No passive skill.")}</p></article></div></section>
        <section class="detail-section"><h2>Progression path</h2><div class="hero-banner__actions">${path}${promotions || `<span class="chip chip--gold">Elite endpoint</span>`}</div><div class="callout" style="margin-top:14px"><strong>Owned-hero note:</strong><p>These stats are catalog previews. Promotion scales the hero's current nonzero base stats by 1.2 and adds a random +1 to +3 to this class's favored stat (${esc(humanKey(hero.favored_stat || "none"))}).</p></div></section>
      </div>`;
  }

  function monsterDetail(monster) {
    const s = monster.stats || {};
    const derived = monsterDerived(monster);
    const locations = state.data.monsterLocations.get(monster.name) || [];
    const raidLocation = locations.find(location => location.type === "raid");
    const raid = raidLocation ? state.data.raids.find(entry => entry.id === raidLocation.id) : null;
    const effective = raid ? {
      hp: Math.round(derived.hp * Number(raid.enemy_hp_multiplier || 1)),
      min: Math.round(derived.damageMin * Number(raid.enemy_damage_multiplier || 1)),
      max: Math.round(derived.damageMax * Number(raid.enemy_damage_multiplier || 1)),
      df: Number(s.df || 0) + Number(raid.enemy_defense_bonus || 0),
      mdef: Number(s.dfM || 0) + Number(raid.enemy_magic_defense_bonus || 0)
    } : null;
    const pairs = [
      ["Live base HP",formatNumber(derived.hp)],["Primary Attack",formatNumber(derived.attack)],["Basic damage",`${formatNumber(derived.damageMin)}–${formatNumber(derived.damageMax)}`],["Attack type",s.atk_type],
      ["Strength",s.str || 0],["Dexterity",s.dex || 0],["Intelligence",s.intelligence || 0],["Defense",s.df || 0],["Magic Defense",s.dfM || 0],["Threat",s.threat || 1],
      ["Evade",`${s.evade || 0}%`],["Critical",`${s.crt_chance || 0}% @ ${s.crt_rate || 150}%`],["Immunity",`${s.immune_chance || 0}%`],["Counter",`${s.counter_chance || 0}%`],["Regeneration",s.regen || 0],["Decay",s.decay || 0],["XP",formatNumber(s.exp || 0)]
    ];
    const drops = Object.entries(monster.drops || {});
    return `<header class="detail-hero">${image(monster.texture,"","detail-hero__art detail-hero__art--contain")}<div><div class="detail-hero__chips">${badge(monster.source_type === "raid" ? "Raid monster" : "Campaign monster","gold")}${badge(s.atk_type || "Unknown")}${locations.some(x=>x.boss)?badge("Boss","red"):""}</div><h1 id="dialog-title">${esc(monster.name)}</h1><p>${esc(monster.description)}</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Live derived stats</h2>${statTiles(pairs)}</section>
        ${effective ? `<section class="detail-section"><h2>${esc(raid.name)} scaled entry</h2>${statTiles([["HP",formatNumber(effective.hp)],["Basic damage",`${formatNumber(effective.min)}–${formatNumber(effective.max)}`],["Defense",effective.df],["Magic Defense",effective.mdef],["Raid damage factor",`×${raid.enemy_damage_multiplier}`]])}</section>` : ""}
        <section class="detail-section"><h2>Skills & behavior</h2><div class="detail-grid"><article class="detail-box"><div class="detail-box__label">Active</div><h3>${esc(s.skill_act_name || "Basic attacks only")}</h3><p>${esc(s.skill_act_desc || "No authored active skill.")}</p></article><article class="detail-box"><div class="detail-box__label">Passive description</div><h3>${esc(s.skill_psv_name || "None")}</h3><p>${esc(s.skill_psv_desc || "No authored passive description.")}</p></article></div><div class="callout" style="margin-top:14px"><strong>Interpretation:</strong><p>Monster passive prose is descriptive; live behavior comes from stats and explicit active/mechanic dispatch. Some catalog-labeled actives—especially the four starter slimes—are not dispatched in 1.05.</p></div></section>
        <section class="detail-section"><h2>Locations</h2><div class="hero-banner__actions">${locations.map(location => `<button class="button button--small" type="button" data-entity-type="${location.type}" data-entity-id="${esc(location.id)}">${esc(location.name || location.id)}${location.boss?" · boss":""}</button>`).join("")}</div></section>
        <section class="detail-section"><h2>Authored drops</h2>${drops.length ? `<div class="detail-grid">${drops.map(([name,chance])=>`<article class="detail-box"><div class="detail-box__label">Independent per kill</div><h3>${esc(name)}</h3><p>${formatPercent(chance)} base chance.</p><button class="button button--small" type="button" data-entity-type="item" data-entity-id="${esc(name)}">Open item</button></article>`).join("")}</div>` : `<div class="callout"><p>No ordinary monster drop-table entries. Raid Runes, materials, accessories, eggs, and Gem Clusters are resolved by shared reward logic.</p></div>`}</section>
      </div>`;
  }

  function encounterOddsHtml(activity) {
    return `<div class="odds-list">${teamOdds(activity).map(team => `<div class="odds-row"><span class="odds-row__label" title="${esc(teamNames(team))}">${esc(teamNames(team))}</span><span class="odds-row__track"><span class="odds-row__bar" style="width:${team.probability}%"></span></span><span class="odds-row__value">${formatPercent(team.probability,4)}</span></div>`).join("")}</div>`;
  }

  function dungeonDetail(dungeon) {
    const monsterNames = [...new Set((dungeon.monster_teams || []).flatMap(team => team.monsters || []))];
    const monsters = monsterNames.map(name => state.data.monsters.find(monster => monster.name === name)).filter(Boolean);
    const mist = Number(dungeon.base_mist_percentage || 0) > 0 || Number(dungeon.mist_change_interval || 0) > 0;
    const bossTeam = (dungeon.monster_teams || []).find(team => team.is_boss);
    const pairs = [["Campaign tier",dungeon.tier],["Party limit",dungeon.max_team_size],["Turn interval",`${dungeon.turn_interval}s`],["Objective",objectiveText(dungeon)],["XP multiplier",`×${dungeon.progression_xp_multiplier}`],["Drop multiplier",`×${dungeon.progression_drop_chance_multiplier}`],["Enemy HP",`×${dungeon.enemy_hp_multiplier}`],["Enemy damage",`×${dungeon.enemy_damage_multiplier}`]];
    const lootRows = monsters.flatMap(monster => Object.entries(monster.drops || {}).map(([name,chance]) => ({ monster:monster.name,name,chance,effective:effectiveDropChance(chance,dungeon,name,false),premium:effectiveDropChance(chance,dungeon,name,true) })));
    return `<header class="detail-hero">${image(dungeon.combat_background,"","detail-hero__art")}<div><div class="detail-hero__chips">${badge(`Campaign tier ${dungeon.tier}`,"gold")}${badge(`Team ${dungeon.max_team_size}`)}${mist?badge("Mist","special"):badge("Clear air","green")}</div><h1 id="dialog-title">${esc(dungeon.name)}</h1><p>${esc(dungeon.description)}</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Expedition sheet</h2>${statTiles(pairs)}<div class="callout" style="margin-top:14px"><strong>Story route:</strong><p>Complete ${esc(objectiveText(dungeon))}${dungeon.completion_boss?`, then the next encounter is forced to ${esc(dungeon.completion_boss)}`:""}. ${dungeon.next_dungeon?`Success unlocks ${esc(dungeon.next_dungeon)}.`:"This is the final campaign tier."}</p></div></section>
        ${mist?`<section class="detail-section"><h2>Mist behavior</h2><div class="detail-grid"><article class="detail-box"><div class="detail-box__label">Starting Mist</div><h3>${formatPercent(dungeon.base_mist_percentage || 0)}</h3><p>Current environmental value when a run starts or restores without a saved value.</p></article><article class="detail-box"><div class="detail-box__label">Change cadence</div><h3>Every ${dungeon.mist_change_interval || "—"} clears</h3><p>Rerolls from ${formatPercent(dungeon.mist_min_percentage || 0)} to ${formatPercent(dungeon.mist_max_percentage || 0)}. Enemy Evade scale: ${dungeon.enemy_evade_per_mist || 0} per Mist point.</p></article></div></section>`:""}
        <section class="detail-section"><h2>Normal encounter odds</h2>${encounterOddsHtml(dungeon)}${bossTeam?`<div class="callout" style="margin-top:14px"><strong>Forced boss team:</strong><p>${esc(teamNames(bossTeam))}. The <code>is_boss</code> marker excludes this row from random selection; runtime forces it separately after the objective.</p></div>`:""}</section>
        <section class="detail-section"><h2>Monster roster</h2><div class="hero-banner__actions">${monsters.map(monster=>`<button class="button button--small" type="button" data-entity-type="monster" data-entity-id="${esc(monster.name)}">${esc(monster.name)}</button>`).join("")}</div></section>
        <section class="detail-section"><h2>Effective per-kill item odds</h2>${lootRows.length?`<article class="table-panel"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Monster</th><th>Item</th><th class="numeric">Authored</th><th class="numeric">Standard</th><th class="numeric">Welcome</th></tr></thead><tbody>${lootRows.map(row=>`<tr><td>${esc(row.monster)}</td><td><button class="button button--small" data-entity-type="item" data-entity-id="${esc(row.name)}" type="button">${esc(row.name)}</button></td><td class="numeric">${formatPercent(row.chance,4)}</td><td class="numeric">${formatPercent(row.effective,4)}</td><td class="numeric">${formatPercent(row.premium,4)}</td></tr>`).join("")}</tbody></table></div></article>`:"<p>No authored ordinary drops.</p>"}<div class="callout" style="margin-top:14px"><strong>Additional independent roll:</strong><p>Every defeated dungeon monster rolls a Gem Cluster at 0.1% base, or 0.11% with Welcome. Boss eggs, where configured, roll separately at 15%.</p></div></section>
      </div>`;
  }

  function countMapText(object) {
    return Object.entries(object || {}).map(([name, count]) => `${name} ×${count}`).join(" · ") || "None";
  }

  function questDetailsHtml(quest) {
    if (!quest) return `<div class="callout callout--red"><p>No quest definition found in the current catalog.</p></div>`;
    const overview = [
      ["Campaign gate", quest.required_dungeon || "—"],
      ["Coin cost", quest.gold ? `${formatNumber(quest.gold)} Coins` : "None"],
      ["Quest key", quest.quest_item || "—"],
      ["Roster size", quest.required_heroes || "Not specified"]
    ];
    const partyRules = [];
    if (quest.required_attack_types) partyRules.push(`Use ${quest.required_attack_types.join(", ")}`);
    if (quest.required_each_attack_type) partyRules.push(`${quest.required_each_attack_type} of each attack type`);
    if (quest.required_healers) partyRules.push(`${quest.required_healers} Healer-capable heroes`);
    if (quest.required_tanks) partyRules.push(`${quest.required_tanks} Tank-capable heroes`);
    if (quest.required_ranged_or_magic) partyRules.push(`${quest.required_ranged_or_magic} Ranged or Magic heroes`);
    if (quest.required_cleanse_or_immunity) partyRules.push(`${quest.required_cleanse_or_immunity} cleanse/immunity heroes`);
    const requirements = [
      ["Material turn-in", countMapText(quest.required_items || quest.items)],
      ["Boss kills", countMapText(quest.boss_kills)],
      ["Marked clears", countMapText(quest.marked_encounters)],
      ["Party rules", partyRules.join(" · ") || "None"]
    ];
    const stages = (quest.runway_stages || []).map((stage, index) => {
      const stageCost = [stage.gold ? `${formatNumber(stage.gold)} Coins` : "", countMapText(stage.items) !== "None" ? countMapText(stage.items) : ""].filter(Boolean).join(" · ") || "None";
      const stageRewards = countMapText(stage.rewards);
      const stageRules = [
        ...Object.entries(stage.conditions || {}).map(([key, value]) => `${humanKey(key)}: ${value}`),
        ...Object.entries(stage.mastery || {}).map(([key, value]) => `${humanKey(key)}: ${value ? "Yes" : "No"}`)
      ].join(" · ") || "No extra condition";
      return `<article class="detail-box"><div class="detail-box__label">Runway ${index + 1} · ${stage.encounters} encounters · team ${stage.hero_count}</div><h3>${esc(stage.name)}</h3><p>${esc(stage.description)}</p><p><strong>Gate:</strong> ${esc(stage.required_dungeon)} · boss ${esc(stage.required_boss || stage.boss)}</p><p><strong>Cost:</strong> ${esc(stageCost)}</p><p><strong>Rules:</strong> ${esc(stageRules)}</p><p><strong>Scaling:</strong> HP ×${esc(stage.enemy_hp_multiplier)} · damage ×${esc(stage.enemy_damage_multiplier)}${stage.enemy_regen_multiplier != null ? ` · regen ×${esc(stage.enemy_regen_multiplier)}` : ""}</p><p><strong>Reward:</strong> ${esc(stageRewards)}</p></article>`;
    }).join("");
    return `${statTiles(overview)}<div class="detail-grid" style="margin-top:14px">${requirements.map(([label, value]) => `<article class="detail-box"><div class="detail-box__label">${esc(label)}</div><p>${esc(value)}</p></article>`).join("")}</div>${stages ? `<h3 style="margin-top:20px">Runway stages</h3><div class="detail-grid">${stages}</div>` : ""}`;
  }

  function raidDetail(raid) {
    const mechanic = C.raidMechanics[raid.id];
    const quest = state.data.raidQuests[raid.unlock_quest_id];
    const bossTeam = (raid.monster_teams || []).find(team => team.is_boss);
    const monsters = [...new Set((raid.monster_teams || []).flatMap(team => team.monsters || []))];
    return `<header class="detail-hero">${image(raid.combat_background,"","detail-hero__art")}<div><div class="detail-hero__chips">${badge(mechanic.label,"gold")}${badge(`Team ${raid.hero_count}`)}${badge("Daily entry")}</div><h1 id="dialog-title">${esc(raid.name)}</h1><p>${esc(raid.description)}</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Command sheet</h2>${statTiles([["Recommended career",raid.recommended_career_level],["Recommended gear",`Tier ${raid.recommended_gear_tier}`],["Formation",`${raid.formation_rows} × ${raid.formation_columns}`],["Normal encounters",15],["Enemy HP",`×${raid.enemy_hp_multiplier}`],["Enemy damage",`×${raid.enemy_damage_multiplier}`],["Defense bonus",`+${raid.enemy_defense_bonus}`],["Magic Defense bonus",`+${raid.enemy_magic_defense_bonus}`]])}<div class="callout" style="margin-top:14px"><strong>Eligibility:</strong><p>Recommendations and readiness fields are advisory in 1.05. After the unlock quest, any non-empty available team up to ${raid.hero_count} can start the permanent raid.</p></div></section>
        <section class="detail-section"><h2>${esc(mechanic.label)}</h2><ul class="detail-list">${mechanic.rules.map(rule=>`<li>${esc(rule)}</li>`).join("")}</ul></section>
        <section class="detail-section"><h2>Normal encounter odds</h2>${encounterOddsHtml(raid)}<div class="callout" style="margin-top:14px"><strong>Boss wave 16:</strong><p>${esc(teamNames(bossTeam || {monsters:[raid.boss]}))}. Boss formations are forced after 15 clears.</p></div></section>
        <section class="detail-section"><h2>Unlock quest</h2><div class="detail-box" style="margin-bottom:14px"><div class="detail-box__label">${esc(raid.unlock_quest_id)}</div><h3>${esc(quest?.title || "Raid unlock")}</h3><p>Complete every catalog requirement below once to unlock this permanent daily raid.</p></div>${questDetailsHtml(quest)}</section>
        <section class="detail-section"><h2>Reward family</h2><div class="detail-grid detail-grid--three">
          <article class="detail-box"><div class="detail-box__label">Rune Piece</div><h3>${esc(raid.rune_piece)}</h3><p>1.5% through normal encounter 10 · 3% after 10 clears · 10% boss. Root Nodes never roll it.</p><button class="button button--small" data-entity-type="item" data-entity-id="${esc(raid.rune_piece)}" type="button">Open item</button></article>
          <article class="detail-box"><div class="detail-box__label">Boss material</div><h3>${esc(raid.boss_material)}</h3><p>Always 1; 25% chance for 2.</p><button class="button button--small" data-entity-type="item" data-entity-id="${esc(raid.boss_material)}" type="button">Open item</button></article>
          <article class="detail-box"><div class="detail-box__label">Unique accessory</div><h3>${esc(raid.rare_accessory)}</h3><p>Until discovered or already pending: 5% → 45%, then guaranteed clear 10. Repeat copies are 5%.</p><button class="button button--small" data-entity-type="item" data-entity-id="${esc(raid.rare_accessory)}" type="button">Open item</button></article>
        </div></section>
        <section class="detail-section"><h2>Raid bestiary</h2><div class="hero-banner__actions">${monsters.map(name=>`<button class="button button--small" data-entity-type="monster" data-entity-id="${esc(name)}" type="button">${esc(name)}</button>`).join("")}</div></section>
      </div>`;
  }

  function objectDefinition(object) {
    return Object.entries(object || {}).map(([key,value]) => {
      let shown;
      if (Array.isArray(value)) shown = value.join(", ");
      else if (value && typeof value === "object") shown = Object.entries(value).map(([k,v])=>`${humanKey(k)} ${v}`).join(" · ");
      else if (typeof value === "boolean") shown = value ? "Yes" : "No";
      else shown = value;
      return `<div class="stat-tile"><span>${esc(humanKey(key))}</span><strong>${esc(shown)}</strong></div>`;
    }).join("");
  }

  function itemDetail(item) {
    const sources = state.data.itemSources.get(item.name) || [];
    const recipes = sources.filter(source => source.kind === "recipe").map(source => source.recipe);
    const drops = sources.filter(source => source.kind === "drop");
    return `<header class="detail-hero">${image(item.icon,"","detail-hero__art detail-hero__art--contain")}<div><div class="detail-hero__chips">${badge(itemCategory(item),"gold")}${getItemTier(item)?badge(`Tier ${getItemTier(item)}`):""}${item.unique_equip_item?badge("Unique-equipped","red"):""}</div><h1 id="dialog-title">${esc(item.name)}</h1><p>${esc(item.description)}</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Definition</h2>${statTiles([["Category",itemCategory(item)],["Sell value",item.unsellable?"Protected":`${formatNumber(item.sell_value || 0)} Coins`],["Slot",item.equipment?.slot || "—"],["Proficiency",item.equipment?.type || "—"],["Role theme",item.role_theme || "—"],["Catalog",item.source_catalog]])}</section>
        ${Object.keys(item.bonuses || {}).length?`<section class="detail-section"><h2>Bonuses</h2><div class="stat-sheet">${objectDefinition(item.bonuses)}</div></section>`:""}
        ${item.advanced_effect?`<section class="detail-section"><h2>Advanced effect</h2><div class="stat-sheet">${objectDefinition(item.advanced_effect)}</div></section>`:""}
        ${item.raid_set_bonus?`<section class="detail-section"><h2>${esc(item.raid_set_bonus.name || "Raid set bonus")}</h2><div class="callout"><strong>${esc(item.raid_set_bonus.pieces || 2)}-piece set:</strong><p>${esc(item.raid_set_bonus.description)}</p></div><div class="stat-sheet" style="margin-top:12px">${objectDefinition(item.raid_set_bonus.advanced_effect || {})}</div></section>`:""}
        <section class="detail-section"><h2>Acquisition</h2>
          ${drops.length?`<div class="detail-grid">${drops.map(drop=>`<article class="detail-box"><div class="detail-box__label">Monster drop · ${formatPercent(drop.chance)}</div><h3>${esc(drop.monster)}</h3><p>${esc((drop.locations||[]).map(x=>x.name||x.id).join(", ")||"Unknown location")}</p><button class="button button--small" data-entity-type="monster" data-entity-id="${esc(drop.monster)}" type="button">Open monster</button></article>`).join("")}</div>`:""}
          ${recipes.length?recipes.map(recipe=>`<article class="detail-box" style="margin-top:12px"><div class="detail-box__label">Crafting recipe · Tier ${esc(recipe.required_tier || 1)}</div><h3>${esc(formatDuration(recipe.craft_time_seconds || 0))}${recipe.required_raid?` · requires ${esc(recipe.required_raid)} clear`:""}</h3><p>${Object.entries(recipe.ingredients||{}).map(([name,count])=>`${esc(name)} ×${count}`).join(" · ")}${recipe.coin_cost?` · ${formatNumber(recipe.coin_cost)} Coins`:""}</p></article>`).join(""):""}
          ${!drops.length&&!recipes.length?`<div class="callout"><p>Granted, purchased, protected, or resolved by a special reward system rather than an ordinary monster table or crafting recipe.</p></div>`:""}
        </section>
      </div>`;
  }

  function petDetail(family) {
    const rarity = state.data.petRarity;
    const sprites = Object.entries(family.sprites || {});
    const effects = (family.effect_pool || []).map(id => C.petEffects.find(effect => effect.id === id)).filter(Boolean);
    return `<header class="detail-hero">${image(family.sprites?.epic?.texture || family.egg_icon,"","detail-hero__art detail-hero__art--contain")}<div><div class="detail-hero__chips">${badge(`${family.egg_drop_chance}% egg`,"gold")}${badge(`Tier ${family.tier}`)}${badge(family.source_type)}</div><h1 id="dialog-title">${esc(family.name)}</h1><p>${esc(family.egg_name)} from ${esc(family.source_boss)}. Six possible effects and three rarity-specific creature forms.</p></div></header>
      <div class="detail-body">
        <section class="detail-section"><h2>Egg source</h2>${statTiles([["Activity",family.source_id],["Boss",family.source_boss],["Drop chance",`${family.egg_drop_chance}%`],["Gem price",150],["Family tier",family.tier],["Stable limit",60]])}</section>
        <section class="detail-section"><h2>Hatch forms</h2><div class="detail-grid detail-grid--three">${sprites.map(([kind,sprite])=>`<article class="detail-box">${image(sprite.texture,"", "", `style="width:100%;height:150px;object-fit:contain"`)}<div class="detail-box__label" style="margin-top:10px">${esc(kind)} · ${esc(rarity[kind])}% · ${kind==="common"?2:kind==="rare"?3:4} effects</div><h3>${esc(sprite.name)}</h3></article>`).join("")}</div></section>
        <section class="detail-section"><h2>Effect pool</h2><div class="stat-sheet">${effects.map(effect=>`<div class="stat-tile"><span>${esc(effect.name)}</span><strong>+${effect.base}${esc(effect.unit)}</strong></div>`).join("")}</div><div class="callout" style="margin-top:14px"><strong>Level curve:</strong><p>Multiplier = 1 + 2 × ((level − 1) ÷ 19)^1.5. Every value is ×3 at level 20.</p></div></section>
      </div>`;
  }

  function closeEntityDialog() {
    if (entityDialog.open) entityDialog.close();
    const route = location.hash.replace(/^#/, "").split("/")[0] || "home";
    history.replaceState(null, "", `#${route}`);
  }

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    globalSearch.value = "";
    renderSearchResults("");
    requestAnimationFrame(() => globalSearch.focus());
  }

  function renderSearchResults(query) {
    const q = norm(query.trim());
    state.searchSelection = -1;
    if (q.length < 2) {
      searchMeta.textContent = "Type at least two characters";
      searchResults.innerHTML = `<div class="empty-state" style="min-height:190px"><div><strong>Search the whole Codex</strong><p>Try “Guardian”, “Vulnerability”, “Hollow Star”, “Rune”, or an item bonus.</p></div></div>`;
      return;
    }
    const words = q.split(/\s+/).filter(Boolean);
    const results = state.searchIndex
      .filter(entry => words.every(word => entry.haystack.includes(word)))
      .map(entry => ({ ...entry, score: entry.haystack.startsWith(q) ? 3 : norm(entry.name).includes(q) ? 2 : 1 }))
      .sort((a,b)=>b.score-a.score || a.name.localeCompare(b.name))
      .slice(0,18);
    searchMeta.textContent = `${results.length} result${results.length===1?"":"s"}`;
    searchResults.innerHTML = results.length ? results.map((entry,index)=>`<button class="search-result" type="button" data-search-index="${index}" data-search-route="${esc(entry.route)}" data-search-id="${esc(entry.id)}"><span>${entry.icon?image(entry.icon,"","search-result__icon"):"<span class=\"search-result__icon\"></span>"}</span><span><strong>${esc(entry.name)}</strong><small>${esc(entry.subtitle)}</small></span><span class="search-result__type">${esc(entry.type)}</span></button>`).join("") : emptyState("No guide entries match that search.");
  }

  function activateSearchResult(button) {
    if (!button) return;
    const route = button.dataset.searchRoute;
    const id = button.dataset.searchId;
    searchDialog.close();
    location.hash = id ? `${route}/${encodeURIComponent(slug(id))}` : route;
  }

  function bindGlobalEvents() {
    window.addEventListener("hashchange", renderCurrentRoute);
    document.getElementById("menu-button").addEventListener("click", () => {
      const open = document.body.classList.toggle("sidebar-open");
      document.getElementById("menu-button").setAttribute("aria-expanded", String(open));
    });
    document.getElementById("sidebar-scrim").addEventListener("click", () => {
      document.body.classList.remove("sidebar-open");
      document.getElementById("menu-button").setAttribute("aria-expanded", "false");
    });
    document.getElementById("search-button").addEventListener("click", openSearch);
    document.getElementById("dialog-close").addEventListener("click", closeEntityDialog);
    entityDialog.addEventListener("click", event => { if (event.target === entityDialog) closeEntityDialog(); });
    entityDialog.addEventListener("cancel", event => { event.preventDefault(); closeEntityDialog(); });
    searchDialog.addEventListener("click", event => { if (event.target === searchDialog) searchDialog.close(); });
    globalSearch.addEventListener("input", () => renderSearchResults(globalSearch.value));
    searchResults.addEventListener("click", event => activateSearchResult(event.target.closest("[data-search-route]")));
    globalSearch.addEventListener("keydown", event => {
      const buttons = [...searchResults.querySelectorAll("[data-search-route]")];
      if (!buttons.length) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        state.searchSelection = event.key === "ArrowDown" ? Math.min(buttons.length-1,state.searchSelection+1) : Math.max(0,state.searchSelection-1);
        buttons.forEach((button,index)=>button.setAttribute("aria-selected",String(index===state.searchSelection)));
        buttons[state.searchSelection].scrollIntoView({block:"nearest"});
      }
      if (event.key === "Enter" && state.searchSelection >= 0) { event.preventDefault(); activateSearchResult(buttons[state.searchSelection]); }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)) {
        event.preventDefault(); openSearch();
      }
    });
    document.addEventListener("click", event => {
      if (event.target.closest("[data-open-search]")) openSearch();
      const entity = event.target.closest("[data-entity-type]");
      if (entity) {
        event.preventDefault();
        openEntity(entity.dataset.entityType, entity.dataset.entityId);
      }
    });
    document.addEventListener("keydown", event => {
      const entity = event.target.closest?.("[data-entity-type][role=button]");
      if (entity && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault(); openEntity(entity.dataset.entityType, entity.dataset.entityId);
      }
    });

    const themeButton = document.getElementById("theme-button");
    let storedTheme = "";
    try { storedTheme = localStorage.getItem("ipd-codex-theme") || ""; } catch (_) {}
    if (storedTheme === "parchment") document.documentElement.dataset.theme = "parchment";
    themeButton.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "night" ? "parchment" : "night";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("ipd-codex-theme", next); } catch (_) {}
    });
  }

  async function init() {
    bindGlobalEvents();
    outlet.innerHTML = `<div class="loading-state"><div class="loading-state__ring"></div><strong>Opening the Codex</strong><p>Loading the 1.05 catalogs and building exact cross-references…</p></div>`;
    try {
      await loadData();
      if (!location.hash) history.replaceState(null, "", "#home");
      renderCurrentRoute();
    } catch (error) {
      console.error(error);
      outlet.innerHTML = `<div class="error-state"><div><h1>The catalogs could not be loaded</h1><p>${esc(error.message)}</p><p>Serve the repository root over HTTP and open <strong>/wiki/</strong>; browsers block JSON fetches from a direct file URL.</p></div></div>`;
    }
  }

  init();
})();
