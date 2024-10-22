import React from 'react'

const cards = [
  { id: 1, title: 'Business Card', author: 'DanaWhite', image: 'url-to-image' },
  // Add more card designs here
];

function CardsShowcase() {
  return (
    <div className="cards-showcase">
      <h2 style={{ color: 'black' }}>Card Designs</h2>
      <div className="grid">
        {cards.map(card => (
          <div key={card.id} className="grid-item" style={{ border: '2px solid black', padding: '10px', margin: '10px 0' }}>
            <img src={card.image} alt={card.title} style={{ width: '100%' }} />
            <h3 style={{ color: 'black' }}>{card.title}</h3>
            <p style={{ color: 'black' }}>By {card.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsShowcase;
