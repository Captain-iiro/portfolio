import "./Projects.scss";
import Frame from "../../assets/projects-img/Frame18.svg";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section id="projects" className="Projects">
        <h1>
          My Projects <img src={Frame} alt="" />
        </h1>
        <div className="projects-container">
          <div className="project">
            <div className="projet-c">
              <div className="project-image"></div>
              <div className="projet-description">
                <div className="project-titre">
                  <div className="project-name">Project Name</div>
                  <div className="project-sousTitre">
                    UI design - User research - webflow develop
                  </div>
                </div>
                <div className="projet-button">
                  <Link to="/" className="project-link">
                    <span className="text"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            {/* <div className="projet-c project-image"></div>
            <div className="projet-c project-name">Project Name</div>
            <div className="projet-c project-description">
              Project Description
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
