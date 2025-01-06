// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react'; // Importer useState
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';
import Vector from '../../assets/header-img/Vector.svg';
import Vector2 from '../../assets/header-img/Vector2.svg';
import Rectangle from '../../assets/header-img/Rectangle 29.svg';

const Navbar = () => {
  // Déclarer l'état pour gérer l'ouverture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu (utile si vous ajoutez un bouton de fermeture)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const location = useLocation();
  
  const isActiveLink = (path, hash = '') => {
    return location.pathname === path && location.hash === hash;
  };

  return (
    <header className="header">
      <img className='img img1' src={Vector} alt="Vector 1" />
      <img className='img img2' src={Vector2} alt="Vector 2" />
      <nav className='navbar'>
        <img className='rectangle rectangle1' src={Rectangle} alt="Rectangle 1" />
        <img className='rectangle rectangle2' src={Rectangle} alt="Rectangle 2" />
        <img className='rectangle rectangle3' src={Rectangle} alt="Rectangle 3" />
        <img className='rectangle rectangle4' src={Rectangle} alt="Rectangle 4" />
        <div className="logo">
          <span className='text'>
            <Link to="/">Captain-iiro</Link>
          </span>
        </div>
        
        {/* Bouton de menu */}
        <div id='button' onClick={toggleMenu}>
          <div className='span c'></div>
          <div className='span b'></div>
          <div className='span'></div>
        </div>

        {/* Liens de navigation */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link className='a' to="/about" onClick={closeMenu}>
            <span className='text'>About //</span>
          </Link>
          <HashLink
            className='a'
            smooth
            to="/#projects"
            onClick={closeMenu}
          >
            <span className='text'>Projects</span>
          </HashLink>
          <HashLink
            className='a'
            smooth
            to="/#hire-me"
            onClick={closeMenu}
          >
            <span className='text'>Hire Me</span>
          </HashLink>
        </div>
      </nav>

      {/* Overlay pour le menu mobile */}
      {isMenuOpen && (
        <>
        
        <div className="menu-overlay" onClick={closeMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <Link
              className={`a ${location.pathname === '/about' ? 'active-link' : ''}`}
              to="/about"
              onClick={closeMenu}
            >
              <span className='text'>About //</span>
            </Link>
            <HashLink
              className={`a ${isActiveLink('/', '#projects') ? 'active-link' : ''}`}
              smooth
              to="/#projects"
              onClick={closeMenu}
            >
              <span className='text'>Projects</span>
            </HashLink>
            <HashLink
              className={`a ${isActiveLink('/', '#hire-me') ? 'active-link' : ''}`}
              smooth
              to="/#hire-me"
              onClick={closeMenu}
            >
              <span className='text'>Hire Me</span>
            </HashLink>
          </div>
        </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
