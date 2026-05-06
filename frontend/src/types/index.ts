/**
 * Represents the physical or digital items 
 * retrieved from the PostgreSQL database.
 */
export interface Gadget {
  id: number;
  name: string;
  type: 'physical' | 'digital_badge';
  impact_description: string;
  stock: number;
  co2_saved_grams: number;
}

/**
 * Represents the carbon footprint metadata 
 * calculated by CarbonService.php
 */
export interface CarbonMetadata {
  data_transfer_bytes: number;
  estimated_co2_grams: string;
  methodology: string;
}

/**
 * Represents the system health status 
 * from the /api/health endpoint
 */
export interface SystemHealth {
  status: string;
  latency_ms: number;
}

/**
 * The standard response shape for our API
 */
export interface ApiResponse<T> {
  metadata: CarbonMetadata;
  data: T;
}