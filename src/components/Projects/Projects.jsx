import React from 'react';
import './Projects.scss';
import Frame from '../../assets/projects-img/Frame18.svg';
import { Helmet } from 'react-helmet';

const Projects = () => {
    return (
        <> 
         <Helmet>
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#ffffff" />
                <title>Mes Projets - Captain-iiro</title>
                <meta name="description" content="Découvrez les projets réalisés par Captain-iiro, mettant en avant ses compétences en ReactJS, AdonisJS, SCSS et Expo." />
        </Helmet>
        
         <section id="projects" className="Projects">
            <h1>My Projects <img src={Frame} alt="" /></h1>
            <div className="projects-container">
                <div className='project'>
                    <div className="projet-c project-image"></div>
                    <div className="projet-c project-name">Project Name</div>
                    <div className="projet-c project-description">Project Description</div>
                </div>
                <div className='project'>
                    <div className="projet-c project-image"></div>
                    <div className=" projet-c project-name">Project Name</div>
                    <div className="projet-c project-description">Project Description</div>
                </div>
            </div>

        </section>
        </>
       
    );
}
export default Projects;        