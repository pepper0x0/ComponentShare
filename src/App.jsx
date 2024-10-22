import {React,useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Header from './skys_components/Header';
import Footer from './skys_components/Footer';
import HeaderShowcase from './skys_components/pages/HeaderShowcase';
import FooterShowcase from './skys_components/pages/FooterShowcase';
import LoginSignupShowcase from './skys_components/pages/LoginSignupShowcase';
import CardsShowcase from './skys_components/pages/CardsShowcase';
import ButtonsShowcase from './skys_components/pages/ButtonShowcase';
import LandingPageShowcase from './skys_components/pages/LandingPageShowcase';




function App() {
  return (

    <BrowserRouter>
          <Header />
          <Routes>
             <Route path="/" element={<Home />} />

             <Route path="/landing-pages" element={<LandingPageShowcase />} />
             <Route path="/headers" element={<HeaderShowcase />} />
             <Route path="/footers" element={<FooterShowcase />} />
             <Route path="/loginpages" element={<LoginSignupShowcase />} />
             <Route path="/cards" element={<CardsShowcase />} />
             <Route path="/buttons" element={<ButtonsShowcase />} />        
            </Routes>
          <Footer />
        </BrowserRouter>
  );
}

export default App;
