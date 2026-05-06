interface FootprintProps {
  impact: {
    data_transfer_bytes: number;
    estimated_co2_grams: string;
    methodology: string;
  } | null;
}

export const FootprintReport = ({ impact }: FootprintProps) => {
  if (!impact) return null;

  // Convert bytes to KB for readability
  const kb = (impact.data_transfer_bytes / 1024).toFixed(2);

  return (
    <div style={{
      marginTop: '15px',
      padding: '10px 20px',
      backgroundColor: '#f1f8e9',
      border: '1px dashed #4caf50',
      borderRadius: '25px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.85rem',
      color: '#333'
    }}>
      <span title="Data Transfer Size">📦 {kb} KB</span>
      <span style={{ color: '#ccc' }}>|</span>
      <span style={{ fontWeight: 'bold' }}>
        ⚡ {impact.estimated_co2_grams}g CO₂
      </span>
      <span 
        title={`Calculated using: ${impact.methodology}`} 
        style={{ cursor: 'help', color: '#4caf50', fontSize: '1rem' }}
      >
        ℹ️
      </span>
    </div>
  );
};