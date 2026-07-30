(function () {
  "use strict";

  const LEGACY_ROUTE = "patch-notes";
  const ORIGINAL_VERSION = String(window.WIKI_CONTENT?.version?.game || "").trim();

  const copyWithoutReleaseHistory = content => {
    if (!content || typeof content !== "object") return content;
    return Object.freeze({ ...content, patchNotes: [] });
  };

  // The guide remains backed by the current catalogs, but release history is no
  // longer part of the player-facing wiki.
  window.WIKI_CONTENT = copyWithoutReleaseHistory(window.WIKI_CONTENT);
  window.WIKI_CONTENT_IT = copyWithoutReleaseHistory(window.WIKI_CONTENT_IT);

  const italianAdditions = {
    "The complete searchable guide to Idle Party Dungeon: heroes, combat, dungeons, raids, endgame challenges, monsters, loot odds, crafting, pets, privacy, and every major interaction.": "La guida completa e consultabile a Idle Party Dungeon: eroi, combattimento, dungeon, raid, sfide di fine gioco, mostri, probabilità del bottino, creazione, famigli, privacy e tutte le principali interazioni.",
    "A complete, searchable Idle Party Dungeon guide with exact probabilities and every class, monster, dungeon, raid, endgame challenge, item, recipe, status, and system.": "Una guida completa e consultabile a Idle Party Dungeon, con probabilità esatte e tutte le classi, i mostri, i dungeon, i raid, le sfide di fine gioco, gli oggetti, le ricette, gli stati e i sistemi.",
    "Idle Party Dungeon · Player guide": "Idle Party Dungeon · Guida per i giocatori",
    "Evergreen guide": "Guida sempre aggiornata",
    "Current gameplay, systems, and reference data": "Meccaniche, sistemi e dati di riferimento attuali",
    "Systems": "Sistemi",
    "Reference & legal": "Riferimenti e note legali",
    "Continuously maintained player guide": "Guida per i giocatori mantenuta aggiornata",
    "Current game data": "Dati di gioco attuali",
    "Probabilities are base values unless an adjusted value is shown. Content and artwork © 2026 BroglioGames — All rights reserved.": "Le probabilità sono valori base, salvo quando viene mostrato un valore modificato. Contenuti e grafica © 2026 BroglioGames — Tutti i diritti riservati.",
    "Town systems, menus and interactions, the probability lab, game reference, and privacy.": "Sistemi della città, menu e interazioni, laboratorio delle probabilità, riferimenti di gioco e privacy.",
    "Browse the current guide by topic.": "Consulta la guida attuale per argomento.",
    "Current game guide": "Guida al gioco attuale",
    "Built for the current game": "Pensata per il gioco attuale",
    "Every strategy chapter and calculator describes the current game systems and values.": "Ogni capitolo strategico e calcolatore descrive i sistemi e i valori del gioco attuale.",
    "Guide scope": "Ambito della guida",
    "Current gameplay throughout": "Meccaniche attuali in tutta la guida",
    "Every chapter documents the systems and values used by the current game.": "Ogni capitolo documenta i sistemi e i valori usati dal gioco attuale.",
    "Every chapter is written for players and reflects the current game.": "Ogni capitolo è scritto per i giocatori e riflette il gioco attuale.",
    "These details answer common strategy questions for the current game.": "Questi dettagli rispondono alle domande strategiche più comuni sul gioco attuale.",
    "Current guide": "Guida attuale",
    "Continuously maintained for the current game. Content and artwork © 2026 BroglioGames. All rights reserved.": "Mantenuta aggiornata per il gioco attuale. Contenuti e grafica © 2026 BroglioGames. Tutti i diritti riservati.",
    "The complete field guide to Idle Party Dungeon.": "La guida completa a Idle Party Dungeon.",
    "Guide coverage, current rules, exact values, and practical clarifications.": "Copertura della guida, regole attuali, valori esatti e chiarimenti pratici."
  };

  window.WIKI_UI_IT = Object.freeze({
    ...(window.WIKI_UI_IT || {}),
    ...italianAdditions
  });

  const copy = {
    en: {
      codex: "The Adventurer's Codex",
      mainIntro: "Browse the current guide by topic.",
      homeIntro: "The complete field guide to Idle Party Dungeon.",
      referenceIntro: "Guide coverage, current rules, exact values, and practical clarifications.",
      groupTownIntro: "Town systems, menus and interactions, the probability lab, game reference, and privacy.",
      chapters: "chapters",
      currentGuide: "Current game guide",
      currentRulesTitle: "Built for the current game",
      currentRulesText: "Every strategy chapter and calculator describes the current game systems and values.",
      guideScope: "Guide scope",
      currentThroughout: "Current gameplay throughout",
      currentThroughoutText: "Every chapter documents the systems and values used by the current game.",
      coverageText: "Every chapter is written for players and reflects the current game.",
      clarificationsText: "These details answer common strategy questions for the current game.",
      finalLabel: "Current guide",
      finalText: "Continuously maintained for the current game. Content and artwork © 2026 BroglioGames. All rights reserved.",
      description: "The complete searchable guide to Idle Party Dungeon: heroes, combat, dungeons, raids, endgame challenges, monsters, loot odds, crafting, pets, privacy, and every major interaction.",
      openGraphDescription: "A complete, searchable Idle Party Dungeon guide with exact probabilities and every class, monster, dungeon, raid, endgame challenge, item, recipe, status, and system."
    },
    it: {
      codex: "Il Codice dell'Avventuriero",
      mainIntro: "Consulta la guida attuale per argomento.",
      homeIntro: "La guida completa a Idle Party Dungeon.",
      referenceIntro: "Copertura della guida, regole attuali, valori esatti e chiarimenti pratici.",
      groupTownIntro: "Sistemi della città, menu e interazioni, laboratorio delle probabilità, riferimenti di gioco e privacy.",
      chapters: "capitoli",
      currentGuide: "Guida al gioco attuale",
      currentRulesTitle: "Pensata per il gioco attuale",
      currentRulesText: "Ogni capitolo strategico e calcolatore descrive i sistemi e i valori del gioco attuale.",
      guideScope: "Ambito della guida",
      currentThroughout: "Meccaniche attuali in tutta la guida",
      currentThroughoutText: "Ogni capitolo documenta i sistemi e i valori usati dal gioco attuale.",
      coverageText: "Ogni capitolo è scritto per i giocatori e riflette il gioco attuale.",
      clarificationsText: "Questi dettagli rispondono alle domande strategiche più comuni sul gioco attuale.",
      finalLabel: "Guida attuale",
      finalText: "Mantenuta aggiornata per il gioco attuale. Contenuti e grafica © 2026 BroglioGames. Tutti i diritti riservati.",
      description: "La guida completa e consultabile a Idle Party Dungeon: eroi, combattimento, dungeon, raid, sfide di fine gioco, mostri, probabilità del bottino, creazione, famigli, privacy e tutte le principali interazioni.",
      openGraphDescription: "Una guida completa e consultabile a Idle Party Dungeon, con probabilità esatte e tutte le classi, i mostri, i dungeon, i raid, le sfide di fine gioco, gli oggetti, le ricette, gli stati e i sistemi."
    }
  };

  const language = () => document.documentElement.lang === "it" ? "it" : "en";
  const currentCopy = () => copy[language()];

  function setText(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function redirectLegacyRoute() {
    const route = location.hash.replace(/^#/, "").split("/")[0];
    if (route === LEGACY_ROUTE) history.replaceState(null, "", "#reference");
  }

  function removeLegacyNavigation() {
    document.querySelectorAll('[data-route="patch-notes"], [data-search-route="patch-notes"], a[href^="#patch-notes"]').forEach(element => element.remove());

    const townCount = document.querySelector('.index-hub__button[href="#group-town"] .index-hub__count');
    if (townCount) setText(townCount, `5 ${currentCopy().chapters}`);

    document.querySelectorAll(".feature-grid").forEach(grid => {
      [...grid.querySelectorAll(":scope > .feature-card")].forEach((card, index) => {
        const number = card.querySelector(".feature-card__index");
        if (number) setText(number, String(index + 1).padStart(2, "0"));
      });
    });
  }

  function removeVersionBadges() {
    document.querySelectorAll(".page-header__meta .badge").forEach(badge => {
      const value = badge.textContent.trim();
      const lower = value.toLowerCase();
      const mentionsVersion = ORIGINAL_VERSION && value.includes(ORIGINAL_VERSION);
      const isReleaseMetadata = mentionsVersion && /(game|version|current|latest|gioco|versione|attuale|ultima)/i.test(value);
      const isStatus = /closed[- ]test|test chiuso/i.test(value);
      const isUpdateDate = /^(updated|aggiornat[oa])\s+\d/i.test(lower);
      if (isReleaseMetadata || isStatus || isUpdateDate) badge.remove();
    });
  }

  function cleanPageHeaders() {
    const t = currentCopy();
    document.querySelectorAll(".page-header").forEach(header => {
      setText(header.querySelector(".page-header__eyebrow"), t.codex);
      const title = header.querySelector("h1")?.textContent.trim() || "";
      const intro = header.querySelector("p");
      if (/^(Wiki main page|Pagina principale della wiki)$/i.test(title)) setText(intro, t.mainIntro);
      if (/^(Codex overview|Panoramica del Codice)$/i.test(title)) setText(intro, t.homeIntro);
      if (/^(Game reference|Riferimenti di gioco)$/i.test(title)) setText(intro, t.referenceIntro);
      if (/^(Town & Reference|Città e riferimenti)$/i.test(title)) setText(intro, t.groupTownIntro);
    });
  }

  function cleanMainAndGroupPages() {
    const t = currentCopy();
    const townButton = document.querySelector('.index-hub__button[href="#group-town"]');
    if (townButton) setText(townButton.querySelector("small"), t.groupTownIntro);
  }

  function cleanHomePage() {
    const t = currentCopy();
    setText(document.querySelector(".hero-banner__seal"), t.currentGuide);

    document.querySelectorAll(".home-section").forEach(section => {
      const heading = section.querySelector(".section-heading h2");
      if (!heading) return;
      const value = heading.textContent.trim();
      if (/updated for version|aggiornat[oa].*versione/i.test(value)) {
        setText(heading, t.currentRulesTitle);
        setText(section.querySelector(".section-heading p"), t.currentRulesText);
      }
    });
  }

  function cleanReferencePage() {
    const t = currentCopy();
    const referencePage = [...document.querySelectorAll(".page")].find(page => /^(Game reference|Riferimenti di gioco)$/i.test(page.querySelector(".page-header h1")?.textContent.trim() || ""));
    if (!referencePage) return;

    referencePage.querySelectorAll(".section-heading p").forEach(paragraph => {
      const value = paragraph.textContent.trim();
      if (/reflects game version|riflette la versione del gioco/i.test(value)) setText(paragraph, t.coverageText);
      if (/for version\s+\d|per la versione\s+\d/i.test(value)) setText(paragraph, t.clarificationsText);
    });

    referencePage.querySelectorAll(".info-card").forEach(card => {
      const value = card.textContent;
      if ((ORIGINAL_VERSION && value.includes(ORIGINAL_VERSION)) && /(current version|versione attuale|throughout|tutta la guida)/i.test(value)) {
        setText(card.querySelector(".info-card__eyebrow"), t.guideScope);
        setText(card.querySelector("h3"), t.currentThroughout);
        setText(card.querySelector("p"), t.currentThroughoutText);
      }
    });

    referencePage.querySelectorAll(".callout").forEach(callout => {
      const strong = callout.querySelector("strong");
      if (!strong || !/(current guide version|versione attuale della guida)/i.test(strong.textContent)) return;
      setText(strong, t.finalLabel);
      setText(callout.querySelector("p"), t.finalText);
    });
  }

  function replaceKnownPhrases() {
    const t = currentCopy();
    const replacements = new Map([
      ["Town systems, menus and interactions, the probability lab, game reference, patch notes, and privacy.", t.groupTownIntro],
      ["Sistemi della città, menu e interazioni, laboratorio delle probabilità, riferimenti di gioco, note di aggiornamento e privacy.", t.groupTownIntro],
      [`The complete field guide to Idle Party Dungeon ${ORIGINAL_VERSION}.`, t.homeIntro],
      [`La guida completa a Idle Party Dungeon ${ORIGINAL_VERSION}.`, t.homeIntro],
      [`Guide coverage, current rules, exact values, and practical clarifications for version ${ORIGINAL_VERSION}.`, t.referenceIntro],
      [`Copertura della guida, regole attuali, valori esatti e chiarimenti pratici per la versione ${ORIGINAL_VERSION}.`, t.referenceIntro]
    ]);

    const root = document.getElementById("route-outlet") || document.body;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      const replacement = replacements.get(trimmed);
      if (!replacement) return;
      const leading = raw.match(/^\s*/)?.[0] || "";
      const trailing = raw.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${replacement}${trailing}`;
    });
  }

  function updateMetadata() {
    const t = currentCopy();
    const description = document.querySelector('meta[name="description"]');
    if (description && description.content !== t.description) description.content = t.description;
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphDescription && openGraphDescription.content !== t.openGraphDescription) openGraphDescription.content = t.openGraphDescription;
  }

  let cleaning = false;
  function cleanEvergreenUi() {
    if (cleaning) return;
    cleaning = true;
    try {
      redirectLegacyRoute();
      removeLegacyNavigation();
      removeVersionBadges();
      cleanPageHeaders();
      cleanMainAndGroupPages();
      cleanHomePage();
      cleanReferencePage();
      replaceKnownPhrases();
      updateMetadata();
    } finally {
      cleaning = false;
    }
  }

  redirectLegacyRoute();

  let cleaningQueued = false;
  function scheduleEvergreenCleanup() {
    if (cleaningQueued) return;
    cleaningQueued = true;
    queueMicrotask(() => {
      cleaningQueued = false;
      cleanEvergreenUi();
    });
  }

  const observer = new MutationObserver(scheduleEvergreenCleanup);
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["lang"] });

  window.addEventListener("hashchange", cleanEvergreenUi);
  document.addEventListener("DOMContentLoaded", cleanEvergreenUi);
  document.addEventListener("click", event => {
    if (event.target.closest?.("#language-button")) scheduleEvergreenCleanup();
  }, true);

  cleanEvergreenUi();
})();
