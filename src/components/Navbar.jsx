import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = ({ onOpenOrder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo-link">
          <img src={logo} alt="Thar - The Taste of Rajasthan" className="navbar-logo-img" />
        </a>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
          <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
          <li><a href="#catering" onClick={toggleMenu}>Catering</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li className="navbar-cta-mobile">
            <button className="btn-primary" onClick={() => { toggleMenu(); onOpenOrder(); }}>Order Online</button>
          </li>
        </ul>

        <div className="navbar-cta">
          <button className="btn-primary" onClick={onOpenOrder}>Order Online</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
