<?php
/**
 * Rückruf-Anfrage (Termin vereinbaren) – E-Mail an hi@glymmer.io
 * Erwartet JSON-POST: vorname, nachname, telefon, email, kommentar (optional)
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Methode nicht erlaubt.']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true) ?: [];

$vorname = isset($data['vorname']) ? trim((string) $data['vorname']) : '';
$nachname = isset($data['nachname']) ? trim((string) $data['nachname']) : '';
$telefon = isset($data['telefon']) ? trim((string) $data['telefon']) : '';
$email = isset($data['email']) ? trim((string) $data['email']) : '';
$kommentar = isset($data['kommentar']) ? trim((string) $data['kommentar']) : '';

if ($vorname === '' || $nachname === '' || $telefon === '' || $email === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Bitte alle Pflichtfelder ausfüllen.']);
  exit;
}

$to = 'hi@glymmer.io';
$from = 'noreply@' . (isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) : 'glymmer.io');
$subject = 'Rückruf-Anfrage: ' . $vorname . ' ' . $nachname;

$body = "Neue Rückruf-Anfrage (Termin vereinbaren)\n\n";
$body .= "Vorname: $vorname\n";
$body .= "Nachname: $nachname\n";
$body .= "Telefon: $telefon\n";
$body .= "E-Mail: $email\n";
if ($kommentar !== '') {
  $body .= "Kommentar: $kommentar\n";
}

$headers = [
  'From: ' . $from,
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion(),
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  http_response_code(200);
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['message' => 'E-Mail konnte nicht gesendet werden.']);
}
