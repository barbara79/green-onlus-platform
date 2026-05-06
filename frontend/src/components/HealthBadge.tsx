interface HealthProps {
  data: { status: string; latency_ms: number } | null;
}

export const HealthBadge = ({ data }: HealthProps) => (
  <div style={{ marginBottom: '15px' }}>
    {data ? (
      <span style={{ 
        backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '5px 12px', 
        borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid #2e7d32' 
      }}>
        System Status: 🟢 Healthy ({data.latency_ms}ms)
      </span>
    ) : (
      <span style={{ color: '#999', fontSize: '0.8rem' }}>Checking system status...</span>
    )}
  </div>
);