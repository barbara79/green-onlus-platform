<?php
class GadgetRepository {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getAllActive() {
        $stmt = $this->pdo->query("SELECT * FROM gadgets WHERE stock > 0");
        return $stmt->fetchAll();
    }
}