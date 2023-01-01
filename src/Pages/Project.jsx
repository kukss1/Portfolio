import ButtonGitHub from "../components/buttonGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && <ButtonGitHub link="https//:gitHub.com" />}
        </div>
      </div>
    </main>
  );
};

export default Project;
