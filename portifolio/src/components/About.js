import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I am a passionate Computer Scientist with expertise in both technical and creative domains. My unique blend of skills spans across software development, digital content creation, and social media management.</p>
          <p>With a strong foundation in computer science principles and practical experience in digital media, I bring a comprehensive approach to every project I undertake.</p>
        </div>
        <div className="skills-container">
          <h3>Core Competencies:</h3>
          <ul>
            <li>Software Development</li>
            <li>Videography & Photography</li>
            <li>Video Editing</li>
            <li>Social Media Management</li>
            <li>Digital Content Creation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;