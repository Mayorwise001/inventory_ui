import React, { useState } from "react";
import "./styles/navbar.css"; // Ensure you have the correct path to your CSS file
import '../index.css'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img
            src="Logo.png"
            alt="GSK Logo"
          />
        </a>

        {/* Desktop Menu */}
        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">Our areas of focus</a></li>
            <li><a href="/">Research</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Investors</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;