import React from 'react';

function Navbar({ page, setPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'merch', label: 'Merch' },
    { id: 'overseas', label: 'Overseas' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="topbar">
      <h1>🌍 Expedition · Sales</h1>
      <nav className="topnav">
        {navItems.map(item => (
          <a
            key={item.id}
            onClick={() => setPage(item.id)}
            className={page === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;