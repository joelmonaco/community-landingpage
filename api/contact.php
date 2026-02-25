<?php
/**
 * Kontakt / Enterprise-Anfrage – E-Mail an hi@glymmer.io
 * Erwartet JSON-POST: vorname?, nachname?, email, telefon?, source?, name?, message?
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
$email = isset($data['email']) ? trim((string) $data['email']) : '';
$telefon = isset($data['telefon']) ? trim((string) $data['telefon']) : '';
$source = isset($data['source']) ? trim((string) $data['source']) : 'kontakt';
$name = isset($data['name']) ? trim((string) $data['name']) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

if ($email === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Bitte E-Mail angeben.']);
  exit;
}

$to = 'hi@glymmer.io';
$from = 'noreply@' . (isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) : 'glymmer.io');

$sourceLabel = ($source === 'enterprise') ? 'Enterprise-Anfrage (Kontakt aufnehmen)' : 'Kontaktanfrage';
$subjectName = ($vorname !== '' && $nachname !== '') ? ($vorname . ' ' . $nachname) : ($name !== '' ? $name : $email);
$subject = $sourceLabel . ': ' . $subjectName;

$body = "Neue $sourceLabel\n\n";
if ($vorname !== '' || $nachname !== '') {
  $body .= "Vorname: $vorname\nNachname: $nachname\n";
} elseif ($name !== '') {
  $body .= "Name: $name\n";
}
$body .= "E-Mail: $email\n";
if ($telefon !== '') {
  $body .= "Telefon: $telefon\n";
}
if ($message !== '') {
  $body .= "Nachricht: $message\n";
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
