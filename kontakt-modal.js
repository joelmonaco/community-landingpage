/**
 * Kontakt – Popup-Modal mit Kontaktformular (Betreff, Nachricht, Anhang)
 * Wird auf allen Seiten eingebunden; alle Links/Buttons mit data-kontakt-modal="open" öffnen das Modal.
 */
(function () {
  'use strict';

  var MODAL_ID = 'kontakt-modal-overlay';
  var FORM_ID = 'kontakt-modal-form';
  var MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

  function injectStyles() {
    var css =
      '#kontakt-modal-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;}' +
      '#kontakt-modal-overlay.is-open{opacity:1;visibility:visible;}' +
      '#kontakt-modal-box{position:relative;width:100%;max-width:32rem;max-height:90vh;overflow-y:auto;background:#fff;border-radius:1.5rem;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);padding:1.5rem;}' +
      '#kontakt-modal-close{position:absolute;top:1rem;right:1rem;width:2rem;height:2rem;border:none;background:transparent;cursor:pointer;color:#666;border-radius:9999px;display:flex;align-items:center;justify-content:center;}' +
      '#kontakt-modal-close:hover{background:#f3f4f6;color:#111;}' +
      '#kontakt-modal-form label{display:block;font-weight:500;margin-bottom:0.25rem;font-size:0.875rem;}' +
      '#kontakt-modal-form input[type=text],#kontakt-modal-form input[type=email],#kontakt-modal-form input[type=tel],#kontakt-modal-form select,#kontakt-modal-form textarea{width:100%;padding:0.5rem 0.75rem;border:1px solid #e5e7eb;border-radius:0.5rem;font-size:1rem;margin-bottom:1rem;font-family:inherit;box-sizing:border-box;}' +
      '#kontakt-modal-form select{appearance:auto;background:#fff;}' +
      '#kontakt-modal-form textarea{min-height:5rem;resize:vertical;}' +
      '#kontakt-modal-form .file-upload-wrapper{margin-bottom:1rem;}' +
      '#kontakt-modal-form .file-upload-wrapper input[type=file]{width:100%;font-size:0.875rem;padding:0.4rem 0;}' +
      '#kontakt-modal-form .file-upload-hint{font-size:0.75rem;color:#9ca3af;margin-top:0.15rem;}' +
      '#kontakt-modal-form .checkbox-group{margin:1rem 0;}' +
      '#kontakt-modal-form .checkbox-group label{display:flex;align-items:flex-start;gap:0.5rem;font-weight:400;cursor:pointer;}' +
      '#kontakt-modal-form .checkbox-group input{width:1rem;height:1rem;margin-top:0.2rem;}' +
      '#kontakt-modal-form .checkbox-group a{text-decoration:underline;color:#7167F5;}' +
      '#kontakt-modal-form .privacy-link-line{margin-top:0.5rem;font-size:0.8125rem;color:#6b7280;}' +
      '#kontakt-modal-form .privacy-link-line a{text-decoration:underline;color:#7167F5;}' +
      '#kontakt-modal-form button[type=submit]{width:100%;padding:0.75rem 1rem;background:#7167F5;color:#fff;border:none;border-radius:9999px;font-weight:600;cursor:pointer;font-size:1rem;}' +
      '#kontakt-modal-form button[type=submit]:hover{background:#5b52d4;}' +
      '#kontakt-modal-form .message{margin-top:1rem;padding:0.75rem;border-radius:0.5rem;display:none;}' +
      '#kontakt-modal-form .message.success{display:block;background:#d1fae5;color:#065f46;}' +
      '#kontakt-modal-form .message.error{display:block;background:#fee2e2;color:#991b1b;}';
    var style = document.createElement('style');
    style.id = 'kontakt-modal-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  var defaultStrings = {
    title: 'Kontakt',
    closeAria: 'Schließen',
    labelFirstname: 'Vorname *',
    labelLastname: 'Nachname *',
    labelEmail: 'E-Mail *',
    labelPhone: 'Telefonnummer *',
    labelSubject: 'Betreff *',
    labelMessage: 'Nachricht *',
    labelAttachment: 'Anhang (optional, max. 5 MB)',
    placeholderMessage: 'Wie können wir Ihnen helfen?',
    subjectOptions: [
      'Generelle Fragen/Feedback',
      'Subscription',
      'Technischer Support/Fehler',
      'Partnerschaft/Kooperation',
      'Datenschutz/Compliance',
      'Missbrauch in einer Community melden'
    ],
    subjectPlaceholder: 'Bitte wählen…',
    checkboxLabel: 'Ich akzeptiere die <a href="/terms.html" target="_blank" rel="noopener">AGB</a> *',
    privacyLinkText: 'Lese hier die <a href="/privacy.html" target="_blank" rel="noopener">Datenschutzbestimmungen</a>.',
    submitBtn: 'Nachricht senden',
    sendingBtn: 'Wird gesendet…',
    successMessage: 'Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze.',
    errorAccept: 'Bitte AGB und Datenschutzbestimmungen akzeptieren.',
    errorFileSize: 'Die Datei ist zu groß. Maximal 5 MB erlaubt.',
    errorSend: 'Fehler beim Senden. Bitte später erneut versuchen.'
  };

  function getStrings() {
    return (typeof window !== 'undefined' && window.kontaktModalTranslations) ? window.kontaktModalTranslations : defaultStrings;
  }

  function buildSubjectOptions(s) {
    var opts = '<option value="" disabled selected>' + (s.subjectPlaceholder || 'Bitte wählen…') + '</option>';
    var list = s.subjectOptions || defaultStrings.subjectOptions;
    for (var i = 0; i < list.length; i++) {
      opts += '<option value="' + list[i] + '">' + list[i] + '</option>';
    }
    return opts;
  }

  function getModalHTML() {
    var s = getStrings();
    return (
      '<div id="' + MODAL_ID + '" aria-hidden="true">' +
      '<div id="kontakt-modal-box" role="dialog" aria-labelledby="kontakt-modal-title">' +
      '<button type="button" id="kontakt-modal-close" aria-label="' + (s.closeAria || 'Schließen') + '">&times;</button>' +
      '<h2 id="kontakt-modal-title" style="font-size:1.25rem;font-weight:600;margin-bottom:1rem;font-family:\'Cal Sans\',sans-serif;">' + (s.title || 'Kontakt') + '</h2>' +
      '<form id="' + FORM_ID + '">' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 0.75rem;">' +
        '<div>' +
          '<label id="kontakt-label-vorname" for="kontakt-vorname">' + (s.labelFirstname || 'Vorname *') + '</label>' +
          '<input type="text" id="kontakt-vorname" name="vorname" required autocomplete="given-name">' +
        '</div>' +
        '<div>' +
          '<label id="kontakt-label-nachname" for="kontakt-nachname">' + (s.labelLastname || 'Nachname *') + '</label>' +
          '<input type="text" id="kontakt-nachname" name="nachname" required autocomplete="family-name">' +
        '</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 0.75rem;">' +
        '<div>' +
          '<label id="kontakt-label-email" for="kontakt-email">' + (s.labelEmail || 'E-Mail *') + '</label>' +
          '<input type="email" id="kontakt-email" name="email" required autocomplete="email">' +
        '</div>' +
        '<div>' +
          '<label id="kontakt-label-telefon" for="kontakt-telefon">' + (s.labelPhone || 'Telefonnummer *') + '</label>' +
          '<input type="tel" id="kontakt-telefon" name="telefon" required autocomplete="tel">' +
        '</div>' +
      '</div>' +
      '<label id="kontakt-label-betreff" for="kontakt-betreff">' + (s.labelSubject || 'Betreff *') + '</label>' +
      '<select id="kontakt-betreff" name="betreff" required>' + buildSubjectOptions(s) + '</select>' +
      '<label id="kontakt-label-nachricht" for="kontakt-nachricht">' + (s.labelMessage || 'Nachricht *') + '</label>' +
      '<textarea id="kontakt-nachricht" name="nachricht" required placeholder="' + (s.placeholderMessage || '') + '"></textarea>' +
      '<div class="file-upload-wrapper">' +
        '<label id="kontakt-label-anhang" for="kontakt-anhang">' + (s.labelAttachment || 'Anhang (optional, max. 5 MB)') + '</label>' +
        '<input type="file" id="kontakt-anhang" name="anhang" accept="*/*">' +
        '<div class="file-upload-hint">Max. 5 MB</div>' +
      '</div>' +
      '<div class="checkbox-group">' +
        '<label><input type="checkbox" name="agb" required> <span id="kontakt-label-checkbox">' + (s.checkboxLabel || defaultStrings.checkboxLabel) + '</span></label>' +
      '</div>' +
      '<p class="privacy-link-line" id="kontakt-privacy-link">' + (s.privacyLinkText || defaultStrings.privacyLinkText) + '</p>' +
      '<button type="submit" id="kontakt-modal-submit">' + (s.submitBtn || 'Nachricht senden') + '</button>' +
      '<div class="message" id="kontakt-form-message" role="alert"></div>' +
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
    var el = document.getElementById('kontakt-form-message');
    if (!el) return;
    el.className = 'message ' + type;
    el.textContent = text;
    el.style.display = 'block';
  }

  function hideMessage() {
    var el = document.getElementById('kontakt-form-message');
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
    var s = getStrings();

    if (!form.agb || !form.agb.checked) {
      showMessage('error', s.errorAccept || defaultStrings.errorAccept);
      return;
    }

    var fileInput = document.getElementById('kontakt-anhang');
    if (fileInput && fileInput.files.length > 0) {
      if (fileInput.files[0].size > MAX_FILE_SIZE) {
        showMessage('error', s.errorFileSize || defaultStrings.errorFileSize);
        return;
      }
    }

    var btn = form.querySelector('button[type=submit]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = s.sendingBtn || defaultStrings.sendingBtn;
    }

    var formData = new FormData();
    formData.append('vorname', (form.vorname.value || '').trim());
    formData.append('nachname', (form.nachname.value || '').trim());
    formData.append('email', (form.email.value || '').trim());
    formData.append('telefon', (form.telefon.value || '').trim());
    formData.append('betreff', (form.betreff.value || '').trim());
    formData.append('nachricht', (form.nachricht.value || '').trim());
    if (fileInput && fileInput.files.length > 0) {
      formData.append('anhang', fileInput.files[0]);
    }

    fetch('api/kontakt.php', {
      method: 'POST',
      body: formData
    })
      .then(function (res) {
        if (res.ok) {
          showMessage('success', s.successMessage || defaultStrings.successMessage);
          form.reset();
          setTimeout(closeModal, 2500);
        } else {
          return res.json().then(function (data) {
            throw new Error(data.message || s.errorSend);
          }, function () {
            throw new Error(s.errorSend || defaultStrings.errorSend);
          });
        }
      })
      .catch(function (err) {
        showMessage('error', err.message || s.errorSend || defaultStrings.errorSend);
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = s.submitBtn || defaultStrings.submitBtn;
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
    var closeBtn = document.getElementById('kontakt-modal-close');

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
    if (form) form.addEventListener('submit', handleSubmit);

    document.querySelectorAll('[data-kontakt-modal="open"]').forEach(function (el) {
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
