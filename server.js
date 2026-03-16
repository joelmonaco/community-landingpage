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

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined
  });
}

function sendTerminEmail(data) {
  const transporter = getTransporter();
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

function sendKontaktEmail(data) {
  const transporter = getTransporter();
  const text = [
    'Neue Kontaktanfrage',
    '',
    'Betreff: ' + (data.betreff || ''),
    'Vorname: ' + (data.vorname || ''),
    'Nachname: ' + (data.nachname || ''),
    'E-Mail: ' + (data.email || ''),
    data.telefon ? 'Telefon: ' + data.telefon : '',
    '',
    'Nachricht:',
    data.nachricht || ''
  ].filter(Boolean).join('\n');

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@glymmer.io',
    to: TERMIN_EMAIL_TO,
    subject: 'Kontaktanfrage [' + (data.betreff || '') + ']: ' + (data.vorname || '') + ' ' + (data.nachname || ''),
    text: text
  };

  if (data.anhangBuffer && data.anhangName) {
    mailOptions.attachments = [{
      filename: data.anhangName,
      content: data.anhangBuffer
    }];
  }

  return transporter.sendMail(mailOptions);
}

function sendContactEmail(data) {
  const transporter = getTransporter();
  const source = data.source === 'enterprise' ? 'Enterprise-Anfrage (Kontakt aufnehmen)' : 'Kontaktanfrage';
  const nameLine = (data.vorname || data.nachname)
    ? 'Vorname: ' + (data.vorname || '') + '\nNachname: ' + (data.nachname || '')
    : (data.name ? 'Name: ' + data.name : '');
  const text = [
    'Neue ' + source,
    '',
    nameLine,
    'E-Mail: ' + (data.email || ''),
    data.telefon ? 'Telefon: ' + data.telefon : '',
    data.message ? 'Nachricht: ' + data.message : ''
  ].filter(Boolean).join('\n');

  const subjectName = (data.vorname && data.nachname)
    ? (data.vorname + ' ' + data.nachname)
    : (data.name || data.email || 'Kontakt');
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@glymmer.io',
    to: TERMIN_EMAIL_TO,
    subject: source + ': ' + subjectName,
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

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const contentType = req.headers['content-type'] || '';
    const match = contentType.match(/boundary=(?:"([^"]+)"|([^\s;]+))/);
    if (!match) return reject(new Error('No boundary'));
    const boundary = match[1] || match[2];
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      const raw = buf.toString('binary');
      const parts = raw.split('--' + boundary).slice(1, -1);
      const fields = {};
      let fileData = null;
      for (const part of parts) {
        const [headerBlock, ...bodyParts] = part.split('\r\n\r\n');
        const body = bodyParts.join('\r\n\r\n').replace(/\r\n$/, '');
        const dispMatch = headerBlock.match(/name="([^"]+)"/);
        if (!dispMatch) continue;
        const name = dispMatch[1];
        const filenameMatch = headerBlock.match(/filename="([^"]+)"/);
        if (filenameMatch) {
          fileData = { name: name, filename: filenameMatch[1], buffer: Buffer.from(body, 'binary') };
        } else {
          fields[name] = body;
        }
      }
      resolve({ fields, file: fileData });
    });
    req.on('error', reject);
  });
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url);
  const pathname = url.split('?')[0];
  const hasApiTermin = pathname === '/api/termin';
  const hasApiContact = pathname === '/api/contact';
  const hasApiKontakt = pathname === '/api/kontakt';

  if (hasApiKontakt && req.method === 'POST') {
    parseMultipart(req)
      .then(({ fields, file }) => {
        const data = {
          vorname: fields.vorname || '',
          nachname: fields.nachname || '',
          email: fields.email || '',
          telefon: fields.telefon || '',
          betreff: fields.betreff || '',
          nachricht: fields.nachricht || ''
        };
        if (file && file.buffer.length > 0) {
          data.anhangName = file.filename;
          data.anhangBuffer = file.buffer;
        }
        const hasSmtp = process.env.SMTP_HOST || process.env.SMTP_USER;
        if (hasSmtp) {
          return sendKontaktEmail(data).then(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          });
        } else {
          console.log('Kontakt-Anfrage (SMTP nicht konfiguriert):', { ...data, anhangBuffer: data.anhangBuffer ? '[Buffer ' + data.anhangBuffer.length + ' bytes]' : undefined });
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
        }
      })
      .catch(err => {
        console.error('Kontakt-Formular Fehler:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Ungültige Anfrage.' }));
      });
    return;
  }

  if (hasApiContact && req.method === 'POST') {
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
        sendContactEmail(data)
          .then(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          })
          .catch((err) => {
            console.error('Kontakt E-Mail Fehler:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'E-Mail konnte nicht gesendet werden.' }));
          });
      } else {
        console.log('Kontakt-Anfrage (SMTP nicht konfiguriert):', data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      }
    });
    return;
  }

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
