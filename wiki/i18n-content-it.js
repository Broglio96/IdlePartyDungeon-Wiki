/*
 * Contenuti della guida in italiano per Idle Party Dungeon 1.08.
 * La cronologia degli aggiornamenti resta nel capitolo Note di aggiornamento.
 * Aggiornato il 24 luglio 2026.
 */
window.WIKI_CONTENT_IT = Object.freeze({
  version: {
    game: "1.08",
    updated: "24 luglio 2026",
    status: "In sviluppo"
  },

  patchNotes: [
    {
      version: "1.08",
      title: "Aggiornamento Risonanza e progressione",
      date: "24 luglio 2026",
      status: "In sviluppo",
      notes: [
        "Ribilanciate le classi degli eroi per ottenere prestazioni più uniformi in ogni classe, percorso di promozione e fase della progressione, dai primi dungeon fino ai raid e al fine gioco.",
        "Rielaborati i bonus dei set da raid: ogni set da due pezzi ora assegna una variante in base al ruolo della classe e al tipo di arma, reagendo anche all’arma finale incentrata sui critici o sul danno base. Migliorata inoltre la sopravvivenza di Mistico e Paladino con equipaggiamento da raid.",
        "Rielaborata l’Ascensione in quattro righe di scelta — Fondamenta, Risveglio, Maestria e Coronamento — con una decisione significativa in ogni fase della configurazione da 16 punti. I gradi si possono ridistribuire liberamente, anche cambiando la scelta di una riga nel percorso attuale; cambiare Percorso Ascendente ora richiede un raro oggetto creato con materiali da raid.",
        "Ribilanciata la Nebbia nei tre dungeon interessati per una difficoltà più uniforme per grado. I bonus dei famigli di Riduzione Nebbia ora riducono davvero la Schivata nemica aggiuntiva concessa dalla Nebbia.",
        "La difficoltà dei mostri dei dungeon ora cresce gradualmente per grado, rendendo più regolare la salita dalla Foresta delle Melme al Trono dell’Eclissi. Anche i Piani 71–100 della Torre della Risonanza sono più impegnativi verso l’Apex, in linea con l’investimento previsto in Risonanza dell’Eco.",
        "Il Piano 80 è ora l’ultimo traguardo della Torre realisticamente superabile da una formazione priva di Risonanza. Dal Piano 81, le formazioni sotto il grado consigliato subiscono Pressione dell’Eco: Salute e Attacco nemici aumentano in base alla Risonanza media mancante, ma l’ingresso resta libero.",
        "Ogni decimo piano della Torre della Risonanza, dal 10 al 100, ora assegna alla prima vittoria una Chiave di Volta della Torre insieme alle Monete e allo slot permanente per eroi. Questi dieci materiali sono riservati a un uso futuro.",
        "Aggiunti limiti ai bonus di Danno critico, Rubavita, Rigenerazione, Cura e Danno da contrattacco, così le combinazioni estreme dell’equipaggiamento di fine gioco non possono raggiungere valori degeneri, mantenendo ampio margine per le configurazioni normali.",
        "Aggiunto un riepilogo al ritorno dopo un’assenza significativa, con uccisioni, PE, oggetti e creazioni completate da ogni spedizione e raid attivi. Chi possiede il Pacchetto Premium di Benvenuto può raccogliere tutto con un tocco.",
        "Corretto il conteggio del tempo su Android durante blocco e riattivazione del dispositivo, così progressi offline e recupero della creazione vengono calcolati correttamente.",
        "Aggiunte notifiche Android per creazioni completate, promozioni degli eroi, ricompense offline, rinnovi giornalieri e nuovi dungeon o raid sbloccati. Le Impostazioni ora offrono controlli globali e individuali per tutti e sette i tipi di avviso, mostrando chiaramente anche lo stato dei permessi del dispositivo.",
        "Ogni tipo di armatura ora offre varianti incentrate su Attacco e Difesa; ogni tipo di arma offre varianti per Colpo critico e Danno base; gli accessori da combattimento sono divisi tra Tank, DPS e Supporto o Guaritore.",
        "Aggiunte 16 armi nelle linee Mischia, Distanza e Magia, così ogni classe dispone di almeno un’arma del proprio tipo adatta alla sua specialità.",
        "I selettori dell’equipaggiamento ora mostrano per ogni oggetto la variazione esatta delle statistiche rispetto a quello equipaggiato.",
        "Tieni premuto un eroe durante il combattimento per gestirne equipaggiamento e Rune senza mettere in pausa.",
        "Le arene ora mantengono ogni eroe e mostro in posizione fissa per tutto lo scontro; le entità sconfitte non fanno più riordinare la formazione restante.",
        "Le entità in combattimento ora hanno dimensioni coerenti con le barre della Salute, mentre i pulsanti Nebbia e Statistiche sono più grandi e puliti, senza sfondi riquadrati.",
        "Le finestre Statistiche di combattimento, selezione eroi e selezione famigli aperte dall’arena ora hanno esattamente le stesse dimensioni della finestra di combattimento che le ha aperte.",
        "Risolto un problema per cui le finestre annidate potevano apparire dietro alla finestra principale o non ripristinare esattamente la vista precedente alla chiusura.",
        "Le notifiche ora compaiono sempre sopra ogni finestra e menu.",
        "Dettagli eroe ora mostra il ruolo di combattimento di ciascun eroe, mentre le schede nella formazione e nelle selezioni della squadra mostrano il grado di Risonanza dell’Eco.",
        "Il pulsante Scegli della promozione ora si trova in cima all’anteprima della specializzazione, così può essere confermato senza scorrere.",
        "I requisiti di completamento dei dungeon ora seguono un unico sistema di progressione, con una nuova protezione che impedisce agli scontri di bloccarsi indefinitamente.",
        "Prezzi e ricompense in Monete ora usano ovunque le icone dei tagli mostrate nel portafoglio.",
        "Le icone di dungeon e raid ora mostrano un distintivo del grado coerente con lo stile delle icone degli oggetti.",
        "Uniformate dimensioni e spaziature delle icone nell’interfaccia, comprese le icone Nebbia e Statistiche e diverse icone prima troppo piccole.",
        "Il collegamento Wiki ora apre una pagina indice principale con tre pulsanti.",
        "Ridisegnato il saldo delle Gemme come un’unica barra con icona e pulsante più integrati nella cornice.",
        "Risolto un raro problema per cui un oggetto equipaggiato rinominato o non più utilizzabile poteva sparire al caricamento invece di tornare nell’Inventario.",
        "Gli elementi nella colonna destra delle Impostazioni ora mostrano l’etichetta a sinistra e l’icona a destra, seguendo un ordine di lettura uniforme.",
        "L’impostazione Batteria scarica ora si chiama Risparmio batteria.",
        "Risparmio batteria e Lingua possono essere modificati direttamente nell’elenco delle Impostazioni. La Lingua usa un selettore compatto EN/IT accanto all’icona.",
        "Il Pacchetto Premium di Benvenuto è di nuovo un acquisto a pagamento nel Negozio; chi lo aveva ottenuto gratuitamente lo conserva. Il Negozio di Gemme aggiunge inoltre una ricompensa unica di 300 Gemme gratuite per ogni profilo Google Play verificato e connesso dopo la sincronizzazione.",
        "Gli elenchi di selezione degli eroi per dungeon, raid, Torre e Discesa dell’Eco ora ordinano gli eroi disponibili per livello, dal più alto.",
        "La Torre dell’Ascensione ora si chiama Torre della Risonanza. Progressi, piano e obiettivi esistenti non cambiano.",
        "Raid e Discesa dell’Eco ora si aprono su una scheda Panoramica con stato, requisiti d’ingresso, ricompense principali, formazione e spiegazione della preparazione. Le meccaniche dettagliate sono nella scheda Guida, mentre Aiuto resta sempre visibile.",
        "Aggiunto il Pacchetto Famiglio Leggendario sotto il Pacchetto Premium di Benvenuto: un acquisto unico che assegna la Balena Dreadbell Leggendaria della famiglia Senza Luce, identica a un esemplare Leggendario schiuso. Una stalla piena blocca l’acquisto; i ripristini assegnano automaticamente il famiglio quando si libera uno slot.",
        "Aggiunto un contatore di garanzia Leggendaria condiviso tra le uova di tutte le famiglie. Dopo 100 schiuse consecutive senza un Leggendario, la successiva è garantita; i progressi sono visibili nella scheda Uova, nel Mercato delle uova e nei dettagli di ogni uovo.",
        "Aggiunto un pulsante Obiettivi nelle Impostazioni con tutti gli obiettivi Play Games, la descrizione del negozio e i progressi in tempo reale, anche su Windows e senza accesso. La finestra Play Games connessa mantiene il pulsante per l’overlay nativo.",
        "Aggiunti due obiettivi di Risonanza dell’Eco — uno per la sintonia completa di un eroe e uno per la Risonanza complessiva — portando il totale a 41 obiettivi per 345 punti.",
        "Aggiunta una scheda Potenziamenti dei famigli per aumentare permanentemente la capienza della stalla e la probabilità Leggendaria delle uova di ogni famiglia. I primi tre gradi raggiungono 40 slot e l’1% di probabilità Leggendaria; tre gradi Apex estendono i valori a 70 slot e 2%. I nuovi salvataggi iniziano con 10 slot, mentre quelli esistenti conservano tutti i famigli e la capienza già raggiunta.",
        "Spostato l’accesso alla Discesa dell’Eco nella schermata Torre della Risonanza accanto al titolo, visibile ma disattivato prima dello sblocco. Torre, Eco e nuovi dungeon sbloccati ora usano distintivi di attività che scompaiono aprendo la schermata o la scheda corrispondente.",
        "Centrata l’icona della Discesa dell’Eco nel suo anello circolare in ogni stato, bloccato o sbloccato.",
        "Risolto un raro problema per cui i famigli oltre la capienza potevano andare persi al caricamento. Tutti i famigli posseduti vengono ora ripristinati; la capienza limita solo nuove schiuse e assegnazioni.",
        "Riscritte in entrambe le lingue le descrizioni delle abilità attive e passive di ogni classe, specificando valori, bersagli, durate e condizioni esatti. I riquadri delle descrizioni ora si adattano al contenuto.",
        "Dopo una sconfitta oltre lo sblocco dell’Eco, i piani della Torre ora mostrano il grado esatto di Risonanza dell’Eco consigliato.",
        "Aggiunta una lettera nella Posta per ogni traguardo della Torre dal Piano 10 al 90, ampliando la storia del boss finale. La lettera del Piano 100 resta invariata.",
        "Ridisegnati i percorsi dell’Ascensione con nodi circolari composti solo da icone, racchiusi da un anello colorato in base allo stato; nome, descrizione, grado, costo e stato compaiono in un unico riquadro sotto l’albero.",
        "I distintivi dell’Ascensione sui ritratti degli eroi ora hanno uno sfondo circolare colorato in base al grado, e il primo sblocco dell’Ascensione invia una lettera localizzata nella Posta che spiega percorsi, punti, costi di respec e conseguenze irreversibili della promozione.",
        "La finestra della Torre e la schermata di vittoria ora mostrano i progressi verso tutti e dieci i materiali dei traguardi e spiegano che sono conservati per un uso futuro.",
        "Aggiunta Pazienza Calante al Piano 100: La Corona che Attende ottiene Attacco cumulativo dopo un periodo di grazia negli scontri lunghi; tempi e crescita sono mostrati prima dell’ingresso e seguiti in diretta durante il combattimento.",
        "Aggiunto l’Avanzamento automatico della Torre della Risonanza, che tenta in sequenza i piani non completati con squadra e famigli salvati fino al successivo traguardo multiplo di dieci. Conferma, progresso in diretta, controllo di arresto e riepilogo finale coprono l’intera serie.",
        "Aggiunte Missioni giornaliere e settimanali a rotazione che avanzano automaticamente giocando normalmente, compresi combattimento e creazione offline supportati. Le attività giornaliere assegnano Monete, quelle settimanali Gemme; le ricompense completate ma non riscosse vengono assegnate al ripristino e i Ranghi missione opzionali, acquistati con Monete, aggiungono slot e bonus senza penalità per gli obiettivi incompleti.",
        "Aggiunti 88 Aspetti élite cosmetici — uno per ogni classe élite in ciascuno dei quattro temi dei raid — in una nuova scheda Aspetti del Negozio. Ciascuno costa 1.000 Gemme, può essere equipaggiato su qualunque eroe élite compatibile e non modifica mai le statistiche.",
        "Il prezzo delle uova nel Negozio di Gemme ora dipende dal grado della famiglia, da 75 Gemme al grado 3 fino a 300 Gemme al grado 12. I famigli Chimerici possono ottenere un bonus Tasso di bottino limitato ai dungeon, mentre quelli Eclissi possono ottenere un bonus Tasso PE per gli eroi assegnati.",
        "I dettagli degli oggetti ora spiegano ogni fonte di acquisizione nota — bottini di mostri o boss, dungeon o raid, ricette del Laboratorio, offerte a rotazione, ricompense delle Missioni e fonti speciali — con collegamenti diretti all’attività pertinente quando possibile.",
        "Aggiunto un portafoglio delle Monete esatto e sempre visibile, che mantiene il dettaglio di Platino, Oro, Argento e Rame durante Negozio, potenziamenti, creazione e altre schermate di spesa.",
        "Aggiunte Statistiche complessive locali nelle Impostazioni per combattimento, progressione, collezione, economia e tempo di gioco. I valori storici non ricostruibili sono indicati come registrati dalla versione 1.08 e la vista funziona senza accesso a Play Games.",
        "Aggiunti Codici premio con distinzione tra maiuscole e minuscole nella scheda Premium del Negozio. Le ricompense idonee sono legate al profilo Play Games verificato, registrate nel cloud contro riscatti ripetuti e disponibili su Windows anche senza Google Play Billing.",
        "Aggiunto un diritto una tantum al Pacchetto Famiglio Leggendario tramite Codice premio, che usa la stessa assegnazione autorevole di famiglio e Gemme, gli stessi controlli di capienza, recupero e ricevuta cloud legata al profilo di un acquisto normale.",
        "Aggiunta una finestra Novità legata alla versione che presenta una volta per salvataggio i principali cambiamenti della 1.08, con un pulsante nelle Impostazioni per riaprirla. Gli argomenti della guida ora sono comprimibili e nomi degli stati e terminologia bilingue sono più uniformi.",
        "Ricalibrati ritmo dei PE della campagna, costi della progressione e preparazione della Torre, così un giocatore competente che controlla il gioco due o tre volte al giorno può raggiungere lo sblocco della Discesa dell’Eco in circa sei giorni senza accelerazioni a pagamento.",
        "Ridotto il lavoro all’avvio caricando menu non iniziali, texture nascoste, monetizzazione Android, Impostazioni, gestione degli eroi, Ascensione, promozione e guida solo quando servono. Anche gli elenchi di Inventario e ricette vengono popolati in modo più efficiente.",
        "Rielaborata l’immagine di avvio Android affinché il titolo completo di Idle Party Dungeon resti leggibile nelle maschere circolare, squircle, quadrata arrotondata, legacy e dell’icona del negozio."
      ]
    },
    {
      version: "1.07",
      title: "Correzione di comandi e navigazione",
      date: "19 luglio 2026",
      status: "Versione attuale per test chiuso",
      notes: [
        "Risolto un problema della versione 1.06 che poteva rendere inattivi pulsanti e menu dopo l'aggiornamento.",
        "I comandi touch e lo scorrimento ora funzionano normalmente su Android, così come i comandi del mouse su Windows.",
        "Aggiunti ulteriori controlli di rilascio per evitare che il problema si ripresenti. I progressi salvati non subiscono modifiche."
      ]
    },
    {
      version: "1.06",
      title: "Famigli e Ascensione",
      date: "18 luglio 2026",
      status: "Versione per test chiuso",
      notes: [
        "Aggiunti i famigli da spedizione. Raccogli le uova di sei famiglie, schiudi famigli Comuni, Rari, Epici o Leggendari con probabilità dello 0,5% e 2, 3, 4 o 5 bonus al gruppo, assegna un famiglio a una spedizione e portalo al livello 20 tramite PE Legame.",
        "I boss di dungeon e raid associati possono lasciare uova di famiglio. Le uova di ogni famiglia sono disponibili anche nel Negozio per 150 Gemme.",
        "Ora i famigli non schierati possono essere venduti in cambio di Monete; il loro valore dipende dal grado della famiglia e dalla rarità, non dal livello Legame.",
        "Rielaborata l'Ascensione. Gli eroi élite di livello 50 possono scegliere uno dei quattro percorsi e creare una configurazione con un budget di 15 punti. Ogni potenziamento è subito disponibile; gli azzeramenti gratuiti e i cambi di percorso restituiscono tutti i punti.",
        "Rinnovate le abilità attive, le abilità passive e i ruoli di classe degli eroi nell'intero albero delle promozioni.",
        "Rielaborate le meccaniche di tutti e quattro i raid, con finestre d'azione più chiare e abilità nemiche migliorate. Abbinare un'arma da raid creata al suo accessorio unico ora attiva un bonus set da due pezzi.",
        "Ampliata la Torre dell'Ascensione a 100 piani permanenti con incontri di nuovo tentativo fissi, ricompense ai traguardi per la prima vittoria, due slot famiglio e una sfida finale dedicata al Piano 100.",
        "Aggiunta la Discesa dell'Eco dopo il Piano 70 della Torre: avanzate illimitate con cinque eroi attraverso strati di cinque profondità, due famigli, Ancore consolidate e PE Legame al posto del normale bottino. Il primo Guardiano idoneo di ogni giorno UTC concede +1 Risonanza, mentre nove leggi giornaliere combinano pressione sulla sopravvivenza, adattamento nemico e opportunità di contromossa.",
        "Migliorati la progressione del combattimento nei dungeon, i traguardi dell'equipaggiamento, le ricompense in materiali dei boss, i tassi di bottino e i costi delle Rune. I bonus dei titoli innati ora conferiscono il 10%.",
        "Aggiunti 23 obiettivi di Google Play Games per promozioni, Ascensione, creazione e set da raid, schiusa dei famigli, potenziamenti massimi di Taverna e Laboratorio, traguardi complessivi a lungo termine e ogni boss al decimo piano della Torre: il totale sale a 39 obiettivi per 320 punti.",
        "Migliorati i layout su dispositivi mobili, i dettagli dell'equipaggiamento, le viste dei raid, lo scorrimento con tocco e mouse, il feedback del combattimento, la navigazione delle finestre e la presentazione degli oggetti.",
        "La guida al primo avvio ora spiega come vendere gli oggetti in eccesso per ottenere oro e reclutare altri eroi alla Taverna.",
        "Il pulsante delle Gemme resta accessibile su ogni piattaforma e il Pacchetto Premium di Benvenuto può ancora essere riscattato gratuitamente.",
        "Rafforzati i controlli degli aggiornamenti Play all'avvio, il recupero di Billing, l'eliminazione dal cloud, la gestione del consenso e le scelte obbligatorie sulla privacy.",
        "I salvataggi di Play Games ora sono associati all'account del giocatore verificato, impedendo che un account adotti in silenzio i progressi di un altro.",
        "Ridotte le dimensioni del pacchetto Android e ampliata la convalida automatica della versione."
      ]
    },
    {
      version: "1.04",
      title: "Aggiornamento di progressione e interfaccia",
      date: "17 luglio 2026",
      status: "Versione per test chiuso",
      notes: [
        "L'interfaccia di gioco ha ricevuto un importante intervento visivo e di leggibilità, con nuovi sfondi delle pagine, tipografia, grafica di navigazione, icone delle valute, presentazione degli oggetti e layout mobili più chiari.",
        "La progressione dei dungeon è stata ribilanciata in tutti e 12 i gradi. Gli incontri ora procedono a un ritmo più uniforme, mentre PE, tassi di ritrovamento, forza dei nemici, limiti del gruppo e tempi di creazione seguono una curva a lungo termine più graduale.",
        "Aggiunti accessori di progressione per nuovi traguardi dell'equipaggiamento, tra cui Rootbound Almanac, Astral Wayfinder e Lastlight Chronicle, incentrati sull'esperienza.",
        "Le schede dei raid ora mostrano più chiaramente disponibilità, avanzamento della missione, percorso di sblocco, dimensione del gruppo e stato dell'ingresso giornaliero. Le descrizioni delle meccaniche dei raid ne spiegano ora gli effetti esatti.",
        "Gli stati di combattimento ora hanno nomi, valori e suggerimenti più chiari. Immunità, purificazione, dissoluzione, schivata, rigenerazione ed effetti legati agli stati nocivi si comportano in modo più coerente.",
        "Le offerte della Taverna ora includono un guaritore ogni volta che è disponibile una classe guaritrice sbloccata, facilitando la creazione di un gruppo sostenibile.",
        "La Posta ha ricevuto schede delle lettere ridisegnate e avvisi per i messaggi non letti; inoltre rapporti dei dungeon, inventari, dettagli degli eroi, alberi delle classi, scelte di promozione, slot della squadra e voci del Bestiario sono diventati più facili da leggere e usare.",
        "La gestione dei salvataggi ora rispetta quelli locali eliminati fuori dal gioco e usa le copie di backup solo per recuperare un salvataggio principale esistente ma illeggibile. Il ripristino dal cloud riprende in sicurezza i normali salvataggi.",
        "Risolti problemi di layout e contenuto eccedente nelle scelte di promozione, formazioni dei raid, dettagli del Bestiario, controlli delle Gemme, icone degli oggetti e altre finestre su dispositivi mobili."
      ]
    },
    {
      version: "1.03",
      title: "Benvenuto e chiarezza in battaglia",
      date: "16 luglio 2026",
      status: "Versione per test chiuso",
      notes: [
        "I nuovi giocatori ora ricevono una guida di benvenuto compatta al primo avvio, mentre i salvataggi esistenti vengono aggiornati senza riproporla.",
        "Gli eroi reclutati ricevono nomi fantasy distinti, con migrazione sicura dai vecchi nomi composti da classe e numero.",
        "Le formazioni salvate e i flussi migliorati delle squadre rendono più semplice ripristinare i gruppi ricorrenti di dungeon e raid, segnalando gli eroi non disponibili.",
        "Il combattimento ha ricevuto indicatori più chiari per bersagli alleati e nemici, feedback sulle abilità attive, transizioni delle meccaniche dei raid, animazioni più ricche e un pannello delle entità ridisegnato.",
        "Le ricompense dell'ondata sono riunite in un turno leggibile prima dell'incontro successivo.",
        "I profili delle abilità degli eroi sono stati ribilanciati e il set di icone delle abilità passive è stato completato in tutto l'albero delle classi.",
        "L'Ultima Via ha ricevuto prove preliminari a fasi, ricompense di preparazione, tentativi più chiari e una copertura di bilanciamento più ampia.",
        "Corretto il comportamento degli accessori da raid, attivato il driver audio nativo di Windows e migliorati aggiornamento dei salvataggi, chiusura delle finestre, selezione degli eroi e comportamento delle abilità di classe."
      ]
    },
    {
      version: "1.02",
      title: "Salvataggi cloud e progressione delle Rune",
      date: "16 luglio 2026",
      status: "Versione Alpha chiusa",
      notes: [
        "La sezione Play Games delle Impostazioni ora include l'opzione confermata Elimina dati, che rimuove definitivamente progressi locali, copie di recupero, preferenze e il salvataggio cloud privato del giocatore su Google Play Games.",
        "I salvataggi cloud di Google Play Games ora mantengono disponibili i progressi tra dispositivi Android, con copie di recupero crittografate e una scelta esplicita quando due cronologie divergono.",
        "Aggiunti materiali dei mostri suddivisi per grado e sei percorsi permanenti delle Rune con potenziamenti garantiti per sviluppare gli eroi nel lungo periodo.",
        "Il Negozio ora supporta tre pacchetti di Gemme e il Pacchetto Premium di Benvenuto acquistabile una sola volta, compresa la gestione degli acquisti in sospeso e il ripristino dei diritti.",
        "Aggiunti il flusso giornaliero di Gemme con ricompensa pubblicitaria, i controlli del consenso e un recupero affidabile quando una pubblicità, la connessione a Billing o la finalizzazione di un acquisto vengono interrotte.",
        "Introdotti titoli innati degli eroi, ordinamento della formazione per classe base, schede delle abilità di promozione e strumenti più chiari per far avanzare gli eroi.",
        "Associati gli obiettivi di Play Games a ogni dungeon e raid e configurati gli identificatori dei servizi della piattaforma di produzione.",
        "Migliorati navigazione tattile, selezione della squadra e dell'equipaggiamento, rapporti di battaglia e ricompense, Impostazioni e guida di riferimento alle funzionalità.",
        "Ridotte le dimensioni dei download Android tramite build di rilascio solo ARM64, prive di simboli, e texture ottimizzate.",
        "Ampliata la convalida della versione per progressione, raid, Rune, Play Games, salvataggi cloud, acquisti, diritti Premium, comportamento offline e aggiornamenti supportati."
      ]
    },
    {
      version: "1.01",
      title: "Raid e servizi della piattaforma",
      date: "15 luglio 2026",
      status: "Aggiornamento per test chiuso",
      notes: [
        "I raid hanno ricevuto arene più grandi, schede di combattimento più chiare, formazioni su cinque colonne e schede separate Battaglia e Informazioni.",
        "Tutti e quattro i raid sono stati ribilanciati, compresi i limiti alle cure di Rootbound e un comportamento più chiaro degli scontri con i boss.",
        "Gli eroi pronti alla promozione sono diventati più facili da individuare nella formazione e nelle interfacce degli eroi.",
        "Nuove notifiche segnalano creazioni completate, posta in arrivo, aggiornamenti del Negozio, rinnovi giornalieri dei raid e risultati dei raid.",
        "Impostazioni, finestre, Inventario, creazione, scorrimento e controlli di selezione sono diventati più facili da usare sugli schermi tattili.",
        "Google Play Games ha aggiunto profili giocatore Android, obiettivi e classifiche.",
        "La presentazione dei bottini di dungeon e raid ha ricevuto illustrazioni dedicate e resoconti delle ricompense più chiari."
      ]
    },
    {
      version: "1.0",
      title: "Prima build per test chiuso",
      date: "15 luglio 2026",
      status: "Base del test chiuso",
      notes: [
        "Pubblicata la prima base per test chiuso su Android e Windows, con interfaccia mobile orientata al ritratto e supporto desktop.",
        "Introdotto il combattimento automatico a turni del gruppo, con ordine basato sulla Destrezza, selezione del bersaglio ponderata dalla Minaccia, abilità attive e passive, effetti di stato, feedback dei colpi e penalità in PE alla morte.",
        "Aggiunte 11 classi base reclutabili e i relativi alberi di promozione a due rami: 55 stadi di classe tra eroi base, specializzati ed élite.",
        "Aggiunti attributi degli eroi, statistiche di combattimento avanzate, restrizioni dell'equipaggiamento, alberi delle classi, scelte di promozione, titoli e ispezione dettagliata degli eroi.",
        "Avviata la campagna di 12 dungeon con gruppi di spedizione simultanei, obiettivi, progressione degli sblocchi, posta narrativa, materiali, boss e fino a 12 ore di recupero del combattimento offline.",
        "Aggiunti quattro raid per gruppi numerosi con formazioni dedicate, catene di incontri, boss, progressione giornaliera e ricompense da raid.",
        "Aggiunti Taverna, Inventario, Laboratorio, scoperta degli oggetti, gestione dell'equipaggiamento, potenziamenti della città e le prime 16 ricette.",
        "Aggiunti il sistema originale dell'Ascensione e i traguardi a lungo termine degli accessori per gli eroi avanzati.",
        "Aggiunti stile medievale dell'interfaccia, scorrimento tramite trascinamento, viste a griglia, tagli delle monete, effetti di combattimento, musica originale e schermate di catalogo e guida ampliate.",
        "Aggiunti progressi locali crittografati e il flusso cloud opzionale originale nei dati dell'app Google Drive, con selezione esplicita in caso di conflitto."
      ]
    }
  ],

  privacyPolicy: {
    title: "Informativa sulla privacy di Idle Party Dungeon",
    effectiveDate: "16 luglio 2026",
    intro: "Idle Party Dungeon è sviluppato e pubblicato da BroglioGames. Questa informativa spiega come il gioco gestisce le informazioni.",
    sections: [
      {
        id: "information-handled",
        title: "Informazioni gestite dal gioco",
        paragraphs: [
          "Il gioco memorizza localmente sul dispositivo i progressi, le impostazioni e gli eventuali nomi personalizzati assegnati agli eroi. I progressi e i nomi personalizzati sono conservati in un file di salvataggio crittografato; alcune preferenze, come le impostazioni audio, sono conservate in un file locale separato. I dati di gioco comprendono elementi quali eroi e relativi titoli, inventario, creazione, raid, posta, stato del negozio, stato delle notifiche, diritti Premium e hash unidirezionali usati per impedire l'accredito duplicato degli acquisti. Un identificatore del profilo di salvataggio generato casualmente e un hash unidirezionale abbreviato ricavato dall'identificatore del dispositivo sono inclusi nei metadati per distinguere le versioni dei salvataggi e prevenire conflitti. Non vengono usati per pubblicità o tracciamento e non vengono inviati a BroglioGames.",
          "Su Android, Google Play Games Services può gestire l'identificatore giocatore di Play Games, il profilo e il nome visualizzato, l'avanzamento degli obiettivi, i punteggi delle classifiche e un'istantanea privata di Saved Games contenente i dati di gioco descritti sopra. Il gioco mostra temporaneamente il nome di Play Games durante l'esecuzione, ma non lo aggiunge al salvataggio. Google gestisce l'autenticazione della piattaforma e l'archiviazione cloud; Idle Party Dungeon non riceve né conserva la password Google. Le cronologie divergenti tra dispositivo e cloud non vengono unite automaticamente: il gioco conserva copie di recupero crittografate e chiede quale cronologia continuare.",
          "La versione Android usa Google AdMob per offrire pubblicità con ricompensa facoltative. Google e i suoi partner pubblicitari possono trattare informazioni sul dispositivo, identificatori pubblicitari quando disponibili, indirizzo IP, interazioni con gli annunci, dati diagnostici e scelte sul consenso per mostrare e misurare la pubblicità, prevenire frodi e, dove consentito, personalizzare gli annunci. Il gioco richiede il consenso pubblicitario applicabile prima di richiedere gli annunci.",
          "Gli acquisti del Pacchetto Premium sono elaborati da Google Play Billing. Google tratta dati di pagamento, cronologia degli acquisti, imposte, dati antifrode e ricevute. Idle Party Dungeon riceve l'identificatore del prodotto, lo stato dell'acquisto e il token necessari per sbloccare e ripristinare l'acquisto; non riceve i dati completi della carta o del conto bancario."
        ]
      },
      {
        id: "use",
        title: "Come vengono usate le informazioni",
        paragraphs: [
          "Le informazioni vengono usate per far funzionare il gioco, salvare e ripristinare i progressi localmente e tramite Play Games Saved Games, fornire obiettivi e classifiche, mostrare pubblicità con ricompensa facoltative, prevenire frodi pubblicitarie e di pagamento ed erogare o ripristinare gli acquisti. BroglioGames non vende informazioni personali.",
          "Google tratta le informazioni relative a Play Games, AdMob, consenso e Google Play Billing secondo l'[Informativa sulla privacy di Google](https://policies.google.com/privacy). Anche i partner pubblicitari che partecipano a una richiesta AdMob possono trattare informazioni in base alle scelte sul consenso e ai controlli per publisher di Google."
        ]
      },
      {
        id: "community",
        title: "Community e collegamenti esterni",
        paragraphs: [
          "La schermata Impostazioni include un collegamento facoltativo alla community di Idle Party Dungeon su Discord. Selezionandolo si apre Discord o il browser. Il gioco non invia a Discord i dati del salvataggio o il profilo Play Games, ma Discord e il browser possono trattare autonomamente informazioni quali indirizzo IP, dati del dispositivo o del browser, informazioni dell'account Discord e attività su Discord. Il trattamento di tali informazioni da parte di Discord è descritto nell'[Informativa sulla privacy di Discord](https://discord.com/privacy). Le informazioni pubblicate volontariamente nella community vengono condivise con Discord e con le persone che possono accedervi."
        ]
      },
      {
        id: "retention-deletion",
        title: "Archiviazione, conservazione ed eliminazione",
        paragraphs: [
          "I dati locali del gioco restano sul dispositivo finché non usi **Impostazioni > Play Games > Elimina dati**, cancelli i dati dell'app o la disinstalli, compatibilmente con il comportamento di backup della piattaforma. Dopo una conferma esplicita, **Elimina dati** rimuove il salvataggio locale, le copie di backup e recupero, le impostazioni audio locali, i metadati di sincronizzazione cloud e l'istantanea privata Play Games Saved Games del gioco. Non elimina l'Account Google, il profilo Play Games, gli obiettivi, le voci delle classifiche, i registri del consenso pubblicitario o gli acquisti di Google Play; questi vengono conservati secondo le norme di Google e gestiti tramite i relativi controlli per account e privacy. Un acquisto non consumabile può essere ripristinato dall'account Google Play che lo ha effettuato. I contenuti pubblicati su Discord vengono conservati e possono essere gestiti secondo le norme e i controlli dell'account Discord."
        ]
      },
      {
        id: "children",
        title: "Minori",
        paragraphs: [
          "Idle Party Dungeon è un gioco fantasy destinato a un pubblico generale e non raccoglie consapevolmente informazioni personali da minori. I servizi Google sono controllati dall'Account Google dell'utente e dalle regole di Google su età e supervisione. L'integrazione pubblicitaria è contrassegnata come non rivolta ai minori o agli utenti sotto l'età del consenso; la dichiarazione sul pubblico di destinazione nella Play Console deve corrispondere al pubblico effettivamente selezionato dall'editore."
        ]
      },
      {
        id: "security",
        title: "Sicurezza",
        paragraphs: [
          "Vengono adottate misure tecniche ragionevoli per proteggere i dati di gioco memorizzati localmente. Le comunicazioni relative a Play Games, pubblicità, consenso e pagamenti sono gestite dagli SDK di Google. Nessun metodo di archiviazione o trasmissione può essere garantito come completamente sicuro."
        ]
      },
      {
        id: "changes",
        title: "Modifiche",
        paragraphs: [
          "Questa informativa può essere aggiornata quando cambiano le funzionalità del gioco o gli obblighi legali. La data di entrata in vigore indicata sopra verrà aggiornata in caso di modifiche sostanziali."
        ]
      },
      {
        id: "contact",
        title: "Contatti",
        paragraphs: [
          "Per domande sulla privacy o assistenza nell'eliminazione, contatta BroglioGames all'indirizzo [broglio096@gmail.com](mailto:broglio096@gmail.com)."
        ]
      }
    ]
  },

  quickstart: [
    {
      step: "01",
      title: "Recluta una formazione iniziale equilibrata",
      text: "La Taverna inizia con cinque offerte e cerca sempre di includere una classe guaritrice. La prima recluta costa 200 Monete; ogni eroe già posseduto aggiunge 100 Monete al costo del reclutamento successivo.",
      tip: "Un Guardian o Fighter, un Cleric o Bard e danni misti da Mischia, Distanza e Magia offrono l'inizio più sicuro."
    },
    {
      step: "02",
      title: "Avvia la Foresta degli Slime",
      text: "Apri Dungeon, scegli la Foresta degli Slime, schiera fino a quattro eroi disponibili, salva facoltativamente la formazione e avvia. Le battaglie sono automatiche e la spedizione si ripete finché non la interrompi.",
      tip: "Un eroe non può essere assegnato contemporaneamente a due dungeon o raid attivi."
    },
    {
      step: "03",
      title: "Raccogli, crea, equipaggia",
      text: "I PE dei dungeon vengono applicati subito agli eroi sopravvissuti; i materiali restano in attesa nella spedizione finché non li raccogli. Usa quei materiali e le Monete per creare equipaggiamento, poi assegna armi e armature di tipo compatibile.",
      tip: "Hai tre slot nella coda di creazione. Un lotto occupa un solo lavoro e annullare un lavoro incompleto rimborsa i costi riservati."
    },
    {
      step: "04",
      title: "Completa ogni obiettivo della storia",
      text: "Gli indicatori della campagna contano uccisioni, incontri o bersagli specifici. Se è richiesto un boss, completare l'indicatore forza il boss come incontro successivo. Sconfiggilo per aprire il dungeon seguente e la relativa posta narrativa.",
      tip: "Una sconfitta totale contro un boss forzato azzera la serie dell'obiettivo; ricomponi il gruppo o migliora l'equipaggiamento prima di riprovare."
    },
    {
      step: "05",
      title: "Promuovi e specializza",
      text: "Al livello 25 una classe base sceglie una delle due specializzazioni. Al livello 50 la specializzazione viene promossa alla classe élite associata e si azzera al livello 0, sbloccando subito l'Ascensione.",
      tip: "La promozione sostituisce l'insieme di abilità attive e passive: leggi entrambi i percorsi prima di scegliere."
    },
    {
      step: "06",
      title: "Preparati ai raid",
      text: "I traguardi della campagna rivelano quattro missioni raid. Paga una sola volta i requisiti in materiali e Monete per sbloccare i raid giornalieri, poi completa 15 incontri normali e il boss per ottenere Frammenti runici, materiali dei boss, famigli ed equipaggiamento da raid.",
      tip: "Avviare un raid giornaliero ne consuma l'ingresso. Fallire o abbandonare non lo rimborsa; un rinnovo costa 50 Gemme."
    }
  ],

  mechanics: [
    {
      id: "loop",
      eyebrow: "Il ciclo",
      title: "Recluta → schiera → raccogli → crea → avanza",
      summary: "Idle Party Dungeon gestisce contemporaneamente diversi sistemi persistenti di spedizione e laboratorio. Le decisioni strategiche riguardano assegnazione della formazione, schieramento, equipaggiamento, percorsi di classe e momento adatto per far avanzare una squadra.",
      bullets: [
        "Il combattimento è automatico e a turni; i combattenti vivi vengono ordinati per Destrezza all'inizio di un incontro o quando le statistiche in tempo reale vengono aggiornate.",
        "I PE sono divisi tra gli eroi vivi. I bottini restano associati al dungeon o al raid finché non vengono raccolti.",
        "Ogni dungeon attivo ha un proprio gruppo. I raid usano una formazione separata ma attingono dagli stessi eroi, indisponibili mentre sono schierati.",
        "I rapporti registrano tempo trascorso, uccisioni, morti, PE lordi, PE persi, PE netti, quantità degli oggetti e valori orari.",
        "Bestiario, catalogo delle classi, catalogo degli oggetti, riferimento degli stati e posta narrativa trasformano le scoperte in voci di consultazione permanenti."
      ]
    },
    {
      id: "offline",
      eyebrow: "Persistenza",
      title: "Il combattimento offline ha un limite; la creazione recupera tutto il tempo",
      summary: "Quando viene ripristinato un salvataggio, il combattimento di dungeon e raid simula al massimo 12 ore. La creazione avanza invece per l'intero intervallo trascorso, elaborando in ordine i lavori in coda.",
      bullets: [
        "La simulazione del combattimento converte i secondi trascorsi in intervalli completi usando il tempo di turno di ciascuna attività.",
        "I registri delle battaglie offline vengono omessi, ma PE, morti, avanzamento degli obiettivi e bottini vengono calcolati.",
        "I lavori di creazione continuano oltre il limite di combattimento di 12 ore e possono completare più lotti in coda durante una lunga assenza.",
        "Il gioco salva periodicamente ogni 30 secondi e in occasione di importanti cambiamenti di stato; al salvataggio principale si affianca una copia locale di backup.",
        "Le build Android supportate possono riconciliare un'istantanea privata crittografata di Google Play Games e conservare come copia di recupero il lato non scelto di un conflitto."
      ]
    },
    {
      id: "heroes",
      eyebrow: "Regole della formazione",
      title: "Ogni eroe ha una configurazione individuale",
      summary: "Un eroe combina un set di classe, progressione di carriera, titolo, quattro slot di equipaggiamento, sei Rune, un Percorso Ascendente e un famiglio da spedizione facoltativo.",
      bullets: [
        "La capacità iniziale della formazione è 8. I potenziamenti della Taverna e fino a tre espansioni del Negozio settimanale aggiungono slot.",
        "Gli eroi possono essere rinominati, riordinati, ordinati, promossi, equipaggiati e rimossi quando non sono schierati.",
        "Rimuovere un eroe restituisce gli oggetti equipaggiati e rimborsa ogni Frammento runico investito.",
        "Gli slot sono Arma, Armatura, Accessorio 1 e Accessorio 2. La proprietà Equipaggiamento unico consente una sola copia di quell'oggetto per eroe.",
        "Le formazioni salvate ricordano le posizioni esatte, comprese quelle vuote; al caricamento vengono segnalati gli eroi rimossi o non disponibili."
      ]
    },
    {
      id: "failure",
      eyebrow: "Sconfitta",
      title: "Le spedizioni si riprendono, ma la sconfitta rallenta l'avanzata",
      summary: "Un eroe sconfitto perde il 10% dei PE già ottenuti verso il livello corrente. Se cade tutto il gruppo, la spedizione ricrea le entità degli eroi e avvia automaticamente un altro incontro.",
      bullets: [
        "Solo gli eroi vivi condividono i PE di un mostro sconfitto.",
        "Una sconfitta totale contro un boss della storia azzera la serie di completamento corrente e obbliga a riempire di nuovo l'indicatore prima del tentativo successivo.",
        "Una sconfitta nel raid termina il raid e registra un tentativo fallito; l'ingresso giornaliero resta consumato.",
        "Ogni cinque incontri normali del raid, il passaggio all'ala successiva ripristina il 10% di Salute e Mana degli eroi vivi.",
        "I bottini in attesa vengono conservati fino alla raccolta, salvo che una prova speciale senza ricompense le disattivi esplicitamente."
      ]
    },
    {
      id: "mist",
      eyebrow: "Ambiente",
      title: "La Nebbia amplifica gli attacchi e aumenta la Schivata nemica",
      summary: "La Nebbia rafforza i danni in uscita degli attaccanti con Danno da Nebbia e aggiunge Schivata ai nemici nei dungeon configurati e nelle fasce alte della Torre. Riduzione Nebbia contrasta entrambe le interazioni.",
      bullets: [
        "Nebbia effettiva = Nebbia × (1 − Riduzione Nebbia del bersaglio ÷ 100).",
        "Moltiplicatore Nebbia = 1 + (Nebbia effettiva ÷ 100) × (Danno da Nebbia dell'attaccante ÷ 100).",
        "Schivata nemica da Nebbia = round(Nebbia × tasso di Schivata dell'attività). Un eroe attaccante rimuove la stessa percentuale di questa Schivata derivata dalla Nebbia indicata dalla sua Riduzione Nebbia.",
        "Riduzione Nebbia non può portare sotto 0 né la Nebbia effettiva né il contributo di Schivata derivato dalla Nebbia.",
        "I dungeon avanzati possono iniziare con la Nebbia e modificarla periodicamente; i Piani 71–100 della Torre usano fasce fisse che aumentano verso l'Apice.",
        "Le configurazioni affini alla magia e alcuni nemici possiedono Danno da Nebbia innato; equipaggiamento, famigli ed effetti possono aggiungere Riduzione Nebbia."
      ]
    },
    {
      id: "discovery",
      eyebrow: "Informazioni",
      title: "La scoperta fa parte della progressione",
      summary: "I cataloghi nel gioco nascondono intenzionalmente i contenuti non ancora incontrati, ma questo Codex presenta l'intero sistema di regole della 1.08 come riferimento strategico completo.",
      bullets: [
        "Un mostro entra nel Bestiario quando la sua ondata viene vista per la prima volta.",
        "Un oggetto viene scoperto tramite ritrovamento, raccolta, creazione, acquisto, ripristino dell'equipaggiamento o ricompensa esplicita.",
        "La posta narrativa comunica sblocchi dei dungeon, missioni raid, primi Frammenti runici, prime vittorie e ritrovamenti di accessori unici.",
        "Le pagine di riferimento riuniscono in un solo luogo regole attuali, valori esatti e consigli pratici.",
        "Tutte le tabelle percentuali del sito mostrano le probabilità base, salvo che accanto sia indicato un moltiplicatore modificato."
      ]
    }
  ],

  formulas: [
    {
      name: "Salute massima",
      formula: "(PV base + 10 × (livello carriera − 1) + 5 × Forza + PV piatti dell'equipaggiamento) × crescita élite × titolo × Runa della Vitalità",
      details: "La crescita élite aumenta linearmente fino a +10% al livello élite 50. I titoli di Salute aggiungono il 10%; Vitalità aggiunge l'1,5% per grado della Runa."
    },
    {
      name: "Attacco",
      formula: "(attributo primario + 2 × (livello carriera − 1) + Attacco piatto dell'equipaggiamento) × crescita élite × titolo × Runa della Potenza",
      details: "L'attributo primario è Forza per Mischia, Destrezza per Distanza e Intelligenza per Magia."
    },
    {
      name: "Intervallo di danno",
      formula: "minimo = floor(0,70 × Attacco); massimo = ceil(1,30 × Attacco)",
      details: "Ogni colpo base estrae uniformemente un valore tra minimo e massimo inclusi, prima dei modificatori al danno inflitto, del danno critico, della Nebbia e della difesa."
    },
    {
      name: "Danno base",
      formula: "danno estratto × moltiplicatori in uscita × moltiplicatore critico × moltiplicatore Nebbia × (1 − riduzione difensiva ÷ 100)",
      details: "Gli attacchi degli eroi usano ×2,5 il danno estratto prima degli altri modificatori. Gli attacchi delle classi guaritrici usano il 35% di tale valore. Anche gli attacchi dei mostri usano ×2,5. I colpi riusciti finali infliggono almeno 1 danno."
    },
    {
      name: "Difesa",
      formula: "riduzione = Difesa o Difesa magica corrispondente + bonus attivi e passivi",
      details: "Gli attacchi fisici usano Difesa; quelli magici usano Difesa magica. Difesa, Difesa magica e Schivata degli eroi hanno un limite dell'80%; Probabilità critica e Immunità del 100%. L'ignoramento della Difesa viene applicato moltiplicativamente alla riduzione."
    },
    {
      name: "Schivata",
      formula: "tiro 1–100 ≤ Schivata effettiva → evita l'intero colpo diretto",
      details: "La Schivata effettiva include effetti temporanei e modifiche passive specifiche dell'attaccante. Gli effetti con colpo garantito ignorano il tiro ordinario."
    },
    {
      name: "Colpo critico",
      formula: "tiro 1–100 ≤ Probabilità critica effettiva → moltiplica per Danno critico ÷ 100",
      details: "Il Danno critico base degli eroi è 150%. La Probabilità critica può essere modificata da effetti, passive, titoli, equipaggiamento, Rune, famigli e alcuni segni dei raid."
    },
    {
      name: "Selezione per Minaccia",
      formula: "probabilità del bersaglio = max(1, Minaccia del bersaglio + Minaccia aumentata) ÷ somma dei pesi di tutti i candidati vivi",
      details: "Intercetta può reindirizzare un attacco diretto dopo la selezione del bersaglio. La Minaccia è un peso, non una provocazione garantita."
    },
    {
      name: "Mana per azione base",
      formula: "8 + round(2 × √Intelligenza), poi modificatori del percorso e delle passive",
      details: "Gli eroi usano un indicatore abilità da 100 punti. L'indicatore pieno viene consumato quando si tenta l'abilità attiva; Silenzio ne impedisce l'uso. I mostri che usano abilità attive seguono lo stesso incremento a radice quadrata, con un limite di 30 punti per azione."
    },
    {
      name: "Cura",
      formula: "cura base × statistica Cura di chi cura × modificatori della fase del raid × anti-cura del bersaglio",
      details: "Riduzione cure ha un limite del 95%. Pressione Senza Luce ≥70 applica ×0,80 ed Eclissi Totale applica ×0,65 solo alle cure originate da azioni o passive. Rigenerazione, Rubavita, cure periodiche e autocure dirette ignorano questi due limiti dei raid. Le cure in eccesso diventano una barriera solo quando una passiva lo dichiara esplicitamente."
    },
    {
      name: "Probabilità di ritrovamento standard",
      formula: "min(100%, probabilità base % × moltiplicatore di progressione del dungeon × moltiplicatore Premium globale)",
      details: "I ritrovamenti con probabilità base del 100% restano al 100%. Il bonus di Benvenuto porta il moltiplicatore globale a 1,10. I bottini esclusivi dei boss della storia usano solo il moltiplicatore Premium globale."
    },
    {
      name: "Composizione degli incontri",
      formula: "probabilità della squadra = peso della squadra ÷ somma dei pesi delle squadre non boss",
      details: "I gruppi boss sono esclusi dagli incontri casuali e compaiono solo quando lo richiedono l'obiettivo o la sequenza del raid. I boss dei raid seguono sempre 15 incontri normali completati."
    }
  ],

  stats: [
    {name:"Forza", kind:"Attributo", text:"Aggiunge 5 PV massimi per punto ed è l'attributo primario di Attacco per gli eroi da Mischia."},
    {name:"Destrezza", kind:"Attributo", text:"Attributo primario di Attacco per gli eroi a Distanza. I combattenti vengono ordinati per Destrezza alla creazione dell'incontro e dopo l'aggiornamento delle statistiche in tempo reale."},
    {name:"Intelligenza", kind:"Attributo", text:"Attributo primario di Attacco per gli eroi Magici; aumenta inoltre il mana ottenuto per azione base con una crescita a radice quadrata."},
    {name:"Attacco", kind:"Offesa", text:"Determina l'intervallo base di danno ±30% usato dagli attacchi base e da molti calcoli della potenza delle abilità."},
    {name:"Salute", kind:"Difesa", text:"PV massimi. Le barriere assorbono i danni in arrivo prima dei PV, ma non aumentano i PV massimi."},
    {name:"Difesa", kind:"Difesa", text:"Riduzione in punti percentuali contro i danni da Mischia e a Distanza; per gli eroi ha un limite dell'80%."},
    {name:"Difesa magica", kind:"Difesa", text:"Riduzione in punti percentuali contro i danni Magici; per gli eroi ha un limite dell'80%."},
    {name:"Schivata", kind:"Schivata", text:"Probabilità percentuale di evitare un attacco base diretto o un'abilità dannosa; per gli eroi ha un limite dell'80%."},
    {name:"Probabilità critica", kind:"Offesa", text:"Probabilità percentuale che un colpo usi il Danno critico; ha un limite del 100%."},
    {name:"Danno critico", kind:"Offesa", text:"Moltiplicatore del danno in caso di critico. Un valore visualizzato del 150% corrisponde a danni ×1,5; il valore grezzo ha un limite del 300%."},
    {name:"Immunità", kind:"Resistenza", text:"Probabilità percentuale di resistere a un nuovo stato nocivo; gli eroi base iniziano dal 10% prima delle aggiunte di classe ed equipaggiamento."},
    {name:"Minaccia", kind:"Bersaglio", text:"Contributo ponderato alla selezione diretta dei bersagli nemici. Una Minaccia maggiore aumenta la probabilità, ma da sola non è mai assoluta."},
    {name:"Probabilità di contrattacco", kind:"Difesa", text:"Probabilità di riflettere danni dopo un colpo in arrivo riuscito, quando è disponibile potenza di contrattacco."},
    {name:"Danno da contrattacco", kind:"Difesa", text:"Percentuale del danno ai PV ricevuto che viene riflessa; la potenza base del contrattacco fisico è 50% e il valore finale ha un limite del 150%."},
    {name:"Rubavita", kind:"Sostentamento", text:"Cura l'attaccante di una percentuale del danno ai PV inflitto; ha un limite del 50%."},
    {name:"Rigenerazione", kind:"Sostentamento", text:"Ripristina una quantità fissa di PV durante l'elaborazione del turno dell'entità; ha un limite di 50."},
    {name:"Cura", kind:"Supporto", text:"Percentuale applicata alle cure effettuate e alle autocure pertinenti; ha un limite del 300%."},
    {name:"Decadimento", kind:"Effetto", text:"Danno Magico periodico incorporato, inflitto durante l'elaborazione del turno dell'entità colpita."},
    {name:"Danno da Nebbia", kind:"Ambiente", text:"Scala i danni inflitti in base all'esposizione effettiva del bersaglio alla Nebbia."},
    {name:"Riduzione Nebbia", kind:"Ambiente", text:"Riduce la percentuale di Nebbia usata contro questo bersaglio."},
    {name:"Tasso PE", kind:"Progressione", text:"Moltiplica la quota di PE dell'eroe prima dei moltiplicatori globali e del dungeon."}
  ],

  statuses: [
    {id:"damage_buff", name:"Danni aumentati", kind:"buff", text:"Aumenta tutti i danni inflitti della percentuale mostrata.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"crit_damage_buff", name:"Danno critico aumentato", kind:"buff", text:"Aumenta il moltiplicatore di danno dei colpi critici del valore mostrato.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"defense_buff", name:"Difesa aumentata", kind:"buff", text:"Aggiunge alla Difesa i punti percentuali mostrati contro i danni da Mischia e a Distanza.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"mdef_buff", name:"Difesa magica aumentata", kind:"buff", text:"Aggiunge alla Difesa magica i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"evade_buff", name:"Schivata aumentata", kind:"buff", text:"Aggiunge alla Schivata effettiva i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"crit_buff", name:"Probabilità critica aumentata", kind:"buff", text:"Aggiunge alla Probabilità critica effettiva i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"counter_buff", name:"Probabilità di contrattacco aumentata", kind:"buff", text:"Aggiunge alla Probabilità di contrattacco i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"counter_power", name:"Potenza di contrattacco aumentata", kind:"buff", text:"Aggiunge al danno da contrattacco riflesso i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"immunity_buff", name:"Immunità aumentata", kind:"buff", text:"Aggiunge i punti percentuali mostrati alla probabilità di resistere a nuovi stati nocivi.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"hot", name:"Rigenerazione", kind:"buff", text:"Ripristina i PV mostrati all'inizio di ogni turno; viene applicata dalle abilità attive.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"healer_hot", name:"Rigenerazione", kind:"buff", text:"Ripristina i PV mostrati all'inizio di ogni turno; viene applicata dalla passiva d'azione di un guaritore.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"healing_buff", name:"Cure aumentate", kind:"buff", text:"Aumenta le cure effettuate e le autocure dei punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"threat_buff", name:"Minaccia aumentata", kind:"buff", text:"Aggiunge la Minaccia mostrata alla selezione ponderata dei bersagli nemici.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"intercept", name:"Intercettazione", kind:"buff", text:"Reindirizza a questa entità gli attacchi nemici diretti agli alleati finché resta attivo.", stacking:"Nessuna intensità visibile."},
    {id:"momentum", name:"Slancio", kind:"buff", text:"Aggiunge danni inflitti mentre una passiva di classe accumula slancio durante l'incontro.", stacking:"Additivo."},
    {id:"attack_down", name:"Attacco ridotto", kind:"debuff", text:"Riduce tutti i danni inflitti della percentuale mostrata.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"vulnerability", name:"Vulnerabilità", kind:"debuff", text:"Aumenta i danni diretti e il DoT ricevuti della percentuale mostrata.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"pattern_vulnerability", name:"Vulnerabilità", kind:"debuff", text:"Aumenta i danni ricevuti mentre l'Occhio di Veyra osserva tipi distinti di attacco del gruppo.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"echo_exposure", name:"Vulnerabilità", kind:"debuff", text:"Aumenta i danni ricevuti dopo aver soddisfatto la condizione di contrasto della legge dell'Eco attuale.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"dot", name:"DoT", kind:"debuff", text:"Infligge il danno Magico mostrato all'inizio di ogni turno.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"silence", name:"Silenzio", kind:"debuff", text:"Impedisce l'uso di un'abilità attiva finché lo stato permane.", stacking:"Nessuna intensità visibile."},
    {id:"evade_down", name:"Schivata ridotta", kind:"debuff", text:"Sottrae dalla Schivata effettiva i punti percentuali mostrati.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"anti_heal", name:"Riduzione delle cure", kind:"debuff", text:"Riduce tutte le cure ricevute della percentuale mostrata, fino a un massimo del 95%.", stacking:"Si applica il valore più alto; la durata si rinnova."},
    {id:"linked", name:"Legame radicale", kind:"special", text:"Ogni Nodo Radice vivo conferisce a questo nemico +4 Difesa e +1% ai danni. Durante la propria azione recupera il 3% dei PV massimi per nodo, fino al 9%.", stacking:"Persiste per l'incontro."},
    {id:"low_hp_barrier_cooldown", name:"Recupero barriera", kind:"special", text:"Impedisce alla passiva della barriera a bassa Salute di attivarsi di nuovo finché non scade il contatore.", stacking:"Stato di recupero nascosto."}
  ],

  titles: [
    {id:"stalwart", name:"Il Tenace", stat:"Difesa", bonus:10, unit:"punti"},
    {id:"warded", name:"Il Protetto", stat:"Difesa magica", bonus:10, unit:"punti"},
    {id:"nimble", name:"L'Agile", stat:"Schivata", bonus:10, unit:"punti"},
    {id:"keen_eyed", name:"Occhio di falco", stat:"Probabilità critica", bonus:10, unit:"punti"},
    {id:"vigorous", name:"Il Vigoroso", stat:"Salute", bonus:10, unit:"percento"},
    {id:"forceful", name:"Il Possente", stat:"Attacco", bonus:10, unit:"percento"}
  ],

  runes: [
    {id:"might", name:"Runa della Potenza", stat:"Attacco", perRank:1, unit:"%", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-might.png", text:"Aumenta permanentemente l'Attacco dell'1% per grado."},
    {id:"vitality", name:"Runa della Vitalità", stat:"Salute", perRank:1.5, unit:"%", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-vitality.png", text:"Aumenta permanentemente la Salute massima dell'1,5% per grado."},
    {id:"agility", name:"Runa dell'Agilità", stat:"Schivata", perRank:1, unit:" punto", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-agility.png", text:"Aggiunge 1 punto percentuale di Schivata per grado."},
    {id:"precision", name:"Runa della Precisione", stat:"Probabilità critica", perRank:1, unit:" punto", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-precision.png", text:"Aggiunge 1 punto percentuale di Probabilità critica per grado."},
    {id:"bulwark", name:"Runa del Baluardo", stat:"Difesa", perRank:1, unit:" punto", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-bulwark.png", text:"Aggiunge 1 punto percentuale di Difesa per grado."},
    {id:"warding", name:"Runa della Protezione", stat:"Difesa magica", perRank:1, unit:" punto", material:"Verdeggiante → Mareale → Astrale → Eclissi", icon:"res://resources/runes/rune-warding.png", text:"Aggiunge 1 punto percentuale di Difesa magica per grado."}
  ],

  ascension: [
    {
      id:"ember_crown", name:"La Corona di Braci", role:"DPS", color:"#e36b32", icon:"res://resources/ui/ascension_ember_crown.png",
      text:"Un sentiero marziale fatto di colpi decisivi, attacchi critici e finali spietati.",
      skills:[
        {name:"Potere cinereo", tier:0, ranks:5, cost:1, text:"Ottieni +1% Forza per grado."},
        {name:"Impulso del cacciatore", tier:0, ranks:5, cost:1, text:"Ottieni +1% Destrezza per grado."},
        {name:"Intuito di brace", tier:0, ranks:5, cost:1, text:"Ottieni +1% Intelligenza per grado."},
        {name:"Vene arse", tier:0, ranks:5, cost:1, text:"Ottieni +1% alla Salute massima per grado."},
        {name:"Radianza seghettata", tier:1, ranks:3, cost:2, text:"Ottieni +2% Danno critico per grado."},
        {name:"Furia d'apertura", tier:1, ranks:3, cost:2, text:"Ottieni +2% Probabilità di colpo critico per grado."},
        {name:"Fame del duellante", tier:1, ranks:3, cost:2, text:"Ottieni +1% Rubavita per grado."},
        {name:"Concentrazione spietata", tier:2, ranks:3, cost:2, text:"Infliggi +2% di danni per grado ai nemici sotto metà Salute."},
        {name:"Filo dirompente", tier:2, ranks:3, cost:2, text:"Gli attacchi ignorano il 2% della Difesa nemica per grado."},
        {name:"Corona di ceneri", tier:3, ranks:1, cost:1, text:"Unico: infliggi l'8% di danni in più."}
      ]
    },
    {
      id:"stone_aegis", name:"L'Egida di Pietra", role:"Tank", color:"#b68b4b", icon:"res://resources/ui/ascension_stone_aegis.png",
      text:"Un giuramento di resistenza che trasforma un eroe nell'ultimo, inamovibile baluardo del gruppo.",
      skills:[
        {name:"Sangue adamantino", tier:0, ranks:5, cost:1, text:"Ottieni +1% alla Salute massima per grado."},
        {name:"Addestramento del bastione", tier:0, ranks:5, cost:1, text:"Ottieni +1% Forza per grado."},
        {name:"Vigore del giuramento", tier:0, ranks:5, cost:1, text:"Ottieni +1% Intelligenza per grado."},
        {name:"Riflessi di pietra", tier:0, ranks:5, cost:1, text:"Ottieni +1% Destrezza per grado."},
        {name:"Presenza imperiosa", tier:1, ranks:3, cost:2, text:"Ottieni +1 Minaccia per grado."},
        {name:"Baluardo saldo", tier:1, ranks:3, cost:2, text:"Ottieni +1 Difesa e Difesa magica per grado."},
        {name:"Muro di rappresaglia", tier:1, ranks:3, cost:2, text:"Ottieni +2% Probabilità di contrattacco per grado."},
        {name:"Resistenza sacra", tier:2, ranks:3, cost:2, text:"Ottieni +1 Difesa e Difesa magica per grado finché sei a piena Salute."},
        {name:"Peso delle montagne", tier:2, ranks:3, cost:2, text:"Scendere sotto il 35% della Salute genera una barriera pari al 2% della Salute massima per grado."},
        {name:"Ultima cittadella", tier:3, ranks:1, cost:1, text:"Unico: subisci l'8% di danni in meno."}
      ]
    },
    {
      id:"wellspring_grace", name:"Grazia della sorgente", role:"Guaritore", color:"#6bc6a0", icon:"res://resources/ui/ascension_wellspring_grace.png",
      text:"Un sentiero benevolo la cui luce vivente sostiene, protegge e rigenera i feriti.",
      skills:[
        {name:"Acque vive", tier:0, ranks:5, cost:1, text:"Ottieni +1% Intelligenza per grado."},
        {name:"Mani pazienti", tier:0, ranks:5, cost:1, text:"Ottieni +1% Destrezza per grado."},
        {name:"Fermezza radicata", tier:0, ranks:5, cost:1, text:"Ottieni +1% Forza per grado."},
        {name:"Sorgenti vitali", tier:0, ranks:5, cost:1, text:"Ottieni +1% alla Salute massima per grado."},
        {name:"Misericordia traboccante", tier:1, ranks:3, cost:2, text:"Aumenta del 2% le cure effettuate per grado."},
        {name:"Luce in fiore", tier:1, ranks:3, cost:2, text:"Ottieni +1 Rigenerazione per grado."},
        {name:"Grazia disperata", tier:1, ranks:3, cost:2, text:"Ottieni +2% Immunità agli stati per grado."},
        {name:"Ritmo luminoso", tier:2, ranks:3, cost:2, text:"Dopo aver usato un'abilità, cura l'alleato più ferito del 2% della sua Salute massima per grado."},
        {name:"Sorgente profonda", tier:2, ranks:3, cost:2, text:"Le cure conferiscono una barriera pari all'1% della Salute massima del bersaglio per grado."},
        {name:"Ritornello dell'alba", tier:3, ranks:1, cost:1, text:"Unico: aumenta dell'8% tutte le cure effettuate."}
      ]
    },
    {
      id:"tempest_chorus", name:"Il Coro della Tempesta", role:"Area ed effetti", color:"#6daee8", icon:"res://resources/ui/ascension_tempest_chorus.png",
      text:"Un canto tempestoso che propaga gli attacchi tra i nemici e trasforma ogni impatto in una benedizione o una maledizione.",
      skills:[
        {name:"Portata della tempesta", tier:0, ranks:5, cost:1, text:"Ottieni +1% Destrezza per grado."},
        {name:"Corrente risonante", tier:0, ranks:5, cost:1, text:"Ottieni +1% Intelligenza per grado."},
        {name:"Carica statica", tier:0, ranks:5, cost:1, text:"Ottieni +1% Forza per grado."},
        {name:"Tempesta persistente", tier:0, ranks:5, cost:1, text:"Ottieni +1% alla Salute massima per grado."},
        {name:"Marchio della burrasca", tier:1, ranks:3, cost:2, text:"Ottieni +2% Probabilità di colpo critico per grado."},
        {name:"Cumulonembo", tier:1, ranks:3, cost:2, text:"Ottieni +2% Danno critico per grado."},
        {name:"Danza di burrasca", tier:1, ranks:3, cost:2, text:"Ottieni +2% Schivata per grado."},
        {name:"Tuono incitante", tier:2, ranks:3, cost:2, text:"Usare un'abilità ha +4% di probabilità per grado di conferire a tutti gli alleati +10% ai danni per 2 turni."},
        {name:"Fronte di tempesta", tier:2, ranks:3, cost:2, text:"Le abilità che colpiscono tutti i nemici infliggono +2% di danni per grado."},
        {name:"Occhio della tempesta", tier:3, ranks:1, cost:1, text:"Unico: aumenta dell'8% danni, cure dirette, barriere, potenziamenti e penalità numerici delle abilità attive."}
      ]
    }
  ],

  petEffects: [
    {id:"attack", name:"Attacco", base:2, unit:"%"},
    {id:"healing", name:"Cura", base:3, unit:" punti"},
    {id:"magic_defense", name:"Difesa magica", base:2, unit:" punti"},
    {id:"regeneration", name:"Rigenerazione", base:2, unit:""},
    {id:"immunity", name:"Immunità", base:1, unit:" punto"},
    {id:"mist_reduction", name:"Riduzione Nebbia", base:3, unit:" punti"},
    {id:"max_hp", name:"PV massimi", base:4, unit:"%"},
    {id:"critical_chance", name:"Probabilità critica", base:1, unit:" punto"},
    {id:"critical_damage", name:"Danno critico", base:3, unit:" punti"},
    {id:"evade", name:"Schivata", base:1, unit:" punto"},
    {id:"lifesteal", name:"Rubavita", base:1, unit:" punto"},
    {id:"defense", name:"Difesa", base:2, unit:" punti"},
    {id:"threat", name:"Minaccia", base:1, unit:""},
    {id:"counter_chance", name:"Probabilità di contrattacco", base:1, unit:" punto"},
    {id:"counter_damage", name:"Danno da contrattacco", base:3, unit:" punti"},
    {id:"mana_gain", name:"Guadagno Mana", base:2, unit:"%"},
    {id:"drop_rate", name:"Tasso ritrovamenti", base:2, unit:"%"},
    {id:"exp_rate", name:"Tasso PE", base:2, unit:"%"}
  ],

  raidMechanics: {
    march_rootbound: {
      label:"Rete di Radici", color:"#6f984b",
      rules:[
        "Ogni incontro inizia con 2 nodi nell'Ala I, 3 nell'Ala II, 4 nell'Ala III e 4 per il boss; i nodi mancanti vengono aggiunti quando necessario.",
        "Ogni Nodo Radice vivo conferisce ai nemici collegati che non sono nodi +4 Difesa e +1% ai danni inflitti.",
        "Quando agisce un nemico collegato, recupera il 3% dei PV massimi per ogni nodo vivo, fino al 9%.",
        "I Nodi Radice subiscono +25% danni dagli attaccanti Magici o affetti da Decadimento e −20% dalle altre fonti.",
        "Al 70% dei PV, Orrun assorbe i nodi vivi: +5% alla statistica Attacco e +0,1% di rigenerazione dei PV massimi per nodo assorbito. Gli intervalli correnti del danno base e delle abilità non vengono ricalcolati dopo questa modifica all'Attacco. Al 40% compaiono due nuovi nodi.",
        "I due nodi evocati al 40% ripristinano subito ciascuno il 3% dei PV massimi durante le azioni di Orrun. I loro collegamenti a Difesa e danni restano inattivi finché uno dei due non muore.",
        "Orrun è costretto a riempire il mana ogni quinta azione del boss."
      ]
    },
    lightless_armada: {
      label:"Marea schiacciante", color:"#4c9db7",
      rules:[
        "La Pressione inizia a 20; l'incontro con il boss inizia a 30. Ogni azione nemica aggiunge 4 Pressione.",
        "A 100 Pressione, ogni eroe vivo subisce danni Magici pari al 10% dei PV massimi e la Pressione torna a 60.",
        "Uccidere un Fuoco Fatuo della Pressione ne rimuove 20; uccidere un Lampionaio Abissale ne rimuove 12.",
        "Il primo critico a Distanza di un'azione rimuove 3 Pressione; il primo critico Magico ne rimuove 1.",
        "Con Pressione pari o superiore a 40, gli eroi vivi perdono 10 punti percentuali di Schivata effettiva.",
        "Con Pressione pari o superiore a 70, le cure originate da azioni o passive sono moltiplicate per 0,80; Rigenerazione, Rubavita, cure periodiche e autocure dirette la ignorano. I nemici che entrano in un'ondata scalano Attacco e danni di ×(1 + Pressione ÷ 500).",
        "Ogni vittoria normale infligge prima danni Magici pari al 4% dei PV massimi e aggiunge 10 Pressione. Dopo le vittorie 5, 10 e 15 la Pressione torna a 20; solo la 5 e la 10 ripristinano anche il 10% di PV e Mana. La comparsa del boss imposta poi la Pressione a 30.",
        "Sotto 30 Pressione, Nhalassa ottiene il 20% di Vulnerabilità per 2 turni. I rinforzi compaiono al 75%, 50% e 25% dei PV del boss; Nhalassa riempie il mana ogni quarta azione del boss."
      ]
    },
    broken_sky_hunt: {
      label:"Quadrante della Costellazione", color:"#8070c5",
      summary:"Fai corrispondere il segno di Mischia, Distanza o Magia attuale con tre colpi dannosi riusciti prima che trascorrano 10 azioni degli eroi; lo stesso eroe può contribuire in azioni successive.",
      rules:[
        "Il segno inizia da Mischia e ruota Mischia → Distanza → Magia dopo ogni 10 azioni degli eroi.",
        "Tre colpi dannosi riusciti e corrispondenti devono andare a segno nella finestra di 10 azioni. Lo stesso eroe può contribuire di nuovo in un'azione successiva.",
        "Completare il segno rimuove una Fame Stellare e conferisce a ogni eroe vivo +12% ai danni e +10% alle cure per 2 turni.",
        "Ogni turno del segno infligge al gruppo danni Magici pari al 4% dei PV massimi, che venga completato o meno. Fallirlo aggiunge una Fame Stellare, fino a cinque.",
        "Ogni Fame Stellare conferisce ai nemici +4% ai danni inflitti. Allineamento e indicatore di completamento si azzerano al segno successivo.",
        "I checkpoint delle ali azzerano Fame Stellare, Allineamento, completamento e finestra di 10 azioni, mantenendo il segno corrente.",
        "Al 20% dei PV, Veyra ottiene +35% ai danni per 6 turni e avvia Divora lo Schema. Completare la costellazione corrente dopo l'inizio di Divora rimuove quel bonus ai danni."
      ]
    },
    last_road: {
      label:"Orologio dell'Eclissi", color:"#c3944d",
      rules:[
        "L'Alba dura 12 azioni degli eroi: Magia infligge +20% e Mischia −20% per entrambi gli schieramenti. Ogni cura positiva originata da azione o passiva aggiunge min(3, PV effettivamente ripristinati ÷ PV massimi del bersaglio × 10) Ultimaluce.",
        "Il Crepuscolo dura 12 azioni degli eroi: Mischia infligge +20% e Magia −20% per entrambi gli schieramenti. Ogni critico riuscito degli eroi aggiunge 5 Ultimaluce.",
        "L'Eclissi Totale dura 6 azioni degli eroi, moltiplica per 0,65 le cure originate da azioni o passive, inizia infliggendo al gruppo danni Magici pari al 10% dei PV massimi e poi torna all'Alba. Rigenerazione, Rubavita, cure periodiche e autocure dirette ignorano il moltiplicatore di cura della fase.",
        "I danni a Distanza sono neutrali durante Alba e Crepuscolo. La durata delle fasi conta le azioni degli eroi, non i round completi o i secondi.",
        "All'80% dei PV del boss compare un Cavaliere Senz'Alba; al 40% compaiono due Motori dell'Eclissi. Gira l'Orologio fa avanzare di 4 il contatore della fase corrente; Furto di Luce di un Serafino dell'Ultimaluce rimuove 15 Ultimaluce.",
        "Al 15% dei PV, 100 Ultimaluce vengono consumate per infliggere ad Aster Null il 35% di Attacco ridotto per 8 turni; altrimenti Aster ottiene +55% ai danni per 8 turni."
      ]
    }
  },

  probabilityFacts: [
    {id:"cluster", name:"Grappolo di Gemme per mostro del dungeon", value:"0.1%", detail:"Tiro base per ogni mostro del dungeon sconfitto, moltiplicato per il moltiplicatore globale dei ritrovamenti. Ogni grappolo raccolto si apre automaticamente."},
    {id:"gems", name:"Gemme in un grappolo", value:"1–5", detail:"1: 80% · 2: 12% · 3: 5% · 4: 2% · 5: 1%. Valore atteso: 1,32 Gemme."},
    {id:"title", name:"Un'offerta della Taverna possiede un titolo", value:"25%", detail:"In caso di successo viene scelto uniformemente uno dei sei titoli: probabilità assoluta del 4,1667% per uno specifico titolo in ciascuna offerta. Salute e Attacco sono ×1,10; Difesa, Difesa magica, Schivata e Probabilità critica ottengono 10 punti."},
    {id:"egg", name:"Un boss idoneo lascia il proprio uovo di famiglio", value:"15%", detail:"Si applica a ogni uccisione di un boss idoneo di dungeon o raid. Le uova di famiglia costano 75–300 Gemme in base al grado: 75 al Grado 3, 125 al Grado 5, 150 al Grado 6, 225 al Grado 9 e 300 al Grado 12."},
    {id:"rarity", name:"Rarità alla schiusa del famiglio — base", value:"74.5 / 20 / 5 / 0.5", detail:"Le probabilità base sono Comune 74,5%, Raro 20%, Epico 5% e Leggendario 0,5%, con 2, 3, 4 o 5 effetti distinti della famiglia. I potenziamenti permanenti dell'incubatoio portano la probabilità Leggendaria al 2%; la garanzia condivisa assicura il prossimo Leggendario dopo 100 insuccessi."},
    {id:"runeEarly", name:"Frammento runico da raid — nemico iniziale", value:"1.5%", detail:"Tiro su ogni mostro idoneo del raid che non sia un nodo, prima che il raid abbia completato 10 incontri."},
    {id:"runeLate", name:"Frammento runico da raid — nemico avanzato", value:"3%", detail:"Tiro dopo 10 vittorie normali: incontri 11–15 e rinforzi idonei del boss che non siano nodi. I Nodi Radice non effettuano mai tiri per ricompense specifiche del raid."},
    {id:"runeBoss", name:"Frammento runico da raid — boss", value:"10%", detail:"Separato dal tiro garantito del materiale del boss."},
    {id:"bossMat", name:"Il boss lascia due materiali", value:"25%", detail:"Ogni boss del raid lascia almeno un materiale del boss; il 25% delle uccisioni ne produce un secondo."},
    {id:"accessory", name:"Copia ripetuta di un accessorio da raid", value:"5%", detail:"Finché una copia non viene scoperta o è già in attesa, il tiro aumenta a 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, quindi è garantito alla vittoria 10. In seguito torna al 5%."},
    {id:"daily", name:"Rinnovo dell'ingresso al raid", value:"00:00 UTC", detail:"Ciascuno dei quattro raid gestisce il proprio ingresso giornaliero. Avviarlo lo consuma. Un rinnovo manuale costa 50 Gemme."},
    {id:"reward", name:"Ricompensa giornaliera in Gemme", value:"35 Gemme", detail:"Un riscatto per giorno UTC. Chi possiede il Pacchetto Premium di Benvenuto la riceve subito; altrimenti il percorso della ricompensa richiede il completamento di una pubblicità con ricompensa, quando disponibile."}
  ],

  towerPlayGames: {
    leaderboard: {key:"highest_tower_floor", name:"Piano più alto della Torre", minimum:1, maximum:100},
    achievements: [
      {floor:10, key:"tower_floor_10", name:"Fondamenta scosse"},
      {floor:20, key:"tower_floor_20", name:"Oltre l'inondazione"},
      {floor:30, key:"tower_floor_30", name:"Rami di ferro spezzati"},
      {floor:40, key:"tower_floor_40", name:"Lanterne a portata di mano"},
      {floor:50, key:"tower_floor_50", name:"Cripta cinerea aperta"},
      {floor:60, key:"tower_floor_60", name:"Stelle sotto i piedi"},
      {floor:70, key:"tower_floor_70", name:"Oltre la Chimera"},
      {floor:80, key:"tower_floor_80", name:"Una guglia senza corona"},
      {floor:90, key:"tower_floor_90", name:"Radice del Mondo incoronata"},
      {floor:100, key:"tower_floor_100", name:"Allo zenit"}
    ]
  },

  townSystems: [
    {name:"Taverna", icon:"res://resources/ui/icon_tavern.png", lead:"Reclutamento, capacità della formazione, numero di offerte e velocità di aggiornamento.", facts:["5 offerte iniziali; almeno un guaritore quando è disponibile una classe guaritrice", "Aggiornamento base ogni 3 ore", "8 slot eroe iniziali", "Costo di reclutamento: 200 + 100 × dimensione attuale della formazione", "+10% velocità di aggiornamento per livello del potenziamento Velocità", "25% di probabilità di titolo per offerta generata"]},
    {name:"Laboratorio", icon:"res://resources/ui/icon_craft.png", lead:"Ricette, lavori in lotto, capacità della coda e completamento offline.", facts:["3 slot iniziali nella coda", "+10% velocità di creazione per livello del potenziamento Velocità", "Un lotto occupa un solo lavoro", "Annullare un lavoro incompleto rimborsa oggetti e Monete riservati", "La creazione recupera l'intero intervallo di tempo trascorso offline"]},
    {name:"Negozio normale", icon:"res://resources/ui/icon_shop.png", lead:"Materiali adatti alla campagna venduti in cambio di Monete.", facts:["4 offerte", "Aggiornamento ogni 3 ore", "Ogni offerta è acquistabile una volta per aggiornamento", "Il grado delle offerte segue il dungeon più alto sbloccato", "Gli acquisti scoprono immediatamente l'oggetto"]},
    {name:"Negozio settimanale", icon:"res://resources/ui/gem.svg", lead:"Espansioni permanenti della capacità acquistate con Gemme.", facts:["Aggiornamento ogni 7 giorni", "Espansione Taverna: +1 slot eroe", "Espansione Laboratorio: +1 slot della coda", "500 Gemme per potenziamento", "Massimo 3 livelli per ciascun potenziamento"]},
    {name:"Inventario", icon:"res://resources/ui/icon_inventory.png", lead:"Materiali raccolti, equipaggiamento, vendita e scoperte.", facts:["Gli oggetti ordinari possono essere venduti al valore in Monete indicato", "Chiavi delle missioni, Frammenti runici, accessori unici da raid e oggetti protetti non possono essere venduti", "L'equipaggiamento deve rispettare le regole di slot e competenza", "Un eroe non può equipaggiare due copie dello stesso oggetto con Equipaggiamento unico"]},
    {name:"Posta", icon:"res://resources/ui/icon_mail_letter.png", lead:"Momenti della storia, indicazioni sugli sblocchi e avvisi per scoperte rare.", facts:["Prologo e posta per gli sblocchi della campagna", "Missioni raid e posta per la prima vittoria", "Tutorial del primo Frammento runico", "Scoperte di accessori unici da raid", "Lo stato di lettura persiste nel salvataggio"]},
    {name:"Famigli", icon:"res://resources/ui/icon_pets.png", lead:"Le uova dei boss si schiudono in famigli da spedizione con livelli Legame permanenti.", facts:["I nuovi salvataggi iniziano con 10 posti nella scuderia; sei gradi di potenziamento estendono la capienza a 20, 30, 40, 50, 60 e 70", "Gli stessi potenziamenti aumentano la probabilità Leggendaria di ogni famiglia dallo 0,5% al 2%; dopo 100 insuccessi, la schiusa successiva è garantita Leggendaria", "Le uova di famiglia costano 75–300 Gemme in base al grado", "Un famiglio per dungeon o raid permanente; fino a due nella Torre e nella Discesa dell'Eco", "1 PE Legame per incontro ordinario e 10 per uccisione di un boss idoneo; le profondità di Torre ed Eco ne conferiscono 25 o 250", "Livello massimo 20; gli effetti raggiungono ×3, inclusi Tasso ritrovamenti Chimerico e Tasso PE dell'Eclissi"]},
    {name:"Missioni", icon:"res://resources/ui/icon_mail_objective_complete.png", lead:"Gli obiettivi giornalieri e settimanali a rotazione aggiungono una progressione affidabile dell'account.", facts:["Le Missioni giornaliere ricompensano con Monete; quelle settimanali con Gemme", "Le serie ruotano secondo la propria cadenza di ripristino", "Le ricompense completate e non riscosse vengono assegnate automaticamente al ripristino", "Gradi Missione facoltativi acquistati con Monete scalano gli obiettivi e le ricompense disponibili", "Progresso e indicatori delle ricompense pronte si aggiornano durante il gioco normale"]},
    {name:"Aspetti élite", icon:"res://resources/ui/icon_heroes.png", lead:"Varianti estetiche per ogni classe élite, ispirate ai raid permanenti.", facts:["88 aspetti per 22 classi élite e quattro temi dei raid", "Ogni aspetto costa 1.000 Gemme", "Gli aspetti sono solo estetici e non cambiano mai le statistiche di combattimento", "Le varianti possedute ed equipaggiate persistono per ogni eroe"]},
    {name:"Statistiche totali", icon:"res://resources/ui/statistics/icon_statistics_progression.png", lead:"Un riferimento locale nelle Impostazioni per combattimento, progressione, collezione, economia e tempo di gioco.", facts:["Funziona senza accesso a Play Games", "Registra i totali di cinque categorie", "I valori introdotti nella 1.08 che non possono essere ricostruiti sono indicati chiaramente", "Le statistiche persistono nel salvataggio"]},
    {name:"Premium e giornaliero", icon:"res://resources/ui/icon_rewarded_ad.png", lead:"Acquisti facoltativi, ricompense dell'account, Codici ricompensa e Gemme giornaliere.", facts:["Il Pacchetto Premium di Benvenuto è un acquisto una tantum con denaro reale", "Conferisce un Trickster di livello 25 con Ironbark Blade e Ranger Leather, +10% PE permanente e moltiplicatore standard dei ritrovamenti, oltre al riscatto immediato delle 35 Gemme giornaliere", "Il Pacchetto Famiglio Leggendario conferisce una Balena Campana del Terrore Leggendaria quando è disponibile spazio", "Un profilo verificato e connesso può riscattare 300 Gemme una volta dopo la sincronizzazione", "I Codici ricompensa distinguono maiuscole e minuscole, legano le ricompense idonee al profilo verificato e restano riscattabili su Windows", "I pacchetti di Gemme vengono accreditati solo dopo la conferma della piattaforma"]}
  ],

  interactions: [
    {area:"Navigazione principale", actions:["Città apre Taverna, Negozio, Laboratorio, Inventario, Famigli, Missioni, Posta e riferimenti della città.", "Eroi apre la formazione; seleziona un ritratto o una scheda per statistiche, equipaggiamento, abilità, promozione, Rune, Ascensione, aspetti, titolo, rinomina o rimozione.", "Dungeon e Raid aprono gli elenchi delle attività; la schermata Raid contiene la Torre della Risonanza, il cui controllo dell'Eco accanto al titolo diventa disponibile dopo il Piano 70.", "Selezionare un'attività apre formazione, stato, rapporto, ricompense e combattimento.", "Impostazioni contiene audio, cataloghi di aiuto e riferimento, Statistiche totali, obiettivi, Novità, privacy, Discord, Play Games e cloud ed eliminazione dei dati."]},
    {area:"Formazione", actions:["Seleziona uno slot vuoto, poi scegli un eroe disponibile. Selezionando uno slot occupato puoi sostituirlo o rimuoverlo.", "Una formazione salvata conserva ogni posizione, compresi gli spazi vuoti. Il caricamento ignora gli eroi rimossi o schierati altrove e segnala le omissioni.", "Le attività ordinarie accettano un famiglio; Torre ed Eco ne accettano fino a due distinti. La formazione dei famigli appartiene alla singola attività.", "La maggior parte delle attività può iniziare con almeno un eroe valido; la Discesa dell'Eco ne richiede esattamente cinque. Nessun eroe o famiglio selezionato può essere già schierato altrove."]},
    {area:"Combattimento in corso", actions:["Il combattimento avanza automaticamente secondo l'intervallo d'azione indicato per l'attività; non è necessario impartire attacchi manuali.", "Seleziona o esamina un combattente per vedere in tempo reale PV, Mana, barriere, statistiche, abilità, equipaggiamento e stati attivi.", "Gli indicatori di battaglia mostrano attacchi, cure, abilità, schivate, critici, contrattacchi, barriere e resistenza agli effetti nocivi.", "Interrompi un dungeon senza perdere i bottini in attesa. Abbandonare un raid permanente mantiene consumato l'ingresso giornaliero; i tentativi di Torre ed Eco sono illimitati e conservano l'ultimo avanzamento consolidato."]},
    {area:"Ricompense e rapporti", actions:["Raccogli in un'attività trasferisce gli oggetti in attesa all'Inventario; i Grappoli di Gemme si aprono automaticamente e i gettoni uovo diventano uova da schiudere.", "Raccogli tutto elabora ogni dungeon con ricompense in attesa e riporta oggetti, Gemme e numero di dungeon complessivi.", "I rapporti conservano il riepilogo della sessione appena raccolta e, prima della raccolta, mostrano stime orarie in tempo reale.", "I bottini mostrati in un'attività attiva sono in attesa e non ancora utilizzabili per la creazione o l'equipaggiamento."]},
    {area:"Dettagli dell'eroe", actions:["Gli slot di equipaggiamento filtrano gli oggetti compatibili: armi da Mischia, a Distanza o Magiche, armature Leggere, Medie o Pesanti e accessori.", "La promozione al livello 25 presenta due schede di specializzazione; quella al livello 50 presenta la classe élite associata.", "Ogni potenziamento di una Runa è garantito quando è disponibile il Frammento corrispondente. I gradi delle Rune non sono casuali.", "La promozione élite sblocca subito l'Ascensione al livello 0 azzerato. I livelli 4–46 assegnano 15 punti e il livello 50 assegna quello finale, per un budget di 16 punti.", "Scegli un Percorso Ascendente e un'opzione per ciascuna riga Fondamenta, Risveglio, Maestria e Coronamento. La ridistribuzione nello stesso percorso è gratuita; solo il cambio di percorso consuma un Emblema della Rinascita creato e restituisce tutti i punti."]},
    {area:"Creazione e oggetti", actions:["Apri una ricetta per controllare risultato, quantità, costo in Monete, tempo di creazione, grado, requisito del raid e tutti gli ingredienti.", "Avviare un lotto riserva immediatamente tutti gli ingredienti e le Monete.", "Usa le schede della coda per controllare il tempo di completamento o annullare un lavoro incompleto ottenendo il rimborso completo dei costi riservati.", "La vendita è disattivata per gli oggetti protetti; equipaggiare rimuove l'oggetto dall'Inventario ordinario finché non viene tolto."]},
    {area:"Famigli", actions:["Le uova lasciate dai boss compaiono dopo aver raccolto le ricompense dell'attività. Le uova di famiglia costano 75–300 Gemme in base al grado.", "Schiudi per estrarre rarità e un insieme mescolato di effetti distinti della famiglia; l'immagine della creatura segue la rarità. I potenziamenti dell'incubatoio portano la probabilità Leggendaria al 2% e la garanzia condivisa assicura il prossimo Leggendario dopo 100 insuccessi.", "Rinomina un famiglio, assegnalo a una formazione, salvalo nella formazione di quell'attività oppure vendilo in cambio di Monete quando non è schierato.", "Il valore di vendita dipende dal grado della famiglia e dalla rarità; il livello Legame non lo influenza.", "L'intensità degli effetti aumenta in modo non lineare con il livello; al livello 20 è esattamente tre volte il valore base del livello 1."]},
    {area:"Cloud ed eliminazione", actions:["Sincronizza ora richiede la riconciliazione cloud di Google Play Games nelle build Android supportate e autenticate.", "Se le cronologie divergono, confronta data, ora e riepiloghi della progressione prima di scegliere questo dispositivo o il cloud; il lato valido non selezionato viene archiviato come dato di recupero.", "Identità e obiettivi di Play Games e progressi di gioco nel cloud sono servizi separati.", "Elimina dati è un'operazione distruttiva: dopo la conferma rimuove progressi locali, preferenze, copie di recupero crittografate e istantanea privata nel cloud."]}
  ],

  economyTables: {
    tavern_capacity: [
      {gate:1,coin:1000},{gate:1,coin:2000},{gate:2,coin:3500},{gate:2,coin:5000},{gate:3,coin:8000},{gate:3,coin:12000,items:"Pacchetto costruzione grado 3 ×1"},{gate:5,coin:20000},{gate:5,coin:28000,items:"Pacchetto costruzione grado 5 ×1"},{gate:7,coin:50000},{gate:7,coin:75000,items:"Pacchetto costruzione grado 7 ×1"},{gate:9,coin:130000},{gate:9,coin:190000,items:"Pacchetto costruzione grado 9 ×2"},{gate:11,coin:320000},{gate:11,coin:450000,items:"Pacchetto costruzione grado 11 ×2"}
    ],
    tavern_refresh: [
      {gate:2,coin:4000},{gate:3,coin:9000,items:"Pacchetto costruzione grado 3 ×1"},{gate:4,coin:18000,items:"Pacchetto costruzione grado 4 ×1"},{gate:5,coin:32000,items:"Pacchetto costruzione grado 5 ×1"},{gate:6,coin:55000,items:"Pacchetto costruzione grado 6 ×1"},{gate:7,coin:90000,items:"Pacchetto costruzione grado 7 ×1"},{gate:8,coin:145000,items:"Pacchetto costruzione grado 8 ×1"},{gate:10,coin:300000,items:"Pacchetto costruzione grado 10 ×2"},{gate:11,coin:475000,items:"Pacchetto costruzione grado 11 ×2"},{gate:12,coin:700000,items:"Pacchetto costruzione grado 12 ×2"}
    ],
    tavern_offers: [
      {gate:3,coin:12000,items:"Pacchetto costruzione grado 3 ×1"},{gate:5,coin:35000,items:"Pacchetto costruzione grado 5 ×1"},{gate:7,coin:95000,items:"Pacchetto costruzione grado 7 ×1"},{gate:9,coin:240000,items:"Pacchetto costruzione grado 9 ×2"},{gate:11,coin:525000,items:"Pacchetto costruzione grado 11 ×2"},{gate:12,coin:850000,items:"Pacchetto costruzione grado 12 ×3"}
    ],
    craft_capacity: [
      {gate:2,coin:4000},{gate:4,coin:18000,items:"Pacchetto costruzione grado 4 ×1"},{gate:6,coin:60000,items:"Pacchetto costruzione grado 6 ×1"},{gate:8,coin:160000,items:"Pacchetto costruzione grado 8 ×2"},{gate:10,coin:390000,items:"Pacchetto costruzione grado 10 ×2"},{gate:12,coin:900000,items:"Pacchetto costruzione grado 12 ×3"}
    ],
    craft_speed: [
      {gate:1,coin:2000},{gate:2,coin:5000},{gate:3,coin:11000,items:"Pacchetto costruzione grado 3 ×1"},{gate:4,coin:20000,items:"Pacchetto costruzione grado 4 ×1"},{gate:5,coin:36000,items:"Pacchetto costruzione grado 5 ×1"},{gate:6,coin:60000,items:"Pacchetto costruzione grado 6 ×1"},{gate:7,coin:100000,items:"Pacchetto costruzione grado 7 ×1"},{gate:8,coin:165000,items:"Pacchetto costruzione grado 8 ×2"},{gate:10,coin:350000,items:"Pacchetto costruzione grado 10 ×2"},{gate:12,coin:800000,items:"Pacchetto costruzione grado 12 ×3"}
    ]
  },

  accuracyNotes: [
    {title:"Versione attuale della guida", text:"Ogni capitolo strategico e calcolatore descrive la versione 1.08 del gioco, attualmente in sviluppo. La cronologia degli aggiornamenti è limitata alle Note di aggiornamento."},
    {title:"I bonus dei titoli conferiscono 10", text:"Un'offerta generata ha il 25% di probabilità di possedere un titolo. Salute e Attacco usano ×1,10; Difesa, Difesa magica, Schivata e Probabilità critica aggiungono 10 punti percentuali."},
    {title:"Il primo accessorio ha una garanzia progressiva", text:"Finché la prima copia non viene scoperta o è già in attesa, la probabilità di un accessorio da raid aumenta di 5 punti percentuali a ogni vittoria ed è garantita alla decima. Le copie successive hanno probabilità del 5%."},
    {title:"Gli orologi dei raid contano le azioni degli eroi", text:"La Costellazione usa 10 azioni degli eroi e richiede tre colpi corrispondenti riusciti; lo stesso eroe può contribuire in azioni successive. Le fasi dell'Eclissi durano 12 azioni all'Alba, 12 al Crepuscolo e 6 nell'Eclissi Totale."},
    {title:"Il danno dei mostri segue l'Attacco", text:"L'attributo primario di un mostro determina il suo Attacco e ogni colpo base estrae un valore in un intervallo del ±30%."},
    {title:"Alcuni nomi delle abilità iniziali sono descrittivi", text:"I quattro Slime elementali della Foresta degli Slime usano attacchi base anche quando il Mana è pieno."},
    {title:"La preparazione consigliata per i raid è indicativa", text:"Il livello di carriera e il grado dell'equipaggiamento consigliati sono una guida. Dopo la missione di sblocco, puoi iniziare un raid permanente con qualsiasi squadra disponibile che ne rispetti la capienza."}
  ]
});
