// Scroll-Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Alle Elemente mit animate-on-scroll beobachten
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

// Page Load Animationen
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Hero Animationen
  const heroElements = document.querySelectorAll('.fade-in, .delay-100, .delay-200, .delay-300, .delay-400, .delay-500, .delay-600');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
    }, index * 100);
  });
});

// Parallax-Effekt für Floating User Boxes - ROBUSTE IMPLEMENTIERUNG
(function() {
  'use strict';
  
  let ticking = false;
  let boxLeft = null;
  let boxRight = null;
  let mediathekBox = null;
  let kalenderBox = null;
  let umsatzBox = null;
  let heroWireframe = null;
  let heroSection = null;
  
  function initParallax() {
    boxLeft = document.getElementById('floating-box-left');
    boxRight = document.getElementById('floating-box-right');
    mediathekBox = document.getElementById('mediathek-box');
    kalenderBox = document.getElementById('kalender-box');
    umsatzBox = document.getElementById('umsatz-box');
    heroWireframe = document.getElementById('hero-wireframe');
    heroSection = document.querySelector('.gradient-bg');
    
    if (!boxLeft || !boxRight || !heroSection) {
      return false;
    }
    
    // WICHTIG: Lass die CSS Pop-In Animation zuerst ablaufen
    // Opacity wird durch die CSS Animation gesetzt
    
    // Setze will-change für bessere Performance
    boxLeft.style.willChange = 'transform';
    boxRight.style.willChange = 'transform';
    if (mediathekBox) {
      mediathekBox.style.willChange = 'transform';
    }
    if (kalenderBox) {
      kalenderBox.style.willChange = 'transform';
    }
    if (umsatzBox) {
      umsatzBox.style.willChange = 'transform';
    }
    if (heroWireframe) {
      heroWireframe.style.willChange = 'transform';
    }
    
    // Warte bis Animation abgeschlossen ist, dann starte Parallax
    // Warte länger, damit alle Pop-In Animationen abgeschlossen sind (max delay 0.6s + animation 0.6s = 1.2s)
    setTimeout(() => {
      // Entferne Animation, aber behalte Opacity bei 1
      boxLeft.style.animation = 'none';
      boxRight.style.animation = 'none';
      boxLeft.style.opacity = '1';
      boxRight.style.opacity = '1';
      if (mediathekBox) {
        mediathekBox.style.animation = 'none';
        mediathekBox.style.opacity = '1';
      }
      if (kalenderBox) {
        kalenderBox.style.animation = 'none';
        kalenderBox.style.opacity = '1';
      }
      if (umsatzBox) {
        umsatzBox.style.animation = 'none';
        umsatzBox.style.opacity = '1';
      }
      updateParallax();
    }, 1500);
    
    return true;
  }
  
  function updateParallax() {
    if (!boxLeft || !boxRight || !heroSection) return;
    
    // WICHTIG: Stelle sicher, dass Boxen immer sichtbar sind (nach Animation)
    // Nur setzen wenn Animation bereits abgeschlossen ist
    if (boxLeft.style.animation === 'none' || !boxLeft.style.animation) {
      boxLeft.style.opacity = '1';
    }
    if (boxRight.style.animation === 'none' || !boxRight.style.animation) {
      boxRight.style.opacity = '1';
    }
    if (mediathekBox && (mediathekBox.style.animation === 'none' || !mediathekBox.style.animation)) {
      mediathekBox.style.opacity = '1';
    }
    if (kalenderBox && (kalenderBox.style.animation === 'none' || !kalenderBox.style.animation)) {
      kalenderBox.style.opacity = '1';
    }
    if (umsatzBox && (umsatzBox.style.animation === 'none' || !umsatzBox.style.animation)) {
      umsatzBox.style.opacity = '1';
    }
    
    const scrollY = window.scrollY || window.pageYOffset;
    const heroTop = heroSection.offsetTop;
    const heroHeight = heroSection.offsetHeight;
    
    // EINFACHE Berechnung: Direkt basierend auf Scroll-Position
    // Progress von 0 (oben) bis 1 (unten der Hero-Section)
    const maxScroll = heroTop + heroHeight;
    const scrollProgress = Math.max(0, Math.min(1, scrollY / maxScroll));
    
    // Parallax-Effekt: Sehr subtiler Effekt
    // Linke Box (Leni Welsch): bewegt sich nach OBEN beim Scrollen
    // Rechte Box (Isabel Kohr): bewegt sich nach UNTEN beim Scrollen
    // Mediathek Box: bewegt sich nach UNTEN beim Scrollen (entgegengesetzt zur Leni Box, aber schwächer)
    // Kalender Box: bewegt sich nach OBEN beim Scrollen (entgegengesetzt zur Isabel Box, aber schwächer)
    // Umsatz Box: bewegt sich nach OBEN beim Scrollen (entgegengesetzt zur rechten Box)
    // Hero Wireframe: bewegt sich langsamer nach unten (inverser Parallax)
    const parallaxStrength = 50; // Sehr subtiler, dezenter Effekt
    const mediathekParallaxStrength = 30; // Schwächerer Effekt für Mediathek
    const kalenderParallaxStrength = 30; // Schwächerer Effekt für Kalender
    const umsatzParallaxStrength = 20; // Noch schwächerer Effekt für Umsatz (weniger als Kalender)
    const wireframeParallaxStrength = 30; // Noch subtilerer Effekt für das Wireframe
    
    const offsetLeft = -scrollProgress * parallaxStrength;
    const offsetRight = scrollProgress * parallaxStrength;
    const offsetMediathek = scrollProgress * mediathekParallaxStrength; // Nach unten, aber schwächer
    const offsetKalender = -scrollProgress * kalenderParallaxStrength; // Nach oben, aber schwächer
    const offsetUmsatz = -scrollProgress * umsatzParallaxStrength; // Nach oben, aber schwächer als Kalender
    const offsetWireframe = scrollProgress * wireframeParallaxStrength; // Langsamer nach unten
    
    // Setze transform direkt - überschreibt alles
    boxLeft.style.transform = `translateY(${offsetLeft}px)`;
    boxRight.style.transform = `translateY(${offsetRight}px)`;
    if (mediathekBox) {
      mediathekBox.style.transform = `translateY(${offsetMediathek}px)`;
    }
    if (kalenderBox) {
      kalenderBox.style.transform = `translateY(${offsetKalender}px)`;
    }
    if (umsatzBox) {
      umsatzBox.style.transform = `translateY(${offsetUmsatz}px)`;
    }
    if (heroWireframe) {
      heroWireframe.style.transform = `translateY(${offsetWireframe}px)`;
    }
    
    ticking = false;
  }
  
  function requestParallaxTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  // Initialisiere sofort
  function setupParallax() {
    if (initParallax()) {
      // Warte bis Animation abgeschlossen ist, dann starte Parallax
      setTimeout(() => {
        // Scroll-Event Listener
        window.addEventListener('scroll', requestParallaxTick, { passive: true });
        
        // Resize-Event Listener
        window.addEventListener('resize', () => {
          setTimeout(updateParallax, 50);
        });
        
        // Erste Berechnung nach Animation
        updateParallax();
      }, 1600);
    } else {
      // Retry wenn Elemente noch nicht geladen sind
      setTimeout(setupParallax, 100);
    }
  }
  
  // Starte sofort - mehrfach für maximale Kompatibilität
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupParallax);
  } else {
    setupParallax();
  }
  
  window.addEventListener('load', () => {
    setTimeout(setupParallax, 50);
  });
  
  // Zusätzlicher Start nach kurzer Verzögerung
  setTimeout(setupParallax, 200);
})();

// Umsatzanzeige Animation - Zahl zählt von 0 bis zur finalen Zahl
(function() {
  'use strict';
  
  function animateUmsatzNumber() {
    const umsatzBox = document.getElementById('umsatz-box');
    const umsatzNumber = document.getElementById('umsatz-number');
    
    if (!umsatzBox || !umsatzNumber) {
      // Retry wenn Elemente noch nicht geladen sind
      setTimeout(animateUmsatzNumber, 100);
      return;
    }
    
    // Warte bis die Pop-In Animation abgeschlossen ist (0.3s delay + 0.6s animation = 0.9s)
    // Starte die Zahlenanimation parallel mit den Linien (bei 0.9s)
    setTimeout(() => {
      const targetValue = 42163;
      const duration = 1200; // 1.2s - parallel zu den Linien
      const startTime = performance.now();
      
      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing-Funktion für smooth counting
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOutCubic * targetValue);
        
        // Formatiere die Zahl mit Tausender-Trennzeichen
        const formattedValue = currentValue.toLocaleString('de-DE');
        umsatzNumber.textContent = formattedValue + '€';
        
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          // Stelle sicher, dass die finale Zahl korrekt angezeigt wird
          umsatzNumber.textContent = '42.163€';
        }
      }
      
      requestAnimationFrame(updateNumber);
    }, 900); // Start nach Pop-In Animation
  }
  
  // Starte Animation wenn DOM geladen ist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateUmsatzNumber);
  } else {
    animateUmsatzNumber();
  }
  
  // Zusätzlicher Start nach kurzer Verzögerung
  setTimeout(animateUmsatzNumber, 200);
})();





