import React from 'react';
import { organization } from '../data/data';

function OrganizationChart() {
  return (
    <section className="card section-card" style={{ marginTop: '32px' }}>
      <p style={{ color: '#efb87f', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
        Organization Chart
      </p>
      <h3>How the team is arranged</h3>
      <div className="org-chart">
        {organization.map(leader => (
          <div key={leader.role}>
            <div className="org-node root-node" style={{ maxWidth: '360px' }}>
              <span>{leader.role}</span>
              <strong>{leader.name}</strong>
            </div>
            <div className="org-children">
              {leader.children.map(child => (
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
  );
}

export default OrganizationChart;