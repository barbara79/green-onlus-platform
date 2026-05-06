import { useState, useEffect } from 'react';
import { HealthBadge } from './components/HealthBadge';
import { ImpactCard } from './components/ImpactCard';
import { type Gadget, type CarbonMetadata, type SystemHealth } from './types';

function App() {
  const [items, setItems] = useState<Gadget[]>([]);
  const [impact, setImpact] = useState<CarbonMetadata | null>(null);
  const [health, setHealth] = useState<SystemHealth | null>(null);

  useEffect(() => {
    fetch('/api/gadgets')
      .then(res => res.json())
      .then(result => {
        setItems(result.data || []);
        setImpact(result.metadata);
      });

    fetch('/api/health')
      .then(res => res.json())
      .then(data => setHealth(data));
  }, []);

  return (
    <div style={{ backgroundColor: '#f9fff9', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2e7d32' }}>🌿 Green Onlus Impact Dashboard</h1>
        
        <HealthBadge data={health} />
        
        <p>Real-time sustainability metrics from our global community.</p>
        
        {impact && (
          <div style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.85rem', color: '#666', border: '1px dashed #2e7d32', padding: '5px 15px', borderRadius: '20px' }}>
            This request cost <strong>{impact.estimated_co2_grams}g</strong> of CO2
          </div>
        )}
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {items.map(item => <ImpactCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default App;