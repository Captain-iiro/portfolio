import React from 'react';
import './Projects.scss';

const Projects = () => {
    return (
        <section className="Projects">
            <h1>My Projects <img src="" alt="" /></h1>
            <div className="projects-container">
                <div className='project'>
                    <div className="project-image"></div>
                    <div className="project-name">Project Name</div>
                    <div className="project-description">Project Description</div>
                </div>
                <div className='project'>
                    <div className="project-image"></div>
                    <div className="project-name">Project Name</div>
                    <div className="project-description">Project Description</div>
                </div>
                <div className='project'>
                    <div className="project-image"></div>
                    <div className="project-name">Project Name</div>
                    <div className="project-description">Project Description</div>
                </div>
                <div className='project'>
                    <div className="project-image"></div>
                    <div className="project-name">Project Name</div>
                    <div className="project-description">Project Description</div>
                </div>
            </div>

        </section>
    );
}
export default Projects;        