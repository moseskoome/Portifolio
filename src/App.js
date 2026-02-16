import React from 'react';
import './styles/Header.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Contact.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <Contact />
  </div>
);

export default App;
