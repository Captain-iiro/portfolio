// src/components/Hero.jsx
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-content">
      <h1>I develop <span className="highlight">high-quality</span> websites and mobile applications</h1>
      <button>See Projects</button>
      </div>
      <div className="illustration">
        <img src="path-to-your-image" alt="illustration" />
      </div>
    </section>
  );
};

export default Hero;