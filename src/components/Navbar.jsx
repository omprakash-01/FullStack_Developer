import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }

  return (
    <>
      <nav id="desktop-nav">
        <Link to="/" className="logo">Web Development</Link>
        <div>
          <ul className="nav-links">
            <li><Link to="/" onClick={(event) => scrollToSection(event, '#HTML')}>HTML</Link></li>
            <li><Link to="/skills" onClick={(event) => scrollToSection(event, '#skills')}>CSS</Link></li>
            <li><Link to="/projects" onClick={(event) => scrollToSection(event, '#projects')}>JavaScript</Link></li>
            <li><Link to="/react/introtoreact" onClick={(event) => scrollToSection(event, '#contact')}>React</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <Link to="/" className="logo">Web Development</Link>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu-links">
            <li><Link to="/" onClick={toggleMenu}>HTML</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>CSS</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>JavaScript</Link></li>
            <li><Link to="/react/introtoreact" onClick={toggleMenu}>React</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
