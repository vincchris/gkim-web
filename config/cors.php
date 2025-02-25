<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], // Izinkan semua metode HTTP (GET, POST, dll.)

    'allowed_origins' => ['http://localhost:5173/'], // Sesuaikan dengan URL frontend Anda

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Izinkan semua header

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false, // Ubah ke true jika menggunakan autentikasi cookies
];
