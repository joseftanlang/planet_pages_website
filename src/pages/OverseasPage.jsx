import React from 'react';
import { trips } from '../data/data';

function OverseasPage() {
  return (
    <div className="page-section">
      <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>Overseas Exposure</h2>
      <div className="trip-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {trips.map(t => (
          <div key={t.title} className="trip-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.04)', borderRadius: '20px' }}>
            <span className="trip-date">{t.date}</span>
            <h4 style={{ fontSize: '1.2rem' }}>{t.title}</h4>
            <p>{t.detail}</p>
          </div>
        ))}
      </div>
      <div className="card" style={{ marginTop: '24px' }}>
        <h3>Expedition highlights</h3>
        <p>From sourcing rare teas in northern Vietnam to meeting with artisan cooperatives in Thailand, each trip strengthens our supply chain and community bonds.</p>
      </div>
    </div>
  );
}

export default OverseasPage;