import React from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import RotatingStack from './components/RotatingStack';

function App() {
  return (
    <div className="App">
    
      <Hero />
      <About />
      <RotatingStack />
      <Contact />
    </div>
  );
}

export default App;
