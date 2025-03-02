<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['article'])) {
    $file = $_FILES['article'];
    
    
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo "Помилка при завантаженні файлу.";
        exit;
    }
    
   
    $uploadDir = 'uploads';
    $uploadFile = $uploadDir . basename($file['name']);
    
    
    $allowedTypes = ['text/plain', 'application/pdf', 'application/msword'];
    if (!in_array($file['type'], $allowedTypes)) {
        echo "Тип файлу не підтримується.";
        exit;
    }
    
    
    if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
        echo "Файл успішно завантажено!";
    } else {
        echo "Сталася помилка при завантаженні файлу.";
    }
} else {
    echo "Немає файлу для завантаження.";
}
?>
