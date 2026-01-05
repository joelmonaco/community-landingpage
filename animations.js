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


