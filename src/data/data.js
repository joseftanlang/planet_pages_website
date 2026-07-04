export const products = [
  { name: 'Organic Tea Pack', price: '$12', stock: '48 packs', note: 'Popular with retail and gift buyers.' },
  { name: 'Travel Snack Box', price: '$9', stock: '36 boxes', note: 'Prepared for overseas trips and bulk orders.' },
  { name: 'Handmade Gift Set', price: '$18', stock: '22 sets', note: 'Best seller for special events and export orders.' },
  { name: 'Expedition Kit', price: '$45', stock: '12 kits', note: 'Premium gear for overseas missions.' },
];

export const trips = [
  { title: 'Thailand Buyer Visit', date: 'July 2026', detail: 'Meet distributors, show samples, and confirm shipment plans.' },
  { title: 'Vietnam Trade Fair', date: 'September 2026', detail: 'Present new products and collect wholesale feedback.' },
  { title: 'Singapore Partner Review', date: 'November 2026', detail: 'Review sales performance and expand regional partnerships.' },
  { title: 'Indonesia Expedition', date: 'August 2026', detail: 'Scout new supply chains and sustainable sourcing.' },
];

// Remove teamMembers from here since it's now in TeamPage.jsx

export const organization = [{
  role: 'Managing Director',
  name: 'Business Lead',
  children: [
    { role: 'Sales Team', name: 'Customer orders & exports' },
    { role: 'Operations Team', name: 'Stock, packing, shipping' },
    { role: 'Feedback & Support', name: 'Customer service & relations' },
  ],
}];