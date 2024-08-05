import React from 'react';
import '../App.css';
import {Project} from "../data";

interface ProjectListProps {
    projects: Project[];
  }

function ProjectList( {projects}: ProjectListProps)  {
  return (
    <section className="listOfProject">
      {projects.length > 0 ? (
        projects.map( (project:Project, index:number) => (

          <div key={index} className="project">
            <img src={project.imgSrc} alt={project.imgAlt} />
            <div className="info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
          
        ))
      ) : ( <p className="no-results">No results</p> )
        }
    </section>
  );
}

export default ProjectList;
