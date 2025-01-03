// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';
import Vector from '../../assets/header-img/Vector.svg';
import Vector2 from '../../assets/header-img/Vector2.svg';
import Rectangle from '../../assets/header-img/Rectangle 29.svg';



const Navbar = () => {
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
        <Link className='a' to="/about">
          <span className='text'>About //</span>
        </Link>
        <HashLink
          className='a'
          smooth
          to="/#projects"
         
        >
          <span className='text'>Projects</span>
        </HashLink>
        <HashLink
          className='a'
          smooth
          to="/#hire-me"
        
        >
          <span className='text'>Hire Me</span>
        </HashLink>
      </nav>
    </header>
  );
};

export default Navbar;