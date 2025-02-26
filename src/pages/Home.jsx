// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="theme-color" content="#ffffff" />
              <meta
                name="keywords"
                content="Captain-iiro, Captain ciroo, Captain_iiro, Abdourahman Abdillahi, web developer, Djibouti, ReactJS, AdonisJS, SCSS, Expo, software development"
              />
               <link rel="manifest" href="/manifest.json" />
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Abdourahman Abdillahi",
                    "url": "https://abdourahmanabdillahi.com/about",
                    "jobTitle": "Web Developer",
                    "worksFor": {
                      "@type": "Organization",
                      "name": "Captain-iiro"
                    },
                    "sameAs": [
                      "https://github.com/Captain-iiro",
                      "https://x.com/Captain_iiro",
                      "https://wa.me/25377320261"
                    ],
                    "birthDate": "2002-11-13",
                    "birthPlace": {
                      "@type": "Place",
                      "name": "Dar Al-Hanan Hospital, Djibouti"
                    },
                    "description": "A passionate web developer from Djibouti with expertise in ReactJS, AdonisJS, SCSS, and Expo. Committed to creating impactful digital solutions and contributing to the community."
                  }
                `}
              </script>
      </Helmet>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
