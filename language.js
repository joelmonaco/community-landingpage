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
      talkToSales: 'Mit Sales sprechen',
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
      generateBtn: 'App generieren'
    },
    cta: {
      title: 'Bereit loszulegen?',
      subtitle: 'Starte noch heute und baue deine Community auf',
      start: 'Jetzt starten',
      talkToSales: 'Mit Sales sprechen',
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
      talkToSales: 'Talk to Sales',
      getStarted: 'Get Started',
      login: 'Log In',
      menu: 'Menu'
    },
    hero: {
      title: 'Your Community.<br />Your Rules.',
      subtitle: 'Monetize your passion, build a vibrant community and sell content – all in one platform.',
      ctaStart: 'Get started',
      ctaSales: 'Contact Sales'
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
      ctaBook: 'Book a call'
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
      generateBtn: 'Generate app'
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Start today and build your community',
      start: 'Start for free',
      talkToSales: 'Talk to Sales',
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
    const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.textContent = navUcTexts[i];
    else el.appendChild(document.createTextNode(navUcTexts[i]));
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

