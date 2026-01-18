import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home" onClick={() => onNavClick?.('home')}>Home</a></li>
            <li><a href="#about" onClick={() => onNavClick?.('about')}>About</a></li>
            <li><a href="#projects" onClick={() => onNavClick?.('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => onNavClick?.('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
