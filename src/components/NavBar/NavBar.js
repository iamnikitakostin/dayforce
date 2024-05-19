import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import './NavBar.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('/');
  const [toggleMenu, setToggleMenu] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);

  const handleLinkClick = (path = activeLink) => {
    setActiveLink(path);
    setClosingAnimation(true);
    setTimeout(() => {
      setToggleMenu(false);
      setClosingAnimation(false);
    }, 300);
  };

  return (
    <nav className='navbar p__regular'>
      <ul className='navbar-links margin__bottom'>
        <li>
          <a 
            href="/" 
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a 
            href="/" 
            className={activeLink === "/feedback" ? "active" : ""}
            onClick={() => handleLinkClick("/feedback")}
          >
            Feedback
          </a>
        </li>
        <li>
          <a 
            href="/" 
            className={activeLink === "/reviews" ? "active" : ""}
            onClick={() => handleLinkClick("/reviews")}
          >
            Reviews
          </a>
        </li>
        <li>
          <a 
            href="/" 
            className={activeLink === "/goals" ? "active" : ""}
            onClick={() => handleLinkClick("/goals")}
          >
            Goals
          </a>
        </li>
        <li>
          <a 
            href="/" 
            className={activeLink === "/documents" ? "active" : ""}
            onClick={() => handleLinkClick("/documents")}
          >
            Documents
          </a>
        </li>
      </ul>
      <div className="navbar-smallscreen p__highlight">
        <GrMenu color='#000' fontSize={27} onClick={() => {setToggleMenu(true); document.body.style.overflow = 'hidden';}} />
        {toggleMenu && (
          <div className={`navbar-smallscreen_overlay ${closingAnimation ? 'closing' : ''}`}>
            <IoMdClose
              fontSize={27}
              className='overlay__close'
              onClick={() => {handleLinkClick(); document.body.style.overflow = ''}}
            />
            <ul className='navbar-smallscreen_links'>
              <li><a href="/" onClick={() => handleLinkClick("/")}>Dashboard</a></li>
              <li><a href="/" onClick={() => handleLinkClick("/feedback")}>Feedback</a></li>
              <li><a href="/" onClick={() => handleLinkClick("/reviews")}>Reviews</a></li>
              <li><a href="/" onClick={() => handleLinkClick("/goals")}>Goals</a></li>
              <li><a href="/" onClick={() => handleLinkClick("/documents")}>Documents</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
