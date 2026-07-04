import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MerchPage from './pages/MerchPage';
import OverseasPage from './pages/OverseasPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import OrganizationChart from './components/OrganizationChart';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'about': return <AboutPage />;
      case 'merch': return <MerchPage />;
      case 'overseas': return <OverseasPage />;
      case 'team': return <TeamPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="page-shell">
      <Navbar page={page} setPage={setPage} />
      <main>
        {renderPage()}
        <OrganizationChart />
      </main>
    </div>
  );
}

export default App;