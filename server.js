const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const PORT = 8000;
const TERMIN_EMAIL_TO = 'hi@glymmer.io';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain'
};

function sendTerminEmail(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined
  });

  const text = [
    'Neue Rückruf-Anfrage (Termin vereinbaren)',
    '',
    'Vorname: ' + (data.vorname || ''),
    'Nachname: ' + (data.nachname || ''),
    'Telefon: ' + (data.telefon || ''),
    'E-Mail: ' + (data.email || ''),
    data.kommentar ? 'Kommentar: ' + data.kommentar : ''
  ].join('\n');

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@glymmer.io',
    to: TERMIN_EMAIL_TO,
    subject: 'Rückruf-Anfrage: ' + (data.vorname || '') + ' ' + (data.nachname || ''),
    text: text
  };

  return transporter.sendMail(mailOptions);
}

function serveFile(req, res, filePath, contentType) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code + ' ..\n');
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content, 'utf-8');
    }
  });
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url);
  const hasApiTermin = url.split('?')[0] === '/api/termin';

  if (hasApiTermin && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      let data;
      try {
        data = JSON.parse(body || '{}');
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Ungültige Anfrage.' }));
        return;
      }
      const hasSmtp = process.env.SMTP_HOST || process.env.SMTP_USER;
      if (hasSmtp) {
        sendTerminEmail(data)
          .then(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          })
          .catch((err) => {
            console.error('Termin E-Mail Fehler:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'E-Mail konnte nicht gesendet werden.' }));
          });
      } else {
        console.log('Termin-Anfrage (SMTP nicht konfiguriert):', data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      }
    });
    return;
  }

  let filePath = '.' + url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  serveFile(req, res, filePath, contentType);
});

server.listen(PORT, 'localhost', () => {
  console.log('');
  console.log('🚀 Community Landingpage läuft!');
  console.log('');
  console.log('   → Lokal:   http://localhost:' + PORT);
  console.log('');
  console.log('📄 Verfügbare Seiten:');
  console.log('   → Startseite:  http://localhost:' + PORT + '/index.html');
  if (!process.env.SMTP_HOST && !process.env.SMTP_USER) {
    console.log('');
    console.log('   ⚠️  Termin-Formular: E-Mails an hi@glymmer.io nur mit SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS)');
  }
  console.log('');
  console.log('Drücke Ctrl+C zum Beenden');
  console.log('');
});
