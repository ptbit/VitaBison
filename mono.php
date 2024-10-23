<?php
include './config.php';
// Отримання даних з запиту
$inputData = file_get_contents('php://input');
$data = json_decode($inputData, true);

// Логування для перевірки вхідних даних
$logFile = __DIR__ . '/mono.log';
function logData($data)
{
  global $logFile;
  $logEntry = "[" . date("Y-m-d H:i:s") . "] " . print_r($data, true) . PHP_EOL;
  file_put_contents($logFile, $logEntry, FILE_APPEND);
}

logData("Received data from mono.js:");
logData($data);

// Додаємо redirectUrl та webHookUrl до запиту до Monobank 
$data['redirectUrl'] = 'https://vitabisfresh.tech/typ-'.$data['set'].'.html';
$data['webHookUrl'] = 'https://vitabisfresh.tech/mono-hook.php';

// Перевіряємо чи існує merchantPaymInfo
if (!isset($data['merchantPaymInfo'])) {
  logData("Error: merchantPaymInfo not found in the request.");
  exit;
}

// Отримуємо reference з даних
// $reference = $data['merchantPaymInfo']['reference'] ?? 'John|Doe|00000|123 Main St|CityName|State|1234567890|email@example.com';
// $data['merchantPaymInfo']['reference'] = $reference;

// Додаємо destination з вибраним сетом без додаткового тексту
// $set = $data['set'] ?? 'order1'; // Має прийти з форми або запиту через mono.js
// $data['merchantPaymInfo']['destination'] = $set; 

// Логуємо дані перед відправкою до Monobank
logData("Prepared data for Monobank:");
logData($data);

// Відправляємо запит на Monobank
$ch = curl_init('https://api.monobank.ua/api/merchant/invoice/create');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json',
  'X-Token: '. $TOKEN_X,
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$response = curl_exec($ch);

if (curl_errno($ch)) {
  logData("Monobank API error: " . curl_error($ch));
} else {
  logData("Monobank API response:");
  logData($response);
}

curl_close($ch);

// Повертаємо відповідь на клієнт
header('Content-Type: application/json');
echo $response;
