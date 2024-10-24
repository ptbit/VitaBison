<?php
include './config.php';
// Файл для логування
$logFile = __DIR__ . '/mono-webhook.log';

// Функція для запису даних у лог
function logData($data)
{
  global $logFile;
  $logEntry = "[" . date("Y-m-d H:i:s") . "] " . print_r($data, true) . PHP_EOL;
  file_put_contents($logFile, $logEntry, FILE_APPEND);
}

// Логування отриманих даних від Monobank
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
logData("Received data from Monobank:");
logData($data);

// Перевіряємо статус транзакції
if (isset($data['status']) && $data['status'] === 'success') {
  // Логування успішної транзакції
  logData("Transaction status: success");

  // Токен для Shopify API
  $shopUrl = "https://497bf9-ee.myshopify.com/admin/api/2024-10/orders.json";
  $shopifyToken = $SHOPIFY_TOKEN;

  // Отримуємо обраний набір з поля destination
  $set = $data['destination'] ?? 'default_order';

  // Отримуємо дані користувача з поля reference
  $reference = $data['reference'] ?? '';
  $userDataArray = explode('|', $reference);

  // Перевіряємо, що ми отримали всі необхідні дані з форми
  if (count($userDataArray) !== 8) {
    logData("Invalid user data in reference field: " . $reference);
    exit;
  }

  [$firstName, $lastName, $zipcode, $address, $city, $state, $phone, $email] = $userDataArray;

  // Отримуємо суму з поля finalAmount (переводимо з копійок у гривні)
  $finalAmount = isset($data['finalAmount']) ? $data['finalAmount'] / 100 : 0;

  // Логування вибраного набору та суми
  logData("Selected set: " . $set);
  logData("Final amount: " . $finalAmount);

  // Формуємо дані для замовлення в Shopify на основі обраного набору
  $orderData = [];
  switch ($set) {
    case 'order1':
      $orderData = [
        "order" => [
          "line_items" => [
            ["title" => "VitaBisonXL", "variant_id" => 41879531094121, "price" => 44, "quantity" => 3],
            ["title" => "VitaBisonXL", "variant_id" => 41879531094121, "price" => 44, "quantity" => 2],
            ["title" => "NeuroVitaXL", "variant_id" => 41879531323497, "price" => 44, "quantity" => 1]
          ],
          "transactions" => [["kind" => "sale", "status" => "success", "amount" => $finalAmount]],
          "total_tax" => 0.00,
          "currency" => "USD",
          "email" => $email,
          "shipping_address" => [
            "first_name" => $firstName,
            "last_name" => $lastName,
            "address1" => $address,
            "city" => $city,
            "province" => $state,
            "zip" => $zipcode,
            "phone" => $phone,
            "country" => "United States",
            "province_code" => $state,
            "country_code" => "US"
          ]
        ]
      ];
      break;
    case 'order2':
      $orderData = [
        "order" => [
          "line_items" => [
            ["title" => "VitaBisonL", "variant_id" => 41884283764841, "price" => 51, "quantity" => 2],
            ["title" => "VitaBisonL", "variant_id" => 41884283764841, "price" => 51, "quantity" => 2],
            ["title" => "VitaBoostL", "variant_id" => 41879531454569, "price" => 51, "quantity" => 1]
          ],
          "transactions" => [["kind" => "sale", "status" => "success", "amount" => $finalAmount]],
          "total_tax" => 0.00,
          "currency" => "USD",
          "email" => $email,
          "shipping_address" => [
            "first_name" => $firstName,
            "last_name" => $lastName,
            "address1" => $address,
            "city" => $city,
            "province" => $state,
            "zip" => $zipcode,
            "phone" => $phone,
            "country" => "United States",
            "province_code" => $state,
            "country_code" => "US"
          ]
        ]
      ];
      break;
    case 'order3':
      $orderData = [
        "order" => [
          "line_items" => [
            ["title" => "VitaBisonM", "variant_id" => 41884282978409, "price" => 60, "quantity" => 2],
            ["title" => "VitaBoostM", "variant_id" => 41884283895913, "price" => 60, "quantity" => 1],
            ["title" => "NeuroVitaM", "variant_id" => 41884283994217, "price" => 60, "quantity" => 1]
          ],
          "transactions" => [["kind" => "sale", "status" => "success", "amount" => $finalAmount]],
          "total_tax" => 0.00,
          "currency" => "USD",
          "email" => $email,
          "shipping_address" => [
            "first_name" => $firstName,
            "last_name" => $lastName,
            "address1" => $address,
            "city" => $city,
            "province" => $state,
            "zip" => $zipcode,
            "phone" => $phone,
            "country" => "United States",
            "province_code" => $state,
            "country_code" => "US"
          ]
        ]
      ];
      break;
      // -------------------------------------------------------- TEST ORDER --------------------------------------------------------
      // case 'order4':
      //   $orderData = [
      //     "order" => [
      //       "line_items" => [
      //         ["title" => "VitaBisonM", "variant_id" => 41884282978409, "price" => 57.50, "quantity" => 2],
      //         ["title" => "VitaBoostM", "variant_id" => 41884283895913, "price" => 57.50, "quantity" => 1],
      //         ["title" => "NeuroVitaM", "variant_id" => 41884283994217, "price" => 57.50, "quantity" => 1]
      //       ],
      //       "transactions" => [["kind" => "sale", "status" => "success", "amount" => 230.00]],
      //       "total_tax" => 0.00,
      //       "currency" => "USD",
      //       "email" => $email,
      //       "shipping_address" => [
      //         "first_name" => $firstName,
      //         "last_name" => $lastName,
      //         "address1" => $address,
      //         "city" => $city,
      //         "province" => $state,
      //         "zip" => $zipcode,
      //         "phone" => $phone,
      //         "country" => "United States",
      //         "province_code" => $state,
      //         "country_code" => "US"
      //       ]
      //     ]
      //   ];
      //   break;
    default:
      logData("Unknown set selected: " . $set);
      exit;
  }

  // Логування даних для Shopify
  logData("Order data to Shopify:");
  logData($orderData);

  // Відправляємо замовлення на Shopify
  if (!empty($orderData)) {
    $headers = [
      "Content-Type: application/json",
      'X-Shopify-Access-Token: ' . $shopifyToken
    ];
    $ch = curl_init($shopUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderData));
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
      logData("Shopify API error: " . curl_error($ch));
    } else {
      logData("Shopify API response:");
      logData($response);
    }

    curl_close($ch);
  }
} else {
  logData("Transaction failed or not successful.");
}
