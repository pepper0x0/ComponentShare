import React from 'react'
import LandingPage001 from '../../LandingPage/landing_page_code_files/LandingPage001'
// Import other landing page components as needed

const landingPages = [
  { component: LandingPage001, TechUsed: 'React, TailwindCSS', name: 'Minimalist Landing Page', author: 'Sky', githubLink: 'https://github.com/skycypherxo' },
  // Add more landing page objects here
]

function LandingPageShowcase() {
  return (
    <div className="landing-page-showcase">
      <h1 style={{ color: 'black' }}>Landing Page Showcase</h1>
      {landingPages.map((page, index) => (
        <div key={index} className="showcase-item" style={{ border: '2px solid black', padding: '10px', margin: '10px 0' }}>
          <h2 style={{ color: 'black' }}>{page.name}</h2>
          <page.component />
          <div className="credits" style={{ border: '2px solid black', padding: '5px', color: 'black' }}>
            <p>
              Created by: <a href={page.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>{page.author}</a>
            </p>
            <p>
              <a href={page.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>View on GitHub</a>
            </p>
            <p> Tech Used: {page.TechUsed} </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LandingPageShowcase
