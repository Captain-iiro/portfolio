// src/components/Hero.jsx
import React from 'react';
import './Hero.scss';
import Computer from '../../assets/hero-img/computer.svg';
import Rface from '../../assets/hero-img/Rface.jpg';
import face from '../../assets/hero-img/face.svg';
import A from '../../assets/hero-img/3.svg';
import B from '../../assets/hero-img/4.svg';
import Frame14 from '../../assets/hero-img/Frame14.svg';
import Vector from '../../assets/header-img/Vector.svg';

const Hero = () => {
  return (
    <section id='About' className="hero">
      <div className='content'>
        <div className="text-content">
          <img className='img-frame' src={Frame14} alt="" />
          <h1>I develop <img className='img' src={Computer} alt="" /> <span >high-quality</span> <span className='color highlight'>software</span></h1>
          <button>See Projects <span className='tire'></span></button>
        </div>
        <div className="illustration">
          <span className='absolute A'><img src={A} alt="" /></span>
          <span className='absolute B'><img src={B} alt="" /></span>
          <span className='absolute text'><img className='img-face' src={face} alt="" />Abdourahman Abdillahi</span>
          <span className='absolute fleche'></span>
          <img className='photo' src={Rface} alt="" />
        </div>
        
      </div>
      <img className='vector' src={Vector} alt="" />
    </section>
  );
};

export default Hero;