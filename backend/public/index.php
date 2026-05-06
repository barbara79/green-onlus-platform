<?php
require_once __DIR__ . '/../src/DB.php';
require_once __DIR__ . '/../src/GadgetRepository.php';
require_once __DIR__ . '/../src/CarbonService.php';

header("Content-Type: application/json");
$host = getenv('DB_HOST');
$db   = getenv('DB_NAME');
$user = getenv('DB_USER');
$pass = getenv('DB_PASS');

try {
    $pdo = Database::getConnection();
    $uri = $_SERVER['REQUEST_URI'];

    // Route: GET /api/gadgets
    if ($uri === '/api/gadgets') {
        $repo = new GadgetRepository($pdo);
        $data = $repo->getAllActive();
        
        $jsonResponse = json_encode($data);
        $metadata = CarbonService::calculateImpact($jsonResponse);

        echo json_encode([
            "metadata" => $metadata,
            "data" => $data
        ]);
    } 
    elseif ($uri === '/api/health') {
        $start = microtime(true);
        $pdo->query("SELECT 1");
        
        echo json_encode([
            "status" => "healthy",
            "latency_ms" => round((microtime(true) - $start) * 1000, 2)
        ]);
        exit;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "System error"]);
} 

