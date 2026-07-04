import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Send email using mailto
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:tanjosef33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div className="page-section">
      <h2 style={{ fontSize: '2.4rem', marginBottom: '12px', color: '#ffffff' }}>Contact Us</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card" style={{ padding: '28px' }}>
          <h3 style={{ color: '#ffffff' }}>Get in touch</h3>
          <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.7)' }}>Email: tanjosef33@gmail.com</p>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>WhatsApp: +1 (555) 123-4567</p>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Office hours: Mon–Fri, 9am–6pm (UTC+7)</p>
          <div className="feedback-box" style={{ marginTop: '20px' }}>
            <strong style={{ color: '#ffffff' }}>Quick feedback</strong>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Share product questions, bulk order requests, or travel meeting notes here.</p>
          </div>
        </div>
        <div className="card" style={{ padding: '28px' }}>
          <h3 style={{ color: '#ffffff' }}>Send a message</h3>
          {isSent && (
            <div style={{ 
              background: 'rgba(34, 197, 94, 0.2)', 
              border: '1px solid #22c55e',
              padding: '12px', 
              borderRadius: '12px', 
              marginBottom: '16px',
              color: '#22c55e'
            }}>
              ✓ Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <div>
              <input
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={handleChange}
                style={{ 
                  padding: '12px', 
                  borderRadius: '999px', 
                  border: errors.name ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#f3efe7',
                  width: '100%'
                }}
              />
              {errors.name && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                style={{ 
                  padding: '12px', 
                  borderRadius: '999px', 
                  border: errors.email ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#f3efe7',
                  width: '100%'
                }}
              />
              {errors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message *"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                style={{ 
                  padding: '12px', 
                  borderRadius: '18px', 
                  border: errors.message ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#f3efe7', 
                  resize: 'vertical',
                  width: '100%'
                }}
              />
              {errors.message && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.message}</p>}
            </div>
            <button type="submit" className="primary-button" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;