import React from "react";
import "./styles/hero-section.css";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="gsk-hero">
     {/* Decorative SVG shape */}
    <svg className="gsk-hero-svg" width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <circle cx="110" cy="110" r="100" fill="#e0e7ef" opacity="0.25"/>
      <circle cx="110" cy="110" r="60" fill="#ff7900" opacity="0.12"/>
    </svg>
    
    <div className="gsk-hero-content">
      <span className="gsk-hero-badge" aria-label="Featured">Featured</span>
      <span className="gsk-hero-eyebrow">Inventory Intelligence</span>
      <h1 className="gsk-hero-title">
        <span className="gradient-text">Revolutionize</span> Your Inventory Management
      </h1>
      
      <p className="gsk-hero-desc">
        Experience next-gen inventory control with real-time insights, predictive analytics, and seamless automation.<br />
        <strong>Reduce costs, eliminate stockouts, and scale your business</strong>—all in one intuitive platform.
      </p>
           <Link to="/login" className="gsk-hero-cta info-btn" aria-label="Go to login page">
  Get Started
  <svg
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    className="cta-arrow"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
    </div>
       <svg className="gsk-hero-svg" width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <circle cx="110" cy="110" r="100" fill="#e0e7ef" opacity="0.25"/>
      <circle cx="110" cy="110" r="60" fill="#ff7900" opacity="0.12"/>
    </svg>
    
    <div className="gsk-hero-image-wrapper">
      <img
        src="inventory1.jpg" // Replace with your image if needed
        alt="Young people at a concert"
        className="gsk-hero-image"
      />
      
    </div>
  </section>
);

export default HeroSection;