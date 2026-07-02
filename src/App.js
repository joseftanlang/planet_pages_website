import './App.css';

const products = [
  {
    name: 'Organic Tea Pack',
    price: '$12',
    stock: '48 packs',
    note: 'Popular with retail and gift buyers.',
  },
  {
    name: 'Travel Snack Box',
    price: '$9',
    stock: '36 boxes',
    note: 'Prepared for overseas trips and bulk orders.',
  },
  {
    name: 'Handmade Gift Set',
    price: '$18',
    stock: '22 sets',
    note: 'Best seller for special events and export orders.',
  },
];

const trips = [
  {
    title: 'Thailand Buyer Visit',
    date: 'July 2026',
    detail: 'Meet distributors, show samples, and confirm shipment plans.',
  },
  {
    title: 'Vietnam Trade Fair',
    date: 'September 2026',
    detail: 'Present new products and collect wholesale feedback.',
  },
  {
    title: 'Singapore Partner Review',
    date: 'November 2026',
    detail: 'Review sales performance and expand regional partnerships.',
  },
];

const organization = [
  {
    role: 'Managing Director',
    name: 'Business Lead',
    children: [
      {
        role: 'Sales Team',
        name: 'Customer orders and exports',
      },
      {
        role: 'Operations Team',
        name: 'Stock, packing, and shipping',
      },
      {
        role: 'Feedback & Support',
        name: 'Customer comments and service',
      },
    ],
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Planet Pages</p>
          <h1>Mission, vision, products, overseas trips, and sales support.</h1>
        </div>
        <nav aria-label="Primary" className="topnav">
          <a href="#mission">Mission</a>
          <a href="#products">Products</a>
          <a href="#trips">Overseas Trips</a>
          <a href="#organization">Organization</a>
          <a href="#feedback">Feedback</a>
        </nav>
      </header>

      <main>
        <section className="hero card">
          <div className="hero-copy">
            <p className="eyebrow">Simple website for buyers and partners</p>
            <h2>Show what you stand for, what you sell, and who handles each part of the business.</h2>
            <p className="hero-text">
              This layout gives visitors a quick view of your mission and vision, product stock,
              overseas trip plans, organization chart, and customer feedback channel.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#products">View Products</a>
              <a className="secondary-button" href="#feedback">Send Feedback</a>
            </div>
          </div>
          <div className="hero-panel">
            <div>
              <span className="panel-label">Current focus</span>
              <strong>Sell products, track stock, and support export customers.</strong>
            </div>
            <dl className="stats-grid">
              <div>
                <dt>Products</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>Countries</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>Stock ready</dt>
                <dd>106</dd>
              </div>
              <div>
                <dt>Support</dt>
                <dd>24/7</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="content-grid">
          <article className="card section-card" id="mission">
            <p className="eyebrow">Mission & Vision</p>
            <h3>Mission</h3>
            <p>Deliver quality products with reliable service, clear communication, and fair pricing.</p>
            <h3>Vision</h3>
            <p>Grow into a trusted brand for local and overseas customers who value consistency and care.</p>
          </article>

          <article className="card section-card" id="products">
            <p className="eyebrow">Products</p>
            <div className="section-heading-row">
              <h3>What we sell</h3>
              <span className="pill">In stock</span>
            </div>
            <div className="product-list">
              {products.map((product) => (
                <div key={product.name} className="product-card">
                  <div>
                    <h4>{product.name}</h4>
                    <p>{product.note}</p>
                  </div>
                  <div className="product-meta">
                    <span>{product.price}</span>
                    <strong>{product.stock}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="card section-card" id="trips">
          <p className="eyebrow">Overseas Trips</p>
          <div className="section-heading-row">
            <h3>Upcoming travel plan</h3>
            <span className="pill accent">Export growth</span>
          </div>
          <div className="trip-grid">
            {trips.map((trip) => (
              <div key={trip.title} className="trip-card">
                <p className="trip-date">{trip.date}</p>
                <h4>{trip.title}</h4>
                <p>{trip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card section-card" id="organization">
          <p className="eyebrow">Organization Chart</p>
          <h3>How the team is arranged</h3>
          <div className="org-chart">
            {organization.map((leader) => (
              <div key={leader.role} className="org-level">
                <div className="org-node root-node">
                  <span>{leader.role}</span>
                  <strong>{leader.name}</strong>
                </div>
                <div className="org-children">
                  {leader.children.map((child) => (
                    <div key={child.role} className="org-node child-node">
                      <span>{child.role}</span>
                      <strong>{child.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-grid bottom-grid">
          <article className="card section-card" id="stock">
            <p className="eyebrow">Stock</p>
            <h3>Inventory snapshot</h3>
            <table className="stock-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Available</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>Ready to sell</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="card section-card" id="feedback">
            <p className="eyebrow">Feedback</p>
            <h3>Customer and partner feedback</h3>
            <p>
              Add a simple contact form later, or connect this section to email, WhatsApp, or a
              Google Form for direct responses.
            </p>
            <div className="feedback-box">
              <strong>Need help?</strong>
              <p>Share product questions, bulk order requests, or travel meeting notes here.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
