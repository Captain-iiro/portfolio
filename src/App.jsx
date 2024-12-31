import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.scss';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
