import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-card">
        <div className="contact-avatar">
          <img src="https://ui-avatars.com/api/?name=Moses+Koome+Nkunja&background=00a8cc&color=fff&size=128" alt="Moses Koome Nkunja" />
        </div>
        <h3>Moses Koome Nkunja</h3>
        <p className="contact-location"><i className="fas fa-map-marker-alt"></i> Meru, Kenya</p>
        <div className="contact-links">
          <a href="mailto:moskopower01@gmail.com" className="contact-link" aria-label="Email">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://wa.me/254701707328" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/moses-koome-52b4a9226" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/moseskoome" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://facebook.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
