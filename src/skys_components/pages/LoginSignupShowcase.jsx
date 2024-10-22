import React from 'react';

const LoginSignupShowcase = () => {
  const loginPages = [
    { id: 1, title: 'Minimalist Login', author: 'AliceGreen', image: 'url-to-image' },
    { id: 2, title: 'Animated Signup Form', author: 'BobBlue', image: 'url-to-image' },
    // Add more login/signup pages here
  ];

  return (
    <div className="login-signup-showcase">
      <h2>Innovative Login/Signup Designs</h2>
      <div className="grid">
        {loginPages.map(page => (
          <div key={page.id} className="grid-item">
            <img src={page.image} alt={page.title} />
            <h3>{page.title}</h3>
            <p>By {page.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginSignupShowcase;
