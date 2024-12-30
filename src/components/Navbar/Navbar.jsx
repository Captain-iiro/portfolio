// src/components/Navbar.jsx
import React from 'react';
import './Navbar.scss';
import Vector from '../../assets/header-img/Vector.svg';
import Vector2 from '../../assets/header-img/Vector2.svg';
import Rectangle from '../../assets/header-img/Rectangle 29.svg';
const Navbar = () => {
  return (
    <header className="header">
      <img className='img img1' src={Vector} alt="" />
      <img className='img img2' src={Vector2} alt="" />
      <nav className='navbar'>
        <img className='rectangle rectangle1' src={Rectangle} alt="" />
        <img className='rectangle rectangle2' src={Rectangle} alt="" />
        <img className='rectangle rectangle3' src={Rectangle} alt="" />
        <img className='rectangle rectangle4' src={Rectangle} alt="" />
      <div className="logo"><span className='text'><a href="/">Captain-iiro</a></span></div>
        <a className='a' href="#"> <span className='text'>About //</span> </a>
        <a className='a' href="#"> <span className='text'> Portfolio</span></a>
        <a className='a' href="#"><span className='text'>Hire Me</span> </a>
      </nav>
    </header>
  );
};

export default Navbar;