import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "TravelVerse",
    link: "https://github.com/Sandeep12a7/travelverse-nodejs-express",
  },
  {
    title: "ChatApp",
    link: "https://github.com/Sandeep12a7/chatapp2",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {/* eslint-disable-next-line */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
