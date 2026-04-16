<?php
header("Content-Type: application/json");
$host = getenv('DB_HOST');
$db   = getenv('DB_NAME');
$user = getenv('DB_USER');
$pass = getenv('DB_PASS');

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$db", $user, $pass);
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/api/gadgets') {
        $stmt = $pdo->query("SELECT * FROM gadgets WHERE stock > 0");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}