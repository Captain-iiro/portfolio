// src/pages/Home.jsx
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Abdourahman Abdillahi - Web Developer | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Portfolio d'Abdourahman Abdillahi, développeur web passionné de Djibouti. Spécialisé en ReactJS, AdonisJS, SCSS et Expo. Découvrez mes projets et compétences."
        />
        <meta
          name="keywords"
          content="Captain-iiro, Captain ciroo, Captain_iiro, Abdourahman Abdillahi, web developer, Djibouti, ReactJS, AdonisJS, SCSS, Expo, software development, portfolio, développeur web"
        />
        <meta name="author" content="Abdourahman Abdillahi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French, English" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdourahmanabdillahi.com/" />
        <meta
          property="og:title"
          content="Abdourahman Abdillahi - Web Developer | Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio d'Abdourahman Abdillahi, développeur web passionné de Djibouti. Spécialisé en ReactJS, AdonisJS, SCSS et Expo."
        />
        <meta
          property="og:image"
          content="https://abdourahmanabdillahi.com/src/Dalle.webp"
        />
        <meta
          property="og:site_name"
          content="Abdourahman Abdillahi Portfolio"
        />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://abdourahmanabdillahi.com/"
        />
        <meta
          property="twitter:title"
          content="Abdourahman Abdillahi - Web Developer | Portfolio"
        />
        <meta
          property="twitter:description"
          content="Portfolio d'Abdourahman Abdillahi, développeur web passionné de Djibouti. Spécialisé en ReactJS, AdonisJS, SCSS et Expo."
        />
        <meta
          property="twitter:image"
          content="https://abdourahmanabdillahi.com/src/Dalle.webp"
        />
        <meta property="twitter:creator" content="@Captain_iiro" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abdourahmanabdillahi.com/" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdourahman Abdillahi",
              "url": "https://abdourahmanabdillahi.com",
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
              "description": "A passionate web developer from Djibouti with expertise in ReactJS, AdonisJS, SCSS, and Expo. Committed to creating impactful digital solutions and contributing to the community.",
              "knowsAbout": ["ReactJS", "AdonisJS", "SCSS", "Expo", "JavaScript", "Web Development"],
              "nationality": "Djiboutian",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Djibouti",
                "addressCountry": "DJ"
              }
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
