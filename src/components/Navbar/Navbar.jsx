// src/components/Navbar/Navbar.jsx - Version améliorée
import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";
import Vector from "../../assets/header-img/Vector.svg";
import Vector2 from "../../assets/header-img/Vector2.svg";
import Rectangle from "../../assets/header-img/Rectangle 29.svg";

// Constantes pour les liens de navigation
const NAV_LINKS = [
  { to: "/about", text: "About //", isHash: false, class: "gauche" },
  { to: "/#projects", text: "Projects", isHash: true, class: "droite" },
  { to: "/#hire-me", text: "Hire Me", isHash: true, class: "gauche" },
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

  // Gérer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      // Désactiver le scroll
      // Alternative plus robuste avec classe CSS
      document.body.classList.add("menu-open");
    } else {
      // Réactiver le scroll

      document.body.classList.remove("menu-open");
    }

    // Cleanup pour éviter les fuites mémoire
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

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
          className: `a ${activeClass} ${link.class}`,
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
          <Link to="/" className="logo-link">
          <span className="text">
            Captain-iiro
          </span>
          </Link>
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
      <div
        className={`menu-overlay ${
          isMenuOpen ? "active-mobile" : "close-mobile"
        }`}
        onClick={closeMenu}
      >
        <div className="menu-content" onClick={(e) => e.stopPropagation()}>
          {renderNavLinks(true)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
