// Language Switcher
const translations = {
  de: {
    nav: {
      features: 'Features',
      useCases: 'Use Cases',
      pricing: 'Preise',
      stories: 'Customer Stories',
      talkToSales: 'Mit Sales sprechen',
      getStarted: 'Jetzt starten',
      login: 'Log In'
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
      viewAll: 'Alle Features ansehen →'
    },
    useCases: {
      title: 'Für jeden das Richtige',
      subtitle: 'Egal ob Coach oder Creator – Teech passt sich deinen Bedürfnissen an',
      forCoaches: 'Für Coaches',
      forCreators: 'Für Creator',
      learnMore: 'Mehr erfahren →'
    },
    pricing: {
      title: 'Preise',
      subtitle: 'Wähle das passende Lizenzpaket für deine Community',
      viewPrices: 'Preise ansehen'
    },
    stories: {
      title: 'Customer Stories',
      subtitle: 'Erfolgsgeschichten unserer Kunden',
      viewAll: 'Alle Stories ansehen'
    },
    cta: {
      title: 'Bereit loszulegen?',
      subtitle: 'Starte noch heute und baue deine Community auf',
      start: 'Jetzt starten',
      talkToSales: 'Mit Sales sprechen'
    }
  },
  en: {
    nav: {
      features: 'Features',
      useCases: 'Use Cases',
      pricing: 'Pricing',
      stories: 'Customer Stories',
      talkToSales: 'Talk to Sales',
      getStarted: 'Get Started',
      login: 'Log In'
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
      viewAll: 'View all features →'
    },
    useCases: {
      title: 'For Everyone',
      subtitle: 'Whether you\'re a Coach or Creator – Teech adapts to your needs',
      forCoaches: 'For Coaches',
      forCreators: 'For Creators',
      learnMore: 'Learn more →'
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the right license package for your community',
      viewPrices: 'View pricing'
    },
    stories: {
      title: 'Customer Stories',
      subtitle: 'Success stories from our customers',
      viewAll: 'View all stories'
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Start today and build your community',
      start: 'Start for free',
      talkToSales: 'Talk to Sales'
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
  
  const heroCtaStart = document.getElementById('hero-cta-start');
  if (heroCtaStart) {
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
  }
  
  const heroCtaSales = document.getElementById('hero-cta-sales');
  if (heroCtaSales) heroCtaSales.textContent = t.hero.ctaSales;

  // Features
  const featuresTitle = document.getElementById('features-title');
  if (featuresTitle) featuresTitle.innerHTML = t.features.title;
  
  const featuresSubtitle = document.getElementById('features-subtitle');
  if (featuresSubtitle) featuresSubtitle.textContent = t.features.subtitle;
  
  const featuresViewAll = document.getElementById('features-view-all');
  if (featuresViewAll) featuresViewAll.innerHTML = t.features.viewAll;

  // Use Cases
  const useCasesTitle = document.getElementById('use-cases-title');
  if (useCasesTitle) useCasesTitle.textContent = t.useCases.title;
  
  const useCasesSubtitle = document.getElementById('use-cases-subtitle');
  if (useCasesSubtitle) useCasesSubtitle.textContent = t.useCases.subtitle;
  
  const useCasesCoaches = document.getElementById('use-cases-coaches');
  if (useCasesCoaches) useCasesCoaches.textContent = t.useCases.forCoaches;
  
  const useCasesCreators = document.getElementById('use-cases-creators');
  if (useCasesCreators) useCasesCreators.textContent = t.useCases.forCreators;

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
  
  const ctaTalkToSales = document.getElementById('cta-talk-to-sales');
  if (ctaTalkToSales) ctaTalkToSales.textContent = t.cta.talkToSales;
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

