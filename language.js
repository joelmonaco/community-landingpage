// Language Switcher
const translations = {
  de: {
    nav: {
      features: 'Features',
      useCases: 'Use Cases',
      pricing: 'Preise',
      stories: 'Customer Stories',
      updates: 'Updates',
      faq: 'FAQ',
      talkToSales: 'Termin vereinbaren',
      getStarted: 'Jetzt starten',
      login: 'Log In',
      menu: 'Menü'
    },
    hero: {
      title: 'Deine Community-Plattform.<br />Deine Regeln.',
      subtitle: 'Monetarisiere deine Leidenschaft, baue eine lebendige Community auf und verkaufe Content – alles in einer Plattform.',
      ctaStart: 'Jetzt starten',
      ctaSales: 'Termin vereinbaren'
    },
    features: {
      title: 'Community-Management<br />mit Glymmer',
      subtitle: 'Personalisiere Glymmer so, dass die Plattform perfekt auf die Bedürfnisse von Dir und Deiner Community abgestimmt ist.',
      viewAll: 'Alle Features ansehen →',
      liveVideoTitle: 'Live Video & Workshops',
      liveVideoSubtitle: 'Führe Webinare, Bootcamps und virtuelle Treffen mit hochwertigen Video-Tools durch.',
      chatTitle: 'Chat & Channels',
      chatSubtitle: 'Einfache Kommunikation in privaten und öffentlichen Gruppen.',
      chatMsg1: 'Hey, wie war das Webinar? 👏',
      chatMsg2: 'Super interessant! 🙏',
      chatMsg3: 'Können wir das nochmal machen?',
      chatMsg4: 'Ja, definitiv! 💭',
      chatMsg5: 'Perfekt, dann bis nächste Woche!',
      chatAttach: 'Datei anheften',
      chatPlaceholder: 'Nachricht schreiben...',
      mediathekTitle: 'Mediathek & Dateiablage',
      mediathekSubtitle: 'Zentraler Speicherplatz für Videos, Dokumente und Kursmaterialien.',
      file1Title: 'Trainingsplan',
      file1Desc: 'Strukturierter 8-Wochen-Plan für optimales Muskelwachstum und Kraftaufbau.',
      file2Title: 'Trainingsstatistiken',
      file2Desc: 'Detaillierte Auswertung deiner Fortschritte und Leistungsdaten.',
      file3Title: 'Bizeps Trainingsvideo',
      file3Desc: 'Intensives Bizeps-Training mit verschiedenen Übungen für maximales Muskelwachstum.'
    },
    featureList: {
      monetarisierung: 'Monetarisierung',
      monetarisierungTooltip: 'Monetarisiere deine Community mit flexiblen Einnahmemodellen wie kostenpflichtigen Inhalten, Events oder Mitgliedschaften. Das Monetarisierungs-Feature ermöglicht dir, nachhaltige Umsätze direkt über die Plattform zu generieren.',
      mitgliedschaften: 'Mitgliedschaften',
      mitgliedschaftenTooltip: 'Erstelle individuelle Mitgliedschaftsstufen mit exklusiven Vorteilen und Zugängen. So stärkst du die Bindung deiner Community und schaffst klare Mehrwerte für deine Mitglieder.',
      gamification: 'Gamification',
      gamificationTooltip: 'Motiviere deine Community mit Gamification-Elementen und belohne Engagement mit Punkten und Erfolgen.',
      kalender: 'Kalender',
      kalenderTooltip: 'Plane und verwalte Events, Webinare sowie Termine zentral an einem Ort. Der integrierte Kalender sorgt für Übersicht und erleichtert die Organisation deiner Community.',
      umfragen: 'Umfragen',
      umfragenTooltip: 'Hole gezielt Feedback und Meinungen von deinen Community-Mitgliedern ein. Umfragen helfen dir, Entscheidungen datenbasiert und mit direkter Nutzerbeteiligung zu treffen.',
      analytics: 'Analytics',
      analyticsTooltip: 'Analysiere Aktivität, Wachstum und Engagement deiner Community in Echtzeit. Mit übersichtlichen Analytics triffst du fundierte Entscheidungen zur Weiterentwicklung deiner Plattform.',
      gruppenchats: 'Gruppenchats',
      gruppenchatsTooltip: 'Ermögliche den direkten Austausch in Gruppenchats und fördere die Interaktion innerhalb deiner Community. Ideal für Diskussionen, Networking und gemeinsame Themenräume.',
      ticketing: 'Ticketing',
      ticketingTooltip: 'Verkaufe Tickets für Events und Veranstaltungen direkt über deine Plattform. Das integrierte Ticketing vereinfacht den Verkaufsprozess und schafft ein nahtloses Nutzererlebnis.',
      integrationen: 'Integrationen',
      integrationenTooltip: 'Verbinde deine Community-Plattform mit deinen bevorzugten Tools und Services. Integrationen sorgen für effiziente Workflows und eine reibungslose Systemlandschaft.',
      benachrichtigungen: 'Benachrichtigungen',
      benachrichtigungenTooltip: 'Informiere deine Mitglieder automatisch über wichtige Updates, Events und Aktivitäten. Smarte Benachrichtigungen erhöhen die Reichweite und halten deine Community aktiv.'
    },
    useCases: {
      title: 'Für jeden das Richtige',
      subtitle: 'Egal ob Coach oder Creator – Glymmer passt sich deinen Bedürfnissen an',
      forCoaches: 'Für Coaches',
      forCreators: 'Für Creator',
      forBootcamps: 'Für Bootcamps',
      forLernraeume: 'Für Lernräume',
      learnMore: 'Mehr erfahren →',
      moreLabel: 'Mehr'
    },
    pricing: {
      title: 'Preise',
      subtitle: 'Wähle das passende Lizenzpaket für deine Community',
      viewPrices: 'Preise ansehen'
    },
    stories: {
      title: 'Customer Stories',
      subtitle: 'Erfolgsgeschichten unserer Kunden',
      viewAll: 'Alle Stories ansehen',
      story1Headline: 'Team Selbstliebe – Exklusiver Raum für Wachstum und echte Verbindungen.',
      story1Body: 'Biyon Kattilathu hat mit Glymmer seine "Team Selbstliebe" Community aufgebaut – einen geschützten Ort voller Inspiration, Austausch und exklusiver Inhalte.',
      story1Cta: 'Mach\'s wie Biyon',
      story2Headline: 'Social-Media-Bootcamps – Live-Sessions, Feedback und Community in einem.',
      story2Body: 'Baby got Business hat mit Glymmer ihre 10-wöchigen Social-Media-Bootcamps umgesetzt – Live-Intensiv-Sessions, Workbooks und persönliches Feedback.',
      story2Cta: 'Mach\'s wie BGB',
      story3Headline: 'Digitale Nachhilfe – Individuelle Sessions und Gruppenunterricht online.',
      story3Body: 'MAK Nachhilfe setzt Glymmer für ihre Online-Nachhilfe ein – vom 1-zu-1-Unterricht bis zu Gruppenkursen mit interaktiver Tafel und Materialien.',
      story3Cta: 'Mach\'s wie MAK',
      ctaBook: 'Termin vereinbaren'
    },
    personalize: {
      title: 'Personalisiere hier Deine Plattform',
      subtitle: 'Passe Farben, Features, Logo, Domain-Namen und vieles mehr an, um Glymmer zu <strong>Deiner</strong> Plattform zu machen.',
      buttonColor: 'Button-Farbe',
      backgroundColor: 'Hintergrundfarbe',
      logo: 'Logo',
      menuItems: 'Menüpunkte',
      display: 'Darstellung',
      kalender: 'Kalender',
      mediathek: 'Mediathek',
      benach: 'Benach...',
      chat: 'Chat',
      mockup: {
        allChannels: 'Alle Channels',
        navBenach: 'Benachrichtigung',
        settings: 'Einstellungen',
        searchPlaceholder: 'Feed durchsuchen…',
        sharePlaceholder: 'Was möchtest du teilen?',
        attachment: 'Anhang',
        surveys: 'Umfragen',
        selectCategory: 'Kategorie auswählen',
        general: 'Allgemein',
        post: 'Posten',
        paid: 'Kostenpflichtig',
        post1Meta: '#Team-Updates · vor 2 Std.',
        post1Text: 'Unser neues Feature ist live: Ihr könnt jetzt Umfragen direkt im Feed erstellen. Probiert es aus!',
        comment: 'Kommentieren',
        post2Meta: '#AskMeAnything · gestern',
        post2Text: 'Frage an alle: Welche Tools nutzt ihr für Projektmanagement? Wir evaluieren gerade neue Optionen.',
        upcomingEvents: 'Kommende Events',
        event1Time: '10:00 – 12:00 Uhr',
        event2Time: '14:00 – 15:00 Uhr',
        event3Time: '09:00 – 11:00 Uhr',
        messages: 'Nachrichten',
        newMessage: 'Neue Nachricht',
        msg1: 'Kannst du mir das schicken?',
        msg2: 'Bis morgen dann 👍',
        msg3: 'Die Session war mega!',
        msg4: 'Hast du den Link?',
        msg5: 'Passt 14 Uhr bei dir?',
        msg6: 'Danke für die Infos 🙏',
        msg7: 'Alles klar, mache ich',
        msg8: 'Bis gleich im Call!'
      }
    },
    whyCommunity: {
      title: 'Darum ist deine eigene Community ab 2026 unverzichtbar',
      quoteWords: ['Social', 'Media', 'kann', 'dich', 'jederzeit', 'verstecken.', 'Deine', 'eigene', 'Community', 'nicht.'],
      mehrDazu: 'Mehr dazu'
    },
    app: {
      title: 'Generiere deine eigene App',
      subtitle: 'Deine personalisierte Community App, die du über den App Store und Google Play Store zur Verfügung stellen kannst',
      generateBtn: 'Termin vereinbaren'
    },
    cta: {
      title: 'Bereit loszulegen?',
      subtitle: 'Starte noch heute und baue deine Community auf',
      start: 'Jetzt starten',
      talkToSales: 'Termin vereinbaren',
      startFree: 'Kostenlos starten'
    },
    footer: {
      tagline: 'Die Community-Plattform für Coaches und Creator',
      product: 'Produkt',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      contact: 'Kontakt',
      about: 'Über uns',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      copyright: '© 2026 Glymmer - A teech Product. Alle Rechte vorbehalten.'
    },
    terminModal: {
      title: 'Rückruf vereinbaren',
      closeAria: 'Schließen',
      labelFirstname: 'Vorname *',
      labelLastname: 'Nachname *',
      labelPhone: 'Telefonnummer *',
      labelEmail: 'E-Mail *',
      labelComment: 'Kommentar (optional)',
      placeholderComment: 'Wann passt es Ihnen? Weitere Wünsche?',
      checkboxLabel: 'Ich akzeptiere die <a href="/terms.html" target="_blank" rel="noopener">AGB</a> *',
      privacyLinkText: 'Lese hier die <a href="/privacy.html" target="_blank" rel="noopener">Datenschutzbestimmungen</a>.',
      submitBtn: 'Anfrage senden',
      sendingBtn: 'Wird gesendet…',
      successMessage: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.',
      errorAccept: 'Bitte AGB akzeptieren.',
      errorSend: 'Fehler beim Senden. Bitte später erneut versuchen.'
    },
    faq: {
      title: 'Häufige Fragen',
      closeAria: 'Schließen',
      viewAllLink: 'Alle FAQs ansehen →',
      questions: [
        { q: 'Was ist Glymmer eigentlich genau?', a: 'Glymmer ist deine Community-Plattform, auf der du Inhalte, Austausch und Umsatz an einem Ort bündelst – unter deiner eigenen Marke.<br><br>Du kannst Communities für Coaches, Creator, Bootcamps oder Lernräume aufbauen, Live-Sessions hosten, Kurse anbieten, Mitgliedschaften verkaufen, Events organisieren und alles über ein zentrales Dashboard steuern – DSGVO-konform und Made in Germany.' },
        { q: 'Für wen ist Glymmer geeignet?', a: 'Glymmer ist für alle, die mehr wollen als eine lose Follower-Liste:<br><strong>Coaches & Trainer</strong>, die aus Kunden eine echte Community machen wollen.<br><strong>Creator</strong>, die ihre Inhalte und Fans in ein eigenes, monetarisierbares Ökosystem holen möchten.<br><strong>Bootcamps & Bildungsanbieter</strong>, die Programme mit Struktur, Live-Sessions und Community kombinieren.<br><strong>Lernräume, Nachhilfe & Academies</strong>, die Online-Unterricht, Gruppen und Materialien an einem Ort organisieren wollen.' },
        { q: 'Was kann ich mit Glymmer konkret machen?', a: 'Du kannst: <strong>Community aufbauen</strong> – Channels, Gruppenchats, Feeds, Events, Live-Sessions. <strong>Content strukturieren</strong> – Mediathek, Dateiablage, Kursbereiche, Workbooks. <strong>Monetarisieren</strong> – Mitgliedschaften, einmalige Produktverkäufe, Tickets für Events. <strong>Lernen & Engagement stärken</strong> – Gamification, Challenges, Feedback, Umfragen. <strong>Alles steuern</strong> – Analytics, Admin-Dashboard, Rollen & Berechtigungen.' },
        { q: 'Wie verdiene ich Geld mit Glymmer?', a: 'Glymmer wurde dafür gebaut, dass sich deine Community rechnet: Erstelle <strong>Mitgliedschaften</strong> mit unterschiedlichen Zugangslevels (z.B. Basic, Premium, VIP). Verkaufe <strong>Programme, Kurse, Bootcamps oder Einzelprodukte</strong> direkt in deiner Community. Nutze <strong>Events & Ticketing</strong>, um Workshops, Live-Formate oder Challenges zu monetarisieren. Deine Zahlungen laufen zentral über die Plattform – wiederkehrende Einnahmen inklusive.' },
        { q: 'Kann ich Glymmer kostenlos testen?', a: 'Klar! <a href="/preise.html" class="underline font-medium hover:no-underline">Jetzt testen für 14 Tage kostenlos</a>.' },
        { q: 'Ist Glymmer DSGVO-konform und wo liegen die Daten?', a: 'Ja, Glymmer ist eine deutsche SaaS-Plattform mit Hosting und Infrastruktur, die auf Datenschutz und Sicherheit ausgelegt ist.<br><br>Deine Community-Daten gehören dir – du behältst die Kontrolle über Mitglieder, Inhalte und Kommunikation und reduzierst deine Abhängigkeit von Social-Media-Plattformen und deren Geschäftsmodellen.' },
        { q: 'Brauche ich noch andere Tools wie Zoom, WhatsApp oder Mailchimp?', a: 'Viele unserer Kunden verschlanken mit Glymmer ihre komplette Tool-Landschaft: Live-Sessions und Workshops laufen direkt in Glymmer – externe Tools wie Zoom, Teams oder Miro werden nicht mehr gebraucht. Community-Chat und Channels bündeln die Kommunikation und ersetzen verstreute WhatsApp-, Slack- oder Discord-Gruppen. Gezielte Push-Benachrichtigungen und automatisierte E-Mail-Updates machen separate Newsletter-Tools wie Mailchimp überflüssig. Events, Ticketing und Mitgliedschaften werden zentral in der Plattform organisiert und abgerechnet.<br><br>Weniger Tools, weniger Brüche – mehr Fokus auf deine Community.' },
        { q: 'Wie schnell kann ich mit Glymmer starten?', a: 'In der Regel kannst du deine Community innerhalb weniger Minuten aufsetzen: Template oder Struktur auswählen, Branding hinzufügen (Logo, Farben, Domain). Erste Channels, Events und Inhalte anlegen. Mitglieder einladen oder bestehende Kontakte importieren.<br><br>Auf Wunsch begleiten wir dich mit einem individuellen Migrationsservice, damit du deine ersten Launches, Kurse oder Memberships direkt sauber strukturierst.' },
        { q: 'Kann ich Glymmer in meinem eigenen Branding nutzen – inklusive App?', a: 'Ja, Glymmer ist als White-Label-Lösung gedacht: Du nutzt deine Farben, dein Logo und auf Wunsch deine eigene Domain. Deine Community fühlt sich wie deine eigene Plattform an – nicht wie ein fremdes Netzwerk. Zusätzlich kannst du dir eine eigene Community-App bereitstellen lassen, die deine Mitglieder über App Store und Google Play nutzen.' },
        { q: 'Welche Preismodelle gibt es und wie funktionieren die Gebühren?', a: 'Glymmer bietet verschiedene Pakete für unterschiedliche Wachstumsphasen – von kleineren Communities bis zu großen Programmen.<br><br>Du zahlst eine monatliche Plattformgebühr und eine faire Transaktionsgebühr auf Umsätze, die über Glymmer laufen. So kannst du klein starten und die Kosten wachsen mit deinem Erfolg, nicht andersherum.' },
        { q: 'Was passiert, wenn meine Community stark wächst oder ich mehrere Projekte habe?', a: 'Glymmer ist darauf ausgelegt, mit dir mitzuwachsen: Du kannst mehr Mitglieder, zusätzliche Programme und Events abbilden, ohne dein Setup komplett neu zu denken. Für größere Communities oder Bootcamps stehen dir erweiterte Admin-Features, mehr Speicher, Integrationen und individuelle Lösungen zur Verfügung. Wenn du merkst, dass du aus einem Paket „herausgewachsen“ bist, kannst du unkompliziert upgraden – die Community bleibt, du schaltest nur mehr Möglichkeiten frei.' }
      ]
    },
    featuresPage: {
      heroTitle: 'Alle Features',
      heroSubtitle: 'Alles was du brauchst, um deine Community erfolgreich zu führen und zu monetarisieren',
      card1Title: 'Live Video & Workshops',
      card1Desc: 'Führe Webinare, Bootcamps und virtuelle Treffen mit hochwertigen Video-Tools durch. Unterstützt verschiedene Videoformate für maximale Flexibilität.',
      card2Title: 'Chat & Channels',
      card2Desc: 'Einfache Kommunikation in privaten und öffentlichen Gruppen. Organisiere Diskussionen nach Themen und schaffe geschützte Räume für exklusive Inhalte.',
      card3Title: 'Mediathek & Dateiablage',
      card3Desc: 'Zentraler Speicherplatz für Videos, Dokumente und Kursmaterialien. Organisiere deine Inhalte übersichtlich und mache sie für deine Community zugänglich.',
      card4Title: 'Gamification & Mitgliedschaften',
      card4Desc: 'Motiviere mit spielerischen Elementen und exklusiven Angeboten. Belohne aktive Mitglieder und schaffe Anreize für Engagement.',
      card5Title: 'Kalender & Ticketing',
      card5Desc: 'Organisiere Events, Manage Zugänge und verkaufe Tickets direkt in der Plattform. Alles an einem Ort, einfach und übersichtlich.',
      card6Title: 'Umfragen & Feedback',
      card6Desc: 'Sammle Insights und verbessere deine Angebote kontinuierlich. Erhalte wertvolles Feedback von deiner Community.',
      card7Title: 'Analytics & Dashboard',
      card7Desc: 'Behalte den Überblick über Aktivität, Engagement und Wachstum deiner Community. Detaillierte Analysen helfen dir, datengetriebene Entscheidungen zu treffen.',
      card8Title: 'Sicherheit & Datenschutz',
      card8Desc: 'Modernste Technologie für maximale Sicherheit und DSGVO-Konformität. Deine Daten und die deiner Community sind sicher.',
      card9Title: 'Content-Verkauf',
      card9Desc: 'Verkaufe einmalige Produkte oder Abos direkt in deiner Community. Einfaches Payment-System für maximale Conversion.'
    },
    coachesPage: {
      heroTitle: 'Exklusive Klienten-Communities aufbauen',
      heroSubtitle: 'Erstelle bezahlte Räume mit Live-Q&As, Challenges und Content-Drops für nachhaltige Kundenbindung.',
      card1Title: 'Online-Kurse und Coachings zentralisieren',
      card1Desc: 'Stoppe den Tool-Wechsel zwischen Zoom, E-Mail und Sheets. Kombiniere Kurse, Live-Sessions und 1:1 in einem Raum. Wachstum und Upselling laufen automatisch.',
      card2Title: 'Bindung durch Community-Features boosten',
      card2Desc: 'Vergiss vergessene Follow-ups nach Sessions. Nutze Chats, Events und Challenges für tägliche Interaktion – verbesserte Lernerfolge ohne Extra-Aufwand.',
      card3Title: 'Monetarisierung und Skalierung automatisieren',
      card3Desc: 'Keine komplizierten Zahlungs-Tools mehr. Erstelle Mitgliedschaften mit exklusivem Content. Für nachhaltige Einnahmen bei wachsender Community.'
    },
    creatorPage: {
      heroTitle: 'Monetarisierte Fan-Communities launchen',
      heroSubtitle: 'Biete Mitgliedschaften, exklusive Videos und Channels für Abonnenten – perfekt für passives Einkommen.',
      card1Title: 'Marke mit exklusiven Inhalten ausbauen',
      card1Desc: 'Stoppe Streuverluste auf Social Media. Baue mit exklusiven Inhalten und starkem Fan-Engagement eine loyale Community. Die Monetarisierung durch Mitgliedschaften und Content-Inhalten läuft nahtlos.',
      card2Title: 'Kundenbindung durch Interaktion stärken',
      card2Desc: 'Vergiss flache Follower-Listen. Schaffe nachhaltige Bindung mit direktem Austausch, Events und speziellen Angeboten. Fans werden so zu Abonnenten.',
      card3Title: 'Umsatz mit Produkt-Integrationen skalieren',
      card3Desc: 'Keine komplizierten Zahlungs-Plugins mehr. Nutze Mitgliedschaften, Produkt-Integrationen und Events – mache deine Marke erlebbar und generiere neue Einnahmen.'
    },
    bootcampsPage: {
      heroTitle: 'Intensive Programme mit Struktur',
      heroSubtitle: 'Führe Kurse mit Channels, Events und Workbooks durch.',
      card1Title: '(Wochen)-Kurse in Channels organisieren',
      card1Desc: 'Stoppe Planungs-Chaos über E-Mails, Kalender & Zoom. Führe strukturierte Programme mit Channels für jedes Modul durch. Teilnehmer finden alles sofort.',
      card2Title: 'Events automatisieren',
      card2Desc: 'Vergiss manuelle Nachfragen nach Sessions. Nutze Events und Mediathek für kontinuierliche Struktur – Programme laufen reibungslos.',
      card3Title: 'Abschlussraten durch Gamification boosten',
      card3Desc: 'Keine hohen Dropouts mehr. Kombiniere Challenges, Leaderboards und Belohnungen. Teilnehmer bleiben motiviert bis zum Ende.'
    },
    lernraumPage: {
      heroTitle: 'Online-Unterricht und Gruppenkurse skalieren',
      heroSubtitle: 'Organisiere 1:1-Nachhilfe oder Klassen mit interaktiver Tafel und Materialien.',
      card1Title: 'Lernmaterialien übersichtlich organisieren',
      card1Desc: 'Stoppe Suchen in E-Mails und Drives. Organisiere Online-Nachhilfe, Workshops und Materialien in Channels. Alles zentral und immer griffbereit.',
      card2Title: 'Interaktion im digitalen Klassenzimmer boosten',
      card2Desc: 'Vergiss statische PDFs. Ermögliche interaktives Lernen mit Live-Sessions, Chats und Tafeln. Schüler bleiben engagiert.',
      card3Title: 'Skalierbares Lernen automatisieren',
      card3Desc: 'Keine manuellen Gruppen mehr. Kombiniere Sessions mit Foren und Materialien. Für wachsende Klassen ohne Chaos.'
    },
    updatesPage: {
      heroTitle: 'Updates',
      heroSubtitle: 'Bleibe auf dem Laufenden über neue Features und Verbesserungen.',
      article1Title: 'Stärkere Stabilität & verbesserte Performance',
      article1Body: 'Wir haben die technische Grundlage unserer Plattform weiter optimiert, um dir ein noch stabileres und schnelleres Erlebnis zu bieten. Zahlreiche Fehlerbehebungen und Backend-Verfeinerungen sorgen dafür, dass alles flüssiger läuft — besonders bei hoher Nutzung oder großen Datenmengen.',
      article2Title: 'Kalender: Offline-Events jetzt verfügbar',
      article2Body: 'Ab sofort kannst du in deinem Kalender Offline-Events anlegen und verwalten. So behältst du auch bei Präsenz-Terminen den Überblick und kannst sie wie gewohnt planen und mit der Community teilen.',
      article3Title: 'User-to-User Anrufe direkt auf der Plattform',
      article3Body: 'Wir freuen uns, eine neue Kommunikationsfunktion einzuführen: Nutzer können sich jetzt direkt gegenseitig anrufen — ohne externe Tools, direkt über die Plattform.',
      article4Title: 'Mehr Flexibilität in der Mediathek',
      article4Body: 'Die Mediathek unterstützt nun eine größere Auswahl an Dateiformaten. Du kannst ab sofort noch mehr Inhalte hochladen und abrufen — darunter Formate, die bisher nicht unterstützt wurden, um deine Ressourcen vielseitiger zu nutzen.'
    },
    preisePage: {
      heroTitle: 'Preise',
      heroTrial: 'Jetzt 14 Tage kostenlos testen',
      heroSubtitle: 'Wähle das passende Lizenzpaket für deine Community',
      popularBadge: 'Beliebt',
      featuresLabel: 'Features:',
      starterTitle: 'Starter',
      starterPrice: '99 €/Monat',
      starterSpecs: '3 Admins / 5 Moderatoren / 250 GB Speicher / unbegrenzte Mitglieder',
      starterFee: '+ 5% Plattformgebühren*',
      starterF1: 'Profile, Channels, Posts & Interaktionen',
      starterF2: 'Direkt-/Gruppen-Chat, Event-Kalender',
      starterF3: 'Zahlungen',
      starterF4: 'E-Mail-Support + DSGVO-konform',
      proTitle: 'Professional',
      proPrice: '199 €/Monat',
      proSpecs: '5 Admins / 10 Moderatoren / 500 GB Speicher / unbegrenzte Mitglieder',
      proFee: '+ 3% Plattformgebühren*',
      proF1: 'Alles aus Starter + Gamification Basics',
      proF2: 'Suche, VideoCalls, Event-Ticketing',
      proF3: 'größere Live Rooms',
      proF4: 'Erweiterter Support',
      businessTitle: 'Business',
      businessPrice: '399 €/Monat',
      businessSpecs: '10 Admins / 20 Moderatoren / 1 TB Speicher / unbegrenzte Mitglieder',
      businessFee: '+ 1,5% Plattformgebühren*',
      businessF1: 'Alles aus Professional + erweiterte Live Rooms bis zu Summits',
      businessF2: 'Erweiterte Analytics & Gamification Professional',
      businessF3: 'Verlinkte Ressourcen',
      businessF4: 'Telefon-Support',
      enterpriseTitle: 'Enterprise',
      enterprisePrice: 'Custom',
      enterpriseF1: 'Individuelle White Label Lösung',
      enterpriseF2: 'Individuelle Gebühren',
      enterpriseF3: 'Customer Success Manager',
      enterpriseF4: 'Dedicated Support',
      enterpriseF5: 'Custom Integrationen',
      contactBtn: 'Kontakt aufnehmen',
      disclaimer: 'Alle Preise netto zzgl. MwSt. 14 Tage kostenlos testen.',
      feeFootnote: '*Für alle Zahlungen die über Glymmer abgewickelt werden (z. B. für Mitgliedschaften, Buchungen oder Event-Tickets) fallen Plattformgebühren an. Zusätzlich erhebt unser Partner für die Zahlungsabwicklung Gebühren, die je nach gewählter Zahlungsmethode variieren. Einen detaillierten Überblick über diese Gebühren findest du unter <a href="https://www.mollie.com/de/pricing" target="_blank" rel="noopener noreferrer" class="underline hover:text-secondary">https://www.mollie.com/de/pricing</a>',
      faqHeading: 'Häufige Fragen zu den Preisen',
      ctaTitle: 'Noch Fragen?',
      ctaSubtitle: 'Sprich mit unserem Sales-Team über das passende Paket für dich'
    },
    imprintPage: {
      title: 'Impressum',
      section1Title: 'Verantwortliche nach § 5 Telemediengesetz (TMG)',
      section2Title: 'Satzungssitz der Gesellschaft',
      section3Title: 'Registergericht',
      section3Text: 'Amtsgericht Charlottenburg (HRB 246628 B)',
      contactTitle: 'Kontakt',
      disclaimerTitle: 'Haftungsausschluss',
      disclaimerIntro: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
    },
    privacyPage: {
      title: 'Datenschutz',
      intro: 'Datenschutzerklärung für die Plattform „Glymmer“ der teech Education GmbH · Stand Februar 2026'
    },
    termsPage: {
      title: 'AGB',
      intro: 'Allgemeine Geschäftsbedingungen für die Plattform „Glymmer“ der teech Education GmbH'
    }
  },
  en: {
    nav: {
      features: 'Features',
      useCases: 'Use Cases',
      pricing: 'Pricing',
      stories: 'Customer Stories',
      updates: 'Updates',
      faq: 'FAQ',
      talkToSales: 'Schedule a call',
      getStarted: 'Get Started',
      login: 'Log In',
      menu: 'Menu'
    },
    hero: {
      title: 'Your Community.<br />Your Rules.',
      subtitle: 'Monetize your passion, build a vibrant community and sell content – all in one platform.',
      ctaStart: 'Get started',
      ctaSales: 'Schedule a call'
    },
    features: {
      title: 'Core Features',
      subtitle: 'Everything you need to successfully manage your community',
      viewAll: 'View all features →',
      liveVideoTitle: 'Live Video & Workshops',
      liveVideoSubtitle: 'Run webinars, bootcamps and virtual meetings with high-quality video tools.',
      chatTitle: 'Chat & Channels',
      chatSubtitle: 'Easy communication in private and public groups.',
      chatMsg1: 'Hey, how was the webinar? 👏',
      chatMsg2: 'Really interesting! 🙏',
      chatMsg3: 'Can we do that again?',
      chatMsg4: 'Yes, definitely! 💭',
      chatMsg5: 'Perfect, see you next week!',
      chatAttach: 'Attach file',
      chatPlaceholder: 'Write a message...',
      mediathekTitle: 'Media Library & File Storage',
      mediathekSubtitle: 'Central storage for videos, documents and course materials.',
      file1Title: 'Training Plan',
      file1Desc: 'Structured 8-week plan for optimal muscle growth and strength building.',
      file2Title: 'Training Statistics',
      file2Desc: 'Detailed analysis of your progress and performance data.',
      file3Title: 'Bicep Training Video',
      file3Desc: 'Intensive bicep training with various exercises for maximum muscle growth.'
    },
    featureList: {
      monetarisierung: 'Monetisation',
      monetarisierungTooltip: 'Monetise your community with flexible revenue models such as paid content, events or memberships. The monetisation feature lets you generate sustainable revenue directly through the platform.',
      mitgliedschaften: 'Memberships',
      mitgliedschaftenTooltip: 'Create individual membership tiers with exclusive benefits and access. Strengthen your community\'s loyalty and deliver clear added value for your members.',
      gamification: 'Gamification',
      gamificationTooltip: 'Motivate your community with gamification elements and reward engagement with points and achievements.',
      kalender: 'Calendar',
      kalenderTooltip: 'Plan and manage events, webinars and appointments in one place. The integrated calendar keeps everything organised and makes running your community easier.',
      umfragen: 'Surveys',
      umfragenTooltip: 'Gather targeted feedback and opinions from your community members. Surveys help you make data-driven decisions with direct user input.',
      analytics: 'Analytics',
      analyticsTooltip: 'Analyse your community\'s activity, growth and engagement in real time. Clear analytics help you make informed decisions to develop your platform.',
      gruppenchats: 'Group Chats',
      gruppenchatsTooltip: 'Enable direct exchange in group chats and foster interaction within your community. Ideal for discussions, networking and shared topic areas.',
      ticketing: 'Ticketing',
      ticketingTooltip: 'Sell tickets for events directly through your platform. Integrated ticketing simplifies the sales process and creates a seamless user experience.',
      integrationen: 'Integrations',
      integrationenTooltip: 'Connect your community platform with your preferred tools and services. Integrations enable efficient workflows and a smooth system landscape.',
      benachrichtigungen: 'Notifications',
      benachrichtigungenTooltip: 'Inform your members automatically about important updates, events and activities. Smart notifications increase reach and keep your community active.'
    },
    useCases: {
      title: 'For Everyone',
      subtitle: 'Whether you\'re a Coach or Creator – Glymmer adapts to your needs',
      forCoaches: 'For Coaches',
      forCreators: 'For Creators',
      forBootcamps: 'For Bootcamps',
      forLernraeume: 'For Learning Spaces',
      learnMore: 'Learn more →',
      moreLabel: 'More'
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the right license package for your community',
      viewPrices: 'View pricing'
    },
    stories: {
      title: 'Customer Stories',
      subtitle: 'Success stories from our customers',
      viewAll: 'View all stories',
      story1Headline: 'Team Self-Love – An exclusive space for growth and real connections.',
      story1Body: 'Biyon Kattilathu built his "Team Self-Love" community with Glymmer – a protected space full of inspiration, exchange and exclusive content.',
      story1Cta: 'Do it like Biyon',
      story2Headline: 'Social Media Bootcamps – Live sessions, feedback and community in one.',
      story2Body: 'Baby Got Business has implemented their 10-week social media bootcamps with Glymmer – live intensive sessions, workbooks and personal feedback.',
      story2Cta: 'Do it like BGB',
      story3Headline: 'Digital Tutoring – Individual sessions and group lessons online.',
      story3Body: 'MAK Tutoring uses Glymmer for their online tutoring – from 1-to-1 lessons to group courses with interactive whiteboard and materials.',
      story3Cta: 'Do it like MAK',
      ctaBook: 'Schedule a call'
    },
    personalize: {
      title: 'Customize your platform here',
      subtitle: 'Adjust colours, features, logo, domain name and more to make Glymmer <strong>your</strong> platform.',
      buttonColor: 'Button colour',
      backgroundColor: 'Background colour',
      logo: 'Logo',
      menuItems: 'Menu items',
      display: 'Display',
      kalender: 'Calendar',
      mediathek: 'Media library',
      benach: 'Notif...',
      chat: 'Chat',
      mockup: {
        allChannels: 'All Channels',
        navBenach: 'Notifications',
        settings: 'Settings',
        searchPlaceholder: 'Search feed…',
        sharePlaceholder: 'What do you want to share?',
        attachment: 'Attachment',
        surveys: 'Surveys',
        selectCategory: 'Select category',
        general: 'General',
        post: 'Post',
        paid: 'Paid',
        post1Meta: '#Team-Updates · 2 hrs ago',
        post1Text: 'Our new feature is live: You can now create surveys directly in the feed. Try it out!',
        comment: 'Comment',
        post2Meta: '#AskMeAnything · yesterday',
        post2Text: 'Question for everyone: What tools do you use for project management? We\'re currently evaluating new options.',
        upcomingEvents: 'Upcoming Events',
        event1Time: '10:00 – 12:00',
        event2Time: '2:00 – 3:00 pm',
        event3Time: '9:00 – 11:00 am',
        messages: 'Messages',
        newMessage: 'New message',
        msg1: 'Can you send me that?',
        msg2: 'See you tomorrow then 👍',
        msg3: 'The session was great!',
        msg4: 'Do you have the link?',
        msg5: 'Does 2 pm work for you?',
        msg6: 'Thanks for the info 🙏',
        msg7: 'All good, will do',
        msg8: 'See you in the call!'
      }
    },
    whyCommunity: {
      title: 'Why your own community is essential from 2026',
      quoteWords: ['Social', 'media', 'can', 'hide', 'you', 'anytime.', 'Your', 'own', 'community', 'won\'t.'],
      mehrDazu: 'Learn more'
    },
    app: {
      title: 'Generate your own app',
      subtitle: 'Your customised community app, available on the App Store and Google Play Store',
      generateBtn: 'Schedule a call'
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Start today and build your community',
      start: 'Start for free',
      talkToSales: 'Schedule a call',
      startFree: 'Start for free'
    },
    footer: {
      tagline: 'The community platform for coaches and creators',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      contact: 'Contact',
      about: 'About us',
      imprint: 'Imprint',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Glymmer - A teech Product. All rights reserved.'
    },
    terminModal: {
      title: 'Request a callback',
      closeAria: 'Close',
      labelFirstname: 'First name *',
      labelLastname: 'Last name *',
      labelPhone: 'Phone number *',
      labelEmail: 'Email *',
      labelComment: 'Comment (optional)',
      placeholderComment: 'When does it suit you? Any other requests?',
      checkboxLabel: 'I accept the <a href="/terms.html" target="_blank" rel="noopener">Terms</a> *',
      privacyLinkText: 'Read the <a href="/privacy.html" target="_blank" rel="noopener">Privacy Policy</a> here.',
      submitBtn: 'Send request',
      sendingBtn: 'Sending…',
      successMessage: 'Thank you! We will get back to you shortly.',
      errorAccept: 'Please accept the Terms.',
      errorSend: 'Error sending. Please try again later.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      closeAria: 'Close',
      viewAllLink: 'View all FAQs →',
      questions: [
        { q: 'What exactly is Glymmer?', a: 'Glymmer is your community platform where you bring together content, engagement and revenue in one place – under your own brand.<br><br>You can build communities for coaches, creators, bootcamps or learning spaces, host live sessions, offer courses, sell memberships, organise events and manage everything from one dashboard – GDPR-compliant and Made in Germany.' },
        { q: 'Who is Glymmer for?', a: 'Glymmer is for everyone who wants more than a loose follower list:<br><strong>Coaches & trainers</strong> who want to turn clients into a real community.<br><strong>Creators</strong> who want to bring their content and fans into their own monetisable ecosystem.<br><strong>Bootcamps & education providers</strong> who combine programmes with structure, live sessions and community.<br><strong>Learning spaces, tutoring & academies</strong> who want to organise online teaching, groups and materials in one place.' },
        { q: 'What can I actually do with Glymmer?', a: 'You can: <strong>Build community</strong> – channels, group chats, feeds, events, live sessions. <strong>Structure content</strong> – media library, file storage, course areas, workbooks. <strong>Monetise</strong> – memberships, one-off product sales, event tickets. <strong>Boost learning & engagement</strong> – gamification, challenges, feedback, surveys. <strong>Control everything</strong> – analytics, admin dashboard, roles & permissions.' },
        { q: 'How do I make money with Glymmer?', a: 'Glymmer was built so your community pays off: Create <strong>memberships</strong> with different access levels (e.g. Basic, Premium, VIP). Sell <strong>programmes, courses, bootcamps or single products</strong> directly in your community. Use <strong>events & ticketing</strong> to monetise workshops, live formats or challenges. Payments run centrally through the platform – including recurring revenue.' },
        { q: 'Can I try Glymmer for free?', a: 'Yes! <a href="/preise.html" class="underline font-medium hover:no-underline">Try free for 14 days</a>.' },
        { q: 'Is Glymmer GDPR-compliant and where is data stored?', a: 'Yes, Glymmer is a German SaaS platform with hosting and infrastructure designed for data protection and security.<br><br>Your community data belongs to you – you keep control over members, content and communication and reduce your dependence on social media platforms and their business models.' },
        { q: 'Do I still need other tools like Zoom, WhatsApp or Mailchimp?', a: 'Many of our customers streamline their entire tool landscape with Glymmer: live sessions and workshops run directly in Glymmer – external tools like Zoom, Teams or Miro are no longer needed. Community chat and channels centralise communication and replace scattered WhatsApp, Slack or Discord groups. Targeted push notifications and automated email updates make separate newsletter tools like Mailchimp unnecessary. Events, ticketing and memberships are organised and billed centrally on the platform.<br><br>Fewer tools, fewer gaps – more focus on your community.' },
        { q: 'How quickly can I get started with Glymmer?', a: 'You can usually set up your community in minutes: choose a template or structure, add branding (logo, colours, domain). Create your first channels, events and content. Invite members or import existing contacts.<br><br>We can support you with an individual migration service so you structure your first launches, courses or memberships clearly from the start.' },
        { q: 'Can I use Glymmer with my own branding – including an app?', a: 'Yes, Glymmer is designed as a white-label solution: you use your colours, your logo and optionally your own domain. Your community feels like your own platform – not someone else\'s network. You can also have your own community app provided for your members via the App Store and Google Play.' },
        { q: 'What pricing models are there and how do fees work?', a: 'Glymmer offers different packages for different growth phases – from smaller communities to large programmes.<br><br>You pay a monthly platform fee and a fair transaction fee on revenue generated through Glymmer. So you can start small and costs grow with your success, not the other way around.' },
        { q: 'What happens when my community grows a lot or I have multiple projects?', a: 'Glymmer is built to grow with you: you can add more members, programmes and events without rethinking your whole setup. For larger communities or bootcamps you get extended admin features, more storage, integrations and individual solutions. When you outgrow a package, you can upgrade easily – the community stays, you just unlock more options.' }
      ]
    },
    featuresPage: {
      heroTitle: 'All Features',
      heroSubtitle: 'Everything you need to run and monetise your community successfully',
      card1Title: 'Live Video & Workshops',
      card1Desc: 'Run webinars, bootcamps and virtual meetings with high-quality video tools. Supports various video formats for maximum flexibility.',
      card2Title: 'Chat & Channels',
      card2Desc: 'Easy communication in private and public groups. Organise discussions by topic and create protected spaces for exclusive content.',
      card3Title: 'Media Library & File Storage',
      card3Desc: 'Central storage for videos, documents and course materials. Organise your content clearly and make it accessible to your community.',
      card4Title: 'Gamification & Memberships',
      card4Desc: 'Motivate with gamification and exclusive offers. Reward active members and create incentives for engagement.',
      card5Title: 'Calendar & Ticketing',
      card5Desc: 'Organise events, manage access and sell tickets directly on the platform. All in one place, simple and clear.',
      card6Title: 'Surveys & Feedback',
      card6Desc: 'Gather insights and continuously improve your offerings. Get valuable feedback from your community.',
      card7Title: 'Analytics & Dashboard',
      card7Desc: 'Keep track of your community\'s activity, engagement and growth. Detailed analytics help you make data-driven decisions.',
      card8Title: 'Security & Privacy',
      card8Desc: 'State-of-the-art technology for maximum security and GDPR compliance. Your data and your community\'s data are safe.',
      card9Title: 'Content Sales',
      card9Desc: 'Sell one-off products or subscriptions directly in your community. Simple payment system for maximum conversion.'
    },
    coachesPage: {
      heroTitle: 'Build exclusive client communities',
      heroSubtitle: 'Create paid spaces with live Q&As, challenges and content drops for lasting customer loyalty.',
      card1Title: 'Centralise online courses and coaching',
      card1Desc: 'Stop switching between Zoom, email and sheets. Combine courses, live sessions and 1:1 in one space. Growth and upselling run automatically.',
      card2Title: 'Boost retention with community features',
      card2Desc: 'Forget forgotten follow-ups after sessions. Use chats, events and challenges for daily interaction – better learning outcomes without extra effort.',
      card3Title: 'Automate monetisation and scaling',
      card3Desc: 'No more complicated payment tools. Create memberships with exclusive content. For sustainable revenue as your community grows.'
    },
    creatorPage: {
      heroTitle: 'Launch monetised fan communities',
      heroSubtitle: 'Offer memberships, exclusive videos and channels for subscribers – perfect for passive income.',
      card1Title: 'Grow your brand with exclusive content',
      card1Desc: 'Stop wastage on social media. Build a loyal community with exclusive content and strong fan engagement. Monetisation through memberships and content runs seamlessly.',
      card2Title: 'Strengthen loyalty through interaction',
      card2Desc: 'Forget flat follower lists. Create lasting loyalty with direct exchange, events and special offers. Fans become subscribers.',
      card3Title: 'Scale revenue with product integrations',
      card3Desc: 'No more complicated payment plugins. Use memberships, product integrations and events – make your brand tangible and generate new revenue.'
    },
    bootcampsPage: {
      heroTitle: 'Structured intensive programmes',
      heroSubtitle: 'Run courses with channels, events and workbooks.',
      card1Title: 'Organise (weekly) courses in channels',
      card1Desc: 'Stop planning chaos across email, calendar & Zoom. Run structured programmes with channels for each module. Participants find everything instantly.',
      card2Title: 'Automate events',
      card2Desc: 'Forget manual session follow-ups. Use events and media library for continuous structure – programmes run smoothly.',
      card3Title: 'Boost completion rates with gamification',
      card3Desc: 'No more high dropouts. Combine challenges, leaderboards and rewards. Participants stay motivated until the end.'
    },
    lernraumPage: {
      heroTitle: 'Scale online teaching and group courses',
      heroSubtitle: 'Organise 1:1 tutoring or classes with interactive whiteboard and materials.',
      card1Title: 'Organise learning materials clearly',
      card1Desc: 'Stop searching through emails and drives. Organise online tutoring, workshops and materials in channels. Everything in one place and always to hand.',
      card2Title: 'Boost interaction in the digital classroom',
      card2Desc: 'Forget static PDFs. Enable interactive learning with live sessions, chats and whiteboards. Students stay engaged.',
      card3Title: 'Automate scalable learning',
      card3Desc: 'No more manual groups. Combine sessions with forums and materials. For growing classes without chaos.'
    },
    updatesPage: {
      heroTitle: 'Updates',
      heroSubtitle: 'Stay up to date with new features and improvements.',
      article1Title: 'Stronger stability & improved performance',
      article1Body: 'We have further optimised the technical foundation of our platform to give you an even more stable and faster experience. Numerous bug fixes and backend refinements ensure everything runs more smoothly — especially under heavy use or with large amounts of data.',
      article2Title: 'Calendar: Offline events now available',
      article2Body: 'You can now create and manage offline events in your calendar. This way you keep track of in-person events as well and can plan and share them with your community as usual.',
      article3Title: 'User-to-user calls directly on the platform',
      article3Body: 'We are pleased to introduce a new communication feature: users can now call each other directly — without external tools, right on the platform.',
      article4Title: 'More flexibility in the media library',
      article4Body: 'The media library now supports a wider range of file formats. You can upload and access even more content — including formats that were not previously supported, so you can use your resources more flexibly.'
    },
    preisePage: {
      heroTitle: 'Pricing',
      heroTrial: 'Try free for 14 days now',
      heroSubtitle: 'Choose the right licence package for your community',
      popularBadge: 'Popular',
      featuresLabel: 'Features:',
      starterTitle: 'Starter',
      starterPrice: '99 €/month',
      starterSpecs: '3 Admins / 5 Moderators / 250 GB storage / unlimited members',
      starterFee: '+ 5% platform fees*',
      starterF1: 'Profiles, Channels, Posts & interactions',
      starterF2: 'Direct/group chat, event calendar',
      starterF3: 'Payments',
      starterF4: 'Email support + GDPR compliant',
      proTitle: 'Professional',
      proPrice: '199 €/month',
      proSpecs: '5 Admins / 10 Moderators / 500 GB storage / unlimited members',
      proFee: '+ 3% platform fees*',
      proF1: 'Everything in Starter + Gamification basics',
      proF2: 'Search, video calls, event ticketing',
      proF3: 'Larger live rooms',
      proF4: 'Extended support',
      businessTitle: 'Business',
      businessPrice: '399 €/month',
      businessSpecs: '10 Admins / 20 Moderators / 1 TB storage / unlimited members',
      businessFee: '+ 1.5% platform fees*',
      businessF1: 'Everything in Professional + extended live rooms up to summits',
      businessF2: 'Advanced analytics & Gamification Professional',
      businessF3: 'Linked resources',
      businessF4: 'Phone support',
      enterpriseTitle: 'Enterprise',
      enterprisePrice: 'Custom',
      enterpriseF1: 'Individual white-label solution',
      enterpriseF2: 'Individual fees',
      enterpriseF3: 'Customer Success Manager',
      enterpriseF4: 'Dedicated support',
      enterpriseF5: 'Custom integrations',
      contactBtn: 'Contact us',
      disclaimer: 'All prices net plus VAT. 14-day free trial.',
      feeFootnote: '*Platform fees apply to all payments processed via Glymmer (e.g. for memberships, bookings or event tickets). Our payment partner also charges fees for payment processing, which vary depending on the payment method. You can find a detailed overview at <a href="https://www.mollie.com/en/pricing" target="_blank" rel="noopener noreferrer" class="underline hover:text-secondary">https://www.mollie.com/en/pricing</a>',
      faqHeading: 'Frequently asked questions about pricing',
      ctaTitle: 'Still have questions?',
      ctaSubtitle: 'Talk to our sales team about the right package for you'
    },
    imprintPage: {
      title: 'Imprint',
      section1Title: 'Responsible under § 5 German Teleservices Act (TMG)',
      section2Title: 'Registered office of the company',
      section3Title: 'Register court',
      section3Text: 'Charlottenburg District Court (HRB 246628 B)',
      contactTitle: 'Contact',
      disclaimerTitle: 'Disclaimer',
      disclaimerIntro: 'The contents of our pages were created with the greatest care. However, we cannot guarantee that the content is correct, complete or up to date.'
    },
    privacyPage: {
      title: 'Privacy',
      intro: 'Privacy policy for the Glymmer platform by teech Education GmbH · Status February 2026'
    },
    termsPage: {
      title: 'Terms',
      intro: 'General terms and conditions for the Glymmer platform by teech Education GmbH'
    }
  }
};

// Get current language from localStorage or default to 'de'
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'de';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLanguageSwitch(lang);
}

// Apply translations to the page
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  if (typeof window !== 'undefined') {
    window.__currentTranslations = t;
    if (t.terminModal) window.terminModalTranslations = t.terminModal;
  }

  // Navigation
  const navElements = {
    'nav-features': t.nav.features,
    'nav-use-cases': t.nav.useCases,
    'nav-pricing': t.nav.pricing,
    'nav-stories': t.nav.stories,
    'nav-updates': t.nav.updates,
    'nav-faq': t.nav.faq,
    'nav-talk-to-sales': t.nav.talkToSales,
    'nav-get-started': t.nav.getStarted,
    'nav-login': t.nav.login
  };

  Object.entries(navElements).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) {
      // Preserve SVG icons - only update text content
      const svg = el.querySelector('svg');
      if (svg) {
        // Remove all existing text nodes to avoid duplicates
        const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        textNodes.forEach(node => node.remove());
        
        // Insert text after SVG
        if (svg.nextSibling) {
          el.insertBefore(document.createTextNode(' ' + text), svg.nextSibling);
        } else {
          el.appendChild(document.createTextNode(' ' + text));
        }
      } else {
        el.textContent = text;
      }
    }
  });

  // Hero section
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.innerHTML = t.hero.title;
  
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  
  // Update both "Jetzt starten" buttons (header and hero)
  const heroCtaStartButtons = [
    document.getElementById('hero-cta-start'),
    document.getElementById('hero-cta-start-hero')
  ].filter(Boolean);
  
  heroCtaStartButtons.forEach(heroCtaStart => {
    // Preserve SVG icon - only update text content
    const svg = heroCtaStart.querySelector('svg');
    if (svg) {
      const textNodes = Array.from(heroCtaStart.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      if (textNodes.length > 0) {
        textNodes[0].textContent = t.hero.ctaStart;
      } else {
        heroCtaStart.insertBefore(document.createTextNode(t.hero.ctaStart), svg);
      }
    } else {
      heroCtaStart.textContent = t.hero.ctaStart;
    }
  });
  
  const heroCtaSales = document.getElementById('hero-cta-sales');
  if (heroCtaSales) heroCtaSales.textContent = t.hero.ctaSales;

  // Features
  const featuresTitle = document.getElementById('features-title');
  if (featuresTitle) featuresTitle.innerHTML = t.features.title;
  
  const featuresSubtitle = document.getElementById('features-subtitle');
  if (featuresSubtitle) featuresSubtitle.textContent = t.features.subtitle;
  
  const featuresViewAll = document.getElementById('features-view-all');
  if (featuresViewAll) featuresViewAll.innerHTML = t.features.viewAll;

  // Feature cards: Live Video, Chat mockup, Mediathek mockup
  const featureLiveVideoTitle = document.getElementById('feature-live-video-title');
  if (featureLiveVideoTitle) featureLiveVideoTitle.textContent = t.features.liveVideoTitle;
  const featureLiveVideoSubtitle = document.getElementById('feature-live-video-subtitle');
  if (featureLiveVideoSubtitle) featureLiveVideoSubtitle.textContent = t.features.liveVideoSubtitle;
  const featureChatTitle = document.getElementById('feature-chat-title');
  if (featureChatTitle) featureChatTitle.textContent = t.features.chatTitle;
  const featureChatSubtitle = document.getElementById('feature-chat-subtitle');
  if (featureChatSubtitle) featureChatSubtitle.textContent = t.features.chatSubtitle;
  const chatMsg1 = document.getElementById('chat-msg-1');
  if (chatMsg1) chatMsg1.textContent = t.features.chatMsg1;
  const chatMsg2 = document.getElementById('chat-msg-2');
  if (chatMsg2) chatMsg2.textContent = t.features.chatMsg2;
  const chatMsg3 = document.getElementById('chat-msg-3');
  if (chatMsg3) chatMsg3.textContent = t.features.chatMsg3;
  const chatMsg4 = document.getElementById('chat-msg-4');
  if (chatMsg4) chatMsg4.textContent = t.features.chatMsg4;
  const chatMsg5 = document.getElementById('chat-msg-5');
  if (chatMsg5) chatMsg5.textContent = t.features.chatMsg5;
  const chatAttachLabel = document.getElementById('chat-attach-label');
  if (chatAttachLabel) chatAttachLabel.textContent = t.features.chatAttach;
  const chatInput = document.getElementById('chat-input');
  if (chatInput) chatInput.placeholder = t.features.chatPlaceholder;
  const featureMediathekTitle = document.getElementById('feature-mediathek-title');
  if (featureMediathekTitle) featureMediathekTitle.textContent = t.features.mediathekTitle;
  const featureMediathekSubtitle = document.getElementById('feature-mediathek-subtitle');
  if (featureMediathekSubtitle) featureMediathekSubtitle.textContent = t.features.mediathekSubtitle;
  const file1Title = document.getElementById('file-1-title');
  if (file1Title) file1Title.textContent = t.features.file1Title;
  const file1Desc = document.getElementById('file-1-desc');
  if (file1Desc) file1Desc.textContent = t.features.file1Desc;
  const file2Title = document.getElementById('file-2-title');
  if (file2Title) file2Title.textContent = t.features.file2Title;
  const file2Desc = document.getElementById('file-2-desc');
  if (file2Desc) file2Desc.textContent = t.features.file2Desc;
  const file3TitleEl = document.getElementById('file-3-title');
  if (file3TitleEl) file3TitleEl.textContent = t.features.file3Title;
  const file3DescEl = document.getElementById('file-3-description');
  if (file3DescEl) file3DescEl.textContent = t.features.file3Desc;

  // Feature list (Monetarisierung, Mitgliedschaften, …) + tooltips
  const fl = t.featureList;
  if (fl) {
    const featureListIds = ['monetarisierung', 'mitgliedschaften', 'gamification', 'kalender', 'umfragen', 'analytics', 'gruppenchats', 'ticketing', 'integrationen', 'benachrichtigungen'];
    featureListIds.forEach(key => {
      const labelEl = document.getElementById('feature-label-' + key);
      if (labelEl) labelEl.textContent = fl[key];
      const tooltipEl = document.getElementById('feature-tooltip-' + key);
      if (tooltipEl) tooltipEl.textContent = fl[key + 'Tooltip'];
    });
  }

  // Use Cases
  const useCasesTitle = document.getElementById('use-cases-title');
  if (useCasesTitle) useCasesTitle.textContent = t.useCases.title;
  
  const useCasesSubtitle = document.getElementById('use-cases-subtitle');
  if (useCasesSubtitle) useCasesSubtitle.textContent = t.useCases.subtitle;
  
  const useCasesCoaches = document.getElementById('use-cases-coaches');
  if (useCasesCoaches) useCasesCoaches.textContent = t.useCases.forCoaches;
  
  const useCasesCreators = document.getElementById('use-cases-creators');
  if (useCasesCreators) useCasesCreators.textContent = t.useCases.forCreators;

  const useCasesBootcamps = document.getElementById('use-cases-bootcamps');
  if (useCasesBootcamps) useCasesBootcamps.textContent = t.useCases.forBootcamps;

  const useCasesLernraeume = document.getElementById('use-cases-lernraeume');
  if (useCasesLernraeume) useCasesLernraeume.textContent = t.useCases.forLernraeume;

  // Use Cases white boxes: "Mehr" / "More" link label
  ['use-cases-more-coaches', 'use-cases-more-creators', 'use-cases-more-bootcamps', 'use-cases-more-lernraeume'].forEach(id => {
    const el = document.getElementById(id);
    if (el && t.useCases.moreLabel) el.textContent = t.useCases.moreLabel;
  });

  // Use Cases nav (dropdown + mobile) – only update text, keep SVG
  const navUcIds = [
    'nav-uc-coaches', 'nav-uc-creators', 'nav-uc-bootcamps', 'nav-uc-lernraeume',
    'nav-uc-coaches-mobile', 'nav-uc-creators-mobile', 'nav-uc-bootcamps-mobile', 'nav-uc-lernraeume-mobile'
  ];
  const navUcTexts = [
    t.useCases.forCoaches, t.useCases.forCreators, t.useCases.forBootcamps, t.useCases.forLernraeume,
    t.useCases.forCoaches, t.useCases.forCreators, t.useCases.forBootcamps, t.useCases.forLernraeume
  ];
  navUcIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
    if (textNodes.length > 0) {
      textNodes[0].textContent = navUcTexts[i];
      textNodes.slice(1).forEach(n => n.remove());
    } else {
      el.appendChild(document.createTextNode(navUcTexts[i]));
    }
  });

  // Pricing
  const pricingTitle = document.getElementById('pricing-title');
  if (pricingTitle) pricingTitle.textContent = t.pricing.title;
  
  const pricingSubtitle = document.getElementById('pricing-subtitle');
  if (pricingSubtitle) pricingSubtitle.textContent = t.pricing.subtitle;
  
  const pricingView = document.getElementById('pricing-view');
  if (pricingView) pricingView.textContent = t.pricing.viewPrices;

  // Stories
  const storiesTitle = document.getElementById('stories-title');
  if (storiesTitle) storiesTitle.textContent = t.stories.title;
  
  const storiesSubtitle = document.getElementById('stories-subtitle');
  if (storiesSubtitle) storiesSubtitle.textContent = t.stories.subtitle;
  
  const storiesViewAll = document.getElementById('stories-view-all');
  if (storiesViewAll) storiesViewAll.textContent = t.stories.viewAll;

  // CTA
  const ctaTitle = document.getElementById('cta-title');
  if (ctaTitle) ctaTitle.textContent = t.cta.title;
  
  const ctaSubtitle = document.getElementById('cta-subtitle');
  if (ctaSubtitle) ctaSubtitle.textContent = t.cta.subtitle;
  
  const ctaStart = document.getElementById('cta-start');
  if (ctaStart) {
    // Preserve SVG icon - only update text content
    const svg = ctaStart.querySelector('svg');
    if (svg) {
      const textNodes = Array.from(ctaStart.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      if (textNodes.length > 0) {
        textNodes[0].textContent = t.cta.start;
      } else {
        ctaStart.insertBefore(document.createTextNode(t.cta.start), svg);
      }
    } else {
      ctaStart.textContent = t.cta.start;
    }
  }
  
  const ctaTalkToSales = document.getElementById('cta-talk-to-sales') || document.getElementById('cta-sales');
  if (ctaTalkToSales) ctaTalkToSales.textContent = t.cta.talkToSales;

  // All "Termin vereinbaren" / "Talk to Sales" buttons (including in modals and CTAs)
  document.querySelectorAll('[data-termin-modal="open"]').forEach(function(el) {
    if (el.id === 'app-generate-button') return; // Text kommt aus app.generateBtn
    const textNodes = Array.from(el.childNodes).filter(function(n) { return n.nodeType === Node.TEXT_NODE; });
    if (textNodes.length > 0) {
      textNodes[0].textContent = t.cta.talkToSales;
      textNodes.slice(1).forEach(function(n) { n.remove(); });
    } else {
      el.appendChild(document.createTextNode(t.cta.talkToSales));
    }
  });

  // Termin modal (injected by termin-modal.js) – update when present
  if (t.terminModal) {
    const termTitle = document.getElementById('termin-modal-title');
    if (termTitle) termTitle.textContent = t.terminModal.title;
    const termClose = document.getElementById('termin-modal-close');
    if (termClose) termClose.setAttribute('aria-label', t.terminModal.closeAria);
    const termLabelVorname = document.getElementById('termin-modal-label-vorname');
    if (termLabelVorname) termLabelVorname.textContent = t.terminModal.labelFirstname;
    const termLabelNachname = document.getElementById('termin-modal-label-nachname');
    if (termLabelNachname) termLabelNachname.textContent = t.terminModal.labelLastname;
    const termLabelTelefon = document.getElementById('termin-modal-label-telefon');
    if (termLabelTelefon) termLabelTelefon.textContent = t.terminModal.labelPhone;
    const termLabelEmail = document.getElementById('termin-modal-label-email');
    if (termLabelEmail) termLabelEmail.textContent = t.terminModal.labelEmail;
    const termLabelKommentar = document.getElementById('termin-modal-label-kommentar');
    if (termLabelKommentar) termLabelKommentar.textContent = t.terminModal.labelComment;
    const termKommentar = document.getElementById('termin-kommentar');
    if (termKommentar) termKommentar.placeholder = t.terminModal.placeholderComment;
    const termCheckboxLabel = document.getElementById('termin-modal-label-checkbox');
    if (termCheckboxLabel) termCheckboxLabel.innerHTML = t.terminModal.checkboxLabel;
    const termPrivacyLink = document.getElementById('termin-modal-privacy-link');
    if (termPrivacyLink && t.terminModal.privacyLinkText) termPrivacyLink.innerHTML = t.terminModal.privacyLinkText;
    const termSubmit = document.getElementById('termin-modal-submit');
    if (termSubmit) termSubmit.textContent = t.terminModal.submitBtn;
  }

  // FAQ modal (index, preise, or injected by faq-modal.js)
  if (t.faq) {
    const faqTitle = document.getElementById('faq-modal-title');
    if (faqTitle) faqTitle.textContent = t.faq.title;
    const faqClose = document.getElementById('close-faq-modal');
    if (faqClose) faqClose.setAttribute('aria-label', t.faq.closeAria);
    const openFaqLink = document.getElementById('open-faq-modal-link');
    if (openFaqLink && t.faq.viewAllLink) openFaqLink.textContent = t.faq.viewAllLink;
    if (t.faq.questions && t.faq.questions.length) {
      t.faq.questions.forEach(function(item, i) {
        const detail = document.getElementById('faq-item-' + (i + 1));
        if (detail) {
          const qEl = detail.querySelector('summary .faq-q-text');
          const aEl = detail.querySelector('.faq-accordion-answer');
          if (qEl) qEl.textContent = item.q;
          if (aEl) aEl.innerHTML = item.a;
        }
      });
    }
  }

  // Customer Stories (3 boxes)
  const story1Headline = document.getElementById('story1-headline');
  if (story1Headline) story1Headline.textContent = t.stories.story1Headline;
  const story1Body = document.getElementById('story1-body');
  if (story1Body) story1Body.textContent = t.stories.story1Body;
  const story1Cta = document.getElementById('story1-cta');
  if (story1Cta) {
    const firstText = Array.from(story1Cta.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (firstText) firstText.textContent = t.stories.story1Cta + ' ';
  }
  const story2Headline = document.getElementById('story2-headline');
  if (story2Headline) story2Headline.textContent = t.stories.story2Headline;
  const story2Body = document.getElementById('story2-body');
  if (story2Body) story2Body.textContent = t.stories.story2Body;
  const story2Cta = document.getElementById('story2-cta');
  if (story2Cta) {
    const firstText = Array.from(story2Cta.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (firstText) firstText.textContent = t.stories.story2Cta + ' ';
  }
  const story3Headline = document.getElementById('story3-headline');
  if (story3Headline) story3Headline.textContent = t.stories.story3Headline;
  const story3Body = document.getElementById('story3-body');
  if (story3Body) story3Body.textContent = t.stories.story3Body;
  const story3Cta = document.getElementById('story3-cta');
  if (story3Cta) {
    const firstText = Array.from(story3Cta.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (firstText) firstText.textContent = t.stories.story3Cta + ' ';
  }
  document.querySelectorAll('.story-cta-book').forEach(el => { el.textContent = t.stories.ctaBook; });

  // Personalize
  const personalizeTitle = document.getElementById('personalize-title');
  if (personalizeTitle) personalizeTitle.textContent = t.personalize.title;
  const personalizeSubtitle = document.getElementById('personalize-subtitle');
  if (personalizeSubtitle) personalizeSubtitle.innerHTML = t.personalize.subtitle;
  const labelButtonColor = document.getElementById('platform-label-button-farbe');
  if (labelButtonColor) labelButtonColor.textContent = t.personalize.buttonColor;
  const labelBg = document.getElementById('platform-label-bg');
  if (labelBg) labelBg.textContent = t.personalize.backgroundColor;
  const labelLogo = document.getElementById('platform-label-logo');
  if (labelLogo) labelLogo.textContent = t.personalize.logo;
  const labelMenu = document.getElementById('platform-label-menu');
  if (labelMenu) labelMenu.textContent = t.personalize.menuItems;
  const labelDisplay = document.getElementById('platform-label-darstellung');
  if (labelDisplay) labelDisplay.textContent = t.personalize.display;
  const menuKalender = document.getElementById('platform-menu-kalender-label');
  if (menuKalender) menuKalender.textContent = t.personalize.kalender;
  const menuMediathek = document.getElementById('platform-menu-mediathek-label');
  if (menuMediathek) menuMediathek.textContent = t.personalize.mediathek;
  const menuBenach = document.getElementById('platform-menu-benach-label');
  if (menuBenach) menuBenach.textContent = t.personalize.benach;
  const menuChat = document.getElementById('platform-menu-chat-label');
  if (menuChat) menuChat.textContent = t.personalize.chat;

  // Platform mockup (Customize section) – all texts inside the preview
  const m = t.personalize.mockup;
  if (m) {
    const mockupAllChannels = document.getElementById('mockup-all-channels');
    if (mockupAllChannels) mockupAllChannels.textContent = m.allChannels;
    const mockupNavKalender = document.getElementById('mockup-nav-kalender');
    if (mockupNavKalender) mockupNavKalender.textContent = t.personalize.kalender;
    const mockupNavMediathek = document.getElementById('mockup-nav-mediathek');
    if (mockupNavMediathek) mockupNavMediathek.textContent = t.personalize.mediathek;
    const mockupNavBenach = document.getElementById('mockup-nav-benach');
    if (mockupNavBenach) mockupNavBenach.textContent = m.navBenach;
    const mockupNavChat = document.getElementById('mockup-nav-chat');
    if (mockupNavChat) mockupNavChat.textContent = t.personalize.chat;
    const mockupNavSettings = document.getElementById('mockup-nav-settings');
    if (mockupNavSettings) mockupNavSettings.textContent = m.settings;
    const mockupSearch = document.getElementById('mockup-search');
    if (mockupSearch) mockupSearch.placeholder = m.searchPlaceholder;
    const mockupComposer = document.getElementById('mockup-composer');
    if (mockupComposer) mockupComposer.setAttribute('data-placeholder', m.sharePlaceholder);
    const mockupAttachment = document.getElementById('mockup-attachment');
    if (mockupAttachment) mockupAttachment.textContent = m.attachment;
    const mockupSurveys = document.getElementById('mockup-surveys');
    if (mockupSurveys) mockupSurveys.textContent = m.surveys;
    const mockupOptionCategory = document.getElementById('mockup-option-category');
    if (mockupOptionCategory) mockupOptionCategory.textContent = m.selectCategory;
    const mockupOptionGeneral = document.getElementById('mockup-option-general');
    if (mockupOptionGeneral) mockupOptionGeneral.textContent = m.general;
    const mockupPostBtn = document.getElementById('mockup-post-btn');
    if (mockupPostBtn) mockupPostBtn.textContent = m.post;
    const mockupPaid = document.getElementById('mockup-paid');
    if (mockupPaid) mockupPaid.textContent = m.paid;
    const mockupPost1Meta = document.getElementById('mockup-post1-meta');
    if (mockupPost1Meta) mockupPost1Meta.textContent = m.post1Meta;
    const mockupPost1Text = document.getElementById('mockup-post1-text');
    if (mockupPost1Text) mockupPost1Text.textContent = m.post1Text;
    const mockupComment1 = document.getElementById('mockup-comment1');
    if (mockupComment1) mockupComment1.textContent = m.comment;
    const mockupPost2Meta = document.getElementById('mockup-post2-meta');
    if (mockupPost2Meta) mockupPost2Meta.textContent = m.post2Meta;
    const mockupPost2Text = document.getElementById('mockup-post2-text');
    if (mockupPost2Text) mockupPost2Text.textContent = m.post2Text;
    const mockupComment2 = document.getElementById('mockup-comment2');
    if (mockupComment2) mockupComment2.textContent = m.comment;
    const mockupUpcomingEvents = document.getElementById('mockup-upcoming-events');
    if (mockupUpcomingEvents) mockupUpcomingEvents.textContent = m.upcomingEvents;
    const mockupEvent1Time = document.getElementById('mockup-event1-time');
    if (mockupEvent1Time) mockupEvent1Time.textContent = m.event1Time;
    const mockupEvent2Time = document.getElementById('mockup-event2-time');
    if (mockupEvent2Time) mockupEvent2Time.textContent = m.event2Time;
    const mockupEvent3Time = document.getElementById('mockup-event3-time');
    if (mockupEvent3Time) mockupEvent3Time.textContent = m.event3Time;
    const mockupMessagesTitle = document.getElementById('mockup-messages-title');
    if (mockupMessagesTitle) mockupMessagesTitle.textContent = m.messages;
    ['mockup-msg1', 'mockup-msg2', 'mockup-msg3', 'mockup-msg4', 'mockup-msg5', 'mockup-msg6', 'mockup-msg7', 'mockup-msg8'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && m['msg' + (i + 1)]) el.textContent = m['msg' + (i + 1)];
    });
  }

  // Why Community + Quote
  const whyTitle = document.getElementById('why-community-title');
  if (whyTitle) whyTitle.textContent = t.whyCommunity.title;
  const quoteText = document.getElementById('quote-text');
  if (quoteText && t.whyCommunity.quoteWords) {
    const spans = quoteText.querySelectorAll('.quote-word');
    t.whyCommunity.quoteWords.forEach((word, i) => { if (spans[i]) spans[i].textContent = word; });
  }
  const mehrDazuText = document.getElementById('mehr-dazu-text');
  if (mehrDazuText) mehrDazuText.textContent = t.whyCommunity.mehrDazu;

  // App section
  const appTitle = document.getElementById('app-title');
  if (appTitle) appTitle.textContent = t.app.title;
  const appSubtitle = document.getElementById('app-subtitle');
  if (appSubtitle) appSubtitle.textContent = t.app.subtitle;
  const appGenerateBtnText = document.getElementById('app-generate-btn-text');
  if (appGenerateBtnText) appGenerateBtnText.textContent = t.app.generateBtn;

  // Footer
  const footerTagline = document.getElementById('footer-tagline');
  if (footerTagline) footerTagline.textContent = t.footer.tagline;
  const footerProduct = document.getElementById('footer-product');
  if (footerProduct) footerProduct.textContent = t.footer.product;
  const footerCompany = document.getElementById('footer-company');
  if (footerCompany) footerCompany.textContent = t.footer.company;
  const footerLegal = document.getElementById('footer-legal');
  if (footerLegal) footerLegal.textContent = t.footer.legal;
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) footerCopyright.textContent = t.footer.copyright;

  // Footer links
  const footerLinks = {
    'footer-link-features': t.nav.features,
    'footer-link-use-cases': t.nav.useCases,
    'footer-link-pricing': t.nav.pricing,
    'footer-link-updates': t.nav.updates,
    'footer-link-contact': t.footer.contact,
    'footer-link-about': t.footer.about,
    'footer-link-faq': t.nav.faq,
    'footer-link-imprint': t.footer.imprint,
    'footer-link-privacy': t.footer.privacy,
    'footer-link-terms': t.footer.terms
  };
  Object.entries(footerLinks).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // ----- Page-specific content (features, coaches, creator, bootcamps, lernraum, updates, preise, legal) -----
  function setText(id, text) { const el = document.getElementById(id); if (el && text != null) el.textContent = text; }
  function setHtml(id, html) { const el = document.getElementById(id); if (el && html != null) el.innerHTML = html; }

  if (t.featuresPage) {
    setText('features-hero-title', t.featuresPage.heroTitle);
    setText('features-hero-subtitle', t.featuresPage.heroSubtitle);
    for (let i = 1; i <= 9; i++) {
      setText('features-card-' + i + '-title', t.featuresPage['card' + i + 'Title']);
      setText('features-card-' + i + '-desc', t.featuresPage['card' + i + 'Desc']);
    }
  }
  if (t.coachesPage) {
    setText('coaches-hero-title', t.coachesPage.heroTitle);
    setText('coaches-hero-subtitle', t.coachesPage.heroSubtitle);
    for (let i = 1; i <= 3; i++) {
      setText('coaches-card-' + i + '-title', t.coachesPage['card' + i + 'Title']);
      setText('coaches-card-' + i + '-desc', t.coachesPage['card' + i + 'Desc']);
    }
  }
  if (t.creatorPage) {
    setText('creator-hero-title', t.creatorPage.heroTitle);
    setText('creator-hero-subtitle', t.creatorPage.heroSubtitle);
    for (let i = 1; i <= 3; i++) {
      setText('creator-card-' + i + '-title', t.creatorPage['card' + i + 'Title']);
      setText('creator-card-' + i + '-desc', t.creatorPage['card' + i + 'Desc']);
    }
  }
  if (t.bootcampsPage) {
    setText('bootcamps-hero-title', t.bootcampsPage.heroTitle);
    setText('bootcamps-hero-subtitle', t.bootcampsPage.heroSubtitle);
    for (let i = 1; i <= 3; i++) {
      setText('bootcamps-card-' + i + '-title', t.bootcampsPage['card' + i + 'Title']);
      setText('bootcamps-card-' + i + '-desc', t.bootcampsPage['card' + i + 'Desc']);
    }
  }
  if (t.lernraumPage) {
    setText('lernraum-hero-title', t.lernraumPage.heroTitle);
    setText('lernraum-hero-subtitle', t.lernraumPage.heroSubtitle);
    for (let i = 1; i <= 3; i++) {
      setText('lernraum-card-' + i + '-title', t.lernraumPage['card' + i + 'Title']);
      setText('lernraum-card-' + i + '-desc', t.lernraumPage['card' + i + 'Desc']);
    }
  }
  if (t.updatesPage) {
    setText('updates-hero-title', t.updatesPage.heroTitle);
    setText('updates-hero-subtitle', t.updatesPage.heroSubtitle);
    for (let i = 1; i <= 4; i++) {
      setText('updates-article-' + i + '-title', t.updatesPage['article' + i + 'Title']);
      setText('updates-article-' + i + '-body', t.updatesPage['article' + i + 'Body']);
    }
  }
  if (t.preisePage) {
    setText('preise-hero-title', t.preisePage.heroTitle);
    if (t.preisePage.heroTrial) setText('preise-hero-trial', t.preisePage.heroTrial);
    setText('preise-hero-subtitle', t.preisePage.heroSubtitle);
    setText('preise-popular', t.preisePage.popularBadge);
    setText('preise-features-label', t.preisePage.featuresLabel);
    setText('preise-features-label-pro', t.preisePage.featuresLabel);
    setText('preise-features-label-business', t.preisePage.featuresLabel);
    setText('preise-starter-title', t.preisePage.starterTitle);
    setText('preise-starter-price', t.preisePage.starterPrice);
    setText('preise-starter-specs', t.preisePage.starterSpecs);
    setText('preise-starter-fee', t.preisePage.starterFee);
    setText('preise-starter-f1', t.preisePage.starterF1);
    setText('preise-starter-f2', t.preisePage.starterF2);
    setText('preise-starter-f3', t.preisePage.starterF3);
    setText('preise-starter-f4', t.preisePage.starterF4);
    setText('preise-pro-title', t.preisePage.proTitle);
    setText('preise-pro-price', t.preisePage.proPrice);
    setText('preise-pro-specs', t.preisePage.proSpecs);
    setText('preise-pro-fee', t.preisePage.proFee);
    setText('preise-pro-f1', t.preisePage.proF1);
    setText('preise-pro-f2', t.preisePage.proF2);
    setText('preise-pro-f3', t.preisePage.proF3);
    setText('preise-pro-f4', t.preisePage.proF4);
    setText('preise-business-title', t.preisePage.businessTitle);
    setText('preise-business-price', t.preisePage.businessPrice);
    setText('preise-business-specs', t.preisePage.businessSpecs);
    setText('preise-business-fee', t.preisePage.businessFee);
    setText('preise-business-f1', t.preisePage.businessF1);
    setText('preise-business-f2', t.preisePage.businessF2);
    setText('preise-business-f3', t.preisePage.businessF3);
    setText('preise-business-f4', t.preisePage.businessF4);
    setText('preise-enterprise-title', t.preisePage.enterpriseTitle);
    setText('preise-enterprise-price', t.preisePage.enterprisePrice);
    setText('preise-enterprise-f1', t.preisePage.enterpriseF1);
    setText('preise-enterprise-f2', t.preisePage.enterpriseF2);
    setText('preise-enterprise-f3', t.preisePage.enterpriseF3);
    setText('preise-enterprise-f4', t.preisePage.enterpriseF4);
    setText('preise-enterprise-f5', t.preisePage.enterpriseF5);
    setText('preise-contact-btn', t.preisePage.contactBtn);
    setText('preise-disclaimer', t.preisePage.disclaimer);
    setText('preise-faq-heading', t.preisePage.faqHeading);
    setText('preise-cta-title', t.preisePage.ctaTitle);
    setText('preise-cta-subtitle', t.preisePage.ctaSubtitle);
    const feeFootnoteEl = document.getElementById('preise-fee-footnote');
    if (feeFootnoteEl && t.preisePage.feeFootnote) feeFootnoteEl.innerHTML = t.preisePage.feeFootnote;
  }
  // All "Jetzt starten" links (pricing cards + CTA) – preserve SVG
  document.querySelectorAll('.js-cta-start').forEach(function(el) {
    const text = (t.cta && t.cta.start) ? t.cta.start : '';
    const svg = el.querySelector('svg');
    if (svg && text) {
      const textNodes = Array.from(el.childNodes).filter(function(n) { return n.nodeType === Node.TEXT_NODE; });
      if (textNodes.length > 0) {
        textNodes[0].textContent = text;
      } else {
        el.insertBefore(document.createTextNode(text), svg);
      }
    } else if (text) {
      el.textContent = text;
    }
  });
  if (t.imprintPage) {
    setText('legal-imprint-title', t.imprintPage.title);
    setText('legal-imprint-h1', t.imprintPage.title);
    setText('legal-imprint-section1', t.imprintPage.section1Title);
    setText('legal-imprint-section2', t.imprintPage.section2Title);
    setText('legal-imprint-section3', t.imprintPage.section3Text != null ? t.imprintPage.section3Text : t.imprintPage.section3Title);
    setText('legal-imprint-contact', t.imprintPage.contactTitle);
    setText('legal-imprint-disclaimer-title', t.imprintPage.disclaimerTitle);
    setText('legal-imprint-disclaimer-intro', t.imprintPage.disclaimerIntro);
  }
  if (t.privacyPage) {
    setText('legal-privacy-title', t.privacyPage.title);
    setText('legal-privacy-h1', t.privacyPage.title);
    setText('legal-privacy-intro', t.privacyPage.intro);
  }
  if (t.termsPage) {
    setText('legal-terms-title', t.termsPage.title);
    setText('legal-terms-h1', t.termsPage.title);
    setText('legal-terms-intro', t.termsPage.intro);
  }

  // Mobile nav
  const navMobile = { 'mobile-menu-title': t.nav.menu, 'nav-features-mobile': t.nav.features, 'nav-use-cases-mobile': t.nav.useCases, 'nav-pricing-mobile': t.nav.pricing, 'nav-updates-mobile': t.nav.updates, 'nav-stories-mobile': t.nav.stories, 'nav-faq-mobile': t.nav.faq, 'nav-get-started-mobile': t.nav.getStarted };
  Object.entries(navMobile).forEach(([id, text]) => { const el = document.getElementById(id); if (el) el.textContent = text; });
}

// Update language switch button
function updateLanguageSwitch(lang) {
  const switchBtn = document.getElementById('language-switch');
  if (switchBtn) {
    const span = switchBtn.querySelector('span');
    if (span) {
      // Smooth fade transition
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.2s ease';
      
      setTimeout(() => {
        span.textContent = lang === 'de' ? 'EN' : 'DE';
        span.style.opacity = '1';
      }, 100);
    }
    switchBtn.setAttribute('data-lang', lang);
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  // Add click handler to language switch
  const switchBtn = document.getElementById('language-switch');
  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      // Add click animation
      switchBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        switchBtn.style.transform = 'scale(1)';
      }, 150);
      
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'de' ? 'en' : 'de';
      setLanguage(newLang);
    });
  }
});

