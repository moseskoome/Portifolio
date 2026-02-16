import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello,my name is Moses Koome Nkunja</h1>
        <h2>Computer Scientist & Digital Content Creator</h2>
        <p>Specializing in Software Development and Social Media Management</p>
      </div>
    </section>
  );
};

export default Hero;