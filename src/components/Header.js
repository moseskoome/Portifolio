import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="logo">Moses Koome Nkunja</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
