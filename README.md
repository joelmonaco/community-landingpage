# Teech Community Landingpage

Eine moderne, SEO-optimierte Landingpage für die Teech Community-Plattform.

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Website läuft dann auf `http://localhost:8000`

Mit `npm run dev` wird der Server mit Nodemon gestartet, der automatisch neu startet, wenn Dateien geändert werden.

## Produktion

```bash
npm start
```

## Struktur

### Hauptseiten
- `index.html` - Hauptseite mit Hero, Features, Use Cases, Preise, Customer Stories
- `features.html` - Detaillierte Übersicht aller Features
- `use-cases.html` - Use Cases für Coaches und Creator
- `preise.html` - Preise und Pakete
- `customer-stories.html` - Erfolgsgeschichten unserer Kunden
- `faq.html` - Häufig gestellte Fragen
- `kontakt.html` - Kontaktformular und "Mit Sales sprechen"

### Rechtliche Seiten
- `impressum.html` - Impressum gemäß § 5 TMG
- `datenschutz.html` - Datenschutzerklärung
- `agb.html` - Allgemeine Geschäftsbedingungen

### Technische Dateien
- `server.js` - HTTP-Server (Port 8000)
- `fonts/` - Schriftarten (Vanguard CF und Suisse Intl)
- `package.json` - Projekt-Konfiguration

## Features

- ✅ SEO-optimiert (Meta-Tags, Structured Data, Canonical URLs)
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Moderne, clean UI mit Tailwind CSS
- ✅ Custom Fonts (Vanguard CF für Headlines, Suisse Intl für Text)
- ✅ Alle Seiten als statische HTML-Dateien (einfach auf Webspace hochladbar)
- ✅ Header mit Navigation und Login-Button (linkt zu Subdomain)
- ✅ Footer mit allen wichtigen Links

## Deployment

Alle HTML-Dateien können direkt auf einen Webspace hochgeladen werden. Die Fonts müssen im `fonts/` Verzeichnis verfügbar sein.

