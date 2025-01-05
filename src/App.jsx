// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';

// Composant pour gérer la redirection en fonction de la largeur de l'écran
function ScreenWidthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        navigate("/about");
      }
    };

    // Vérifie la largeur de l'écran au chargement initial
    handleResize();

    // Écoute les changements de taille de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoie l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  return null; // Ce composant ne rend rien visuellement
}


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Intégration du composant de redirection */}
        <ScreenWidthRedirect />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
