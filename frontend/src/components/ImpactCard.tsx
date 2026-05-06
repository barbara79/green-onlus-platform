export const ImpactCard = ({ item }: { item: any }) => (
  <div style={{ 
    border: '1px solid #c8e6c9', borderRadius: '12px', padding: '20px', 
    background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' 
  }}>
    <h3 style={{ marginTop: 0, color: '#1b5e20' }}>{item.name}</h3>
    <p style={{ color: '#555' }}><strong>Impact:</strong> {item.impact_description}</p>
    <div style={{ background: '#e8f5e9', padding: '10px', borderRadius: '8px', fontWeight: 'bold', color: '#1b5e20', textAlign: 'center' }}>
      🍃 {item.co2_saved_grams}g CO2 Offset
    </div>
    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '10px' }}>Type: {item.type}</p>
  </div>
);