import React from 'react';
import './Skills.scss';
import { Helmet } from 'react-helmet';

const Skills = () => {
    return (
        <>
        <Helmet>
                <title>My Skills - Abdourahman Abdillahi</title>
                <meta
                    name="description"
                    content="Explore the diverse set of skills I possess, including React.js, Adonis.js, Expo, Laravel, and SCSS, which enable me to build high-quality software solutions."
                />
                <meta
                    name="keywords"
                    content="React.js, Adonis.js, Expo, Laravel, SCSS, software development, web development, Abdourahman Abdillahi, Captain-iiro Skills"
                />
        </Helmet>
        <section className="Skills">
            <span>React js</span>
            <span>Adonis js</span>
            <span>Expo</span>
            <span>Laravel</span>
            <span>SCSS</span>
        </section>
        </>
        
    );
}
export default Skills;