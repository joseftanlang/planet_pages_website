import React from 'react';

function TeamPage() {
  const teamStructure = {
    mentors: [
      { name: 'Dr. Sarah Johnson', role: 'Senior Advisor', expertise: 'Business Strategy' },
      { name: 'Prof. Michael Chen', role: 'Technical Advisor', expertise: 'Supply Chain' }
    ],
    teamLeaders: [
      { name: 'Aisha Chen', role: 'Sales Director', department: 'Sales' },
      { name: 'Marcus Tan', role: 'Operations Director', department: 'Operations' },
      { name: 'Lena Park', role: 'Product Director', department: 'Product' }
    ],
    departments: {
      sales: {
        name: 'Sales Department',
        members: [
          { name: 'James Okafor', role: 'Sales Representative' },
          { name: 'Emma Wilson', role: 'Sales Representative' }
        ]
      },
      operations: {
        name: 'Operations Department',
        members: [
          { name: 'David Kim', role: 'Operations Specialist' },
          { name: 'Lisa Wang', role: 'Logistics Coordinator' }
        ]
      },
      product: {
        name: 'Product Department',
        members: [
          { name: 'Tom Anderson', role: 'Product Designer' },
          { name: 'Maria Garcia', role: 'Product Developer' }
        ]
      }
    }
  };

  return (
    <div className="page-section">
      <h2 style={{ fontSize: '2.4rem', marginBottom: '12px', color: '#ffffff' }}>Our Team</h2>
      
      {/* Mentors Section */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ color: '#60a5fa', marginBottom: '16px', textAlign: 'center' }}>👨‍🏫 Mentors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
          {teamStructure.mentors.map((mentor, index) => (
            <div key={index} className="card" style={{ 
              padding: '20px', 
              textAlign: 'center',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎓</div>
              <h4 style={{ color: '#ffffff' }}>{mentor.name}</h4>
              <p style={{ color: '#60a5fa', fontWeight: '600' }}>{mentor.role}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{mentor.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connection Line */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '24px',
        position: 'relative'
      }}>
        <div style={{ 
          width: '2px', 
          height: '30px', 
          background: 'linear-gradient(to bottom, #60a5fa, transparent)'
        }}></div>
      </div>

      {/* Team Leaders Section */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ color: '#60a5fa', marginBottom: '16px', textAlign: 'center' }}>👔 Team Leaders</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {teamStructure.teamLeaders.map((leader, index) => (
            <div key={index} className="card" style={{ 
              padding: '20px', 
              textAlign: 'center',
              background: 'rgba(37, 99, 235, 0.15)',
              border: '1px solid rgba(37, 99, 235, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>👤</div>
              <h4 style={{ color: '#ffffff' }}>{leader.name}</h4>
              <p style={{ color: '#60a5fa', fontWeight: '600' }}>{leader.role}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{leader.department}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connection Lines to Departments */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        marginBottom: '24px',
        padding: '0 20px'
      }}>
        {teamStructure.teamLeaders.map((_, index) => (
          <div key={index} style={{ 
            width: '2px', 
            height: '30px', 
            background: 'linear-gradient(to bottom, #60a5fa, transparent)'
          }}></div>
        ))}
      </div>

      {/* Departments Section */}
      <div>
        <h3 style={{ color: '#60a5fa', marginBottom: '16px', textAlign: 'center' }}>🏢 Departments</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {Object.values(teamStructure.departments).map((dept, index) => (
            <div key={index} className="card" style={{ padding: '20px' }}>
              <h4 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                {dept.name}
              </h4>
              {dept.members.map((member, idx) => (
                <div key={idx} style={{ 
                  padding: '12px', 
                  marginBottom: '8px', 
                  background: 'rgba(255,255,255,0.04)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.5rem' }}>👤</span>
                    <div>
                      <p style={{ color: '#ffffff', fontWeight: '600' }}>{member.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;