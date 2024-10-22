import React from 'react'

const headers = [
  { id: 1, title: 'Simple Header', author: 'JohnDoe', image: 'url-to-image' },
  // Add more header designs here
];

function HeaderShowcase() {
  return (
    <div className="header-showcase">
      <h2 style={{ color: 'black' }}>Header Designs</h2>
      <div className="grid">
        {headers.map(header => (
          <div key={header.id} className="grid-item" style={{ border: '2px solid black', padding: '10px', margin: '10px 0' }}>
            <img src={header.image} alt={header.title} style={{ width: '100%' }} />
            <h3 style={{ color: 'black' }}>{header.title}</h3>
            <p style={{ color: 'black' }}>By {header.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderShowcase
