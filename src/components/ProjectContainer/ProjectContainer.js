import './ProjectContainer.css'; // import CSS sheet to alow styling of the component
import {projectList} from "./ProjectList.js" // This is where we store the location of the thumbnails, and all project information.

// this is a component that accesses our projectList object and prints it to screen. 


function ProjectContainer(props) {
    const projects = projectList;

    return (
      <div className="ProjectContainer">
        {projects.map((project) => (
          <div>
            <h1>{project.title}</h1>
            <h4>{project.description}</h4>
            <img alt={project.photo_Alt} src={project.photo_Url}></img>
            <br />
            <a href={project.code_Url}><button>Code</button></a>
            <a href={project.live_Url}><button>Live</button></a>
          </div>
        ))}
      </div>
    );
  }
  export default ProjectContainer;
