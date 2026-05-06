<?php
class CarbonService {
    public static function calculateImpact(string $data): array {
        $bytes = strlen($data);
        $gb = $bytes / (1024 ** 3);
        
        // Formula: GB * 0.06 kWh/GB * 442 gCO2/kWh
        $co2 = $gb * 0.06 * 442;

        return [
            "data_transfer_bytes" => $bytes,
            "estimated_co2_grams" => number_format($co2, 10),
            "methodology" => "One-Byte Model"
        ];
    }
}