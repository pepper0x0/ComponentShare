import React from 'react';

const footers = [
  { id: 1, title: 'Modern Footer', author: 'JaneDoe', image: 'url-to-image' },
  // Add more footer designs here
];

function FooterShowcase() {
  return (
    <div className="footer-showcase">
      <h2 style={{ color: 'black' }}>Footer Designs</h2>
      <div className="grid">
        {footers.map(footer => (
          <div key={footer.id} className="grid-item" style={{ border: '2px solid black', padding: '10px', margin: '10px 0' }}>
            <img src={footer.image} alt={footer.title} style={{ width: '100%' }} />
            <h3 style={{ color: 'black' }}>{footer.title}</h3>
            <p style={{ color: 'black' }}>By {footer.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterShowcase;