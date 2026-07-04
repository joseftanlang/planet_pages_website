import React, { useState } from 'react';

function MerchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    quantity: '',
    message: ''
  });
  const [requestErrors, setRequestErrors] = useState({});
  const [requestSent, setRequestSent] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Expedition T-Shirt',
      category: 'Apparel',
      price: '$24.99',
      colors: ['Black', 'Navy', 'White'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: '👕',
      description: 'Premium cotton t-shirt with expedition logo. Perfect for everyday wear.'
    },
    {
      id: 2,
      name: 'Hardcover Journal',
      category: 'Books',
      price: '$19.99',
      colors: ['Brown', 'Black', 'Blue'],
      sizes: ['A5', 'A4'],
      image: '📓',
      description: 'Leather-bound journal with 200 pages of premium paper. Great for travel notes.'
    },
    {
      id: 3,
      name: 'Expedition Hoodie',
      category: 'Apparel',
      price: '$39.99',
      colors: ['Black', 'Gray', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      image: '👔',
      description: 'Warm and comfortable hoodie with embroidered logo. Perfect for expeditions.'
    },
    {
      id: 4,
      name: 'Field Guide Book',
      category: 'Books',
      price: '$29.99',
      colors: ['Green', 'Brown'],
      sizes: ['Pocket', 'Standard'],
      image: '📚',
      description: 'Comprehensive field guide for explorers. Includes maps and survival tips.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const openRequestForm = (product) => {
    setSelectedProduct(product);
    setShowRequestForm(true);
    setRequestSent(false);
  };

  const handleRequestChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value
    });
    if (requestErrors[e.target.name]) {
      setRequestErrors({
        ...requestErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!requestData.name.trim()) errors.name = 'Please enter your name';
    if (!requestData.email.trim()) errors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(requestData.email)) errors.email = 'Please enter a valid email';
    if (!requestData.quantity.trim()) errors.quantity = 'Please enter quantity';
    else if (isNaN(requestData.quantity) || parseInt(requestData.quantity) < 1) {
      errors.quantity = 'Please enter a valid quantity';
    }
    if (!requestData.message.trim()) errors.message = 'Please enter your message';

    if (Object.keys(errors).length === 0) {
      const subject = `Product Request: ${selectedProduct.name}`;
      const body = `Name: ${requestData.name}\nEmail: ${requestData.email}\nProduct: ${selectedProduct.name}\nQuantity: ${requestData.quantity}\n\nMessage:\n${requestData.message}`;
      window.location.href = `mailto:tanjosef33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setRequestSent(true);
      setRequestData({ name: '', email: '', quantity: '', message: '' });
      setTimeout(() => {
        setShowRequestForm(false);
        setRequestSent(false);
      }, 3000);
    } else {
      setRequestErrors(errors);
    }
  };

  return (
    <div className="page-section">
      <h2 style={{ fontSize: '2.4rem', marginBottom: '12px', color: '#ffffff' }}>Our Merch</h2>
      
      {/* Carousel */}
      <div className="card" style={{ padding: '20px', marginBottom: '24px', position: 'relative' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '300px',
          position: 'relative'
        }}>
          <button 
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              zIndex: 2
            }}
          >
            ◀
          </button>
          
          <div style={{ textAlign: 'center', padding: '20px 40px', width: '100%' }}>
            <div style={{ fontSize: '6rem', marginBottom: '16px' }}>
              {products[currentSlide].image}
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '8px' }}>
              {products[currentSlide].name}
            </h3>
            <p style={{ color: '#60a5fa', fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
              {products[currentSlide].price}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
              {products[currentSlide].description}
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                Colors: {products[currentSlide].colors.join(' • ')}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                Sizes: {products[currentSlide].sizes.join(' • ')}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="primary-button"
                onClick={() => openRequestForm(products[currentSlide])}
              >
                Request This Product
              </button>
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              zIndex: 2
            }}
          >
            ▶
          </button>
        </div>
        
        {/* Slide indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          {products.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: currentSlide === index ? '#3b82f6' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
        {products.map((product) => (
          <div key={product.id} className="card" style={{ 
            padding: '20px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ fontSize: '3rem' }}>{product.image}</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#ffffff' }}>{product.name}</h4>
                <p style={{ color: '#60a5fa', fontWeight: '600' }}>{product.price}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                  {product.category}
                </p>
              </div>
              <button 
                className="secondary-button" 
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                onClick={() => openRequestForm(product)}
              >
                Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Request Form Modal */}
      {showRequestForm && selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="card" style={{ 
            maxWidth: '500px', 
            width: '100%', 
            padding: '30px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ color: '#ffffff' }}>Request: {selectedProduct.name}</h3>
              <button 
                onClick={() => setShowRequestForm(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
            
            {requestSent ? (
              <div style={{ 
                background: 'rgba(34, 197, 94, 0.2)', 
                border: '1px solid #22c55e',
                padding: '20px', 
                borderRadius: '12px',
                textAlign: 'center',
                color: '#22c55e'
              }}>
                ✓ Request sent successfully!
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <input
                    name="name"
                    placeholder="Your name *"
                    value={requestData.name}
                    onChange={handleRequestChange}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '999px', 
                      border: requestErrors.name ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                      background: 'rgba(255,255,255,0.05)', 
                      color: '#f3efe7',
                      width: '100%'
                    }}
                  />
                  {requestErrors.name && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{requestErrors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    placeholder="Email *"
                    value={requestData.email}
                    onChange={handleRequestChange}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '999px', 
                      border: requestErrors.email ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                      background: 'rgba(255,255,255,0.05)', 
                      color: '#f3efe7',
                      width: '100%'
                    }}
                  />
                  {requestErrors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{requestErrors.email}</p>}
                </div>
                <div>
                  <input
                    name="quantity"
                    placeholder="Quantity *"
                    value={requestData.quantity}
                    onChange={handleRequestChange}
                    type="number"
                    min="1"
                    style={{ 
                      padding: '12px', 
                      borderRadius: '999px', 
                      border: requestErrors.quantity ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                      background: 'rgba(255,255,255,0.05)', 
                      color: '#f3efe7',
                      width: '100%'
                    }}
                  />
                  {requestErrors.quantity && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{requestErrors.quantity}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message *"
                    rows="3"
                    value={requestData.message}
                    onChange={handleRequestChange}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '18px', 
                      border: requestErrors.message ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.15)', 
                      background: 'rgba(255,255,255,0.05)', 
                      color: '#f3efe7', 
                      resize: 'vertical',
                      width: '100%'
                    }}
                  />
                  {requestErrors.message && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{requestErrors.message}</p>}
                </div>
                <button type="submit" className="primary-button" style={{ alignSelf: 'flex-start' }}>
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MerchPage;