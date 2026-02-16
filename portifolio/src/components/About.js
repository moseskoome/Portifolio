import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <section id="about">
  <h2>About Me</h2>
  <p>
    I am a full-stack web developer with a strong foundation in Computer Science and a passion for building efficient, scalable, and user-focused web applications. I specialize in modern front-end and back-end development, creating seamless digital experiences that combine performance, functionality, and clean design.
  </p>
  <p>
    My work focuses on developing responsive interfaces, secure APIs, and well-structured systems that follow software development best practices. I enjoy solving complex technical problems, optimizing application performance, and continuously learning emerging technologies to stay current in the industry.
  </p>
  <p>
    Beyond coding, I value collaboration, clear communication, and writing maintainable code that supports long-term growth and scalability.
  </p>
</section>

        </div>
        <div className="skills-container">
          <h3>Core Competencies:</h3>
           <ul>
    <li>Full-Stack Web Application Development</li>
    <li>Responsive Front-End Design & UI Implementation</li>
    <li>RESTful API Development & Integration</li>
    <li>Backend Architecture & Server-Side Logic</li>
    <li>Database Design & Management</li>
    <li>Application Performance Optimization</li>
    <li>Secure Coding Practices</li>
    <li>Software Development Lifecycle (SDLC)</li>
    <li>Version Control & Team Collaboration</li>
    <li>Problem-Solving & Analytical Thinking</li>
  </ul>
        </div>
      </div>
    </section>
  );
};

export default About;