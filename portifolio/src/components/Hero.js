import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Moses Koome Nkunja</h1>
<h2>Full-Stack Web Developer</h2>
<p>I design and develop scalable, high-performance web applications using modern technologies, with a strong focus on clean architecture, responsive interfaces, and secure backend systems.</p>

      </div>
    </section>
  );
};

export default Hero;