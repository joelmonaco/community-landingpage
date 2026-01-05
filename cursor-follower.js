// Cursor Follower - Nur für Desktop
(function() {
  // Warte bis DOM geladen ist
  function initCursor() {
    // Prüfe ob Desktop - weniger strikte Prüfung
    // Für Test: Immer aktivieren (kann später wieder eingeschränkt werden)
    const isDesktop = true; // Temporär immer aktiv für Debugging
    // const isDesktop = !('ontouchstart' in window) || window.matchMedia('(pointer: fine)').matches;
    
    if (!isDesktop) {
      return; // Nicht auf Touch-Geräten
    }
    
    // Erstelle Cursor-Follower Element
    const cursor = document.createElement('div');
    cursor.id = 'cursor-follower';
    cursor.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #8B5CF6;
      pointer-events: none;
      z-index: 99999;
      transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
      opacity: 1;
      box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let currentSize = 8;
    let isVisible = true;

    // Initial position - sichtbar machen
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursor.style.opacity = '1';

    // Update Mouse Position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
      isVisible = true;
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Smooth Animation Loop
    function animateCursor() {
      // Smooth following mit easing
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    }

    // Start Animation
    animateCursor();

    // Verstecke Cursor wenn Maus das Fenster verlässt
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      isVisible = false;
    });

    // Zeige Cursor wieder wenn Maus zurückkommt
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      isVisible = true;
    });

    // Größer werden bei Hover auf interaktive Elemente
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        currentSize = 16;
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.opacity = '0.7';
      });
      el.addEventListener('mouseleave', () => {
        currentSize = 8;
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '1';
      });
    });
  }

  // Initialisiere sofort oder wenn DOM bereit ist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    initCursor();
  }
})();
