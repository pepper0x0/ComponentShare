import React from 'react'

const buttons = [
  { id: 1, title: 'Primary Button', author: 'CharlieRed', image: 'url-to-image' },
  // Add more button designs here
];

function ButtonShowcase() {
  return (
    <div className="button-showcase">
      <h2 style={{ color: 'black' }}>Button Designs</h2>
      <div className="grid">
        {buttons.map(button => (
          <div key={button.id} className="grid-item" style={{ border: '2px solid black', padding: '10px', margin: '10px 0' }}>
            <img src={button.image} alt={button.title} style={{ width: '100%' }} />
            <h3 style={{ color: 'black' }}>{button.title}</h3>
            <p style={{ color: 'black' }}>By {button.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonShowcase
