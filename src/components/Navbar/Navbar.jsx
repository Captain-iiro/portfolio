// src/components/Navbar/Navbar.jsx - Version améliorée
import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";
import Vector from "../../assets/header-img/Vector.svg";
import Vector2 from "../../assets/header-img/Vector2.svg";
import Rectangle from "../../assets/header-img/Rectangle 29.svg";

// Constantes pour les liens de navigation
const NAV_LINKS = [
  { to: "/about", text: "About //", isHash: false },
  { to: "/#projects", text: "Projects", isHash: true },
  { to: "/#hire-me", text: "Hire Me", isHash: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Fonctions optimisées avec useCallback
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Fonction pour rendre les liens de navigation
  const renderNavLinks = useCallback(
    (isMobile = false) => {
      return NAV_LINKS.map((link, index) => {
        const Component = link.isHash ? HashLink : Link;
        // Utiliser la même logique pour desktop et mobile, mais avec des classes différentes
        const isActive = link.isHash
          ? location.pathname + location.hash === link.to
          : location.pathname === link.to;
        const activeClass = isActive
          ? isMobile
            ? "active-link"
            : "active-link-desk"
          : "";

        // Props communes (sans key)
        const commonProps = {
          className: `a ${activeClass}`,
          to: link.to,
          onClick: closeMenu,
        };

        // Ajouter smooth seulement pour HashLink
        const props = link.isHash
          ? { ...commonProps, smooth: true }
          : commonProps;

        return (
          <Component key={index} {...props}>
            <span className="text">{link.text}</span>
          </Component>
        );
      });
    },
    [location.pathname, location.hash, closeMenu]
  );

  return (
    <header className="header">
      <img className="img img1" src={Vector} alt="Vector 1" />
      <img className="img img2" src={Vector2} alt="Vector 2" />
      <nav className="navbar">
        {/* Images décoratives */}
        {[1, 2, 3, 4].map((num) => (
          <img
            key={num}
            className={`rectangle rectangle${num}`}
            src={Rectangle}
            alt={`Rectangle ${num}`}
          />
        ))}

        <div className="logo">
          <span className="text">
            <Link to="/">Captain-iiro</Link>
          </span>
        </div>

        {/* Bouton de menu */}
        <div id="button" onClick={toggleMenu}>
          <div className="span c"></div>
          <div className="span b"></div>
          <div className="span"></div>
        </div>

        {/* Liens de navigation desktop */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {renderNavLinks(false)}
        </div>
      </nav>

      {/* Overlay pour le menu mobile */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
