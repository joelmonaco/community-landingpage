<?php
/**
 * Kontaktformular – E-Mail (mit optionalem Anhang) an hi@glymmer.io
 * Erwartet multipart/form-data POST: vorname, nachname, email, telefon, betreff, nachricht, anhang (optional)
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

$vorname   = isset($_POST['vorname'])   ? trim($_POST['vorname'])   : '';
$nachname  = isset($_POST['nachname'])  ? trim($_POST['nachname'])  : '';
$email     = isset($_POST['email'])     ? trim($_POST['email'])     : '';
$telefon   = isset($_POST['telefon'])   ? trim($_POST['telefon'])   : '';
$betreff   = isset($_POST['betreff'])   ? trim($_POST['betreff'])   : '';
$nachricht = isset($_POST['nachricht']) ? trim($_POST['nachricht']) : '';

if ($email === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Bitte E-Mail angeben.']);
  exit;
}
if ($betreff === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Bitte Betreff wählen.']);
  exit;
}
if ($nachricht === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Bitte Nachricht eingeben.']);
  exit;
}

$maxFileSize = 5 * 1024 * 1024; // 5 MB
$hasAttachment = isset($_FILES['anhang']) && $_FILES['anhang']['error'] === UPLOAD_ERR_OK && $_FILES['anhang']['size'] > 0;

if ($hasAttachment && $_FILES['anhang']['size'] > $maxFileSize) {
  http_response_code(400);
  echo json_encode(['message' => 'Die Datei ist zu groß. Maximal 5 MB erlaubt.']);
  exit;
}

$to = 'hi@glymmer.io';
$host = isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) : 'glymmer.io';
$fromAddr = 'noreply@' . $host;

$subjectLine = 'Kontaktanfrage [' . $betreff . ']: ' . $vorname . ' ' . $nachname;

$textBody  = "Neue Kontaktanfrage\n\n";
$textBody .= "Betreff: $betreff\n";
$textBody .= "Vorname: $vorname\n";
$textBody .= "Nachname: $nachname\n";
$textBody .= "E-Mail: $email\n";
if ($telefon !== '') {
  $textBody .= "Telefon: $telefon\n";
}
$textBody .= "\nNachricht:\n$nachricht\n";

if ($hasAttachment) {
  $boundary = md5(uniqid(time()));

  $headers = implode("\r\n", [
    'From: ' . $fromAddr,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
  ]);

  $body  = "--$boundary\r\n";
  $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
  $body .= $textBody . "\r\n";

  $fileName    = $_FILES['anhang']['name'];
  $fileTmp     = $_FILES['anhang']['tmp_name'];
  $fileContent = chunk_split(base64_encode(file_get_contents($fileTmp)));
  $fileMime    = $_FILES['anhang']['type'] ?: 'application/octet-stream';

  $body .= "--$boundary\r\n";
  $body .= "Content-Type: $fileMime; name=\"$fileName\"\r\n";
  $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
  $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
  $body .= $fileContent . "\r\n";
  $body .= "--$boundary--";

  $sent = @mail($to, $subjectLine, $body, $headers);
} else {
  $headers = implode("\r\n", [
    'From: ' . $fromAddr,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
  ]);

  $sent = @mail($to, $subjectLine, $textBody, $headers);
}

if ($sent) {
  http_response_code(200);
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['message' => 'E-Mail konnte nicht gesendet werden.']);
}
