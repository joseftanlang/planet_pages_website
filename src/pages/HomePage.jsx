import React from 'react';
import { trips } from '../data/data';

function HomePage({ setPage }) {
  return (
    <>
      <section className="hero card">
        <div>
          <h2>Show what you stand for, what you sell, and who handles each part.</h2>
          <p>Mission-driven sales, overseas expeditions, and transparent operations — all in one place.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="primary-button" onClick={() => setPage('merch')}>View Products</button>
            <button className="secondary-button" onClick={() => setPage('about')}>About Us</button>
          </div>
        </div>
        <div className="stats-grid">
          <div><dt>Products</dt><dd>4</dd></div>
          <div><dt>Countries</dt><dd>3</dd></div>
          <div><dt>Stock ready</dt><dd>118</dd></div>
          <div><dt>Support</dt><dd>24/7</dd></div>
        </div>
      </section>

      <div className="content-grid">
        <article className="card section-card">
          <p style={{ color: '#efb87f', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
            Mission & Vision
          </p>
          <h3>Mission</h3>
          <p>Deliver quality products with reliable service, clear communication, and fair pricing — while supporting overseas communities.</p>
          <h3 style={{ marginTop: '20px' }}>Vision</h3>
          <p>Grow into a trusted brand for local and overseas customers who value consistency, care, and ethical sourcing.</p>
        </article>
        <article className="card section-card">
          <p style={{ color: '#efb87f', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
            Overseas Expeditions
          </p>
          <h3>Upcoming travels</h3>
          <div className="trip-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {trips.slice(0, 2).map(t => (
              <div key={t.title} className="trip-card">
                <span className="trip-date">{t.date}</span>
                <h4 style={{ marginBottom: '4px' }}>{t.title}</h4>
                <p style={{ fontSize: '0.9rem' }}>{t.detail}</p>
              </div>
            ))}
          </div>
          <button className="secondary-button" style={{ marginTop: '16px' }} onClick={() => setPage('overseas')}>
            See all expeditions →
          </button>
        </article>
      </div>
    </>
  );
}

export default HomePage;