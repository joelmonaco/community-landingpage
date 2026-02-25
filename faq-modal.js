(function() {
  if (document.getElementById('faq-modal')) return;
  var html = '<div id="faq-modal" class="fixed inset-0 z-50 hidden items-center justify-center modal-overlay overflow-y-auto" style="background-color: #7167F5;">'
    + '<div class="absolute inset-0 flex items-center justify-center pointer-events-none" style="z-index: 1;">'
    + '<span class="text-[22rem] md:text-[32rem] lg:text-[42rem] xl:text-[52rem] font-black leading-none" style="font-family: \'Cal Sans\', sans-serif; color: rgba(0, 0, 0, 0.03);">FAQ</span></div>'
    + '<div class="relative w-full flex items-center justify-center px-2 sm:px-4 lg:px-6 py-12 min-h-full" style="z-index: 2;">'
    + '<button id="close-faq-modal" class="fixed top-6 right-6 text-white z-[60] p-2 rounded-full" aria-label="Schließen">'
    + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
    + '<div class="max-w-7xl mx-auto text-left modal-content w-full">'
    + '<h2 id="faq-modal-title" class="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-normal text-white" style="font-family: \'Cal Sans\', sans-serif;">Häufige Fragen</h2>'
    + '<div class="faq-accordion-list">'
    + '<details id="faq-item-1" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Was ist glymmer eigentlich genau?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">glymmer ist deine Community-Plattform, auf der du Inhalte, Austausch und Umsatz an einem Ort bündelst – unter deiner eigenen Marke.<br><br>Du kannst Communities für Coaches, Creator, Bootcamps oder Lernräume aufbauen, Live-Sessions hosten, Kurse anbieten, Mitgliedschaften verkaufen, Events organisieren und alles über ein zentrales Dashboard steuern – DSGVO-konform und Made in Germany.</div></div></div></details>'
    + '<details id="faq-item-2" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Für wen ist glymmer geeignet?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">glymmer ist für alle, die mehr wollen als eine lose Follower-Liste:<br><strong>Coaches &amp; Trainer</strong>, die aus Kunden eine echte Community machen wollen.<br><strong>Creator</strong>, die ihre Inhalte und Fans in ein eigenes, monetarisierbares Ökosystem holen möchten.<br><strong>Bootcamps &amp; Bildungsanbieter</strong>, die Programme mit Struktur, Live-Sessions und Community kombinieren.<br><strong>Lernräume, Nachhilfe &amp; Academies</strong>, die Online-Unterricht, Gruppen und Materialien an einem Ort organisieren wollen.</div></div></div></details>'
    + '<details id="faq-item-3" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Was kann ich mit glymmer konkret machen?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">Du kannst: <strong>Community aufbauen</strong> – Channels, Gruppenchats, Feeds, Events, Live-Sessions. <strong>Content strukturieren</strong> – Mediathek, Dateiablage, Kursbereiche, Workbooks. <strong>Monetarisieren</strong> – Mitgliedschaften, einmalige Produktverkäufe, Tickets für Events. <strong>Lernen &amp; Engagement stärken</strong> – Gamification, Challenges, Feedback, Umfragen. <strong>Alles steuern</strong> – Analytics, Admin-Dashboard, Rollen &amp; Berechtigungen.</div></div></div></details>'
    + '<details id="faq-item-4" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Wie verdiene ich Geld mit glymmer?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">glymmer wurde dafür gebaut, dass sich deine Community rechnet: Erstelle <strong>Mitgliedschaften</strong> mit unterschiedlichen Zugangslevels (z.B. Basic, Premium, VIP). Verkaufe <strong>Programme, Kurse, Bootcamps oder Einzelprodukte</strong> direkt in deiner Community. Nutze <strong>Events &amp; Ticketing</strong>, um Workshops, Live-Formate oder Challenges zu monetarisieren. Deine Zahlungen laufen zentral über die Plattform – wiederkehrende Einnahmen inklusive.</div></div></div></details>'
    + '<details id="faq-item-5" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Kann ich glymmer kostenlos testen?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">Klar! <a href="/preise.html" class="underline font-medium hover:no-underline">Jetzt testen für 14 Tage kostenlos</a>.</div></div></div></details>'
    + '<details id="faq-item-6" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Ist glymmer DSGVO-konform und wo liegen die Daten?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">Ja, glymmer ist eine deutsche SaaS-Plattform mit Hosting und Infrastruktur, die auf Datenschutz und Sicherheit ausgelegt ist.<br><br>Deine Community-Daten gehören dir – du behältst die Kontrolle über Mitglieder, Inhalte und Kommunikation und reduzierst deine Abhängigkeit von Social-Media-Plattformen und deren Geschäftsmodellen.</div></div></div></details>'
    + '<details id="faq-item-7" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Brauche ich noch andere Tools wie Zoom, WhatsApp oder Mailchimp?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">Viele unserer Kunden verschlanken mit glymmer ihre komplette Tool-Landschaft: Live-Sessions und Workshops laufen direkt in glymmer – externe Tools wie Zoom, Teams oder Miro werden nicht mehr gebraucht. Community-Chat und Channels bündeln die Kommunikation und ersetzen verstreute WhatsApp-, Slack- oder Discord-Gruppen. Gezielte Push-Benachrichtigungen und automatisierte E-Mail-Updates machen separate Newsletter-Tools wie Mailchimp überflüssig. Events, Ticketing und Mitgliedschaften werden zentral in der Plattform organisiert und abgerechnet.<br><br>Weniger Tools, weniger Brüche – mehr Fokus auf deine Community.</div></div></div></details>'
    + '<details id="faq-item-8" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Wie schnell kann ich mit glymmer starten?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">In der Regel kannst du deine Community innerhalb weniger Minuten aufsetzen: Template oder Struktur auswählen, Branding hinzufügen (Logo, Farben, Domain). Erste Channels, Events und Inhalte anlegen. Mitglieder einladen oder bestehende Kontakte importieren.<br><br>Auf Wunsch begleiten wir dich mit einem individuellen Migrationsservice, damit du deine ersten Launches, Kurse oder Memberships direkt sauber strukturierst.</div></div></div></details>'
    + '<details id="faq-item-9" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Kann ich glymmer in meinem eigenen Branding nutzen – inklusive App?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">Ja, glymmer ist als White-Label-Lösung gedacht: Du nutzt deine Farben, dein Logo und auf Wunsch deine eigene Domain. Deine Community fühlt sich wie deine eigene Plattform an – nicht wie ein fremdes Netzwerk. Zusätzlich kannst du dir eine eigene Community-App bereitstellen lassen, die deine Mitglieder über App Store und Google Play nutzen.</div></div></div></details>'
    + '<details id="faq-item-10" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Welche Preismodelle gibt es und wie funktionieren die Gebühren?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">glymmer bietet verschiedene Pakete für unterschiedliche Wachstumsphasen – von kleineren Communities bis zu großen Programmen.<br><br>Du zahlst eine monatliche Plattformgebühr und eine faire Transaktionsgebühr auf Umsätze, die über glymmer laufen. So kannst du klein starten und die Kosten wachsen mit deinem Erfolg, nicht andersherum.</div></div></div></details>'
    + '<details id="faq-item-11" class="faq-accordion-item rounded-2xl overflow-hidden text-black"><summary class="faq-accordion-question cursor-pointer list-none px-4 py-4 text-xl font-semibold flex items-center justify-between gap-3" style="font-family: \'Cal Sans\', sans-serif;"><span class="faq-q-text">Was passiert, wenn meine Community stark wächst oder ich mehrere Projekte habe?</span><span class="faq-accordion-icon flex-shrink-0 transition-transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><div class="faq-accordion-answer-wrapper"><div class="faq-accordion-answer-inner"><div class="faq-accordion-answer px-4 pb-3 pt-0 text-sm leading-relaxed" style="font-family: \'Suisse Intl\', sans-serif;">glymmer ist darauf ausgelegt, mit dir mitzuwachsen: Du kannst mehr Mitglieder, zusätzliche Programme und Events abbilden, ohne dein Setup komplett neu zu denken. Für größere Communities oder Bootcamps stehen dir erweiterte Admin-Features, mehr Speicher, Integrationen und individuelle Lösungen zur Verfügung. Wenn du merkst, dass du aus einem Paket „herausgewachsen“ bist, kannst du unkompliziert upgraden – die Community bleibt, du schaltest nur mehr Möglichkeiten frei.</div></div></div></details>'
    + '</div></div></div></div>';
  document.body.insertAdjacentHTML('beforeend', html);

  var faqModal = document.getElementById('faq-modal');
  var closeFaqButton = document.getElementById('close-faq-modal');
  var navFaq = document.getElementById('nav-faq');
  var navFaqMobile = document.getElementById('nav-faq-mobile');
  var footerLinkFaq = document.getElementById('footer-link-faq');
  var burgerMenuDropdown = document.getElementById('burger-menu-dropdown');
  var burgerMenuOverlay = document.getElementById('burger-menu-overlay');
  var burgerMenu = document.getElementById('burger-menu');

  function openFaqModal() {
    faqModal.classList.remove('hidden');
    faqModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (burgerMenuDropdown) {
      burgerMenuDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
      burgerMenuDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
    if (burgerMenuOverlay && !burgerMenuOverlay.classList.contains('translate-x-full')) {
      burgerMenuOverlay.classList.add('translate-x-full');
      if (burgerMenu) burgerMenu.classList.remove('active');
    }
    setTimeout(function() { faqModal.classList.add('show'); }, 10);
  }

  function closeFaqModal() {
    faqModal.classList.remove('show');
    setTimeout(function() {
      faqModal.classList.add('hidden');
      faqModal.classList.remove('flex');
      document.body.style.overflow = '';
    }, 500);
  }

  if (navFaq) navFaq.addEventListener('click', function(e) { e.preventDefault(); openFaqModal(); });
  if (navFaqMobile) navFaqMobile.addEventListener('click', function(e) { e.preventDefault(); openFaqModal(); });
  if (footerLinkFaq) footerLinkFaq.addEventListener('click', function(e) { e.preventDefault(); openFaqModal(); });
  closeFaqButton.addEventListener('click', closeFaqModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && faqModal && !faqModal.classList.contains('hidden')) closeFaqModal();
  });
  faqModal.addEventListener('click', function(e) {
    if (e.target === faqModal) closeFaqModal();
  });

  var faqItems = document.querySelectorAll('.faq-accordion-item');
  if (faqItems.length === 0) return;
  var TRANSITION_MS = 500;
  var FLIP_DURATION_MS = 420;
  var FLIP_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  function getRects(elements) {
    return Array.from(elements).map(function(el) { return el.getBoundingClientRect(); });
  }
  function applyFlipAnimation(items, rectsBefore, rectsAfter, excludeItem, onEnd) {
    var toClean = [];
    items.forEach(function(el, i) {
      if (el === excludeItem) return;
      var before = rectsBefore[i];
      var after = rectsAfter[i];
      var dx = before.left - after.left;
      var dy = before.top - after.top;
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return;
      el.style.willChange = 'transform';
      el.style.backfaceVisibility = 'hidden';
      el.style.transition = 'transform ' + (FLIP_DURATION_MS / 1000) + 's ' + FLIP_EASING;
      el.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
      toClean.push(el);
    });
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        toClean.forEach(function(el) { el.style.transform = 'translate3d(0, 0, 0)'; });
        setTimeout(function() {
          toClean.forEach(function(el) {
            el.style.willChange = '';
            el.style.backfaceVisibility = '';
            el.style.transition = '';
            el.style.transform = '';
          });
          if (onEnd) onEnd();
        }, FLIP_DURATION_MS + 30);
      });
    });
  }
  function closeFaqItem(item, withFlip, done) {
    var wrapper = item.querySelector('.faq-accordion-answer-wrapper');
    var answerInner = item.querySelector('.faq-accordion-answer-inner');
    if (!wrapper || !answerInner || !item.hasAttribute('open')) return;
    var rectsBefore = getRects(faqItems);
    wrapper.style.maxHeight = 'none';
    var measuredHeight = answerInner.scrollHeight;
    wrapper.style.maxHeight = measuredHeight + 'px';
    void wrapper.offsetHeight;
    requestAnimationFrame(function() { wrapper.style.maxHeight = '0px'; });
    setTimeout(function() {
      item.removeAttribute('open');
      wrapper.style.maxHeight = '0px';
      if (withFlip) {
        void item.offsetHeight;
        var rectsAfter = getRects(faqItems);
        applyFlipAnimation(faqItems, rectsBefore, rectsAfter, null, done);
      } else if (done) done();
    }, TRANSITION_MS + 20);
  }
  faqItems.forEach(function(item) {
    var summary = item.querySelector('summary');
    var wrapper = item.querySelector('.faq-accordion-answer-wrapper');
    var answerInner = item.querySelector('.faq-accordion-answer-inner');
    if (!summary || !wrapper || !answerInner) return;
    wrapper.style.maxHeight = '0px';
    summary.addEventListener('click', function(e) {
      e.preventDefault();
      var isOpen = item.hasAttribute('open');
      if (isOpen) {
        closeFaqItem(item, true);
      } else {
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item && otherItem.hasAttribute('open')) {
            var ow = otherItem.querySelector('.faq-accordion-answer-wrapper');
            otherItem.removeAttribute('open');
            if (ow) ow.style.maxHeight = '0px';
          }
        });
        void item.offsetHeight;
        item.setAttribute('open', '');
        wrapper.style.maxHeight = 'none';
        var targetHeight = answerInner.scrollHeight;
        wrapper.style.maxHeight = targetHeight + 'px';
      }
    });
  });
})();
