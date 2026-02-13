import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Software Development Project",
      description: "Full-stack web application built with modern technologies",
      category: "Computer Science",
      image: "project4.png"
    },
    {
      title: "Video Production Showcase",
      description: "Professional video editing and production work",
      category: "Videography",
      image: "project3.png"
    },
    {
      title: "Photography Portfolio",
      description: "Collection of professional photography work",
      category: "Photography",
      image: "project2.jpg"
    },
    {
      title: "Social Media Management",
      description: "I have managed various social media accounts, creating engaging content and growing audiences.",
      category: "Social Media",
      image: "project4.png"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={require(`../assets/${project.image}`)} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
              <p>{project.description}</p>
              <button className="view-project">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;