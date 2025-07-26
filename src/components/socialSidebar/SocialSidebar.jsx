import React from 'react';
import './socialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-box">
      <a 
        href="https://www.linkedin.com/in/allanmachado" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      
      <a 
        href="https://github.com/allamach" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-github"></i>
      </a>
      
      <a 
        href="https://www.instagram.com/allmacha" 
        className="social-box__link" 
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-instagram"></i>
      </a>
    </div>
  );
};

export default SocialSidebar;