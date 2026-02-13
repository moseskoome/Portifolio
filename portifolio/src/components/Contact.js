import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>moskopower01@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>0701707328</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Mombasa</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;