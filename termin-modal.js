/**
 * Termin vereinbaren – Popup-Modal mit Rückruf-Formular
 * Wird auf allen Seiten eingebunden; alle Links/Buttons mit data-termin-modal="open" öffnen das Modal.
 */
(function () {
  'use strict';

  var MODAL_ID = 'termin-modal-overlay';
  var FORM_ID = 'termin-modal-form';

  function injectStyles() {
    var css =
      '#termin-modal-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;}' +
      '#termin-modal-overlay.is-open{opacity:1;visibility:visible;}' +
      '#termin-modal-box{position:relative;width:100%;max-width:28rem;max-height:90vh;overflow-y:auto;background:#fff;border-radius:1.5rem;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);padding:1.5rem;}' +
      '#termin-modal-close{position:absolute;top:1rem;right:1rem;width:2rem;height:2rem;border:none;background:transparent;cursor:pointer;color:#666;border-radius:9999px;display:flex;align-items:center;justify-content:center;}' +
      '#termin-modal-close:hover{background:#f3f4f6;color:#111;}' +
      '#termin-modal-form label{display:block;font-weight:500;margin-bottom:0.25rem;font-size:0.875rem;}' +
      '#termin-modal-form input[type=text],#termin-modal-form input[type=email],#termin-modal-form input[type=tel],#termin-modal-form textarea{width:100%;padding:0.5rem 0.75rem;border:1px solid #e5e7eb;border-radius:0.5rem;font-size:1rem;margin-bottom:1rem;}' +
      '#termin-modal-form textarea{min-height:4rem;resize:vertical;}' +
      '#termin-modal-form .checkbox-group{margin:1rem 0;}' +
      '#termin-modal-form .checkbox-group label{display:flex;align-items:flex-start;gap:0.5rem;font-weight:400;cursor:pointer;}' +
      '#termin-modal-form .checkbox-group input{width:1rem;height:1rem;margin-top:0.2rem;}' +
      '#termin-modal-form .checkbox-group a{text-decoration:underline;color:#7167F5;}' +
      '#termin-modal-form button[type=submit]{width:100%;padding:0.75rem 1rem;background:#7167F5;color:#fff;border:none;border-radius:9999px;font-weight:600;cursor:pointer;}' +
      '#termin-modal-form button[type=submit]:hover{background:#5b52d4;}' +
      '#termin-modal-form .message{margin-top:1rem;padding:0.75rem;border-radius:0.5rem;display:none;}' +
      '#termin-modal-form .message.success{display:block;background:#d1fae5;color:#065f46;}' +
      '#termin-modal-form .message.error{display:block;background:#fee2e2;color:#991b1b;}';
    var style = document.createElement('style');
    style.id = 'termin-modal-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function getModalHTML() {
    var base = document.querySelector('base') ? (document.querySelector('base').href.replace(/\/[^/]*$/, '/') || '') : '';
    return (
      '<div id="' +
      MODAL_ID +
      '" class="termin-modal-overlay" aria-hidden="true">' +
      '<div id="termin-modal-box" class="termin-modal-box" role="dialog" aria-labelledby="termin-modal-title">' +
      '<button type="button" id="termin-modal-close" aria-label="Schließen">&times;</button>' +
      '<h2 id="termin-modal-title" style="font-size:1.25rem;font-weight:600;margin-bottom:1rem;">Rückruf vereinbaren</h2>' +
      '<form id="' +
      FORM_ID +
      '">' +
      '<label for="termin-vorname">Vorname *</label>' +
      '<input type="text" id="termin-vorname" name="vorname" required autocomplete="given-name">' +
      '<label for="termin-nachname">Nachname *</label>' +
      '<input type="text" id="termin-nachname" name="nachname" required autocomplete="family-name">' +
      '<label for="termin-telefon">Telefonnummer *</label>' +
      '<input type="tel" id="termin-telefon" name="telefon" required autocomplete="tel">' +
      '<label for="termin-email">E-Mail *</label>' +
      '<input type="email" id="termin-email" name="email" required autocomplete="email">' +
      '<label for="termin-kommentar">Kommentar (optional)</label>' +
      '<textarea id="termin-kommentar" name="kommentar" placeholder="Wann passt es Ihnen? Weitere Wünsche?"></textarea>' +
      '<div class="checkbox-group">' +
      '<label><input type="checkbox" name="agb_datenschutz" required> Ich akzeptiere die <a href="/terms.html" target="_blank" rel="noopener">AGB</a> und die <a href="/privacy.html" target="_blank" rel="noopener">Datenschutzerklärung</a> *</label>' +
      '</div>' +
      '<button type="submit">Anfrage senden</button>' +
      '<div class="message" id="termin-form-message" role="alert"></div>' +
      '</form>' +
      '</div>' +
      '</div>'
    );
  }

  function openModal() {
    var overlay = document.getElementById(MODAL_ID);
    if (overlay) {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    var overlay = document.getElementById(MODAL_ID);
    if (overlay) {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function showMessage(type, text) {
    var el = document.getElementById('termin-form-message');
    if (!el) return;
    el.className = 'message ' + type;
    el.textContent = text;
    el.style.display = 'block';
  }

  function hideMessage() {
    var el = document.getElementById('termin-form-message');
    if (el) {
      el.className = 'message';
      el.style.display = 'none';
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    hideMessage();
    var form = document.getElementById(FORM_ID);
    if (!form) return;
    var vorname = (form.vorname && form.vorname.value) || '';
    var nachname = (form.nachname && form.nachname.value) || '';
    var telefon = (form.telefon && form.telefon.value) || '';
    var email = (form.email && form.email.value) || '';
    var kommentar = (form.kommentar && form.kommentar.value) || '';
    var agbDatenschutz = form.agb_datenschutz && form.agb_datenschutz.checked;
    if (!agbDatenschutz) {
      showMessage('error', 'Bitte AGB und Datenschutzerklärung akzeptieren.');
      return;
    }
    var btn = form.querySelector('button[type=submit]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Wird gesendet…';
    }
    fetch('/api/termin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vorname: vorname.trim(),
        nachname: nachname.trim(),
        telefon: telefon.trim(),
        email: email.trim(),
        kommentar: kommentar.trim(),
        agb: true,
        datenschutz: true
      })
    })
      .then(function (res) {
        if (res.ok) {
          showMessage('success', 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.');
          form.reset();
          setTimeout(closeModal, 2000);
        } else {
          return res.json().then(function (data) {
            throw new Error(data.message || 'Fehler beim Senden.');
          }, function () {
            throw new Error('Fehler beim Senden. Bitte später erneut versuchen.');
          });
        }
      })
      .catch(function (err) {
        showMessage('error', err.message || 'Fehler beim Senden. Bitte später erneut versuchen.');
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Anfrage senden';
        }
      });
  }

  function init() {
    if (document.getElementById(MODAL_ID)) return;
    injectStyles();
    var wrap = document.createElement('div');
    wrap.innerHTML = getModalHTML();
    document.body.appendChild(wrap.firstElementChild);

    var overlay = document.getElementById(MODAL_ID);
    var form = document.getElementById(FORM_ID);
    var closeBtn = document.getElementById('termin-modal-close');

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
    if (form) form.addEventListener('submit', handleSubmit);

    document.querySelectorAll('[data-termin-modal="open"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
