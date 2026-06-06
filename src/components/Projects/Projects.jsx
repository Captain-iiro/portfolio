import "./Projects.scss";
import Frame from "../../assets/projects-img/Frame18.svg";
import projet1img from "../../assets/projects-img/Dashboard.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section id="projects" className="Projects">
        <h1>
          My Projects <img src={Frame} alt="image de decoration" />
        </h1>
        <div className="projects-container">
          <div className="project">
            <div className="projet-c">
              <div className="project-image">
                <img
                  className="project-img1"
                  src={projet1img}
                  alt="image du projet"
                />
              </div>
              <div className="projet-description">
                <div className="project-titre">
                  <div className="project-name">SIFIN</div>
                  <div className="project-sousTitre">
                    SIFIN (Système d&apos;Information Financier Intégré
                    National)
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
        </div>
      </section>
    </>
  );
};
export default Projects;
