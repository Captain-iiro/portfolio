// src/components/Hero.jsx
import React from 'react';
import './Hero.scss';
import Computer from '../../assets/hero-img/computer.svg';
import Rface from '../../assets/hero-img/Rface.webp';
import face from '../../assets/hero-img/face.svg';
import A from '../../assets/hero-img/3.svg';
import A_mini from '../../assets/hero-img/3-mini.svg';
import B from '../../assets/hero-img/4.svg';
import B_min from '../../assets/hero-img/4-mini.svg';
import Frame14 from '../../assets/hero-img/Frame14.svg';
import Vector from '../../assets/header-img/Vector.svg';
import { Helmet } from 'react-helmet';

const Hero = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="I develop high-quality software to transform your ideas into innovative digital solutions. Explore my projects and get in touch today!"
        />
        <meta
          name="keywords"
          content="software development, high-quality software, web development, digital solutions, Abdourahman Abdillahi, captain-iiro, Captain ciroo, Captain_iiro,abdourahman abdillahi, Abdourahman Abdillahi Abdi, Abdou dev"
        />
         <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <section id="hero" className="hero" aria-labelledby="hero-heading">
        <div className='content'>
          <div className="text-content">
            <img className='img-frame' src={Frame14} alt="Decorative frame" />
            <header>
              <h1 id="hero-heading">
                I develop <img className='img' src={Computer} alt="Computer icon" /> <span>high-quality</span> <span className='color highlight'>software</span>
              </h1>
            </header>
            <a href="#projects" className='button' aria-label="See Projects">
              See Projects <span className='tire'></span>
            </a>
          </div>

          <div className="illustration">
            <span className='absolute A'>
              <picture>
                <source media="(max-width: 900px)" srcSet={A_mini} />
                <img src={A} alt="Decorative element A in hero section" />
              </picture>
            </span>
            <span className='absolute B'>
              <picture>
                <source media="(max-width: 900px)" srcSet={B_min} />
                <img src={B} alt="Decorative element B in hero section" />
              </picture>
            </span>
            <span className='absolute text'>
              <img className='img-face' src={face} alt="Abstract face illustration" />
              Abdourahman Abdillahi
            </span>
            <span className='absolute fleche' aria-hidden="true"></span>
            <img className='photo' src={Rface} alt="Photo of Abdourahman Abdillahi" />
          </div>
        </div>
        <img className='vector' src={Vector} alt="Decorative vector graphic" />
      </section>
    </>
  );
};

export default Hero;
