// src/pages/About.jsx
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Dalle from '../../public/Dalle.webp';
import './About.scss'; // Optionnel: ajoute tes styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <img className='photo' src={Dalle} alt="Photo illustration of Abdourahman Abdillahi created with ChatGPT" />
      <p>Hi, I'm Abdourahman Abdillahi Abdi, a passionate web developer from <a className='a' href="https://fr.wikipedia.org/wiki/Djibouti_(ville)" target="_blank">Djibouti</a>.</p>
      <p>I was born on November 13, 2002, around 3 PM at the <a className='a' href="https://doctor4africa.com/listing/djibouti/hospital/maternite-dar-al-hanan-hospital/" target="_blank">Dar Al-Hanan Hospital</a> in Djibouti. From a young age, I've been naturally inclined to solve problems and have always been passionate about tinkering and creating things with my hands.</p>
      <p>With a strong foundation in programming and a drive to create impactful digital solutions, I specialize in building modern web applications using technologies like <a className='a' href="https://react.dev/" target="_blank">ReactJS</a>, <a className='a' href="https://adonisjs.com/" target="_blank">AdonisJS</a>, <a className='a' href="https://sass-lang.com/" target="_blank">SCSS</a>, and <a className='a' href="https://expo.dev/" target="_blank">Expo</a>.</p>
      <p>I thrive on solving real-world challenges, from crafting seamless user experiences to developing robust backend APIs. I'm also deeply committed to learning and exploring new tools to stay ahead in the ever-evolving tech landscape.</p>
      <p>Beyond coding, I aim to contribute to my community by addressing gaps in web and mobile technologies, fostering innovation, and inspiring others through my work. I am also active on <a className='a' href="https://x.com/Captain_iiro" target="_blank">X.com</a>, where I share insights, updates, and connect with like-minded individuals.</p>
      <p>Feel free to explore <HashLink className='a' smooth to="/#projects">my projects</HashLink> and reach out for  <HashLink className='a' smooth to="/#hire-me">collaboration or to discuss</HashLink> exciting ideas!</p>
      
      <h2>My Journey</h2>
<p>After obtaining my high school diploma at the state high school at the age of 18, several choices were available to me: joining the <a className='a' href="https://www.univ.edu.dj/" target="_blank">public university of Djibouti</a>, taking <a className='a' href="https://www.univ.edu.dj/?page_id=6269" target="_blank" rel="noopener noreferrer">engineering entrance exams</a>, or enrolling in the <a className='a' href="https://www.univ.edu.dj/?page_id=6272" target="_blank" rel="noopener noreferrer">IT program</a> in Djibouti. After much reflection with my family, I finally decided to take the engineering entrance exam. Thankfully for Allah, I was admitted, without fully knowing what awaited me there.</p>
<p>Upon entering this faculty, I noticed that the program led to two options: civil engineering or electrical engineering. Since I only wanted to become a programmer, I asked the university dean if it was possible to pursue studies in a university that specialized in programming after completing the three general years. Unfortunately, he clearly stated that it was not possible. After one semester, I decided to leave the university, realizing that this path was not for me.</p>
<p>I decided to implement a new strategy. Having lost a year due to a poor decision, I didn’t want to repeat the same mistakes. After a long period of research and deliberation, I enrolled in the <a className='a' href="https://iadji.com/" target="_blank">IAD University</a>, in the <a className='a' href="https://iadji.com/genie-informatique/" target="_blank" rel="noopener noreferrer">Computer Engineering program</a>. There, I completed my bachelor’s degree.</p>
<p>Currently, I am exploring self-learning for greater flexibility, with the goal of creating a SaaS that addresses specific challenges in my country.</p>

<h2>My Environment</h2>
<p>In most of my projects, I use VS Code, and recently, I have started getting familiar with JetBrains WebStorm because they now offer a free plan 😋. These IDEs are comprehensive, especially JetBrains WebStorm.</p>
<p>I primarily work on an HP Pavilion x360 11th Generation laptop with Windows 11, a Core i5 processor, 16GB of RAM, and a 1TB SSD. This setup provides excellent performance for my professional projects.</p>


    </section>
  );
};

export default About;
