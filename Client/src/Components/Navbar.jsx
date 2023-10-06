import React, { useState } from 'react';
import "../Styles/Navbar.css";
import logo from "/Public/Logo-1.jpg"
import linkedin from "/Public/linkedin-icon.png"
import GitHub from "/Public/github-icon.png"
import profile from "/Public/profile-picture.jpg"
import ResumeIcon from "/Public/resume.png"
import Resume from "/Public/NimaMohamed.pdf"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container'>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <a href="/" className="logo-link">
      <img className="logo" src={logo} alt="Logo" />
      </a>
      {isOpen && (
        <div className="menu-content">
          <dl className="profile">
            <img className="profile-picture" src={profile} alt="Profile" />
            <dt>About Me:</dt>
            <dd className="description">My name is Nima. I graduated from Lighthouse Labs' Bootcamp in April 2023, where I honed my skills as a FullStack developer. Throughout the program, I gained expertise in a wide range of technologies, including React, CSS, HTML, Node.js, PostgreSQL, JavaScript, and Express. As a passionate junior developer, I am now eager to apply my knowledge and contribute to exciting projects in the field.</dd>
            <dt>Website Overview:</dt>
            <dd className="description">Fitfolio is a website designed to support Bootcamp attendees or similar programs. My primary goal is to help you avoid unnecessary weight gain while you focus on your intensive training program. With the power of the OpenAI API, I provide accurate and up-to-date nutrition information to guide you in making dietary choices.</dd>
          </dl>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nima-mohamed/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/nima-nimbile" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href={Resume} download>
              <img src={ResumeIcon} alt="Resume" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
