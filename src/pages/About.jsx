// src/pages/About.jsx
import React from 'react';
import Dalle from '../../public/Dalle.webp';
import './About.scss'; // Optionnel: ajoute tes styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <img className='photo' src={Dalle} alt="Photo illustration of Abdourahman Abdillahi created with ChatGPT" />
      <p>
        Hi, I'm Abdourahman Abdillahi Abdi, a passionate web developer from Djibouti. With a strong foundation in programming and a drive to create impactful digital solutions, I specialize in building modern web applications using technologies like ReactJS, AdonisJS, and SCSS.
        I thrive on solving real-world challenges, from crafting seamless user experiences to developing robust backend APIs. I'm also deeply committed to learning and exploring new tools to stay ahead in the ever-evolving tech landscape.
        Beyond coding, I aim to contribute to my community by addressing gaps in web and mobile technologies, fostering innovation, and inspiring others through my work. 
        Feel free to explore my projects and reach out for collaboration or to discuss exciting ideas!
      </p>
      {/* Ajoute d'autres éléments si nécessaire */}
    </section>
  );
};

export default About;
