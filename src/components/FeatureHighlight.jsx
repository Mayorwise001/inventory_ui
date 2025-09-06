import React from "react";
import "./styles/FeatureHighlight.css";

const FeatureHighlight = () => {
  return (
    <section className="feature-highlight">
      {/* Centered Heading */}
      <h2 className="feature-highlight-heading">
        Simplify work. Empower your people.
      </h2>

      {/* Content row */}
      <div className="feature-highlight-content">
        {/* Left side image */}
        <div className="feature-highlight-image">
          <img src="inventory 2.jpg" alt="Simplify work" />
        </div>

        {/* Right side text */}
        <div className="feature-highlight-text">
          <p>
            Workvivo makes it simple to bring your people together, improve
            communication, and build a culture of trust and engagement across
            your organization.
          </p>
          <a href="#learn-more" className="feature-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
