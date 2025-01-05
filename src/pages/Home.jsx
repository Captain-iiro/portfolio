// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
   
    </div>
  );
};

export default Home;
