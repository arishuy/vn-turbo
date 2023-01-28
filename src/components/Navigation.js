import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="body-container__left">
      <div className="navigation-section">
        <nav className="navigation-section__nav">
          <a href="#" className="navigation-section__nav__link">
            <div class="tab-content">Home</div>
          </a>
          <a href="#" className="navigation-section__nav__link">
            <div class="tab-content">Profile</div>
          </a>
          <a href="#" className="navigation-section__nav__link">
            <div class="tab-content">Notifications</div>
          </a>
          <a href="#" className="navigation-section__nav__link">
            <div class="tab-content">Messages</div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
