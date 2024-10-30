import React, { useState } from 'react';
import Styles from './navabar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <h1>Aman</h1>
        </div>
        <div className={Styles.right}>
          <div className={Styles.hamburger} onClick={handleMenuToggle}>
            {/* Hamburger Icon */}
            <span className={isMobile ? Styles.barOpen : Styles.bar}></span>
            <span className={isMobile ? Styles.barOpen : Styles.bar}></span>
            <span className={isMobile ? Styles.barOpen : Styles.bar}></span>
          </div>
          <ul className={`${Styles.navLinks} ${isMobile ? Styles.mobileMenu : ''}`}>
            <li>
              <Link to="/" spy={true} smooth={true} duration={500} >
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500} >
                About
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} duration={500} >
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} duration={500} >
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500} >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
