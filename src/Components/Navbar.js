import React from 'react'
import Styles from "./navabar.module.css"
import { Link } from 'react-scroll'; // Importing from react-scroll

const Navbar = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left}><h1>Aman</h1></div>
        <div className={Styles.right}>
          <ul style={{ display: "flex" }}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
