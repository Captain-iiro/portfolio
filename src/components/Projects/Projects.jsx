import React from 'react';
import './Projects.scss';
import Frame from '../../assets/projects-img/Frame18.svg';
import { Helmet } from 'react-helmet';

const Projects = () => {
    return (
        <> 
        
        
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