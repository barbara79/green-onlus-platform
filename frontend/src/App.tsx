import { useEffect, useState } from 'react'

interface Gadget {
  id: number;
  name: string;
  type: 'physical' | 'digital_badge';
  impact_description: string;
  co2_saved_grams: number;
}

function App() {
  const [items, setItems] = useState<Gadget[]>([]);

  useEffect(() => {
    // This fetches from our PHP API through the Nginx proxy
    fetch('/api/gadgets')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2e7d32', fontSize: '2.5rem' }}>Green Onlus Platform</h1>
        <p style={{ color: '#666' }}>Sustainable Merchandising for Social Impact</p>
      </header>

      <div style={{ display: 'grid', gap: '20px' }}>
        {items.map(item => (
          <div key={item.id} style={{
            padding: '20px',
            borderRadius: '16px',
            border: '1px solid #e0e0e0',
            background: item.type === 'digital_badge' ? '#f1f8e9' : '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#1b5e20' }}>{item.name}</h3>
              <p style={{ margin: 0, color: '#444', fontSize: '0.95rem' }}>{item.impact_description}</p>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <span style={{ 
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                background: item.type === 'digital_badge' ? '#4caf50' : '#81c784',
                color: '#fff',
                marginBottom: '8px'
              }}>
                {item.type.toUpperCase()}
              </span>
              {item.co2_saved_grams > 0 && (
                <div style={{ color: '#2e7d32', fontWeight: 'bold' }}>🌱 -{item.co2_saved_grams}g CO2</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App