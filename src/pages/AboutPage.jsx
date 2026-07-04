import React from 'react';

function AboutPage() {
  return (
    <div className="page-section">
      <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>About Us</h2>
      <div className="about-grid">
        <div className="card" style={{ padding: '28px' }}>
          <h3>Our Story</h3>
          <p style={{ marginTop: '8px' }}>
            We started as a small collective of travelers and makers, driven by a shared passion for quality goods 
            and cross-cultural exchange. Today, we export to three countries and work with local artisans.
          </p>
          <p style={{ marginTop: '12px' }}>
            Every product tells a story — from the highlands of Vietnam to the markets of Thailand, 
            we bring you authentic, responsibly sourced items.
          </p>
        </div>
        <div className="card" style={{ padding: '28px' }}>
          <h3>Why choose us</h3>
          <ul style={{ listStyle: 'none', marginTop: '12px' }}>
            <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              ✔️ Direct partnerships with producers
            </li>
            <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              ✔️ Transparent pricing and stock
            </li>
            <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              ✔️ Overseas expedition insights
            </li>
            <li style={{ padding: '8px 0' }}>✔️ 24/7 support for partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;